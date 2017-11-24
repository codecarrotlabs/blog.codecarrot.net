---
layout: post
author: yashumittal
title: React Component Patterns
date: 2017-11-12 13:55:00 +0530
categories: code
tags: coding react facebook framework react-native
description: Stateful x Stateless, Container x Presentational, HOCs, Render Callbacks and more. It’s been a while since I’ve been working with React — a Facebook library to build user interfaces using JavaScript.
image: 1_mPL5M-XhGpDuXLniVRCthw.png
---

It’s been a while since I’ve been working with [React](//facebook.github.io/react/) — a Facebook library to build user interfaces using JavaScript — and there are a few concepts I wish I knew when I was just starting. This text is an attempt to summarize some patterns I learned during my experience so far — and also may be useful for developers who are just about to enter this awesome component-based world.

![1_mPL5M-XhGpDuXLniVRCthw.png](//blog.codecarrot.net/images/1_mPL5M-XhGpDuXLniVRCthw.png)

## Stateful x Stateless Components

Just as Stateful and Stateless web services, React components can also hold and manipulate state during application usage (**Stateful**) — or just be a simple component that takes the input props and returns what to display (**Stateless**).

A simple **Stateless** button component that depends on props only:

![1_fgZOSwpdU7MMNxltRcXAcQ.png](//blog.codecarrot.net/images/1_fgZOSwpdU7MMNxltRcXAcQ.png)

And a **Stateful** counter component example (using `Button` component):

![1_TYPgsZUZMoo7lW7xv4gxYw.png](//blog.codecarrot.net/images/1_TYPgsZUZMoo7lW7xv4gxYw.png)

As you can see, the last one’s constructor holds a component state, while the first one is a simple component that renders a text via props. This separation of concerns may look simple but makes `Button` component highly reusable.

## Container x Presentational Components

When working with external data, we can divide components into this two new categories. `Containers` are responsible to reach data that lives outside React scope, like connecting to Redux or Relay — while `Presentational` components are free of dependencies from the rest of the app, depending only on its own state or props received. Let’s take a users list as a `Presentational` component example:

![1_wbih6jbxJiIgNOXgRpcROA.png](//blog.codecarrot.net/images/1_wbih6jbxJiIgNOXgRpcROA.png)

This list can be updated using our `Container` component:

![1_TJxCVhawM2e99dZsxu11oA.png](//blog.codecarrot.net/images/1_TJxCVhawM2e99dZsxu11oA.png)

This approach divides data-fetching from rendering and also makes `UserList` reusable.

## Higher-Order Components

Higher-Order Components — or just **HOCs** — are useful when you want to reuse a component logic. They are JavaScript functions that take a component as an argument and returns a new component.

Let’s say you need to build an expandable menu component that shows some children content when user clicks on it. So, instead of controlling the state on its parent component, you can simply create a generic **HOC** to handle it:

![1_qchJXtrHlR46phKFDDJeeQ.png](//blog.codecarrot.net/images/1_qchJXtrHlR46phKFDDJeeQ.png)

This approach allows us to apply our logic to our `ToggleableMenu` component using the JavaScript *decorator* syntax:

![1_RQuGzKKbT7R9OIDBzhO8gg.png](//blog.codecarrot.net/images/1_RQuGzKKbT7R9OIDBzhO8gg.png)

Now we can pass any children to `ToggleableMenu` component:

![1_rWCZQqL0Rbizbrw_yjgxgA.png](//blog.codecarrot.net/images/1_rWCZQqL0Rbizbrw_yjgxgA.png)

If you’re familiar with [Redux’s](//redux.js.org/) `connect` or [React Router’s](//github.com/ReactTraining/react-router) `withRouter` functions, you’re already using **HOCs!**

## Render Callbacks

Another great way to make a component logic reusable is by turning your component children into a function — that’s why **Render Callbacks** are also called **Function as Child Components**. We can take an example of our expandable menu **HOC** and rewrite it using the **Render Callback** pattern:

![1_Ul-ubPnaOFtY4mTeM5PW3A.png](//blog.codecarrot.net/images/1_Ul-ubPnaOFtY4mTeM5PW3A.png)

Now we can pass a function as our `Toggleable` component children:

![1_cwoZiIT3Gcau5lDwyCQzQw.png](//blog.codecarrot.net/images/1_cwoZiIT3Gcau5lDwyCQzQw.png)

The code above is already using a function as children, but, if we want to reuse it just as we did in our **HOC** example (multiple menus), we could simply create a new component that uses `Toggleable` logic:

![1_DVfPDwHw_eH9dUeX9w5GEg.png](//blog.codecarrot.net/images/1_DVfPDwHw_eH9dUeX9w5GEg.png)

Our brand new `ToggleableMenu` component is ready to be used:

![1_hzpuJMAMTRQZK_vKCK_jhQ.png](//blog.codecarrot.net/images/1_hzpuJMAMTRQZK_vKCK_jhQ.png)

Our `Menu` component looks exactly the same as our **HOC** example!

This approach is really useful when we want to change the rendered content itself regardless of **state** manipulation: as you can see, we’ve moved our **render** logic to our `ToggleableMenu` children function, but kept the **state** logic to our `Toggleable` component!

This post is written by [Gustavo Matheus](//medium.com/@gmatheus).
