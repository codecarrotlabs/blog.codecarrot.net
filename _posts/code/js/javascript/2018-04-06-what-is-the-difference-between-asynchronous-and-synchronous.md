---
layout: post
author: yashumittal
title: What is the difference between asynchronous and synchronous?
date: 2018-04-06 15:31:20 +0530
categories: code
tags: code javascript asynchronous synchronous
description: In programming, synchronous means that the requester is blocked (unable to do anything else) until a response is returned 
image: https://i.imgur.com/2a4ZiSN.png
---

In programming, synchronous means that the requester is blocked (unable to do anything else) until a response is returned; asynchronous refers to the fact that the requester makes the request, moves on to other tasks, and be notified when a response is ready.

Suppose you go to a restaurant and find out that no seat is immediately available. If the restaurant asks you to sit there until seats are available, this is "synchronous";

![synchronous](https://i.imgur.com/OJq4fWK.gif)

if you are given a device which vibrates with flashing lights when your seats are ready, and you are free to roam around while you wait, this scenario is "asynchronous".

![asynchronous](https://i.imgur.com/ntejuMZ.gif)

A software application usually chooses the asynchronous approach to improve user experience. In our restaurant example, your wait time does not differ whether you wait there or not, but that 20 minutes wait feels more tolerable when you are given the freedom to roam around.

One of the greatest Internet browser features was the adoption of asynchronous paradigm. In the beginning of Internet, a webpage is a reflection of a file on the server. Loading a webpage requires the browser to completely download that file, and then present it on the user's screen.

This changed with AJAX, or "asynchronous javascript and XML", where someone recognizes that a webpage can contain many many smaller elements, and each individual element can be retrieved in the background, with the browser presents the elements asynchronously as they come in. The result is a much better user experience, and that makes all the modern web sites such as [Facebook](https://www.facebook.com/codecarrotinc) or [Twitter](https://www.twitter.com/codecarrotnet) possible.