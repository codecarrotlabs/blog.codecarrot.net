---
layout: post
author: yashumittal
title: Developing Ruby on Rails Apps as an API for React on Front-end
date: 2017-12-09 17:01:00 +0530
categories: code
tags: coding react facebook framework react-native mobile rubyonrails ruby rails
description: Users expect apps to be engaging, responsive and fast. Ruby on Rails and React setup is the stack you should go for if you want to meet their expectations.
image: pexels-photo-209726.jpeg
---

Currently, more and more applications have dynamic content. Users expect apps to be engaging, responsive and fast. If you want to live up to these expectations you will need a proven technology on the backend with interactive framework on the frontend. Otherwise, users might get discouraged from using your app and move to a competitor. Having tested many combinations we’ve found a great solution for quick development of dynamic applications. What’s our secret?

## Single-Page Applications, a New Trend in Development

Modern web applications such as Facebook, or Instagram focus on microinteractions. It’s crucial that the application is dynamic and quickly reacts to user behaviour. That’s why Single-Page Applications (SPAs) have recently gained on popularity. SPAs can be defined as “web applications that load a single HTML page and dynamically update that page as the user interacts with the app”. They resemble fast, native, mobile and desktop app experience. The users don’t have to wait for the website to reload every time they click on something. As a result, their experience improves thanks to fewer full page reloads and a better overall performance as less bandwidth is needed.

There are many combinations of different technologies and frameworks you can base your SPA on. We’ve researched and tested many options that include RoR, Node.js, Angular, Ember, or React. In this piece we want to focus on a setup which includes Ruby on Rails on the backend with React on the frontend  which is one of the optimal choices for SPAs. It allows for fast rendering, great user-experience and quick development. What else do you need?

![Ruby on rails and react.jpg](//blog.codecarrot.net/images/ruby-on-rails-and-react-benefits-of-setup.png)

## Benefits of Using React for a Ruby on Rails Backend

### 1. Reliable technology

[Ruby on Rails is a proven technology, battle-tested by well-known brands such as Crunchbase, Shopify, Twitter, Airbnb or GitHub](/top-30-sites-built-with-ruby-on-rails-in-2017). It’s strongly supported by an active community of great developers. On GitHub, it’s the largest repository of source code in the world. It makes **RoR a reliable framework**, in line with the highest development standards.

[See how Ruby on Rails stacks up against Node.js.](/node-js-vs-ruby-on-rails-comparison-which-environment-to-choose-for-your-next-project)

### 2. Fast and convenient development

Ruby on Rails has an enormous system of modules (gems), that provides you with ready-made solutions. Developers don’t need to write everything from scratch. It also provides access to **tools for building APIs** on the backend which can communicate with the client side, such as a React-based frontend. It’s a convenient **solution for programmers**, making development much faster and, as a result, reducing costs.

### 3. Less code needed

**React is also lighter** than Angular, or Ember. Devs build the frontend of an application using structured components, adding only the modules that are needed and dropping lines of unnecessary code.

### 4. Easy to test and maintain

When we compare such combination to a traditional RoR app setup in which the frontend is also based on Rails it is a much **cleaner solution in terms of engineering, easier to test and maintain**. There is a distinct division of responsibilities between frameworks and each of them handles what it is best at: RoR - backend and React - frontend.

### 5. Efficient teamwork

Clear division into frontend and backend based on different frameworks also improves communication within the team, making it clear who’s accountable for what. As a result, the development process is more efficient. With React, your frontend developers don’t have to know the details of RoR - they can handle frontend separately. It is not possible in the traditional RoR setup.

### 6. Good documentation

The tools and libraries available in RoR make it way easier for the team to create and constantly update documentation of the most important parts of the application (endpoints) - to the extent that it is almost unnoticeable. Not only is it more convenient for programmers, but it also guarantees reliable documentation.

### 7. Great user-experience

React uses virtual [DOM (Document Object Model)](/the-difference-between-virtual-dom-and-dom-in-react) technology that speeds up app rendering. The end user gets a faster and highly-interactive application with more-native-app-like experience.

![Ruby on rails and react](//blog.codecarrot.net/images/ruby-on-rails-and-react-when-you-should-you-use-it.png)

## Downsides of RoR + React Setup

RoR + React combination doesn’t have any major downsides when it comes to the app performance, development or maintenance. But before jumping into the RoR and React setup you should consider potential challenges when it comes to building up your team.

Ruby on Rails apps as an API for React is not a standard yet. The majority of software houses still stick to the traditional approach, so it might be harder to find specialists who will have the knowledge, skills and experience in similar projects. Secondly, you will also need a dedicated React developer who will handle the frontend of your application.

Actionable Tips For Development

We chose RoR with React for many of our projects and it turned out to be a successful solution. However, it is not a good fit for all kinds of applications. To make the right decision you need to specify your business needs and goals.

RoR and React combined will be a good solution for **modern, snappy applications in which a dynamic frontend is crucial to your business success**. That’s why it’s perfect for **SPAs**. It’s also a better choice for **B2C applications**, or **B2B apps with high user volume**. You shouldn’t waste your resources on Single Page Application that will be used by few people.

Finally, if you **plan to later scale your app to mobile platforms**, React will be a great base for [React Native development](//www.codecarrot.net/).

## How It’s Done at CodeCarrot - Showcases

### Tweet streaming

One of our internal projects aimed at developing a snappy and fast application for real-time tweet streaming. The app was a SPA, so there was no need for website reloading. It enabled instant interaction with a dynamic content. It also provided a well-written front and backend for user account management. Development of the application took one month and involved one developer only. With RoR+React the process went smooth, whereas a traditional RoR setup would have produced more problems.

![CodeCarrot Twitter Account](//blog.codecarrot.net/images/codecarrot-twitter.png)

### Marketplace app

In another project, this time for commercial purposes, the CodeCarrot team had to develop an elaborate marketplace application connecting two parties. The size and characteristics of the application required big team, but thanks to a well-written documentation it was not much of a problem. Development time was much shorter, too. The team was divided into frontend and backend, both could work separately. The frontend team was not lagged by backend development and iterations as they could use endpoints and mock them, continuing coding. At the same time, the server-side code based on good standards ([JSON API](//jsonapi.org/)) enabled the backend team to keep on working independently from the frontend, streamlining the whole development process.

### Should You Use It?

Is RoR and React setup a universal solution for all kind of applications? Definitely not. But if you aim at building dynamic application with many microinteractions it is an optimal choice. If you want to know more, [drop us a message](mailto:contact@codecarrot.net). We’ll be happy to help you achieve your business goals.
