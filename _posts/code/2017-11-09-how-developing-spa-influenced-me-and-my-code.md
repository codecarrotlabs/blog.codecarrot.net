---
layout: post
author: yashumittal
title: How Developing SPA Influenced Me & My Code
date: 2017-11-09 21:47:40
categories: code
tags: coding 
description: I’d like to share my thoughts about what’s different (the good and the not-so-good) in SPA’s and why as a web developer, you should care about it. Of course, YMMV, so I encourage you to share your opinions in the comments!
image: //blog.codecarrot.net/images/1425999341-bulb.jpg
---

I’d like to share my thoughts about what’s different (the good and the not-so-good) in SPA’s and why as a web developer, you should care about it. Of course, YMMV, so I encourage you to share your opinions in the comments! 

## Background

For the past 8 months or so, I’ve worked exclusively on something known as a **Single Page Application**. It’s essentially front-end written entirely in JavaScript, using a SPA framework, with a REST API written in rails (as opposed to traditional rails-way applications). This experience has considerably changed my views on web-development in general.

In this blog post, I’d like to share my thoughts about what’s different (the good and the not-so-good) in SPA’s and why as a web developer, you should care about it. Of course, YMMV, so I encourage you to share your opinions in the comments!

## The Case For Single-Page Applications

The world is changing fast. People’s behaviors change more rapidly and today we use increasingly more and more cloud-based apps, accessible from devices that aren’t necessarily opened with a web browser or native desktop apps. We expect lower response times, snappy, intuitive interfaces and near-100% availability.

How can we, as developers deliver that?

Well, there’s a rule that states, **“use the right tool for the job.”** I believe applying this rule to web-dev results in Single-Page, API-based applications.

