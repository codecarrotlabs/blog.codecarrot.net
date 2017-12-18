---
layout: post
author: yashumittal
title: Everything you need to know about the new Node.js 8
date: 2017-10-11 21:29:00 +0530
categories: code
tags: nodejs coding
description: The latest major release of Node.js brings many significant improvements to the JavaScript community, including an updated JavaScript engine, npm version 5, Google's V8, Node.js API, async_hooks, a WHATWG URL parser, more secure Buffers and more.
image: dSLsz4Aqa4zWZdn5hSFRBS-970-80.jpg
---

The latest major release of Node.js brings many significant improvements to the JavaScript community, including an updated JavaScript engine, npm version 5, Google's V8, Node.js API, async_hooks, a WHATWG URL parser, more secure Buffers and more. Here we'll update you on these features and the other most important aspects of this release.

Node.js 8 is released under the code name Carbon, and is available now from the [Node.js site](//nodejs.org/en/download/current/). It will be actively worked on for another 18 months (no new features, just bug fixes, security improvements and npm updates), before going into maintenance mode. As with previous releases, during maintenance mode releases will only receive critical security updates and bug fixes.

Check our these [20 JavaScript tools](/20-javascript-tools-to-blow-your-mind) that will blow your mind.

It is safe to say that since Node.js has been around, this is one of the biggest updates that the runtime has ever received – it changes how native add-ons are written and also brings additional security and performance improvements.

RisingStack has been helping companies succeed with Node.js for four years with training, consulting or development. One of the biggest struggles we had was adding native dependencies to projects.

Before Node.js 8, if applications were dependant on modules with native code, whenever major new Node.js versions arrived, as an application maintainer you had to recompile your dependencies. If you were lucky, they worked at first.

This process was made possible with the tremendous work module maintainers put into making their modules work across incompatible Node.js versions, mostly with the help of a module called NAN (Node.js Native Abstractions).

This process is far from ideal, as lots of companies failed to get their dependencies updated if they could not be compiled, and it also put a huge extra workload on module maintainers. To solve this issue, the Node.js API (or N-API) was introduced.

## 01. Enter the Node.js API

![Enter the node.js api](//cdn.codecarrot.net/images/YUsX5W2DrjQrMGc5J9Cmb-650-80.jpg)

*Machine agnostic: Native modules now work with Microsoft’s Chakra as well as different Node.js versions*

The Node.js API is one of the most significant improvements of Node.js 8. It brings a well-defined ABI (Application Binary Interface) to Node.js to make its virtual machine agnostic. This means that native modules will not only work with different Node.js versions using Google's V8 JavaScript engine, but with Microsoft's Chakra too.

For now, the N-API is in an experimental state, meaning significant changes may happen to both the implementation and the API. With this said, native module maintainers are encouraged to try out the new interface and give feedback.

If you are a module maintainer, you can release an N-API version of your module in parallel with your main module version. To do so, the official recommendation is to publish a version of your module with the n-api tag to npm.

To publish an N-API version, you have to:

1. Publish the non-N-API version as normal.
2. Publish the N-API version:

* Update the version in the package.json file by adding a dash and the napi tag – so if you had 1.0.0 previously, it becomes 1.0.0-napi
* Publish to npm using npm publish --tag n-api

This way you ensure that the N-API version won't become the latest release, so if someone installs your module, by default they get the non-N-API version.

Yarn, the package manager created by the engineers of Facebook, was released in October 2016. It tried to address some shortcomings of the official npm client, mostly by becoming more performant and deterministic. Most of these innovations are featured in npm 5 as well.

## 02. Say hello to npm 5

Just like Yarn, npm 5 introduced a lock-file mechanism – whenever you are installing a new dependency to your project, it will be added automatically not just to **package.json**, but a new file called **package-lock.json** as well.

You may ask what the difference is between **package-lock.jso**n and **npm-shrinkwrap.json**, as npm-shrinkwrap has been in npm since forever? Long story short, they are essentially the same, but **package-lock.json** is automatically created.

Their purpose is to describe exactly what dependency tree npm must create for your package. If you have both, **npm-shrinkwrap** will take precedence. Based on npm's recommendation, you should use **npm-shrinkwrap.json** if you want to publish it, so your module consumers will use it too. On the other hand, you should use the package-lock.json internally – even checked into repositories.

But improvements to npm 5 have not stopped with adding a lock file – with the new version, all the modules you are installing are automatically saved as well, and they will be added both to your **package.json** and **package-lock.jso** file.

The way npm scripts work has also changed a bit. First of all, preinstalled scripts now run before everything else, so they can modify the node_modules directory before the CLI actually reads it. Besides this, two new scripts have been added – prepack and postpack. They both run on npm pack and npm publish as well, but not on npm install.

In the heart of Node.js is the JavaScript engine that interprets your JavaScript code, creates bytecode from it and lets your application run. With the new Node.js 8 release, this was updated as well.

## 03. Updated JavaScript Engine

![Updated JavaScript Engine](//cdn.codecarrot.net/images/qnnXLGrpMAmRaWUFfPB2wA-650-80.jpg)

*Big news: Node.js will be able to update the V8 engine without a major release*

With the updated V8 engine, major performance improvements are introduced – but more importantly, it is guaranteed to have a forward-compatible application binary interface. This means that Node.js will be able to update the V8 engine without a major Node.js release.

This is crucial, as the newer versions of the V8 engine will introduce a new compiler pipeline, which will introduce further performance improvements to Node.js. This update was so important that it was the reason the original Node.js 8 release date was postponed.

The current pipeline is way too complex, and introducing new language features usually means touching multiple parts of the pipeline. With the new pipeline, it will become a lot simpler.

Ignition, the new interpreter, and TurboFan, the new optimising compiler, have been in development for almost three and half years. They are the foundation on which new language features will be built upon. They include the experience that the V8 team at Google collected from measuring real-life JavaScript applications.

## 04. Welcome Async Hooks

To better understand what Async Hooks are, let's take a step back and get to grips with continuation-local storage first. They work like thread-local storage in threaded programming, but in Node.js it uses callbacks to pass down context.

Imagine that you are writing an application that fetches a product from the database, then later on you want to send it out in your HTML response:

```js
const createNamespace = require('continuation-local-storage').createNamespace
const session = createNamespace('my-app-session')
const db = require('./db.js')
function onRequest(options, next) {
  db.fetchUserById(options.id, function (error, user) {
    if (error) {
      return next(error)
    }
    session.set('user', user)
    next()
  })
}
```

Later on, if you want to access the user object, all you need to do is grab it from the local storage:

```js
const getNamespace = require('continuation-local-storage').getNamespace
const session = getNamespace('my session')
const render = require('./render.js')
function finish(response) {
  const user = session.get('user')
  render({user: user}).pipe(response)
}
```

This technique is extensively used by application performance monitoring providers, such as Trace by RisingStack, to keep execution context and collect monitoring information from production systems.

With Async Hooks, a similar feature is moved to the Node.js core – it helps track asynchronous requests and handlers through their lifecycle. The **async_hooks** module provides an API to register callbacks tracking the lifetime of asynchronous resources created inside a Node.js application.

## 05. Improved promise support

Before Node.js 8, if you wanted to use the core modules in an application that uses Promises, you had to manually wrap the core modules so they could be used the same way. It looked something like this:

```js
const fs = require('fs')
function readFilePromise (...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, result) => {
      if (err) {
        return resolve(err)
      }
      resolve(result)
    })
  })
}
readFilePromise('./package.json', 'utf-8')
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
```

With Node.js 8, a new helper method is added to the util core module, util.promisify. It allows standard Node.js callback-style APIs to be wrapped in a function that returns Promises.

Using this function, the above snippet is simplified and becomes this:

```js
const fs = require('fs')
const promisify = require('util').promisify
readFilePromise = promisify(fs.readFile)
readFilePromise('./package.json', 'utf-8')
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
```

## 06. More secure Buffers

Before Node.js version 8, Buffers allocated using the new Buffer(Number) constructor did not initialise the memory space with zeros. As a result, new Buffer instances could contain sensitive information, leading to serious security problems – even popular modules such as mongoose, ws or the request module were affected.

But how did we get there? When JavaScript was moved from the browser to the server side, there was a need for fast and easy data processing – so the Buffer class was added. Buffer is a mutable array of binary data. When used with the constructor that asks for the size of the new Buffer, it just reserved the memory space, but did not clean it.

As your server can serve multiple users at the same time (unlike your browser), it is possible that the freshly allocated memory space contains sensitive information from other users (even passwords!), and can potentially be exposed to an attacker.

While it was an intentional decision to boost the performance of the new Buffer creation, for most of us, it was not the intended use – even if it was documented. Because of this, starting with Node.js 8, Buffers allocated using new Buffer(Number) or Buffer(Number) will be automatically filled with zeros.

## 07. Changes in debugging

Before Node.js 8, if you wanted to debug your Node.js applications, one of the easiest solutions was to start the built-in debugger, using node debug index.js. With Node.js 8, this is being removed and replaced by node-inspector. You can still use the CLI debugger, but it will be removed shortly.

From now on, you should use node **--inspect index.js**, or node **--inspect-brk index.js** if you want the debugger to put a breakpoint on the first line of the application. Once you run it, you will receive a WebSocket link that Google Chrome can use to connect its debugger.

You should head over to [chrome://inspect](chrome://inspect/) in your Chrome browser, and it will automatically recognise the running Node.js application, enabling you to connect. After you have connected to your process, you will get Chrome's debugger to inspect your running Node.js application.

## 08. Introducing static error codes

Previously, if you wanted to check an error you received in runtime and act accordingly, in most cases you had to check the error message. This was error prone, as error messages may have changed with new Node.js versions.

With Node.js 8, static error codes have been assigned to most of the errors – it is still a work-in-progress, but once it is finished, these error codes won't change, even if the message in the error does.

For example, the newly introduced **WHATWG URL API** will throw an **ERR_INVALID_URL** error in the following snippet, as the parameter is not a valid URL:

```js
const URL = require('url').URL
const myURL = new URL('/foo')
```

As you can see, the release of the Node.js 8 update has brought plenty of new and exciting improvements to the JavaScript community. To start experimenting with all of these new features yourself, head over to [nodejs.org](//nodejs.org/en/), download the Node.js 8 binary and start playing with your new toolset!
