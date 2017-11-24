---
layout: post
author: yashumittal
title: 6 Ways to Improve The Speed of Your Web App
date: 2017-11-04 18:29:40 +0530
categories: code
tags: coding web-app speed
description: 6 ways to reach top page load speeds. Quick wins to speed up your web app on the frontend side. Easy checklist to improve the result!
image: traffic-car-vehicle-black.jpg
---

[Speed of a web app is one of the most crucial things that influence SEO, conversion rate](/9-seo-tips-improve-website-performance-drive-traffic) or user experience. It is something you should be concerned with when it comes to user retention. According to an Aberden Group Report, a 1-second delay in page load time equals 11% fewer page views, a 16% decrease in customer satisfaction, and 7% loss in conversions. Moreover, according to Gomez.com, increase in page response time from 2 to 10 seconds increased page abandonment rates by 38%.

Reaching top page load speeds can be very hard. It depends a lot on both your frontend and backend. In this article, we want to focus on quick wins to speed up your web app on the frontend side. With this easy checklist you will substantially improve the result!

## How to measure?

Before you start implementing improvements you should first verify your current web app speed. The easiest way to do it is to use one of the tools that provide you with a brief summary of key performance indicators. Such tools give you insights about crucial areas of page load speed and help you identify ways for improvement. On our side we can recommend GTmetrix and Google Page Speed. Both provide extensive statistics on performance and useful tips for improving your results.

## Improving Web App Speed - Checklist

### 1. Optimised images

When it comes to images, there is much you can improve. Firstly, you should make sure you use PNGs only when it’s necessary - for logos, images with a lot of straight lines or high contrast. In most of cases, you should stick to JPEGs, that are much less heavy, rather than PNGs.

Secondly, use proper resolutions for the images. Don’t upload a 10MB image of your logo if it’s scaled to 120px width. Make sure your images are exactly the resolution you need them to be.

Behind every image there’s much unnecessary data that slows down your app. You can use tools such as Kraken.io to remove metadata from your images. It can save up to 70% of the size.

Finally, you can leverage SVGs for graphics. SVGs are vectorized images that are perfect for icons or logos. SVGs describe perfect quality images in all resolutions, and they are still lightweight. However, it is not possible store all images using this format.

### 2. Stylesheets and Javascript

Stylesheet is an essential basis for app maintainanability, accessability, customisation, consistency, portability and naturally speed. Using non-blocking assets and allowing your user to fetch and render HTML markup before the CSS is downloaded and parsed can significantly increase web app speed. It goes the same for JavaScripts. On top of that, you should definitely minimize your CSS and JS files. Don’t forget to gzip them afterwards. The resulting file can be even multiple times smaller than originally!

### 3. Caching

Remember to define caching strategies for the client’s browser. Browsers try hard to manage caching, but from their perspective it is much safer to avoid caching your resource by default than cache it without your consent. That’s why you should try to configure caching for all of your assets declaratively.

### 4. CDNs

Content Delivery Network (CDN) is a globally distributed network of proxy servers deployed in multiple data centers. Its goal is to serve content to end-users with high availability and high performance. What’s important, CDNs can substantially improve response times to your assets for users all around the world.

### 5. Non-bloated and mobile-first CSS

This is not a quick win, but it can have a huge impact especially on older devices. Non-bloated CSS are stylesheets that reuse as much as possible across classes to minimize the amount of code parsed by the browser.

Mobile-first CSS is based on the idea that developers should wrap all the desktop CSS into media queries and leave the mobile as default. Thus, the mobile device browser won’t even parse the code in media queries which means that it would render faster.

### 6. Server side rendering in your Single Page Applications.

Not every JavaScript solution is ready to enhance server side rendering. However most of the mature ones, like Ember, React or Angular2, can already do it. If you didn’t think about that from the very beginning it might demand quite a lot of refactor, but is definitely worth it! Especially because of the fact that it also boost your SEO.

## Summary

If you are continuously  developing your application and introducing updates, you should track your page speed periodically using mentioned tools. You can also integrate some SaaS tools to budget and measure your page sizes. Go with this checklist yourself. Remember that page speed is important!
