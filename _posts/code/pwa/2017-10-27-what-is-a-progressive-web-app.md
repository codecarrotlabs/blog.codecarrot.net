---
layout: post
author: yashumittal
title: What are Progressive Web Apps?
date: 2017-10-27 01:59:00 +0530
categories: code
tags: coding developer progressive-web-application pwa
description: By now, you’ve probably heard that Progressive Web Apps are the future of all mankind. They’ll bring world peace, end hunger, save the rainbows and unicorns, bring balance to the force, and a whole lot more.
image: https://cdn.codecarrot.net/images/what-is-pwa.png
---

By now, you’ve probably heard that Progressive Web Apps are the future of all mankind. They’ll bring world peace, end hunger, save the rainbows and unicorns, bring balance to the force, and a whole lot more. In the process, they might even push the mobile web forward, bring parity to web and native apps, and help mobile developers reach more users beyond the confines of the app stores.

That all sounds great… but what are Progressive Web Apps, exactly? Want to [kickstarting Your Journey to Progressive Web Apps](#kickstarting-your-journey-to-progressive-web-apps)?

<blockquote>
“A Progressive Web App uses modern web capabilities to deliver an app-like user experience.” – Progressive Web Apps
</blockquote>

Native app store apps do things like send push notifications, work offline, look and feel like an app (as Apple and Google have imagined them), load on the homescreen, and so on and so forth. Mobile Web Apps accessed in a mobile browser, by comparison, historically haven’t done those things. Progressive Web Apps fix that with new Web APIs, new design concepts, and new buzzwords.

To be clear, I’m talking about browser mobile web apps. Hybrid apps, like Ionic with Cordova, run uninhibited in the native app environment, with all the features we expect of any native app. But pull out the web content from a hybrid app and load it in a mobile browser, and the app is thusly constrained by the features of the browser (for a variety of good security and API standardization reasons).

Progressive Web Apps bring features we expect from native apps to the mobile browser experience in a way that uses standards-based technologies and run in a secure container accessible to anyone on the web.

On the whole, Progressive Web Apps describe a collection of technologies, design concepts, and Web APIs that work in tandem to provide an app-like experience on the mobile web. Let’s walk through some of the core tenets of Progressive Web Apps.

## Service Workers

Service Workers are an incredibly powerful, and equally as confusing, technology behind a Progressive Web App. They power offline functionality, push notifications, background content updating, content caching, and a whole lot more.

At a high level, a Service Worker is a worker script that works behind the scenes, independent of your app, and runs in response to events like network requests, push notifications, connectivity changes, and more.

I’ve heard Service Workers described as a “proxy,” which I think describes them nicely. We can listen for events like `fetch` that happen any time a network request occurs. We can handle that event with full control, checking for cached data and returning immediately, or allowing the request to continue to the remote server. Our script acts as a proxy, or middleware, for the request.

The sheer power and flexibility of Service Workers makes them very complicated, and generally, developers will want to use pre-made “recipes” for common service worker use cases, such as offline mode. Mozilla has a [great reference](//serviceworke.rs/) for service worker recipes that demonstrate the myriad applications with reusable code. For example, here’s how to do a simple [offline mode](//serviceworke.rs/offline-fallback_service-worker_doc.html) that intercepts `fetch` events and returns data from a cache if the network request fails. Google also has a slew of [Service Worker Samples](//github.com/GoogleChrome/samples/tree/gh-pages/service-worker).

Main takeaway: Service Workers are just a JavaScript file like any other, running in the background and triggered via events, and it’s up to you to write code to handle caching, push notifications, content fetching, etc. Since developers end up using the same “recipes” to do common tasks (like offline support), we will most likely want to use existing recipes to make our lives easier. Service Workers are available on Android with Chrome 50 and not [currently supported](//caniuse.com/#feat=serviceworkers) by other major mobile browsers.

## App Shell

The App Shell model is a simple design concept whereby the initial load of a mobile web app provides a basic shell of a app UI, and the content for the app is loaded after. App Shell isn’t a Web API or a framework, but rather a design approach that developers can choose to adhere to that is enhanced by the caching abilities of service workers. You might find that it’s a pretty straightforward, obvious approach, made more dramatic by a buzzword.

With the App Shell model, we focus on keeping the shell of our app UI and the content inside of it separate, and we cache them separately. Ideally, our App Shell is cached such that it loads as quickly as possible when a user visits and returns at a later date. Having the shell and the content load separately theoretically improves the user’s perception of the performance and usability of the app.

Putting this in the context of Ionic, we can load our Ionic app layout immediately (tabs, navigation controller, side menu, etc.), cache it through a service worker, and then fetch and update the content through JS after the app shell has loaded.

As we start to add more PWA support to Ionic, you can expect an App Shell approach to come out-of-the-box for all Ionic apps that are deployed as mobile web apps, with pre-made Service Worker recipes for caching, offline support, and background content refreshing.

## Installability and App Manifest

Historically, mobile web apps were not installed like an app to the homescreen. Sure, a user could “pin” a mobile website to their homescreen on iOS and Android, but the experience was second-rate, and the app still did not come with the local features we expect out of native apps (plus, does anyone actually do that?).

This is changing. Recently, Chrome on Android added support [for installing web apps to the homescreen](//developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android?hl=en) with a native install banner, just like the native app banners we’re used to.

To tell Chrome our mobile website is installable as an app, we write a [manifest.json](//github.com/pivanaio/banjo/blob/master/manifest.json) file and link to it from our main HTML page (see the second link above for a full example).

Currently, iOS doesn’t have any additional features here beyond Pin to Homescreen, so the experience won’t be as fluid, but here’s hoping Apple gives us some goodies this year ?.

## Conclusion

Progressive Web Apps are equal parts new Web APIs, design patterns, and marketing fluff. The mobile web comes closer to parity with installable app store apps through app manifest and homescreen install support, background worker functionality with Service Workers, faster load time with App Shell, and a renewed belief that web developers, too, can build amazing mobile app experiences.

***

## Kickstarting Your Journey to Progressive Web Apps

<div data-type="vimeo" data-video-id="240060222"></div>
