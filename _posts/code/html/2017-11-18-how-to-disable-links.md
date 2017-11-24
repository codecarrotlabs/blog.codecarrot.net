---
layout: post
author: yashumittal
title: How to Disable Links
date: 2017-11-18 17:55:00 +0530
categories: code
tags: coding links html links a
description: The topic of disabling links popped up at my work the other day. Somehow, a disabled anchor style was added to our typography styles last year when I was"
image: jj-ying-215308.jpg
---

The topic of disabling links popped up at my work the other day. Somehow, a "disabled" anchor style was added to our typography styles last year when I wasn't looking. There is a problem though: there is no real way to disable an `<a>` link *(with a valid `href` attribute)* in HTML. Not to mention, why would you even want to? Links are the basis of the web.

At a certain point, it looked like my co-workers were not going to accept this fact, so I started thinking of how this could be accomplished. Knowing that it would take a lot, I wanted to prove that it was not worth the effort and code to support such an unconventional interaction, but I feared that by showing it could be done they would ignore all my warnings and just use my example as proof that it was OK. This hasn't quite shaken out for me yet, but I figured we could go through my research.

First, things first:

## Just don't do it.

A disabled link is not a link, it's just text. You need to rethink your design if it calls for disabling a link.

Bootstrap has examples of applying the `.disabled` class to anchor tags, and I hate them for it. At least they mention that the class only provides a disabled style, but this is misleading. You need to do more than just make a link look disabled if you really want to disable it.

## Surefire way: remove the href

If you have decided that you are going to ignore my warning and proceed with disabling a link, then **removing the `href` attribute is the best way I know how**.

