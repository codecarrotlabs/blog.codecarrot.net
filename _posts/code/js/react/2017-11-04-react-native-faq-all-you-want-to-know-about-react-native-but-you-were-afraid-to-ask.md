---
layout: post
author: yashumittal
title: React Native FAQ - All you want to know about React Native but you were afraid to ask
date: 2017-11-04 18:55:00 +0530
categories: code
tags: coding react react-native
description: Considering React Native as the framework for your next mobile app? Answers to the most common questions about using React Native in a project.
image: pexels-photo-92028-548588-edited.jpeg
---

Still on the fence about choosing [React Native as the framework for your next mobile app](/react-native-can-slash-your-mobile-development-costs-by-30-percent)? We’ve got you covered. We selected and answered the most common questions that pop up when people consider using React Native in a project. We hope this short guide will make things much clearer.

## 1. What’s the difference between React and React Native?

React Native is not a different version of React. React Native uses React. Essentially, React Native is a custom renderer for React, just like ReactDOM on Web. Apart from transforming React code to work on iOS and Android, React Native also gives access to the features that these platforms offer.

## 2. Will my React app work on mobile? Will my React Native app work on Web?

Unfortunately, no. Most of the React code for Web relies on features available in Web browsers, so it will not work on mobile and vice versa – React Native code relies on the features available on a given mobile platform. The good news is that we can still reuse some code between the mobile and web apps, and the ability to reuse the code will improve in the future.

## 3. Will React Native make my app look and run the same way on iOS and Android?

iOS and Android offer different sets of features, and it's not React Native’s responsibility to make these environments equal. React Native is only a way of accessing the native components in iOS and Android. I would say that most of the time – with some effort – we can make apps on both platforms look the same, but we shouldn't. We should stick to platform guidelines when it comes to user interface. Luckily, React Native provides us with an easy way to adapt the UI to the given platform’s needs.

## 4. Should I choose React Native or native (separate iOS and Android)?

[React Native is great for most apps that rely heavily on the user interface](/4-kinds-of-applications-to-build-with-react-native), because with little effort, we can get the UI to work on both iOS and Android, and, most importantly, we can share the business logic. Apart from that, React Native uses flexbox for layout, which works the same way on iOS, Android and Web, so we can transfer our experience from Web instead of learning more different engines. On the other hand, a native app is great when we consider using all the features that a platform offers, including such modules as video/audio processing or multithreading. Since React Native focuses on the User Interface only, it can be less efficient for applications with many native features.

## 5. Is every React developer also a React Native developer?

Most of the time when developing a React Native project, we write React code, which does not really differ from the code known from React for Web, but we should be aware of the unique properties of mobile platforms – some things might not be that obvious. React developers are not React Native developers by default. That said, we can transform React developers into React Native developers in a short period of time by giving them an opportunity to gain experience in React Native.

## 6. Does React Native mean we don’t need native developers?

No, native developers are still needed. They have massive experience when it comes to configuring mobile continues integration services such as Bitrise, services for automatic builds such as HockeyApp, configuring certificates in XCode and so on. Apart from that, React Native does not easily offer every feature that is available on iOS and Android, and native developers can make those features available by creating a custom module that exposes a native feature to Javascript. In the future, having native developers work with React Native teams will not be that necessary, because React Native will become a more mature platform. By then, most of the use cases will have been solved, and packages for pretty much everything will be available.

React Native apps still have some parts written in native code, and this is okay.

## 7. Have a question? Leave a comment or ping us at [contact@codecarrot.net](mailto:contact@codecarrot.net).

<blockquote>
“React Native does not mean we should use Javascript for everything, React Native does not mean we shouldn't use Native for anything” Leland Richardson, Airbnb, React Conf 2017
</blockquote>

The future is bright and it belongs to React and [React Native](//www.codecarrot.net/react-native) `;)`.
