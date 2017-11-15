---
layout: post
author: yashumittal
title: Why to Use Node.js - Pros and Cons of Choosing Node.js for Back-end Development
date: 2017-11-01 16:52:00
categories: code
tags: coding nodejs
description: Pros and cons of Node.js, a runtime environment for writing server-side apps in Javascript. Learn what are the advantages and disadvantages of using Node.js.
image: //blog.codecarrot.net/images/coding-924920_1280.jpg
---

Choosing backend technology is one of the most important decisions that every CEO and CTO have to make. It determines how fast a product can be shipped to market, what is the total cost and how big pain maintenance will be.

JavaScript has been one of the most popular client-side programming languages and a commonly used front-end web development tool. However, it has also gained ground in different areas of application and on distinct platforms, such as React Native, Appcelerator Titanium, Apache Cordova/PhoneGap, NativeScript, and Node.js, which is totally different from other commonly used JavaScript frameworks.

Node.js is actually not a framework, but a runtime environment that allows to execute JavaScript on the server side. Even though it was originally written in 2009 it wasn’t widely adopted until recently. Currently, numerous thriving [companies have leveraged Node.js in developing their applications](/10-top-companies-that-used-nodejs-in-production), including Walmart, Netflix, Medium, LinkedIn or Groupon. Why so many big players chose Node.js to use at the back-end? Here are the top benefits of that environment, but also some drawbacks you should consider before you make the choice. Wrong decision may cost you money, so choose wisely.

## Pros of Using Node.js for Back-end Development

### Easy to Learn

According to [Node.js’s 2016 User Survey](//nodejs.org/static/documents/2016-survey-report.pdf) Javascript is one of the most popular programming languages for front-end development. Nearly every front-end developer is familiar with this universal language. Therefore, it is much easier for them to switch to using Node.js at the back-end. It requires less effort and less time to learn and work with, even for a junior Javascript programmer.

![Node.js’s 2016 User Survey](//blog.codecarrot.net/images/PowerPoint+Presentation+2017-11-01.png)

### Freedom in Building Apps

While Ruby on Rails is a framework that imposes rules and guidelines of developing software in a particular way, Node.js gives you much more space and freedom in doing it your own way. Node.js is completely unopinionated, meaning you start building everything from scratch. It can execute basic tasks, but gives you only the bare minimum from a fresh install, making it less restricted.

### Fullstack JS

Before Node.js, Javascript was only used for client-side development. It was necessary to use a different server-side programming language. In practice, you had to hire separate devs for backend and for frontend. With a growing popularity of Node.js fullstack JavaScript became a reality. Nowadays it is possible to write both front-end and back-end of web applications in Javascript, making app deployment much easier and more efficient.

### Active Community

The Node.js community is a very active and vibrant group of developers who contribute to constant improvement of Node.js. Thanks to the cooperation of JavaScript programmers and their input to the community you get access to a ton of ready solutions, codes in Github and many more possibilities. Even though, it is still at a relatively early stage of development, the community is dynamically evolving and its members go the extra mile to provide others with best and reliable solutions.

![People enjoying at camp fire](//blog.codecarrot.net/images/pexels-photo-26135-132411-edited.jpg)

### Simultaneous Request Handling

Node.js provides the non-blocking IO system that lets you process numerous requests concurrently. The system makes simultaneous request handling much better than in other languages like Ruby or Python. Incoming requests are queued up and executed sequentially in a fast manner. In effect your app will take up much less system RAM, achieve high scalability levels and in a result will be perform faster.

## Cons of Using Node.js for Your Back-end

### Unstable API

One of the biggest disadvantages of Node.js is that it lacks consistency. Node.js’ API changes frequently, and the changes are often backward-incompatible. When this happens, programmers are forced to make changes to the existing code base to make it compatible with the latest version of the Node.js API.

### More Development Time

The fact that Node.js is unopinionated can also be seen as a drawback by some developers. Ruby on Rails provides you with a lot of directions from a fresh install and guides you into their way of doing things, but with Node.js you basically need to write everything from scratch. It might result in a decrease in productivity, slowing your work down. However, if you cooperate with an experienced team of programmers who have internally developed a good processes for developing and maintaining code, you do not have to worry about efficiency.

![Telephone booth](//blog.codecarrot.net/images/negativespace1-18-029619-edited.jpg)

### Not Suitable for Heavy-Computing Apps

Node.js doesn’t support multi-threaded programming yet. It is able to serve way more complicated applications than Ruby, but it’s not suitable for performing long-running calculations. Heavy computations block the incoming requests, which can lead to decrease of performance . While Node.js is perfect for complex apps, in the case of software which requires some heavy-computing it might perform less effectively.

### Immaturity of Tools

Even though, the core Node.js is stable, many packages in the npm registry (pre-installed node package manager that organises the installation and management of third-party Node.js programs) are still of poor quality or have not been properly documented. As it is mostly an open source ecosystem, numerous tools have not been supervised and so they might lack the quality and fail at meeting coding standards. The npm’s structure makes it harder to spot reliable packages. Therefore, you might need more experienced developers who can find tools that can be trusted.

## Wrap-up

Node.js is still an immature environment in many aspects and it is likely that many programmers won’t find it useful in their projects yet. However, there are many cases in which Node.js might prove to be much more efficient. Numerous companies have trusted Node.js in production of their applications and they’ve already experienced positive results. It is definitely worth following their example and trying to identify which of the problems you have can be solved with Node.js. Effects might outgrow your expectations.