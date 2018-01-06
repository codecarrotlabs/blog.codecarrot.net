---
layout: post
author: yashumittal
title: How to Choose a Server - Mini Guide
date: 2018-01-05 23:51:00 +0530
categories: tips
tags: tips server guide
description: Read our tips on how to choose a server to avoid problems in the future. There are plenty of places where you can host your Rails application online.
image: https://cdn.codecarrot.net/images/16329138786_3606758016_o-666507-edited.jpg
---

There are plenty of places where you can host your Rails application online. Each of them has its advantages and disadvantages and very often you will need to strike a balance between configurability and maintenance costs. How do you choose the best solution then?

## Solutions tested by [CodeCarrot](//www.codecarrot.net)

### Heroku will always do the trick

One of the most popular ways of hosting an app is Heroku. Heroku is a ready-to-use Cloud Application Platform, which makes deployments and hosting very easy. It's a convention over configuration, where you can easily configure all of your infrastructure with simple entries in one file. **Maintaining database, scheduled recurrent tasks and secret tokens for your application can be edited using Web interface**. This is definitely the best option overall, which saves you a lot of complicated devops work and enables quick deployment. However, it's difficult to configure it for some very specific use cases and it’s relatively expensive too.

### Amazon the Famous

Amazon Web Services is probably the most recognized Platform as a Service solution currently available. It offers you a wealth of options to quickly scale your application and configure it for every use case you need. **It also provides a range of support solutions, such as backups, monitoring and logs**. However, these machines demand full configuration from the very start of installing the operating system – through a http server and so on. It's the most reliable solution for medium and large applications, but demands a lot of devops work.

### The cheapest doesn’t always mean the best

Of course, you can just buy a standalone server from any provider you want, e.g. Hetzner. This is definitely the cheapest option, but it demands devops work and a lot of expertise in choosing servers. **Compared to cloud solutions, such as AWS, it's not so easy to scale your servers up when you are an owner of a physical machine**. If you have devops already and need to balance your expenses, this might be a good option for small applications.

Summing up, when choosing a server, it’s crucial to take into consideration **both positive and negative aspects of each solution**. This will help you avoid any unexpected situations that may result in delays in your projects.
