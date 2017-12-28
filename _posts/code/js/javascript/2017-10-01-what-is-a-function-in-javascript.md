---
layout: post
author: yashumittal
title: What is functions in Javascript?
date: 2017-10-01 17:40:00 +0530
categories: code
tags: coding javascript js functions
description: Learn all about Functions in JavaScript — invocation, return, parameters, declarations, and expressions.
image: https://cdn.codecarrot.net/images/1-CYNSrbMqn5nsYiWo7of1og.jpeg
---

## Defined

* A function is a subprogram designed to perform a particular task.
* Functions are executed when they are called *(invoked)*.
* Values can be passed into functions.
* Functions always `return` a value.
* In JavaScript, Functions are Function objects.

## Function Syntax

There are multiple ways to define a function in JavaScript. Two we’ll explore in this article are function declarations, and function expressions
A Function Declaration defines a named function. Think of a declaring a function as equal to declaring a variable. Instead of using `var` though, you use the `function` keyword, followed by the name of the function:

```js
function name(parameters){
  statements
}
```

**Function Expressions** can be named functions or anonymous. An anonymous function is a function that has no name. In the example below, we are setting the return value of an anonymous function to the `name` variable.

```js
let name = function(parameters){
  statements
}
```

## Function Parameters vs. Arguments

When working with functions, you may have heard the *terms parameters* and *arguments* used interchangeably.

When defining a function, we can pass in up to 255 parameters. Parameters input and separated by commas in the `()`. Here’s an example with three parameters:

```js
function threeParams(param1, param2, param3){
  statements
}
```

Arguments, on the other hand, are the values the function receives from each parameter when the function is invoked.

It’s important to understand this subtle difference in terminology.

<blockquote>
**Note:** If you’re using Google Chrome, open up your developer console so you can explore the below examples along with me. **[WINDOWS]: Ctrl + Shift + J [MAC]: Cmd + Opt + J**
</blockquote>

## Running a Function

Functions execute when the function is called. This process is known as invocation. You can invoke a function by referencing the function name, followed by `()`.

Lets look at the example below. We have a function named `logIt`. This function requires one parameter, `name`. The function will then log that name back to the console.

```js
function logIt(name){
  console.log(name);
}
```

To invoke our function, we call it, while passing in the singular parameter. Here I am calling this function with the name Dave:

```js
logIt('Dave');
```

A function with no parameters is simply invoked with an empty set of parenthesis:

```js
function logIt2(){
  console.log('Log it 2');
}
logIt2();
```

## Returning from a function

Every function in JavaScript returns `undefined` unless otherwise specified. We can test this by creating and invoking an empty function:

```js
function test(){};
test();
// undefined
```

As expected, we get `undefined` returned.

We can use the `return` keyword to specify what we want a function to return. Look at the example below:

```js
function test(){
  return true;
};
test();
// true
```

In this example we tell the function to return `true`. when we invoke the function, we get `true` displayed in the console.

Another important rule of the return statement is that it stops a functions execution immediately.

Consider this example where we have two return statements in our test function:

```js
function test(){
  return true;
  return false;
};
test();
// true
```

The first return statement immediately stops execution of our function and causes our function to return `true`. The code on line three: `return false;` is *never* executed.

Something else to understand about the `return` statement is that it’s value is returned to the caller of the function. Let’s look at an example:

```js
let double = function(num) {
   return num * 2;
}
```

Above we have a function expression. The variable `double` is being assigned to the returned value of this anonymous function. When we invoke the function we can see this assignment in action:

```js
let test = double(3);
console.log(test);
// 6
```

Awesome! The `return` variable not only returns values from a function, but it assigns them to whatever called the function!

## Functions are Objects

In JavaScript, anything that is not a primitive type ( `undefined`, `null`, `boolean`, `number`, or `string`) is an object. Objects in JavaScript are *extremely* versatile. Because of this, we can even pass a function as a parameter into another function.

When a function accepts another function as a parameter, or returns a function, it is called a higher-order function. You’ve probably already used a bunch of higher order functions and don’t even know it: `Array.prototype.map` and `Array.prototype.filter` are higher order functions (Just to name a couple). *More on this topic in a future article.*

## What to remember

That’s a lot of information. Here’s what you should remember:

* A function is a *subprogram* designed to perform a particular task.
* Functions are executed when they are called *(invoked)*.
* Values can be passed into functions.
* Functions always `return` a value.
* In JavaScript, Functions are Function objects.
