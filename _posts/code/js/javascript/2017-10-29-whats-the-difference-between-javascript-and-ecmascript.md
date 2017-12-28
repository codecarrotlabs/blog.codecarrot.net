---
layout: post
author: yashumittal
title: What’s the difference between JavaScript and ECMAScript?
date: 2017-10-29 19:45:10 +0530
categories: code
tags: coding javascript ecmascript
description: This article represents my current understanding of the differences between JavaScript and ECMAScript. It is geared towards people who are familiar with JavaScript
image: //cdn.codecarrot.net/images/0_zdzWJW4DiWkFjDnY.jpg
---

I’ve tried googling “the difference between JavaScript and ECMAScript.”

I ended up having to wade through a sea of ambiguous and seemingly conflicting results:

“ECMAScript is a standard.”

“JavaScript is a standard.”

“ECMAScript is a specification.”

“JavaScript is an implementation of the ECMAScript standard.”

“ECMAScript is standardized JavaScript.”

“ECMAScript is a language.”

“JavaScript is a dialect of ECMAScript.”

“ECMAScript is JavaScript.”

![urge to cry](//cdn.codecarrot.net/images/0_2VBZNF_2sqpenWBm.gif)

Holding back the urge to cry, I bucked up and decided to commit to some painful yet productive research.

This article represents my current understanding of the differences between JavaScript and ECMAScript. It is geared towards people who are familiar with JavaScript but would like a clearer understanding of its relationship with ECMAScript, web browsers, [Babel](//babeljs.io/), and more. You will also learn about scripting languages, JavaScript engines, and JavaScript runtimes for good measure.

So get pumped.

## A JavaScript/ECMAScript glossary

Below is a list of definitions, designed with a focus on consistency and clarity. The definitions are not 100% complete. They are constructed in a way that provides a high-level understanding of the connection and relationship between JavaScript and ECMAScript.

Without further ado, let’s get started.

## Ecma International

**An organization that creates standards for technologies.**

![Ecma International Logo](//cdn.codecarrot.net/images/0_Dz44AJquqzSujMVs.jpg)

To illustrate an example of “standard” (though not one created by Ecma), think of all the keyboards you have ever used. Did the vast majority have letters in the same order, and a space bar, an Enter key, arrow keys, with numbers displayed in a row at the top? This is because most keyboard manufacturers base their keyboard design on the QWERTY layout standard.

## ECMA-262

**This is a standard published by Ecma International. It contains the specification for a general purpose scripting language.**

![ECMA-262](//cdn.codecarrot.net/images/1_eE4lFIIFfSsSiI-oEWuo5g.png)

ECMA-262 is a standard like QWERTY, but instead of representing a keyboard layout specification, it represents a scripting language specification called ECMAScript.

Think of ECMA-262 as ECMAScript’s reference number.

![ECMA-260, ECMA-261, ECMA-262. There’s ECMAScript.](//cdn.codecarrot.net/images/1_MebPqniAeJqU6_JdvkHwPQ.png)

*ECMA-260, ECMA-261, ECMA-262. There’s ECMAScript.*

## A scripting language

A programming language designed specifically for acting on an existing entity or system

For a general idea of what makes a programming language a scripting language, consider the commands “walk”, “run”, and “jump.” These actions require something to carry them out, perhaps a person, a dog, or a video game character. Without an actor to perform these commands, “walk”, “run”, and “jump” wouldn’t make sense. This set of actions is analogous to a scripting language that focuses on manipulating an external entity.

## ECMAScript

**The specification defined in ECMA-262 for creating a general purpose scripting language.**

**Synonym:** ECMAScript specification

![ECMAScript specification](//cdn.codecarrot.net/images/0_QA6z7Rzw7HQ86C8A.png)

While ECMA-262 is the name of the standard, it represents the scripting language specification ECMAScript.
ECMAScript provides the rules, details, and guidelines that a scripting language must observe to be considered ECMAScript compliant.

![An excerpt from the ECMAScript 2017 Language Specification. The document is only about 900 pages, if you are looking for a light read.](//cdn.codecarrot.net/images/1_NbO9I9ukUcpW4IiH1d54gQ.png)

*An excerpt from the ECMAScript 2017 Language Specification. The document is only about 900 pages, if you are looking for a light read.*

## JavaScript

**A general purpose scripting language that conforms to the ECMAScript specification.**

It is a dialect of the ECMAScript language.

![Javascript](//cdn.codecarrot.net/images/0_zdzWJW4DiWkFjDnY.jpg)

JavaScript is the coffee-flavored language with which I love to program. [ECMAScript is the specification](//www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf) it’s based on. By reading the ECMAScript specification, you learn how to create a scripting language. By reading the [JavaScript documentation](//developer.mozilla.org/en-US/docs/Web/JavaScript), you learn how to use a scripting language.

When people call JavaScript a “dialect of the ECMAScript language,” they mean it in the same sense as when they refer to dialect to describe languages like English, French, or Chinese. A dialect derives most of its lexicon and syntax from its parent language, but deviates enough to deserve distinction.

JavaScript mostly implements the ECMAScript specification as described in ECMA-262, but a handful of differences do exist. Mozilla outlines JavaScript’s non-ECMAScript language features [here](//developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_Next_support_in_Mozilla):

![A screenshot from September 3, 2017. It is a list of JavaScript’s experimental features that are not a part of ECMAScript (at least not yet).](//cdn.codecarrot.net/images/1_YjTRv0-RFD7BeLwB6g8XuQ.png)

*A screenshot from September 3, 2017. It is a list of JavaScript’s experimental features that are not a part of ECMAScript (at least not yet).*

## A JavaScript engine

**A program or interpreter that understands and executes JavaScript code.**

**Synonyms:** JavaScript interpreter, JavaScript implementation

![A JavaScript engine](//cdn.codecarrot.net/images/0_SHZfEJM35akWZuQH.jpg)

JavaScript engines are commonly found in web browsers, including V8 in Chrome, SpiderMonkey in Firefox, and Chakra in Edge. Each engine is like a language module for its application, allowing it to support a certain subset of the JavaScript language.

A JavaScript engine to a browser is like language comprehension to a person. If we re-visit our example of the actions “walk”, “run”, “jump”, a JavaScript engine is the part of an “entity” that actually understands what these actions mean.

This analogy helps to explain a few things about browsers:

![This analogy helps to explain a few things about browsers](//cdn.codecarrot.net/images/0_xEE0vGO6Wp0qIW5X.png)

## Differences in browser performance

Two people may recognize the command “jump”, but one may react to the command faster because the person can understand and process the command faster than the other person. Similarly, two browsers can understand JavaScript code, but one runs it faster because its JavaScript engine is implemented more efficiently.

![Different browser images](//cdn.codecarrot.net/images/0_bk4ewUjYJ_nmt0y3.png)

With regards to browser support, people usually talk about “ECMAScript compatibility” rather than “JavaScript compatibility,” even though JavaScript engines parse and execute… well, JavaScript. This can be a little confusing, but there is an explanation.

![This table is part of a browser support table in the ECMAScript Wikipedia page. JavaScript versions are not mentioned here.](//cdn.codecarrot.net/images/1_vmmMpbNmE2PgWYOg1KjPjA.png)

*This table is part of a browser support table in the [ECMAScript Wikipedia page](//en.wikipedia.org/wiki/ECMAScript). JavaScript versions are not mentioned here.*

If you will recall, ECMAScript is a specification for what a scripting language could look like. Releasing a new edition of ECMAScript does not mean that all JavaScript engines in existence suddenly have those new features. It is up to the groups or organizations who are responsible for JavaScript engines to be up-to-date about the latest ECMAScript specification, and to adopt its changes.

Therefore, developers tend to ask questions like, “What version of ECMAScript does this browser support?” or “Which ECMAScript features does this browser support?” They want to know if Google, Mozilla, and Microsoft have gotten around to updating their browsers’ JavaScript engines — for example [V8](//en.wikipedia.org/wiki/Chrome_V8), [SpiderMonkey](//en.wikipedia.org/wiki/Spider_monkey), and [Chakra](//en.wikipedia.org/wiki/Chakra_%28JScript_engine%29), respectively — with the features described in the latest ECMAScript.

The [ECMAScript compatibility table](//kangax.github.io/compat-table/es6/) is a good resource for answering those questions.

If a new edition of ECMAScript comes out, JavaScript engines do not integrate the entire update at one go. They incorporate the new ECMAScript features incrementally, as seen in this excerpt from Firefox’s JavaScript changelog:

![In Firefox 50, pieces of ES2015 and ES2017 were both implemented in Firefox’s JavaScript engine, SpiderMonkey. Other pieces of ES2015 and ES2017 were implemented before, and will continue to be implemented in the future.](//cdn.codecarrot.net/images/1_SIR7uB-QF30Vmham-qgI0g.png)

*In Firefox 50, pieces of ES2015 and ES2017 were both implemented in Firefox’s JavaScript engine, SpiderMonkey. Other pieces of ES2015 and ES2017 were implemented before, and will continue to be implemented in the future.*

## A JavaScript runtime

**The environment in which the JavaScript code runs and is interpreted by a JavaScript engine.The runtime provides the host objects that JavaScript can operate on and work with.**

**Synonyms:** Host environment

![Mario](//cdn.codecarrot.net/images/0_rN9T3WXOJVCcTsbi_.jpg)

The JavaScript runtime is the “existing entity or system” mentioned in the scripting language definition. Code passes through the JavaScript engine, and once parsed and understood, an entity or system performs the interpreted actions. A dog walks, a person runs, a video game character jumps (or in the case of the above image, wrecks).

Applications make themselves available to JavaScript scripting by providing “host objects” at runtime. For the client side, the JavaScript runtime would be the web browser, where host objects like windows and HTML documents are made available for manipulation.

Have you ever worked with the window or document host objects? The window and document objects are not actually a part of the core JavaScript language. They are Web APIs, objects provided by a browser acting as JavaScript’s host environment. For the server side, the JavaScript runtime is Node.js. Server-related host objects such as the file system, processes, and requests are provided in Node.js.

An interesting point: different JavaScript runtimes can share the same JavaScript engine. V8, for example, is the JavaScript engine used in both Google Chrome and Node.js - two very different environments.

## ECMAScript 6

**It is the sixth edition of the ECMA-262 standard, and features major changes and improvements to the ECMAScript specification.**

**Synonyms:** ES6, ES2015, and ECMAScript 2015

![ECMAScript 6](//cdn.codecarrot.net/images/0_k4bggYx2QbIYZgl8.PNG)

This edition of ECMAScript changed its name from ES6 to ES2015 because in 2015 Ecma International decided to switch to annual releases of ECMAScript. Accordingly, Ecma International also started to name new editions of the ECMAScript specification based on the year they are released. In short, ES6 and ES2015 are two different names for the same thing.

## Babel

**A transpiler that can convert ES6 code to ES5 code.**

![Babel](//cdn.codecarrot.net/images/0_pX_GIONhqYIHp58u_.png)

Developers can use the shiny new features that come with ES6, but may be concerned with cross-browser compatibility for their web apps. At the time of the writing of this article, Edge and Internet Explorer do not fully support features from the ES6 specification.

Concerned developers can use Babel to convert their codes using ES6, which converts it to a functionally equivalent version of ES5. All of the major browsers fully support ES5 features, so they can run the code without any issues.

***

Developers can use the shiny new features that come with ES6, but may be concerned with cross-browser compatibility for their web apps. At the time of the writing of this article, Edge and Internet Explorer do not fully support features from the ES6 specification.

Concerned developers can use Babel to convert their codes using ES6, which converts it to a functionally equivalent version of ES5. All of the major browsers fully support ES5 features, so they can run the code without any issues.