Straight from the official [Hyperlink spec](//www.w3.org/TR/html5/links.html#attr-hyperlink-href):

<blockquote>
The href attribute on a and area elements is not required; when those elements do not have href attributes they do not create hyperlinks.
</blockquote>

An easier to understand definition from [MDN](//developer.mozilla.org/en-US/docs/Web/HTML/Element/a):

This attribute may be omitted (as of HTML5) to create a placeholder link. A placeholder link resembles a traditional hyperlink, but does not lead anywhere.

Here is basic JavaScript code to set and remove the href attribute:

```js
/*
 * Use your preferred method of targeting a link
 *
 * document.getElementById('MyLink');
 * document.querySelector('.link-class');
 * document.querySelector('[href="https://unfetteredthoughts.net"]');
 */
// "Disable" link by removing the href property
link.href = '';
// Enable link by setting the href property
link.href = 'https://unfetteredthoughts.net';
```

Styling this via CSS is also pretty straightforward:

```css
a {
  /* Disabled link styles */
}
a:link, a:visited { /* or a[href] */
  /* Enabled link styles */
}
```

*That's all you need to do!*

## That's not enough, I want something more complex so that I can look smarter!

If you just absolutely have to over-engineer some extreme solution, here are some things to consider. Hopefully, you will take heed and recognize that what I am about to show you is not worth the effort.

First, we need to style our link so that it looks disabled.

```css
.isDisabled {
  color: currentColor;
  cursor: not-allowed;
  opacity: 0.5;
  text-decoration: none;
}
```

```html
<a class="isDisabled" href="https://unfetteredthoughts.net">Disabled Link</a>
```

![disabled-link_yg83an.webp](//blog.codecarrot.net/images/disabled-link_yg83an.webp)

Setting `color` to `currentColor` should reset the font color back to your normal, non-link text color. I am also setting the mouse cursor to `not-allowed` to display a nice indicator on hover that the normal action is not allowed. Already, we have left out non-mouse users that can't hover, mainly touch and keyboard, so they won't get this indication. Next the opacity is cut to half. According to [WCAG](//www.w3.org/WAI/WCAG20/quickref/#visual-audio-contrast-contrast), disabled elements do not need to meet color contrast guidelines. I think this is very risky since it's basically plain text at this point, and dropping the opacity in half would make it very hard to read for users with low-vision, another reason I hate this. Lastly, the text decoration underline is removed as this is usually the best indicator something is a link. Now this **looks** like a disabled link!

But it's not really disabled! A user can still click/tap on this link. I hear you screaming about `pointer-events`.

```css
.isDisabled {
  ...
  pointer-events: none;
}
```

Ok, we are done! Disabled link accomplished! Except, it's only really disabled for mouse users clicking and touch users tapping. What about browsers that don't support `pointer-events`? According to [caniuse](//caniuse.com/#feat=pointer-events), this is not supported for Opera Mini and IE<11. IE11 and Edge actually don't support `pointer-events` unless `display` is set to `block` or `inline-block`. Also, setting `pointer-events` to `none` overwrites our nice `not-allowed` cursor, so now mouse users will not get that additional visual indication that the link is disabled. This is already starting to fall apart. Now we have to change our markup and CSS...

```css
.isDisabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.isDisabled > a {
  color: currentColor;
  display: inline-block;  /* For IE11/ MS Edge bug */
  pointer-events: none;
  text-decoration: none;
}
```

```html
<span class="isDisabled"><a href="https://unfetteredthoughts.net">Disabled Link</a></span>
```

Wrapping the link in a `<` `span` `>` and adding the `isDisabled` class gives us half of our disabled visual style. A nice side-affect here is that the disabled class is now generic and can be used on other elements, like buttons and form elements. The actual anchor tag now has the `pointer-events` and `text-decoration` set to none.

What about keyboard users? Keyboard users will use the `ENTER` key to activate links. `pointer-events` are only for pointers, there is no keyboard-events. We also need to prevent activation for older browsers that don't support `pointer-events`. Now we have to introduce some JavaScript.

## Bring in the JavaScript

```js
// After using preferred method to target link
link.addEventListener('click', function (event) {
  if (this.parentElement.classList.contains('isDisabled')) {
    event.preventDefault();
  }
});
```

Now our link looks disabled and does not respond to activation via clicks, taps, and the `ENTER` key. But we are still not done! Screen reader users have no way of knowing that this link is `disabled`. We need to describe this link as being disabled. The disabled attribute is not valid on links, but we can use `aria-disabled="true"`.

```html
<span class="isDisabled"><a href="https://unfetteredthoughts.net" aria-disabled="true">Disabled Link</a></span>
```

Now I am going to take this opportunity to style the link based on the `aria-disabled` attribute. I like using ARIA attributes as hooks for CSS because having improperly styled elements is an indicator that important accessibility is missing.

```css
.isDisabled {
  cursor: not-allowed;
  opacity: 0.5;
}
a[aria-disabled="true"] {
  color: currentColor;
  display: inline-block;  /* For IE11/ MS Edge bug */
  pointer-events: none;
  text-decoration: none;
}
```

Now our links **look** disabled, **act** disabled, and are **described** as disabled.

Unfortunately, even though the link is described as disabled, some screen readers (JAWS) will still announce this as clickable. It does that for any element that has a click listener. This is because of developer tendency to make non-interactive elements like `div` and `span` as pseudo-interactive elements with a simple listener. Nothing we can do about that here. Everything we have done to remove any indication that this is a link is foiled by the assistive technology we were trying to fool, ironically because we have tried to fool it before.

But what if we moved the listener to the body?

```js
document.body.addEventListener('click', function (event) {
  // filter out clicks on any other elements
  if (event.target.nodeName == 'A' && event.target.getAttribute('aria-disabled') == 'true') {
    event.preventDefault();
  }
});
```

Are we done? Well, not really. At some point we will need to enable these links so we need to add additional code that will toggle this state/behavior.

```js
function disableLink(link) {
// 1. Add isDisabled class to parent span
  link.parentElement.classList.add('isDisabled');
// 2. Store href so we can add it later
  link.setAttribute('data-href', link.href);
// 3. Remove href
  link.href = '';
// 4. Set aria-disabled to 'true'
  link.setAttribute('aria-disabled', 'true');
}
function enableLink(link) {
// 1. Remove 'isDisabled' class from parent span
  link.parentElement.classList.remove('isDisabled');
// 2. Set href
  link.href = link.getAttribute('data-href');
// 3. Remove 'aria-disabled', better than setting to false
  link.removeAttribute('aria-disabled');
}
```

That's it. We now have a disabled link that is visually, functionally, and semantically disabled for all users. It only took 10 lines of CSS, 15 lines of JavaScript (including 1 listener on the body), and 2 HTML elements.

Seriously folks, **just don't do it**.

This article is written by **Gerard Cohen**.
