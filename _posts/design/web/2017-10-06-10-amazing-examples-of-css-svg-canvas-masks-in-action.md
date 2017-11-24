---
layout: post
author: yashumittal
title: 10 Amazing Examples of CSS, SVG & Canvas Masks In Action
date: 2017-10-06 16:37:00 +0530
categories: design
tags: design css svg canvas masks
description: You can do some amazing things with SVG masks. This technique has been around for years but only recently made its way into mainstream web development. I’ve scoured the web
image: hub-share34rVWE34rrf34.png
---

You can do some amazing things with SVG masks. This technique has been around for years but only recently made its way into mainstream web development.

I’ve scoured the web to find the below demos of custom clipping masks & SVG/canvas masks. These examples show just how far you can push masks on the web, and ultimately what they may offer developers going forward.

## Text Masking

<div data-type="vimeo" data-video-id="237058144"></div>

For a clean example of text masking in action check out the above video. It uses actual page text in HTML so you can easily alter this text to read whatever you want.

All the magic happens in CSS with properties like background-clip. You can apply these to pretty much any text on any page, but they won’t show unless you have a clear background.

The zooming effect is also created purely in CSS which makes this code snippet even more impressive.

## Cutout Mask Polygons

<div data-type="vimeo" data-video-id="237058058"></div>

The animation in the video is created by using JavaScript for the complex animations but all of the masking is handled through a canvas element. It’s a surprisingly complex idea so trying to follow along with the code will be tough.

But the above polygon masking effect is one of the more unique designs I’ve seen. It takes shapes designed in CSS and uses JavaScript to create these shapes as page elements for masking a background image.

This runs a consistent animation and runs on a JS-powered Canvas element which behaves like a container for the SVG/XML content. Pretty crazy stuff but it’s fun to see what masks can do!

## Image Masking

<div data-type="vimeo" data-video-id="237058081"></div>

This cut & dry example shows what a CSS image mask looks like. You get to see the before & after of the above image mask created by Vincent De Oliveira.

Note the actual black textured mask is just a PNG file. But it’s layered over an image dynamically in CSS to create a masked photo effect.

You could do this with any texture you want so long as it’s exported with transparency. There’s plenty of details on the mask property and while it does support .svg files, you might find it easier to start with PNGs.

## Button Hovers

<div data-type="vimeo" data-video-id="237058012"></div>

Ever thought about customizing your button hover effects? Well this code snippet proves you can with a bit of creativity and some CSS masking.

Again the code all runs on a pre-defined image mask and each button has its own mask effect. The coolest part is the hover animation which doesn’t just show the mask, but rather animates it into view.

This is certainly an experimental bit of code, but it looks phenomenal in WebKit browsers and hopefully this technique could become a staple in a few years.

## SVG Text Mask

<div data-type="vimeo" data-video-id="237058121"></div>

Here’s a slightly different example of a text mask effect created by developer Marco Barría.

Instead of this defining custom SVG images the code actually uses an SVG element. It’s still built on top of plain HTML text content but it runs with a dynamic SVG filter.

This is a bit more technical but also grants much more control to the developer. Instead of messing around with Illustrator to create SVG files you can code inline SVGs right in your HTML doc.

## Canvas Text Mask

<div data-type="vimeo" data-video-id="237058026"></div>

With this canvas example by Calvin Davis, you’ll notice it uses raw HTML for the content, but the text itself isn’t selectable.

Instead it’s rendered on the page using a Canvas element which can abstract text outside the DOM. This makes it behave more like an image so you’ll see this effect where the text masks over the background, but it doesn’t feel like text.

Some designers may not like this for lack of usability so if you want selectable text, I wouldn’t bother with this setup.

But it’s a cool example of how far you can push typography with canvas shapes.

## Animated Gradient

<div data-type="vimeo" data-video-id="237059896"></div>

Another really cool text effect is this animated gradient created by developer Svante Richter.

It uses all SVG code in the HTML page, so it’s creating masks dynamically. This SVG setup works by taking over the entire page and giving it a gradient background, then masking this background only through the text.

Since the gradient can animate via CSS it’ll seem as if the text is the only part animating. Pretty cool effect and it’s something you might consider adding to an experimental website or landing page.

## Animated Clipping Mask

<div data-type="vimeo" data-video-id="237057949"></div>

This abstract clipping mask animation uses JS-powered bubbles generated randomly to mask over an image. It uses a canvas element along with animated clipping masks put together to form a cohesive SVG blob thing.

It may not seem like much, but developer Neil McCallion wrote some pretty sweet code, and the final result is definitely strange.

The masking happens mostly in the canvas element, but it’s controlled through JavaScript. It’s a fun way to blend two images with an abstract SVG animation.

Again this may not serve many purposes on a real-world website, but it’s a cool experiment for tinkering with masks.

## SVG BG Mask

<div data-type="vimeo" data-video-id="237058102"></div>

On the flip side here’s a masking effect you could run on almost any website.

This uses a background gradient alongside a hero header to create a complex masking effect that still blends perfectly.

Developer Ryna Rudenko pushed the envelope with this pen using a raw canvas element with most masking effects layered in the HTML.

Not only is this mask practical and usable in a large header, but it’s also really well crafted and runs solely on HTML5 & CSS3. A prime example of modern web standards put to good use.

## CSS & SVG Masks

<div data-type="vimeo" data-video-id="237058042"></div>

This complete gallery of SVG masks really drives home just how much you can do with pure CSS.

It’s a demo showcasing a bunch of different masking techniques that all use the same photo, different formats. Plus each example includes sample codes right on the page that you can test for yourself — although it’s just as easy to copy the code from CodePen’s editor.

But this little pen acts more like a guided intro to different image masking effects you can do. Awesome place to start if you want to dive into SVGs & masks with simple demos.

**NOTE:** All these videos have recorded from the respective owner of the CodePen's work.
