---
layout: post
author: yashumittal
title: Speeding Up Page Load Times
date: 2017-08-30 16:00:00
categories: growth
description: Learn how to reduce your page load times and increase user engagement on your websites.
image: http://blog.codecarrot.net/images/romain-peli-266992.jpg
---

The average size of a web page has been growing at an accelerating rate over the last few years. Research carried out by [HTTP Archive](http://httparchive.org/interesting.php#bytesperpage) in January reports that the average page size has now hit 1.25mb. For users with a decent broadband connection this is not too troublesome, but for users that still rely on slow dial-up connections (like in many developing countries) or crippled mobile data networks this poses a real issue.

![Average Web Page Size 2013 - source: HTTP Archive](http://blog.codecarrot.net/images/http-archive-survey-2013.png)

In 2011, KISSmetrics created an [infographic](http://blog.kissmetrics.com/loading-time/) showing how page load times can have a direct impact on user engagement. The data is most likely a little out of date now but the general principle is still valid.

In this blog post you are going to learn about a number of techniques that you can use to help reduce the size of your web pages and speed up your page load times.

## Optimize Images

One of the easiest ways to decrease the size of your web pages and increase load times is to properly resize and optimize your images. Using images that are larger than they will be displayed in your web page means that there is a lot of unnecessary data being transferred.

Once you have resized your images there are a number really handy tools like [Smush.it](http://www.smushit.com/ysmush.it/) and [TinyPNG](http://tinypng.org/) to reduce the size of the files further. These tools work by removing unnecessary data from the images and optimizing the use of colors.

## Minify CSS & JavaScript Code

Minifying your CSS and JavaScript code can help to reduce the size of these assets by removing unneeded whitespace and optimizing your code. Minifying your code does make it incredibly difficult for humans to read, so I would only minify when you are ready to launch a site.

[CSS Compressor](http://www.minifycss.com/css-compressor/) and [JavaScript Compressor](http://www.minifyjavascript.com/) are two handy web apps that can minify your code for you.

## Avoid using @import

The `@import` CSS rule allows you to load other CSS files into your stylesheet. Whilst this can sometimes be useful, files loaded through `@import` cannot be downloaded at the same time as the main stylesheet which increases the overall load time of the page.

Instead of using `@import` consider copying the CSS from the external file into your main stylesheet or use multiple `<link>` tags.

## Reduce The Number of HTTP Requests

Another great way of speeding up your web pages is to simply reduce the number of files that need to be loaded. There a few ways that you can do this.

**Combine Files**

Combining multiple stylesheets into one file is a really useful way of eliminating extra HTTP requests. This strategy can also be adopted for your JavaScript files. A single larger CSS or JavaScript file will often load quicker because more time can be spent downloading the data rather than establishing multiple connections to a server.

**Use CSS Sprites**

Using CSS sprites can be a great way of reducing the number of HTTP requests your page needs to load. A CSS sprite is a collection of images within a single image file. They are particularly useful for instances where you have a lot of small icons. You set the background image of an HTML element to the sprite using CSS and then use some clever CSS code to position the background image so that only the image within the sprite that you wish to use is visible.

For more information on using CSS sprites check out [this article](http://css-tricks.com/css-sprites/) on CSS-Tricks.

## Leverage Browser Caching

Your website probably contains files that don’t change very often. Things like images, CSS files and JavaScript assets. You can help to speed up your page load times by instructing the browse to cache a copy of these files on the hard drive so that next time the user visits your web page these resources will not need to be downloaded again.

To leverage browser caching you need to update your web server configuration to serve up resources with `Expires` headers. This is what tells the browser how long it should keep the cached files for.

![Inspecting Response Headers in Chrome Dev Tools](http://blog.codecarrot.net/images/expires-headers.png)

The easiest way to update your server configuration for Apache servers is to use a `.htaccess` file. The code below shows an example configuration that would set all image, CSS and JavaScript resources to be cached for 1 month.

```
<IfModule mod_expires.c>

# Enable Expirations
ExpiresActive On

# Default Expiration Time
ExpiresDefault "access plus 1 month"

# Expiration for Images
ExpiresByType image/gif "access plus 1 month"
ExpiresByType image/png "access plus 1 month"
ExpiresByType image/jpg "access plus 1 month"
ExpiresByType image/jpeg "access plus 1 month"

# Expiration for CSS
ExpiresByType text/css "access plus 1 month”

# Expiration for JavaScript
ExpiresByType application/javascript "access plus 1 month"

</IfModule>
```

For more information on browser caching check out this page on the Google Developers website.

## Tools for Testing Page Load Times

There are some fantastic tools available that can help you test the performance of your websites. In this section you are going to learn about three of my favorites.

**PageSpeed**

![Analysing a Web Page with PageSpeed (Web App) by Google](http://blog.codecarrot.net/images/speed-test-of-codecarrot-blog-website-from-google.png)

PageSpeed is a tool from Google that can analyze your web pages and give you pointers on what to do to improve performance. The tool will provide you with an overall ‘PageSpeed Score’ that allows you to quickly see how well optimized a page is.

You can either install PageSpeed as an [extension for Chrome or Firefox](https://developers.google.com/speed/pagespeed/insights_extensions), or use the [web app](https://developers.google.com/speed/pagespeed/insights).

**Speed Tracer**

[Speed Tracer](https://developers.google.com/web-toolkit/speedtracer/) is another tool from Google that allows you to take a more in-depth look into the performance of your web pages. Instead of making recommendations this tool just provides you with the data that you need to identify performance bottlenecks in your web pages.

**YSlow**

[YSlow](http://developer.yahoo.com/yslow/) is a browser extension from Yahoo! that is very similar to PageSpeed. Running YSlow against your web pages will give you a score and a grade that can be used to track the impact of your performance optimizations. Like PageSpeed, YSlow also gives you recommendations of techniques to use to increase performance.

**Developer Tools**

![Using Chrome Dev Tools to Examine Asset Load Times](http://blog.codecarrot.net/images/chrome-devtools-network-in-windows-10.png)

As well as using the tools mentioned above, many browsers like Chrome and Firefox come with built-in developer tools that you can use to help find areas where performance could be increased. The ‘Network’ tab in the Chrome developer tools for example can be really useful for identifying large files that take a long time to load.

## Summary

In this post we have covered a number of techniques that you can adopt to increase the performance of your web pages. However this has by no means been an exhaustive list. Using the tools that are outlined above you will be able to identify loads more tips for enhancing the performance of your web pages. Take a look at some of the links below for more information on enhancing the performance of your websites.

## Useful Links

* [YSlow](http://developer.yahoo.com/yslow/)
* [PageSpeed](https://developers.google.com/speed/pagespeed/)
* [Speed Tracer](https://developers.google.com/web-toolkit/speedtracer/)
* [CSS Sprites](http://css-tricks.com/css-sprites/)
