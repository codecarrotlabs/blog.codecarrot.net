---
layout: post
author: yashumittal
title: CSS And JavaScript Can't Do Responsive Images
date: 2017-10-15 15:42:15 +0530
categories: design
tags: design images responsive css javascript
description: Once the browser see that image element inside the html file it's just fetch the big image without even once looking into CSS or JS.
image: https://i.imgur.com/Rr0MXWW.jpg
---

All browsers have what’s called a `preloader`. As the browser is munching through the HTML – before it’s even started to construct a DOM – the `preloader` sees `<img>` and rushes off to fetch the image before it’s even considering doing anything about the CSS or JavaScript.

It does this to get images as fast as it can – after all, they can often be pretty big and are one of the things that boosts the perceived performance of a page dramatically.

So, by the time the browser gets around to dealing with CSS or script, it may very well have already grabbed an image – or at least downloaded a fair bit. If you try

```html
<img id="image" src="picture.png" alt="Image">
```

```css
@media all and (max-width:600px) {
  #image {
    content: url(medium-res.png);
  }
}

@media all and (max-width:320px) {
  #image {
    content: url(low-res.png);
  }
}
```

You’ll find the correct image is selected by the media query _(assuming your browser supports `content` on simple selectors without :before or :after pseudo-elements)_ but you’ll find that the `preloader` has downloaded the resource pointed to by the `<img src>` and *then* the one that the CSS replaces it with is downloaded, too. So you get a double download which is not what you want at all.

Alternatively, you could have an `<img>` with no `src` attribute, and then add it in with JavaScript – but then you’re fetching the resource until much later, delaying the loading of the page. Because your browser won’t know the width and height of the image that the JS will select, it can’t leave room for it when laying out the page so you may find that your page gets reflowed and, if the user was reading some textual content, she might find the stuff she’s reading scrolls off the page.

So the only way to beat the `preloader` is to put all the potential image sources in the HTML and give the browser all the information it needs to make the selection there, too. That’s what the `w` and `x` descriptors in `srcset` are for, and the `sizes` attribute.