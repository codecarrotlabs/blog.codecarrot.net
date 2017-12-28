---
layout: post
author: yashumittal
title: 20 JavaScript tools to blow your mind
date: 2017-10-12 00:00:10 +0530
categories: code
tags: coding javascript tools
description: JavaScript started its life as a browser-based language used for adding interactivity to web pages, but it has evolved tremendously over the past few years.
image: //cdn.codecarrot.net/images/ZtBAmJoRqrJwzUuP6eYFsG-970-80.jpg
---

JavaScript started its life as a browser-based language used for adding interactivity to web pages, but it has evolved tremendously over the past few years. Once Node.js enabled JavaScript to be run on the server, it opened up a world of possibilities, and more language innovations were inevitable.

As the language grew, these evolutionary stepping stones led to the next major version of JavaScript: ECMAScript 2015 (previously known as ES6). Along with this new version came a new release cycle. After its major update in 2015, the JavaScript language will now start seeing smaller updates every year, allowing it to keep evolving through smaller, more frequent iterations.

Let’s take a look at some of my favourite JavaScript tips, tricks and tools. These will give you some web design inspiration and they're sure to blow your mind, especially if you haven’t kept up with how JavaScript has grown up over the years. These tools are split into different themes – navigate to the page you want using the drop-down menu above.

## 01. Write tomorrow's JavaScript today with Babel

