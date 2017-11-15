---
layout: post
author: yashumittal
title: Applying Normalize.css to Relax Your CSS File
date: 2017-10-08 03:50:00
categories: code
tags: css normalize.css css3 vlog
description: Normalize.css, a new CSS tool we can use as an alternative to traditional CSS reset methods.
image: 659592657.png
---

In this vlog will learn about [Normalize.css](//codecarrotnet.github.io/normalize.css/), a new CSS tool we can use as an alternative to traditional CSS reset methods.

Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

<div data-type="vimeo" data-video-id="237238379"></div>

## Video Transcription

In this video, we'll learn about Normalize.css, a new CSS tool we can use as an alternative to traditional CSS reset methods. Let’s check it out.

Most CSS resets provide developers a baseline for styling pages by completely removing certain browser style inconsistencies, such as margins, padding, line height, and heading font sizes.

But depending on your project, it’s okay to leave in some of those basic default browser styles.

What Normalize.css does is it preserves useful browser default styles instead of removing all default styles from every element. It also corrects common bugs like display settings for HTML5 elements, font size rendering, and form element styling.

All HTML elements will render consistently and in line with modern web standards.

You can download Normalize.css at [codecarrotnet.github.io/normalize.css](http;//codecarrotnet.github.io/normalize.css/). Or grab the files on GitHub at [github.com/codecarrotnet/normalize.css](//github.com/codecarrotnet/normalize.css).

So save the file in your project folder, then you can link to it from your HTML file right above your main style sheet. Or you can import it from your main style sheet and you’re all set.

**Pro Tip:** You can even use the hosted [normalize.min.css](//codecarrotnet.github.io/normalize.css/css/normalize.min.css) file.

There are some advantages to using Normalize.css over other CSS reset methods. Since it preserves useful default styles, there’s no need to overwrite a lot of element styles. Headings and paragraphs, for example, preserve their default styles consistently across the browsers. Another neat feature is that it also makes form elements cross-browser consistent and styleable.

The normalized style sheet is small in size and it’s modular, so it makes it easy for us to see exactly which elements need specific styles, and we can also remove entire sections of the CSS file if we do not need them in our project. The CSS file also has detailed in line documentation explaining why each rule was added and how it affects each browser.

Normalize.css is not necessarily a better solution over other CSS reset techniques. It's just an alternative method that, depending on your project, might be the best fit. With other full CSS resets, you begin from no styles whatsoever and, build up from there.

Normalize.css lets you start somewhere in the middle in a state that's consistent in all browsers then you build up or down as you need to.

If you’ve been using CSS resets for a while, give Normalize.css a try. You might realize that your site might require fewer fixes for browser compatibility than you thought. As with any tool or framework, read the documentation first to make sure it’s the right solution for you.

***

## A quick view of normalize.css file

<div data-type="vimeo" data-video-id="237238793"></div>
