---
layout: post
title: PSD to HTML is Dead
date: 2017-09-02 17:25:00
categories: design
description: There are PSD to HTML tutorials are all over the web. In fact, many have searched on Google how to convert PSD to HTML. So why is it dead?
image: http://blog.codecarrot.net/images/psd-to-html-is-dead.png
---

PSD to HTML tutorials are all over the web. In fact, many people have asked me why there’s not a PSD to HTML tutorial on Treehouse. In addition to the tutorials, there are lots of companies that will accept a PSD and convert it to a webpage for roughly $100 USD.

![Google Search on PSD to HTML](google-search-on-psd2html.png)

*Google returns more than 48 million results for a “psd to html” search. It’s popular, but not the best way to make websites.*

If it’s so popular, then how can I say that it’s dead? Well… I wish every web design quandary could fit into a poetic 140 character tweet, but this is a fuzzy issue that demands a more articulate explanation. Let’s dig in.

## What is PSD to HTML?

In general, “PSD to HTML” is a workflow. First, a web page is designed in a Photoshop Document (PSD) and then converted to code (using HTML, CSS, and JavaScript). You could swap Photoshop with any other image editor (like Pixelmator, GIMP, and so on), but the principle is the same. Here’s a slightly more detailed step-by-step breakdown:

1. Design a high fidelity pixel-perfect mockup in Photoshop of exactly what you want your site to look like.
2. Use the slice tool to divide your website’s imagery and then export it for the web.
3. Write HTML and CSS that utilizes the imagery you exported from Photoshop.

At first glance, this might seem like a good idea. It can be difficult to start coding if you don’t know what the final result is going to look like, so experimenting in Photoshop first and then “exporting” it to HTML sounds like a granular and sensible process.

![Exporting the file for web in Photoshop](exporting-the-file-for-web-in-photoshop.png)

*In Photoshop, the slices feature in the save for web dialog used to be an essential tool for designers saving assets from a PSD. It made it easy to “slice” a design into images and then layout in a web page using HTML and CSS.*

Taking this idea further, many web companies have used PSD to HTML as a template for team workflows. In other words, a designer creates the Photoshop mockup and then hands it over to a developer that writes all of the code. In modern times, the job role of a web designer tends to encompass aesthetics as well as HTML and CSS coding.

## Was PSD to HTML ever a good idea?

Yes, PSD to HTML workflows used to be one of the best ways to make websites. There’s two big reasons why PSD to HTML used to make sense.

The first reason is for image assets. Before browsers supported all the wonderful features of modern CSS (drop shadows, rounded corners, gradients, and more) it was very difficult to create cross-browser effects without the use of images. Designers would create shadows and rounded corners as images, then clever coding tricks were used to place the imagery on the page. These assets would need to be realized no matter what, so creating them at the same time as the high fidelity mockup actually saved time.

Secondly (and perhaps more importantly) the web used to only be available on desktop browsers and wasn’t really present on phones and tablets in the way it is today. Designing for one fixed resolution of 1024×768 used to be totally viable.

For these two reasons, it’s understandable why a designer would look to Photoshop as their primary web design tool. Image assets were needed for a single screen resolution.

## What’s wrong with PSD to HTML now?

When pitted against other areas of art and technology, the web is a relatively young medium and things change fast. I’ve made dozens of websites using some variation of the PSD to HTML mindset and I’m sure many people reading this have done the same, but it’s time to move on. Here are the primary reasons why I believe thinking in terms of PSD to HTML is dead.

## Responsive Web Design

First, there are now a myriad of methods for browsing the web. Phones, tablets, desktops, notebooks, televisions, and more. There is no single screen resolution that a designer can target. Taking that idea a few steps further, there’s really no number of screen resolutions that you can safely “target” anymore.

![Different screen sizes website screen shot](different-screensizes-website-screenshot.png)

I’m not going to delve into the finer details of [responsive web design](/10-reasons-website-needs-mobile-optimized) or scalable design, but the point is that Photoshop is pixel based. Web pages are fluid and change.

## CSS Design

Second, new features in CSS have now become commonly available. There are still a few lingering issues here and there, but support has vastly improved in the last several years. Common effects like shadows, gradients, and rounded corners can be accomplished in CSS and usually don’t even need an image-based fallback anymore.

## Maturity

Third, the web industry has grown up a lot. Collectively we’ve had more time to refine our present understanding of what works and what doesn’t. Most companies will expect a designer to take ownership of aesthetics as well as HTML and CSS code.

This also means there are much better tools to support modern workflows. CSS frameworks like Bootstrap and Foundation make it more viable to design in the browser. Apps like Balsamiq and Omnigraffle help to wireframe sites rapidly. Pencil and paper mockups have stood the test of time because they allow for extremely rapid iteration.

## Does this mean Photoshop is dead?

No! Not even close. Photoshop is still very important to web design. The problem comes in when a powerful tool like Photoshop is used as a catch all solution without thinking of the higher level task (designing websites). Photoshop is awesome for editing and exporting photographs for web usage. There’s also plenty of situations where it still might make sense to generate full detail mockups (in Photoshop, Illustrator, or otherwise) as part of a more complete process. Here are a couple of examples:

* High fidelity mockups can be a critical communication tool when working with web design clients. It might seem faster to skip a high detail mockup, but it could hurt later on, because many clients aren’t going to understand how a wireframe will translate to a web browser. A high fidelity mockup can serve as a discussion tool before writing lots of code (only to discover it’s not what the client wanted).
* High fidelity mockups can be very important when working in medium to large sized teams. We often will create high res mockups at Treehouse when planning new courses or designing new features of our site, because it’s a powerful way to sync everyone’s mental model of what a feature will look like or how a project might look once it’s finished.

These two examples have a key difference from the PSD to HTML way of thinking. High detail mockups are still sometimes generated, but not so that they can be “tossed over the fence” to a team of developers or sliced up into code. Rather, Photoshop mockups can be used as a visual aid to discuss ideas. In a PSD to HTML workflow, the Photoshop document represents the final site and it’s expected to look exactly the same in the browser. This is a subtle but important difference.

## Different Strokes

Everyone’s workflow is different and nobody knows how to make the perfect website. You should always do whatever is most effective for you and your colleagues. Pushing pixels around in Photoshop is a ton of fun, but I can admit to many occasions when I’ve pushed the pixels too far. The key is to know yourself and what makes you perform at your best.
