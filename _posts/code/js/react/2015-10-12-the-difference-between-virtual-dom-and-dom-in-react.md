---
layout: post
author: yashumittal
title: The difference between Virtual DOM and DOM
date: 2015-10-12 21:29:00 +0530
categories: code
tags: coding react facebook framework react-native virtual-dom dom
description: React attacks us with the virtual DOM right away, on the main page. This feature seems to be very important! But what does &quot;virtual DOM&quot; mean exactly?
image: https://cdn.codecarrot.net/images/react-website-header-2015.png
---

React attacks us with the virtual DOM right away, on the main page. This feature seems to be very important!

![React Virtual DOM](https://cdn.codecarrot.net/images/react-website-header-2015.png)

But what does “virtual DOM” mean exactly?

## DOM

Just to get things straight - DOM stands for Document Object Model and is an abstraction of a structured text. For web developers, this text is an HTML code, and the DOM is simply called **HTML DOM**. Elements of HTML become nodes in the DOM.

So, while HTML is a text, the DOM is an in-memory representation of this text.

<blockquote>
Compare it to a process being an instance of a program. You can have multiple processes of the same one program, just like you can have multiple DOMs of the same HTML (e.g. the same page loaded on many tabs).
</blockquote>

The HTML DOM provides an interface (API) to traverse and modify the nodes. It contains methods like `getElementById` or `removeChild`. We usually use JavaScript language to work with the DOM, because… Well, nobody knows why :).

So, whenever we want to dynamicly change the content of the web page, we modify the DOM:

```js
var item = document.getElementById("myLI");
item.parentNode.removeChild(item);
```

`document` is an abstraction of the root node, while `getElementById`, `parentNode` and `removeChild` are methods from HTML DOM API.

## Issues

The HTML DOM is always tree-structured - which is allowed by the structure of HTML document. This is cool because we can traverse trees fairly easily. Unfortunately, easily doesn’t mean quickly here.

The DOM trees are huge nowadays. Since we are more and more pushed towards dynamic web apps (*Single Page Applications* - SPAs), we need to modify the DOM tree **incessantly** and **a lot**. And this is a real performance and development pain.

<blockquote>
BTW. I myself managed to create a web page with a source of 5GB+. It wasn’t even that hard.
</blockquote>

Consider a DOM made of thousands of `div`s. Remember, we are modern web developers, our app is very SPA! We have lots of methods that handle events - clicks, submits, type-ins… A typical `jQuery`-like event handler looks like this:

* find every node interested on an event
* update it if necessary

Which has two problems:

1. It’s hard to manage. Imagine that you have to tweak an event handler. If you lost the context, you have to dive really deep into the code to even know what’s going on. Both time-consuming and bug-risky.
2. It’s inefficient. Do we really need to do all this findings manually? Maybe we can be smarter and tell in advance which nodes are to-be-updated?

Once again, React comes with a helping hand. The solution to problem 1 is declarativeness. Instead of low-level techniques like traversing the DOM tree manually, you simple declare how a component should look like. React does the low-level job for you - the HTML DOM API methods are called under the hood. React doesn’t want you to worry about it - eventually, the component will look like it should.

But this doesn’t solve the performance issue. And this is exactly where the Virtual DOM comes into action.

## Virtual DOM

First of all - the Virtual DOM was not invented by React, but React uses it and provides it for free.

The *Virtual DOM* is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific implementation details. Since the DOM itself was already an abstraction, the virtual DOM is, in fact, an abstraction of an abstraction.

![Can't go for virtual dom need to go deeper](https://cdn.codecarrot.net/images/can-t-go-for-virtual-dom-need-to-go-deeper.jpg)

Perhaps it’s better to think of the virtual DOM as *React’s local and simplified copy of the HTML DOM*. It allows React to do its computations within this abstract world and skip the “real” DOM operations, often slow and browser-specific.

There’s no big difference between the “regular” DOM and the virtual DOM. This is why the JSX parts of the React code can look almost like pure HTML:

```js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
```

In most cases, when you have an HTML code and you want to make it a static React component, all you have to do is:

1. Return the HTML code in `render`
2. Replace `class` attribute name to `className` - because `class` is a reserved word in JavaScript.

There are more, rather minor, differences between the DOMs:

* Three attributes of the virtual DOM that don’t appear in “real” DOM - `key`, `ref` and `dangerouslySetInnerHTML`. See more.
* React-ish virtual DOM introduced a few more constraints.

## ReactElement vs ReactComponent

When talking about the virtual DOM, it’s important to see the difference between these two.

### ReactElement

This is the primary type in React. [React docs](//reactjs.org/docs/glossary.html#react-elements) say:

<blockquote>
A ReactElement is a light, stateless, immutable, virtual representation of a DOM Element.
</blockquote>

**ReactElements lives in the virtual DOM**. They make the basic nodes here. Their immutability makes them easy and fast to compare and update. This is the reason of great React performance.

What can be a `ReactElement`? Almost every HTML tag - `div`, `table`, `strong`… If you wish, [see the whole list](//reactjs.org/docs/dom-elements.html).

Once defined, ReactElements can be render into the “real” DOM. This is the moment when React ceases to control the elements. They become slow, boring DOM nodes:

```js
var root = React.createElement('div');
ReactDOM.render(root, document.getElementById('example'));
// If you are surprised by the fact that `render`
// comes from `ReactDOM` package, see the Post Scriptum.
```

JSX compiles HTML tags to ReactElements. So this is equivalent to the above:

```js
var root = <div />;
ReactDOM.render(root, document.getElementById('example'));
```

Once again - **ReactElements are the basic items in React-ish virtual DOM**. However, they are stateless, therefore don’t seem to be very helpful for us, the programmers. We would rather work on the class-like pieces of HTML, with kind-of-variables and kind-of-constants - don’t we? And here we come to…

## ReactComponent

What differs `ReactComponent` from `ReactElement` is - *ReactComponents are stateful*.

We usually use `React.createClass` method to define one:

```js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
```

Your HTML-like blocks returned from `render` method can have a state. And the best thing is (I bet you already know it, this is why React is so cool!) - whenever the state changes, the component is rerendered:

```js
var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});
```

ReactComponents turned out to be a great tool for designing dynamic HTML. They don’t have the access to the virtual DOM, but they can be easily converted to ReactElements:

```js
var element = React.createElement(MyComponent);
// or equivalently, with JSX
var element = <MyComponent />;
```

## What makes the difference?

ReactComponents are great, we would love to have plenty of them since they are easy to manage. But they have no access to the virtual DOM - and we would like to do as much as possible there.

Whenever a `ReactComponent` is changing the state, we want to make as little changes to the “real” DOM as possible. So this is how React deals with it. The `ReactComponent` is converted to the `ReactElement`. Now the `ReactElement` can be inserted to the virtual DOM, compared and updated fast and easily. How exactly - well, that’s the job of the diff algorithm. The point is - **it’s done faster than it would be in the “regular” DOM**.

**When React knows the diff - it’s converted to the low-level (HTML DOM) code, which is executed in the DOM**. This code is optimised per browser.

## Summary

Is virtual DOM really the feature to boast on the main page? **I would say so**. In practise, React performance is absolutely high, and the virtual DOM is surely very helpful here.

**NOTE:** In case you didn’t notice - since the last week, when React 0.14 was released, the DOM-related parts of React were extracted from the `react` package. Now there is a separate package `react-dom`. You can read more in [the newest changelog](//reactjs.org/blog/2015/10/07/react-v0.14.html#two-packages-react-and-react-dom).
