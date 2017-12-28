---
layout: post
author: yashumittal
title: How To Use Rails Assets Directly In Your JS Files With RWR View Helpers
date: 2017-11-01 03:18:00 +0530
categories: code
tags: ruby-on-rails ruby rails js
description: During our work with React there has always been a problem with using image paths (rails adding digest hashes) in our React components - we had to pass it as a prop from views to redux containers and from there to our dumb components. That involves a lot of redundant steps, making it more likely that something will go wrong
image: //cdn.codecarrot.net/images/rails-assets.png
---

Here at [CodeCarrot](//www.codecarrot.net/), we love working with both Rails and React on our tech stack, and lately we’ve found ourselves using them more and more. But there has always been a problem with using image paths (rails adding digest hashes) in our React components - we had to pass it as a prop from views to redux containers and from there to our dumb components. That involves a lot of redundant steps, making it more likely that something will go wrong; this is why we came up with rwr-view-helpers, which makes it possible for developers to access Rails assets directly in javascript.

## 1. How does it work?

When we start our Rails server, the first request will generate a cache for rwr-view_helpers in the form of json & js files with hash mapping assets’ urls to urls with a generated digest-hash.

The `.gif, .jpg, .png` file extensions are supported by default. More can easily be added, according to the user’s needs.

## 2. How to install it?

The installation of helpers is really straightforward, all you have to do is:

* install it with npm:

```
$ npm install --save rwr-view-helpers
```

* add the gem to your Gemfile:

```
$ gem 'rwr-view_helpers'
```

* require the js file in application.js:

```
//=require rwr_view_helpers`
```

## 3. How to use it?

Using helpers is extremely easy - they’re simply exported as a function from our node module:

```js
import React from 'react';
import { imagePath } from 'rwr-view-helpers';
import { facebookIcon } from 'constants/icon-urls';

export default ({ alt }) => (
  <img alt={alt} src={imagePath(facebookIcon)} />
);
```

The only thing you need to remember at this point is to generate a new cache by running the rake task each time you add new assets to your project and want to use them in your javascript files.

```
$ rake tmp:clear
```