We’ve all seen terrible rails code bases. Models coupled to views, views littered by conditionals, tons of JS glue code to stitch pieces of HTML together to form a user interface. It doesn’t have to be that way. There exists several techniques which help decoupling presentation from the domain: [Decorators / View Objects](//github.com/drapergem/draper) for instance, encapsulate code which deals with presentation in another class.

This however, does not solve the underlying problem: **The frontend (browser) and backend (rails) are radically different environments, and thus require different tools.**

Backend is a simple pipeline: a request comes in, the application does something, and a response comes back. But frontend is event-driven: multiple things happen simultaneously, hovering, clicking, scrolling, loading etc. Frontend is a user interface, dynamic, adapting, changing. By spitting back HTML from a rails pipeline, a lot of hacks and ugly JS code is required to emulate the responsiveness.

Luckily, many tools have been developed which alleviate this problem. JavaScript frameworks like [marionette](//marionettejs.com/), [angular](//angularjs.org/) or [ember](//emberjs.com/). These tools were created with the dynamic environment of the browser in mind. When using them, typically the role of the backend is reduced to accepting and returning JSON, being a REST API after all.

Decoupling domain and presentation has many advantages too: the API that powers a web-application can be used for native mobile apps as well. Every successful product will need to enter the mobile market sooner or later, so you might as well be prepared for it. It results in snappier interactions so that the page doesn’t need to be reloaded in order to see the result of an action. Since the API transfers raw JSON data, the amount of traffic can be reduced and caching is also easier and more effective. The biggest difference, however, is in the quality of code.

## How Developing SPA Influenced Me & My Code

### The Good

Working on this kind of project was a peculiar experience for me. A lot of things suddenly felt right for a dynamic web app. I didn’t need so many hacks and glue code to pass HTML around. There were less bugs in js code. Front-end coding started to be pleasant!

How often do you test your rails controllers? What about views? Testing is hard because things are jammed together in the rails world. You can design your application around small components, with little dependencies and small responsibilities. The framework I used - marionette - encourages that. Rails? Not so much! Testing and maintenance become much easier.

On the rails side, controllers become smaller. All presentation-related code goes away. It’s a big deal conceptually, as you only have to care about how to consume and deliver JSON data. Combine that with other handy patterns (service objects, form objects) and you have a big win.

I started thinking more about designing applications well, rather than following hard-beaten rails-way. No more working around fits-it-all framework to achieve the goal.

### The Bad

Of course, it wasn’t always pretty and shiny. In the past, I was skeptical about SPAs. The argument of productivity in rails appealed to me. I must admit, the new way of doing things and learning a javascript framework has been a steep learning curve. You won’t be moving as fast as with rails in the beginning. JavaScript can feel less familiar than ruby and testing can be awkward: they are different tools, created for different environments and purposes.

The change of paradigm also brings a whole suite of new challenges. For example, the lifecycle of a page is longer: you can expect the user to have an application open in a tab for hours! That’s why you need to be extra careful about memory management by removing references and bindings to unused objects, so that JavaScript’s GC can sweep them. Memory leaks can cause deterioration of responsiveness or even crash the browser tab.

The back button is a common trouble spot in SPAs. You need to make sure it works as expected (check if the framework can handle it for you). Moreover, in most cases, refreshing the page should bring up the same view (this applies to links shared with others too).

### Final opinion

In hindsight, it was absolutely worth it. Once you’re up-to-speed with front-end skills, you can be just as productive as when you’re using an all-rails stack. Plus, your code is a lot better. When you’re working in a team, it’s great too, as people can focus on only one side of the application, delivering better results.

What was surprising was that the switch really helped me advance in other areas of web development. By having focusing on both frontend or backend simultaneously, I learned to code each one a little better. This was a big step for me, and since then, I’ve been motivated to learn as much as I can about frontend (the area I’ve had less experience with).

Note that I’ve only used one technology (backbone + marionette as you’ll see) to develop simple applications. It would be interesting to know if the set of advantages and disadvantages is perhaps particular for this technology (I think I’ll be trying angular in the future).

## The Development Stack

In the past, we’ve had experience with [backbone.js](//backbonejs.org/), and we’ve used that for our projects. But backbone is not a fully-fledged framework. That’s where [marionette](//marionettejs.com/) comes in.

Marionette complements backbone beautifully, by adding useful components, module management, conventions, and composite architecture. That last element is most important: marionette applications consists of modules that form hierarchies, which in turn comprise the whole interface. It also features ways for modules to communicate with each other in different ways to avoid coupled, spaghetti code. And lastly, everything in marionette revolves around events which are emitted by entities (models), views and controllers, fitting nicely in the browser environment. If you have a backbone application and are looking to make it better, you can check out this blog post, ["Marionette.js and Backbone - a perfect match?"](/marionette-js-and-backbone-a-perfect-match).

For JS templating we’ve used battle-proven [handlebars](//handlebarsjs.com/), but there are nice alternatives like [haml-coffee-assets](https://github.com/netzpirat/haml_coffee_assets) that let you use HAML for JavaScript templates (How cool :)).

Testing JavaScript code is done using [konacha](//github.com/jfirebaugh/konacha).

On the backend side we’ve used [jbuilder](//github.com/rails/jbuilder) templates to render JSON ([activemodel-serializers](//github.com/rails-api/active_model_serializers) seems like a popular alternative). Caching is built-in with rails, so that’s a plus.

## Conclusion

The benefits of SPAs that I’ve seen are enormous, and I encourage every rails developer who hasn’t looked into them yet to do so.

You can start by choosing a JS framework and implementing your test app with it. Try to make all of the controllers return JSON, and see how slim they become. If you’re feeling adventurous, try coding frontend and backend in different repositories. The context-switching will be painful at first, but eventually it’ll become natural and reinforce the focus on the decoupling of domain, API and user interface.

For a really hardcore challenge, try implementing the API in different web framework. Anything that spits out JSON is fine (I’ve been experimenting a lot with [Scala](//www.scala-lang.org/) and [Play Framework](//www.playframework.com/), personally). This exercise will open your mind to different approaches to the problem, and ultimately, help you become a better developer.

## Resources

[backbone.js](//backbonejs.org/)
[marionette.js](//marionettejs.com/)
[backbonerails](//www.backbonerails.com/)
[js_stack](//github.com/netguru/js_stack)