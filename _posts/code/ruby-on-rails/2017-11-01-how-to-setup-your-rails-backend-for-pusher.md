---
layout: post
author: yashumittal
title: How To Setup Your Rails Backend For Pusher
date: 2017-11-01 02:18:00
categories: code
tags: ruby-on-rails ruby rails pusher
description: Pusher.js is ready to use SaaS providing websockets in multiple technologies It may handle public, private and client events with authorization or not.
image: rails-backend-for-pusher.png
---

Pusher.js is ready to use SaaS providing websockets in multiple technologies It may handle public, private and client events with authorization or not.

## What you will use:

* [pusher gem](//github.com/pusher/pusher-http-ruby) - as server gem that is responsible for triggering events to clients (events may be triggered also between clients excluding server, but it demands more configuration that will be handled later)

## Pros:

* Easy to set up
* Support provided
* Available for Ruby, iOS, Android and JavaScript

## Cons:

Paid service (check out [pricing here](//pusher.com/pricing))

## Step 1: Setup initializer

Pusher will be available as global singleton object being set up in initializer. You need to add pusher.rb to your initializers that will simply define app credentials and enable encryption.

## Step 2: Create Pusher::Dispatcher service to trigger events

This step depends on your architecture of choice. I chose to have `Pusher::Dispatcher` class that will just trigger the Pusher singleton. Looks like overkill, but it's a good place to e.g. calculate channel name based on some variables (like user id).

## Step 3: Add authorization endpoint

Authorization in Pusher is very simple:

* You provide endpoint for authorization to every client (e.g. on frontend side or iOS app)
* When client wants to connect, it hits the endpoint with client-side defined params
* Your endpoint should validate these params (e.g. checking the authorization token) and authenticate the connection via Pusher singleton object with params of your choice - e.g. more data about currently authorized user that will be shared between other clients connected to this channel.

Each client can define its authorization endpoint during initialization. E.g. in frontend app or iOS app you can initialize Pusher with authorization endpoint pointed out to //myapp.com/api/pusher/auth.

Clients can also configure params that they are sending to that endpoint. E.g. you can send to your /api/pusher/auth endpoint current user ID and auth token that is being used in frontend application.

Let's call our endpoint /api/pusher/auth.

Safe, easy and secure.

## Step 4: Debug and validate

You can easily debug and validate your Pusher implementation without any frontend at all. In my app, where there is basically no business logic, I created simple endpoint that will trigger Pusher events on demand for testing.

Now I can simply trigger Pusher events by using CURL:

```curl
curl http://localhost:3000/api/pusher/trigger?channel_name=test&event=myEvent
```

What is cool about Pusher is that it has excellent debug console available on web. What it means is that you don't need to have frontend ready solution - work on backend till you're ready!

Go to your's app Debug Console in Pusher dashboard, restart your server and observe if Pusher is getting needed data!

## Summary

You have set up all you need to fully embrace Pusher base possibilities. You can handle public, private and presence channel (private and presence demands authorization). You can easily trigger events and you have reusable `Pusher::Dispatcher` class. And you learnt about Pusher Debug console which is must-have in your toolbelt. Good job!