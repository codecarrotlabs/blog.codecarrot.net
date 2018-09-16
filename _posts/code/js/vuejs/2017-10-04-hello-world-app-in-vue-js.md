---
layout: post
author: yashumittal
title: Hello World App in Vue.js
date: 2017-10-04 00:04:00 +0530
categories: code
tags: coding vue vuejs app hello-world
description: Vue.js is a progressive framework for building user interfaces. This is lean, this is fast, and unlike frameworks like React and Angular,
image: https://i.imgur.com/8KPSlKh.png
---

![Vuejs website screenshot](https://i.imgur.com/FZZxhHj.png)

Vue.js is a progressive framework for building user interfaces. This is lean, this is fast, and unlike frameworks like React and Angular, it’s straightforward to get started. Here we will build a simple Hello World app, and it will just take 2 minutes for the whole process:

First of all please Import this JavaScript file: [unpkg.com/vue](https://unpkg.com/vue)
This fetches the latest version of Vue.js.

Then we will create a wrapper root div which will hold the app

```html
<div id="app-root">
  <!-- HTML inside. -->
</div>
```

Then, we will create a new Vue Instance, this will be an object, and then we will pass the above HTML into the DOM through an el key and app-root as value

```js
new Vue({
  el: '#app-root'
});
```

## Hello World!

Now, let's insert a data key, and its value will be object. This object will then contain a title key with a value Hello World (or anything you would like)

```js
new Vue({
  el: '#app-root',
  data: {
    title: 'Hello World!'
  }
});
```

Now, we will add a `p` tag, and inside it, we will wrap `title` with two curly braces. This is how Vue declaratively render’s the data. The Syntax `{{}}` is called **String Interpolation**.

```html
<div id="app-root">
    <p> {{ title }} </p>
</div>
```

## Form Input

Now we will pass an input tag with Vue [Event handler](https://vuejs.org/v2/guide/events.html) `v-on` and pass `changeTitle` method inside it.

```html
<div id="app-root">
    <input type="text" v-on:input="changeTitle">
    <p> {{ title }} </p>
</div>
```

Now, we will create a methods object, insert a `changeTitle` function, pass the default javascript event argument. Within this object, we will pass `this.title` and equate it to `event.target.value`.

```js
new Vue({
  el: '#app-root',
  data: {
    title: 'Hello World!'
  },
  methods: {
    changeTitle(event) {
      this.title = event.target.value;
    }
  }
});
```
