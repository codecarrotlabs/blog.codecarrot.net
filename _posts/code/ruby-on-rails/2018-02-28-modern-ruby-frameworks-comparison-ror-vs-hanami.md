---
layout: post
author: yashumittal
title: Modern Ruby Frameworks Comparison - RoR vs Hanami
date: 2018-02-28 01:00:00 +0530
categories: code
tags: ruby-on-rails ruby rails
description: Ruby on Rails is the most popular web framework in the Ruby world, but Hanami is the lightweight new contender that might take its place
image: https://i.imgur.com/caRHcba.png
---

We love using Ruby On Rails at [CodeCarrot](https://www.codecarrot.net/). It’s our framework of choice in most cases. We know its best and worst aspects, and we feel comfortable using it. That said, we're aware that there are other Ruby frameworks worth looking at. Today, we want to show you Hanami – an alternative to RoR.

## A little bit of history

Hanami is still a very young framework. Its stable 1.0 version was finally released only a few months ago (version 1.1.0 has been released recently). From that point on, we can consider this technology for any real-world scenarios without worries.

### Pros of Hanami


1. **Lightweight, modular solution**

Ruby on Rails is a great framework with lots of features, which makes building apps really easy and quick (at least at the beginning). But all RoR’s features come in one package, which means costs in terms of memory and CPU consumption. Hanami, on the other hand, is much more flexible, and you can very easily select parts of the framework you need in your project. You can start with something very basic and add more features only when you need them. It might come in handy when you are starting a new project, and you know it will be quite simple or when you want to extend your application, and it will be easier to create a small separate service just for this feature instead of changing the existing codebase.


2. **Enforces good code structure**

It is a well-known fact that building applications with Rails is fun at the beginning, but as the codebase grows, the default code structure proposed by Rails often becomes a source of frustration. This means that you will need to spend some time on code refactoring, or use a better code structure from the start. Hanami offers a different approach – which might look like a bit of an overkill when you're building something really small – but will bring large benefits as soon as the codebase grows. Hanami is worth considering if you have a feature-stable application, but you're struggling with some performance issues or bugs because the code structure is so complicated.


3. **Great documentation and growing community**

When we are interested in a technology, we look at the documentation first. If it's poor, we will probably stick with our current technology stack. This is not the case with Hanami: the documentation is really good, and there are also many great tutorials. There is even a step-by-step guide to rewriting a complete application from Rails to Hanami. And when it comes to community, there are already many ready-to-use libraries. On top of that, many solutions in Hanami are very similar to those that we know from Rails, so you won’t feel lost when you look at the code for the first time.

### Cons of Hanami

There is only one really important disadvantage of Hanami: it’s much less popular than Rails.
Ruby on Rails is the most popular web framework in the Ruby world, and it's hard to compete with that. Hanami has fewer ready-to-use libraries, tutorials, and other great resources – you can find them all in Rails, though. The community is also smaller (but hey, it is growing!), so sometimes you will have to wait a bit longer for some answers. If that's important for you, or you're used to building applications quickly from ready-to-use blocks, Hanami shouldn’t be your first choice.

## Summary

Even though we’re used to some technologies, there will always be an alternative. It’s good to know about the available alternatives in case you’re planning a new project, or trying to complete overhaul an existing one. As with any other framework, whether Hanami is a good fit for you will always depend on your individual case. Before you get tied to one framework or another, make a list of pros and cons and decide! Feel free to use our list as a guide.