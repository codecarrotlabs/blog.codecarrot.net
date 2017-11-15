---
layout: post
author: yashumittal
title: React Native - Pros and Cons Of Facebook’s Framework
date: 2017-11-01 21:29:00
categories: code
tags: coding react facebook framework react-native
description: React Native - One team, one codebase and potential to scale an app for iOS and Android using a fracture of resources required in native development is a great promise. 
image: pexels-photo-171947.jpeg
---

When we first heard about [React Native](//www.codecarrot.net/react-native), a framework that enables building an app for multiple platforms, we were thrilled. One team, one codebase and the potential to scale an app for iOS and Android using a fracture of resources required in native development is a great promise. But how does it stack up with reality?

Until a few years ago, developing an app for iOS and Android separately was a necessity if we aimed at both markets. Having two different teams generates more costs, especially when we think about constant upgrades and regular introduction of new features. A few years ago, [Facebook officially announced React Native, a powerful framework with the promise of cross-platform compatibility](/why-you-should-consider-react-native-for-your-mobile-app). RN has matured since its premiere, and we had a chance to test it in the battle. We have built a couple of apps for both commercial and internal projects, and now we can weigh up the pros and cons of React Native. Is it really worth your attention?

| Pros | Cons |
| ---:|:--- |
| Faster Build | |
| Multiple Platform | Less Smooth Navigation |
| Hot Reloading | Lack of some Custom Modules |
| Small Teams | Native Developers Still Needed |
| Fast Applications | Facebook Rules |
| Simplified UI | |

## Pros of React Native

### 1. Faster to Build

The major selling point of React Native is shorter development time. It provides numerous ready-to-apply components that can accelerate the process. React Native still lacks some solutions, so you would probably have to build them from scratch. However, with the existing base of packages, you can save much time and it will only get better. As the RN community is growing and Facebook regularly introduces new updates, one day we may find a ready component for most of the solutions we need.

### 2. One Framework, Multiple Platforms

React Native enables copying the codebase (or just a part of it) between iOS and Android. In practice, full cross-platform development is possible to some extent, depending on how many native modules you use in your application. Some features will be available in apt packages, but others need to be written from scratch. It will only get better, though. React Native community actively supports the framework adding new tools to open source.

### 3. Hot Reloading

Thanks to hot reloading, a developer can keep the app running while implementing new versions and tweaking the UI. It makes changes in the app instantly visible without the need for the developer to save them. It is a major benefit for developers. Not only do they save time on the compilation, but also they don’t lose any state of an app while making changes. It boosts productivity and, in effect, the whole development time decreases.

### 4. Smaller Teams

Native development requires two separate teams for Android and iOS. It can hamper communication between developers and, accordingly, slow down the development. If you choose React Native, you will mostly need JavaScript developer who can write the code for both platforms. Obviously, apps with more native features will require help from native developers as well. Notwithstanding this fact, in most cases, the team will be smaller in size, and thus, easier to manage.

### 5. Fast Applications

Many argue that React Native code might hinder app performance. JavaScript won’t be as fast as native code, but in most cases, you won’t see the difference. We conducted a test and compared a simple application written in both React Native and Swift. Differences in performance were slight, almost unnoticeable to an average user. In the case of more complex applications, the framework might be less effective, but you can always transfer some code to a native module, and it is no longer an issue.

### 6. Simplified UI

React Native is solidly based on creating a mobile UI. In native development, it is necessary to create a sequence of actions in the application, whereas RN employs declarative programming in which such an order of implementing an action is obsolete. As a result, it is much easier to detect bugs on the paths a user can take.

## Cons of React Native

### 1. Less Smooth Navigation

React Native still lacks navigation components to provide users with seamless UX. There is no ideal solution in RN for navigation between displays. It will be getting better and better, but probably it will never be as good and smooth as native navigation.

### 2. Lack of Some Custom Modules

Despite its maturity, React Native still lacks some components. Others, in turn, are underdeveloped. The chances are you won’t have a problem with that, as the majority of custom modules you need are available, well-documented and working properly. However, it may happen that you will have to build your solution from scratch or try to hack the existing one.

### 3. Native Developers Still Needed

Implementing some native features and modules necessitates detailed knowledge of a particular platform. React Native does offer custom modules that you can refactor across operating systems, but things such as access to device sensors, camera or push-notifications require help from iOS and Android developers. Their input depends on the complexity of your project, but you need to bargain for them when kicking off with React Native.

### 4. Facebook Rules

Facebook puts a lot of resources to ensure React Native’s reliability and also to guarantee a constant development of the platform. It is unlikely that Facebook kills the framework overnight. But you still operate on Facebook’s license and, at the end of the day, you’re always dependent on them. Finally, Facebook has a right to revoke the licence (BSD) to use React and React Native if you get into a patent-related dispute with them.

## Wrap-up

These advantages and disadvantages are worth considering before kicking off with React Native. To get a full picture of the framework, check out our ultimate FAQ list. Share your experience with React Native in the comments!