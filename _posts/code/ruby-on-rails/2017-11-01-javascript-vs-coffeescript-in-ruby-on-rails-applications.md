---
layout: post
author: yashumittal
title: JavaScript vs CoffeeScript In Ruby on Rails Applications
date: 2017-11-01 03:58:45
categories: code
tags: ruby-on-rails ruby rails js coffee javascript coffeescript
description: At CodeCarrot we regularly discuss technologies we use to make sure we are not lagging behind or lose newly emerged
image: //blog.codecarrot.net/images/jsvscoffee.png
---

At [CodeCarrot](//codecarrot.net/) we regularly discuss technologies we use to make sure we are not lagging behind or lose newly emerged features in web development world. Here's a short rundown of our discussions if we should use JavaScript or CoffeeScript in our projects (note that we are currently using CoffeeScript as default).

## JavaScript

### Pros

* ES2015 and ES7 are currently state of the art web languages
* Ember and React are extensively using ES2015 and ES7 (!) features in their core features
* If we want to publish interesting content on either blog or Stack Overflow, we need to switch between Coffee and JS, as JS is a default way in modern work
* Developing in JavaScript demands more knowledge and understandability of how the language works; it's easier to obtain new knowledge by no need of transpiling and understanding both syntaxes
* Even though some people say that JS syntax is worse, the reason might be lack of ES2015 knowledge which provides simplifications like arrow functions same as in Coffee
* Better tools - we can easily add linters to our projects that are quite smart about JS code; ember has built in linter config that fails tests if our code is not proper; CodeClimate is supporting JS

### Cons

* Some people say that JS syntax is worse than Coffee
* It will provide confusion due to different syntax in different projects (older projects will stay in Coffee)
There is no easy and working transpiler between Coffee to JS (ES2015) and it demands simple transpiling to ES5 and changing by hand (error prone)
* We will have to maintain old coffee projects and new JS projects

## CoffeeScript

### Pros

* It's our default now and all of us are familiar with coffee
* It's easier to work with and maintain due to simple syntax
* Staying with coffee won't demand any change and confusion while switching between new and old projects

### Cons

* It does not support ES2015 features
* No support from CodeClimate or JSLint / ESLint, built in Ember as default tests part
* Due to lack of ES2015 support, we can not use some of new features in Emberjs like: new computed property syntax using getters and setters, importing modules ES2015 style and others
* It's hard to work with the newest features and examples from Ember or React due to fact they are written in ES2015 and shown by JSBin that supports ES2015
* Due to ease of sharing scope using fat arrow and no need to declare variables, it's easy to forget about base concepts of JavaScript like scopes mechanism and why it works this way not another

These pros and cons are highly opinionated and might be different for you, depending on projects you work on. Be aware that this list is [Codecarrot](//codecarrot.net/)-oriented and you might have different opinions - feel free to comment below.