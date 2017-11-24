---
layout: post
author: yashumittal
title: When, How And Why Use Node.js as Your Backend
date: 2017-09-27 01:29:00 +0530
categories: code
tags: nodejs backend development backend coding
description: Get a full picture of Node.js as a backend and avoid making serious mistakes in development that could cost you money.
image: pexels-photo.jpg
---

[Airbnb, LinkedIn, Walmart, Uber, and even NASA have used Node.js in production](/10-top-companies-that-used-nodejs-in-production). Many smaller enterprises and startups follow their lead and leverage the technology in building applications. The benefits of Node.js are countless, but you should also be aware of its constraints. Get a full picture of Node.js and avoid making serious mistakes in development that could cost you money.

## What is Node.js?

Node.js is an application runtime environment that allows you to write server-side applications in JavaScript. Thanks to its unique I/O model, it excels at the sort of scalable and real-time situations we are increasingly demanding of our servers.  It’s also lightweight, efficient, and its ability to use JavaScript on both frontend and backend opens new avenues for development. It comes as no surprise that so many big companies have leveraged Node.js in production. In this article, I want to discuss when it is worth using Node.js, and in what cases it might not be the best idea.

![when use node.js backend](//blog.codecarrot.net/images/4hg8lh9hoxc-crew-486671-edited.jpg)

## How is Node.js different from web JavaScript?

There is no difference between web JavaScript and Node.js in terms of the language used. JavaScript used in browsers and in Node.js is almost exactly the same. What makes Node.js special is the different set of APIs. In browsers, you have a variety of DOM/Web APIs exposed that help you interact with UI and allow you to access the hardware to a limited extent. To compare, Node.js comes with comes with many APIs suitable for backend development, e.g. the support for file systems, http requests, streams, child processes, etc. Browsers do offer some basic support for file systems or http requests, but those are usually limited due to security concerns.

## Why is it worth developing your project in Node.js?

First of all, using Node.js as your server technology gives your team a great boost that comes from using the same language on both the front end and the back end. This, means that your team is more efficient and cross-functional, which, in turn, leads to lower development costs. In addition to that, it’s worth mentioning that JavaScript is the most popular programming language, so your application’s codebase will be easier to understand for more engineers. You can also reuse and share the code between the frontend and the backend parts of your application, which speeds up the development process. On top of that, the Node.js community is constantly growing – the number of StackOverflow questions is steadily increasing, so the knowledge base for the technology is widely available. The fact that the whole Node.js technology stack is open-source and free is also great news. Finally, Node offers a great package manager, npm, and the amount of available open-source tools in npm’s registry is massive and growing fast. These are just a few of many advantages of Node.js that you should consider when choosing the technology for your next project.

## Good use cases

## Real time applications.

Node.js is a good choice for applications that have to process a high volume of short messages requiring low latency. Such systems are called real-time applications (RTAs), and they can be easily developed with Node.js. Thanks to its specifications, Node.js will be a good choice for the real-time collaborative drawing/editing-type apps, where you can watch the document being modified live by someone else (such as Trello, Dropbox Paper or Google Docs).
The list of RTAs that can be effortlessly developed with Node.js is much longer. One of the most popular ones are live-chat and instant-messaging apps. Node will also be the right choice, if you want to create a video conference app that will work with specific hardware or VoIP. Additionally, you might want to consider Node.js for online gaming apps or e-commerce transaction software, where online data is of much importance.
Node.js is very efficient with real-time applications: it facilitates handling multiple client requests, enables sharing and reusing packages of library code, and the data sync between the client and server happens very fast.

## Fast and scalable environment.

Ruby on Rails might not be sufficient in terms of speed, if you have a ton of requests. Node.js will prove useful in situations when something faster and more scalable than Rails is needed. Node’s ability to process many requests with low response times, as well as sharing things such as validation code between the client and server, make it a great fit for modern web applications that carry out lots of processing on the client’s side. For these reasons, Node.js is a popular choice among "single-page application" sites, where all the rendering is done on the client’s side, and the backend only provides a JSON API.
Node.js also comes in handy, when you want to process high volumes of IO-bound requests. It won't really be all that efficient if a lot of CPU processing is required to serve the request. Yet, if it's primarily just shuffling data around, then it will be quite efficient, because a single instance can serve a lot more requests with the same hardware, compared to the usual "thick" application server (like with rails).

## When might Node.js not be the best idea?

Even though Node.js is – in many cases – the perfect fit for building applications, there are still some bad use cases when you shouldn't consider using it.

## CPU-heavy jobs

The first thing that comes to my mind are heavy-computing apps. Node.js is based on an event-driven, non-blocking I/O model, and uses only a single CPU core. CPU-heavy operations will just block incoming requests, rendering the biggest advantage of Node.js useless. If you are considering building CPU-heavy software, try a different, more suitable, technology that will give you better results.

## CRUD

Finally, using Node.js would be superfluous for simple HTML or CRUD applications in which you don't need a separate API, and all data comes directly from the server. Your application might be marginally more scalable, but don't expect more traffic coming to your app just because you used Node.js. In such cases, you should stick to such proven frameworks as Ruby.

## Package quality

There are more things to consider before kicking off with Node.js. Many packages for Node.js applications are available in npm. The community is vibrant, the technology is becoming more mature, and npm is the largest available repository at the moment. Yet, packages vary in their quality. Sometimes, you can still encounter issues with packages supported only by individual users and not maintained properly; for instance, when connecting your Node app to an obscure or old database system.

## Where to start?

First of all, go to the official web page of Node.js ([nodejs.org](//nodejs.org/)) and download the Node.js package. Later on, we need to install the Node.js package manager to install and manage the dependencies in our project easily. Visit [npmjs.com](//www.npmjs.com/) and follow the installation instructions. Now, we are ready to write some code.

The best starting point for the Node.js is the official guide, from which you can learn the core concepts of Node.js. In the [Node.js](//nodejs.org/en/docs/guides/getting-started-guide/) guide, you can find the answer to one of the most important questions: How to build a simple Node.js server?

Later, you can dive into the Node.js world and try out some crucial frameworks such as express.js to get an idea of how JavaScript dependencies are used ([expressjs.com](//expressjs.com/)). Express.js allows you to build high-performance, scalable, and easily maintainable applications in JavaScript. The best learning path for express.js is to visit the official guides on the express.js web page and study the most important features such as routing, template engines, and debugging.

## Wrap up

Both Rails and Node can achieve the same results. However, there are different situations where each one works best. With Rails, you can prototype and move fast, break things, and get a crude app in an hour. Node, on the other hand, requires more resources, but it scales better, works great with real-time tasks and is faster overall. Hopefully, the tips above will help you pick the best technology for your project.