![Babel allows developers to write code using the latest version of JavaScript without sacrificing compatibility with older browsers](//cdn.codecarrot.net/images/babel-website-3453VSDerg34.png)

*Babel allows developers to write code using the latest version of JavaScript without sacrificing compatibility with older browsers*

Not all browsers understand ES2015 code yet, so in order to use the latest features of the language today, we need a tool like Babel. This transforms ES2015 code into normal ES5 JavaScript code that all browsers are able to interpret. It is common for developers to include Babel in their deployment process through build systems such as gulp or webpack.

This approach allows devs to use the latest tech while ensuring their apps remain compatible with old browser versions, but only at the deployment stage.

## 02. Explore new ways of declaring variables

In ES2015, JavaScript introduced two new ways of declaring variables: **let** and **const**. **let** is used when a variable will be reassigned, whereas **const** keeps a variable from being reassigned. Note that using **const** does not freeze arrays and objects, and it doesn’t stop properties from being mutated. Instead, it just keeps the variable itself from being reassigned.

The main benefit that both **let** and **const** deliver over **var** is that when using **var** your variables get scoped to the top of the current function, therefore making the variable available to the whole function. In contrast, **let** and **const** are scoped to their closest block, allowing developers to declare variables within **if**, **while**, **for** and even **switch** blocks, without worrying about the variable scope leaking outside of that context.

![JavaScript is among the fastest growing programming languages](//cdn.codecarrot.net/images/o3UDAeR3Din8AZ6dnqgjEk-650-80.jpg)

*JavaScript is among the fastest growing programming languages*

## 03. Use arrow functions to keep 'this' intact

Another feature that’s been added to JavaScript recently is arrow functions. These have the ability to keep the **this** context intact, especially when using it within callbacks that might get called from somewhere else (i.e. adding an event listener with jQuery, and so on). Essentially, arrow functions replace the need to add **.bind(this)** at the end of a function declaration.

There are two main ways of writing arrow functions: one-liners and multiple-liners. One-liners have only one expression and return the value of that given expression, without the need for curly braces. Multiple-liners, on the other hand, have curly braces and the return keyword must be used explicitly.

```js
let doubleShort = (num) => num * 2;
let doubleLong = (num) => {
 let doubleNum = num * 2;
 return doubleNum;
}
```

## 04. Use promises to avoid a callback can of worms

![Learn JavaScript for free and stay up to date with the latest news on JavaScript.com](//cdn.codecarrot.net/images/1-o9BJ_DkWpdASQV_A.png)

*Learn JavaScript for free and stay up to date with the latest news on JavaScript.com*

JavaScript does a lot of its operations asynchronously, so passing callback functions while waiting for other things to happen is a pretty standard pattern. The problem begins, though, when you’re executing an async action that will trigger another async action, and so forth. You’ll likely be passing many nested callback functions, which will make the code cluttered and harder to read.

Promises solve this problem by helping you execute code in the right order, in a concise manner, while keeping operations asynchronous. The API is pretty neat: you tell the code to do something, then something else, then something else – and you’re even able to catch errors along the way.

## 05. Replace 'for' loops with 'map' to keep things simple

Let’s pretend we have an array of numbers and we’d like to produce another array by doubling all of the numbers from the first array. One way to do this is to declare an empty array, write a for loop, and set a number in the second array by looking up the index on the first array and doubling it.

Or we could use a more concise solution by mapping an array to another array:

```js
[1, 2, 3].map((num) => num * 2); // [2, 4, 6]
```

## 06. Replace 'for' loops with 'filter'

This time, let’s pretend we have an array of numbers and we’d like to produce another array containing only the even numbers from the first array. Again, one way of doing this would be to declare an empty array, write a for loop, and write an if statement to check if the number at the index is even (for example).

Or, we could use the **filter** method available for arrays:

```js
[4, 7, 2, 3].filter((num) => num % 2 === 0); // [4, 2]
```

## 07. Use 'reduce' instead of 'for' loops

For this exercise, let’s calculate the sum of all of the numbers in an array. One way to do this would be to declare a variable that has zero as its initial value. Then, we would write a for loop and traverse our array, taking each number and adding it to our newly created variable.

Or we could use the reduce method:

```js
[7, 2, 4].reduce((a, b) => a + b); // 13
```

Of course, we could combine all three concepts by multiplying all the numbers by 7 and adding all the numbers that are smaller than 20:

```js
[3, 2, 1, 6]
 .map(num => num * 7)
 .filter(num => num < 20)
.reduce((a, b) => a + b); // 21
```

## 08. Take advantage of immutability

![Take advantage of immutability](//cdn.codecarrot.net/images/0-AjTy1nZrZsjB.png)

Data immutability is a common concept in functional languages. Immutable data allows programs to detect changes early on by comparing object references, instead of having to continually check and iterate through objects to see if we need to refresh the data on the screen.

Since, by default, objects and arrays are not immutable in JavaScript, there is a library to help accomplish this. It’s called [Immutable.js](//facebook.github.io/immutable-js/) and it was developed and open-sourced by an engineering team at Facebook.

## 09. Node.js: Avoid switching language context

![This platform for developing server-side web apps has opened up a world of new possibilities](//cdn.codecarrot.net/images/1-Azz7YwzYDKFj8iIGZg.png)

*This platform for developing server-side web apps has opened up a world of new possibilities*

Node.js is what allows JavaScript to be used on the server side. This has some interesting side effects, like making developers crazy-productive because they don’t have to change the language context when switching back and forth between client and server code.

It also allows libraries to be shared between the client and the server, which decreases the amount of duplicate code one has to write.

## 10. NPM: The world's largest package manager

With over 300 thousand packages, npm (the node package manager) has become the biggest package manager in the world, containing more packages than Java’s Maven Central Repository, PHP’s Packagist, and even .NET’s nuget. Plus, the level of collaboration that happens within the community means writing an application has never been so convenient.

## 11. NPM: Bring in frontend dependencies

![This has grown into the world’s largest package manager](//cdn.codecarrot.net/images/1-DvIYrgwJ9EfAYv_nA.png)

*This has grown into the world’s largest package manager*

Over the years, there have been many recommended practices around bringing in external dependencies into your local codebase. What are the best practices for using libraries like Bootstrap or Zurb Foundation? Including them from a central CDN or downloading everything manually from their website?

With the rise of the npm, an increasing number of developers are getting rid of alternative solutions like Bower and simply sticking to npm for everything. Yes, even CSS dependencies.

## 12. Angular: One framework to rule them all

![Angular: One framework to rule them all](//cdn.codecarrot.net/images/1-LbKGyab-9iR-rvnzPg.png)

Angular is a JavaScript framework maintained by Google with the help of the open-source community. The first version of the framework was based on an MVClike pattern, cleaning up a lot of the clutter we saw in larger codebases that relied on the jQuery-style of programming. The newest version, Angular 2, has taken things to the next level, transforming Angular into a full platform that allows development of not only web UIs, but also native mobile development and more!

## 13. React: The view library that shook the UI world

![This JavaScript framework is maintained by a team at Google with the help of the open-source community, and the latest version makes it suitable for native mobile development](//cdn.codecarrot.net/images/1-Azz7YwzYYR6Fj8iIGZg.png)

*This JavaScript framework is maintained by a team at Google with the help of the open-source community, and the latest version makes it suitable for native mobile development*

React is a view library. This might sound small and innocent, but don’t underestimate it, as this little library put a dent in the whole UI development world. When React launched, it garnered contrasting opinions from veteran web developers. Fortunately, the Facebook engineering team knew it was on to something. Applications written with React carry a component-based architecture, keeping things small and composable. It often adopts functional paradigms to solve problems.

## 14. Ember: What if Ruby on Rails spoke JavaScript?

![Opinionated framework Ember.js has the world’s cutest framework mascot: Tomster](//cdn.codecarrot.net/images/4f89-b0b4-ef7fce53f.png)

*Opinionated framework Ember.js has the world’s cutest framework mascot: Tomster*

If you’ve ever used Ruby on Rails to write a web app, you’ll know it uses the convention-over-configuration paradigm. This means it’s very opinionated about how apps should be written, which is exactly what the team behind Ember delivers for JS developers. Ember is a very complete framework with predictable development practices. This makes it easy to use all the best practices while writing applications.

## 15. Redux: State of management for all

One of the hardest parts of writing apps with highly dynamic user interfaces is keeping up with the application’s state. This is the problem the Redux library addresses. Redux is commonly used alongside React and is slowly being adopted by the Angular community. It helps you write applications that behave consistently and it offers a great developer experience. So if you’re writing an app that might become very large, you should consider using Redux from the get-go.

## 16. Try visual regression testing with PhantomCSS

Every developer that’s been around for long enough has accidentally pushed a bug to production at one point or another. There’s no shame in that. Especially with UI development, it’s hard to prevent errors within CSS and HTML markup. Or is it? It turns out there is a package called PhantomCSS that helps with visual regression testing. It works by taking screenshots of before and after changes and calculating the difference between the two images.

## 17. Go beyond 'console.log'

Using **console.log()** to display data in the console while writing JavaScript apps is pretty common, but did you know you can use other console methods – such as **dir()** and **table()** – to help you visualise data while developing?

That’s right; for a more interactive way of visualising objects in the console, use **console.dir(object)**. If you have an array of objects you’d like to visualise, you can use **console.table(array)** to create a beautifully formatted table displaying all your data. Much easier on the eyes.

## 18. Use 'debugger'

One feature that often gets overlooked by developers is the **debugger** keyword. Instead of using **console.log()** to do some pseudo-debugging, simply add the **debugger** and modern browsers like Google Chrome will add a breakpoint so you can have a deeper look at your app’s state, including all local variables.

## 19. Remember semicolons are optional

Did you know that semicolons are (mostly) optional in JavaScript? The official JavaScript language specification has a feature called automatic semicolon insertion (ASI) that has caused riots within the community – pitchforks included. The reality is that an increasing number of developers are dropping semicolons in their JavaScript code, mostly due to personal preference. If that’s something you’re interested in doing, be sure to use a code linter such as ESLint to help you avoid some bugs and pitfalls.

## 20. Have a strict-typed codebase

![A project by Facebook, Flow uses type inference to find bugs](//cdn.codecarrot.net/images/1-LbKGyabN69iR-rvnzPg.png)

*A project by Facebook, Flow uses type inference to find bugs*

An argument that some devs coming from other languages like to use against writing large-scale JavaScript apps is the lack of a strict type system. If that was only reason that kept them from migrating, it’s time for them to reconsider!

There are two main projects that add an optional strict-type system to JavaScript: Flow, which was developed at Facebook, and TypeScript, developed at Microsoft. While using different strategies, both these projects aim to add catch bugs early by adding a JavaScript-friendly type system to applications.
