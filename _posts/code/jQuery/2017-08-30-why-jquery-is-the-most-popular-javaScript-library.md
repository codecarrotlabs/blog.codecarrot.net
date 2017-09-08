---
layout: post
author: yashumittal
title: Why jQuery is the Most Popular JavaScript Library
date: 2017-08-30 12:50:00
categories: code jQuery
description: John Resig released jQuery on August 26th, 2006 and changed the front-end development landscape forever.
image: http://blog.codecarrot.net/images/jquery-popular-javascript-library.png
---

[John Resig](http://ejohn.org/) released [jQuery](http://jquery.com/) on **August 26th, 2006** and changed the [front-end development]() landscape forever. jQuery quickly arose to be the go to JavaScript framework.

A number of other libraries came out around the same time such as [MooTools](http://mootools.net/) and [Prototype](http://prototypejs.org/) but there’s a number of reasons why jQuery has surpassed them in popularity.

## Reuse of CSS Selectors

jQuery came out around the time web designers and front-end web developers were getting used to creating table-less, semantically marked-up web pages. It was a lot of effort to switch from one way of coding to another. CSS was being learned by the web community en masse.

jQuery used the same CSS selectors that people were using for styling their pages to add behavior. There was no context switching when referring to the same elements.

jQuery also implemented many of the CSS3 selectors prior to browser implementations. This meant you could apply behaviors to elements you couldn’t necessarily select with CSS yet! You didn’t feel you were wasting your time learning new selectors as they’d be eventually supported by modern browsers. In most cases these selectors are widely supported today.

jQuery was forward thinking and kept CSS selectors in the forefront. Other libraries, initially, sought to extend JavaScript and ignore the fresh blood of the new CSS developers and missed out on the opportunity to welcome them into their fold. It was an afterthought to them, the horse had already bolted.

## Unobtrusive by Design

Not only did jQuery emulate CSS with it’s selectors, it also employed the same separation from content.

While other JavaScript libraries were struggling with Unobtrusive JavaScript techniques, jQuery made it damn-near impossible to write hacky-in-the-markup-JavaScript.

By its very design, jQuery made it so that if you didn’t know what you were doing with JavaScript you’d write unobtrusive code without even realizing it. Fantastic.

## It’s Simple

jQuery didn’t set out to extend JavaScript’s APIs in a JavaScripty way. It was built with the developer in mind. The *user* of the library. From a developer’s perspective, the user experience for jQuery is a delight.

If you want to hide all paragraph elements with the class of `.spoiler` call the `hide()` method.

```
$("p.spoiler").hide()
```

But what if you want to remove elements from the DOM? That’s right, you call the `remove()` method.

```
$("div.warning").remove()
```

It’s the principle of least surprise, both because you’re using pre-existing CSS knowledge and because of jQuery’s simple method names. You’ll find yourself guessing methods rather than looking them up in the documentation. When you do go to the documentation there’s plenty of example code to see each part of the jQuery API in action.

## Conclusion

By its design, jQuery has allowed novices and pros to improve the experiences of countless numbers of users. It took the impossible job of thinking about both the end-user and the developer and made something that checked all the right boxes.

jQuery is a testament to John Resig and team’s ingenuity. I can’t imagine how much fun I’d have missed out on without jQuery in my toolbox.

Do you use jQuery? Why do you think it’s so popular? I’d love to hear your opinions.
