---
layout: post
author: yashumittal
title: Why You Should Consider React Native For Your Mobile App
date: 2017-11-04 03:43:00
categories: code
tags: coding react facebook native-apps react-native
description: React Native creates new possibilities in building well performant iOS and Android apps, but it also has some restrictions. Our perspective on React Native based on CodeCarrot's projects.
image: //blog.codecarrot.net/images/pexels-photo-89955.jpeg
---

The first time when we saw that we could use react, our go-to front-end library, for building native applications, we were thrilled. The promise that you will be able to learn react’s paradigm and write applications for everything is so crazy that only a fool would choose to build new stuff the old way. There is some truth in that statement. Indeed [React Native](//www.codecarrot.net/react-native) creates a wide spectrum of new possibilities in building well performant iOS and Android apps. However, you should also be aware of the restrictions that it might have. In this article we want to present our perspective on React Native which we have derived from CodeCarrot’s projects.

## What is React Native

React Native is a framework developed by Facebook which enables building mobile apps using JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components. It allows developers to reuse code across the web and on mobile and through different operating systems. With React Native you don’t have to build the same app for iOS and for Android separately from scratch. On top of that, thanks to instant reloading, instead of recompiling you can build apps much faster.

![ipad-samsung-music-play-39630.jpeg](//blog.codecarrot.net/images/ipad-samsung-music-play-39630.jpeg)

## Why to Use React Native

[React Native creates declarative high level API for building native applications](/4-kinds-of-applications-to-build-with-react-native). Each React Native UI component corresponds to the native UI component of iOS and Android. There is a very high possibility that you will be able to reuse most of your code between platforms and many parts will ‘just work’.

There is also a big chance that someday we will be able to target another device and reuse our codebase to create apps that will reach other platforms and even more users. It happened once with android. Initially React Native was a solution for iOS only, but now it’s also available on different operating systems, slowly expanding to VR and Universal Windows Platform.

On top of that, when it’s not required to use custom modules, you will be able to deliver high quality applications for Android and iOS using a fraction of the resources it could take with the native approach. At CodeCarrot, we recognised this opportunity to create apps concurrently for both operating systems, so we decided to see React Native in action in a few of our projects.

So far we have built applications that were quite simple. They fetch data and show it on the screen. React Native is just perfect for such projects. Even if you want to have a real native feel on both platforms with different designs, react native is a better choice, as most of the code that will power your application is already embedded in its business logic. It doesn’t change too much between Android and iOS even though it might look way different.

![skyline-buildings-new-york-skyscrapers.jpg](//blog.codecarrot.net/images/skyline-buildings-new-york-skyscrapers.jpg)

## Challenges You Might Face with React Native

Unfortunately React Native may not be as easy as it might seem. There are a few things that you should consider before rolling with it.

What if the functionality that you need is not available in React Native? What if you were required to use a library that was made for development on specific platform? React native gives you an awesome tool – Native Modules – as response to these issues. In many cases there is a ready npm package waiting for you to solve your problems. They are not always perfect and some of them won't even work. In that case you will have to build the required module yourself.

Exposing native API is quite simple and the future is bright because there is a finite number of native APIs. Some day there will be a module for each of them. Exposing the whole library may be a bit tricky. There will be cases in which google will not help you and help of a native developer will be required.

Finally, React Native is still build on Android 6.0 and we can see many new updates coming up to the operating system already. For instance, version 7.1 offers application shortcuts to specific actions in the app. They let users quickly start common or recommended tasks within the app, improving the overall experience. Also full support for multi-window mode and image keyboard support have been introduced in the latest Android versions. However, with React Native those functionalities are not supported. Not just yet. In the case of Apple you can observe a delay in updates of React Native for iOS versions as well.

[![Instagram users React Native too](//blog.codecarrot.net/images/instagram-also-use-react.png)](/9-great-apps-written-with-react-native)

What if your app is not performant enough? Quick glimpse into the inner workings of this framework exposes some problems. While the native platform and JavaScriptCore are really fast the communication between them is not.

Let's say that you want to implement an efficient custom view displaying real time data and reacting to user input. In such scenario, you'll need to go back to native implementations. Depending on the functionality that you need to export, bridging them through react native might have negative impact on performance and end user experience. You might end up doing strange hacks just to bypass the react native bridge and still never reach full native performance.

What's more, you will have to do that for every platform you want to support. That will decrease reusability of code between platforms.

## Wrap-up

React native isn’t just a way for web developers to dip their feet into native applications. It is a powerful tool, but not for every solution. Remember that complex apps will require more native solutions and as a result more native developers. That might cause communication problems and actually slow down the development process. However, React Native is a way to go for applications with less complicated logic. You will get [a well performant app with less resources spent](/react-native-can-slash-your-mobile-development-costs-by-30-percent).