---
layout: post
author: yashumittal
title: 9 SEO Tips to Improve Website Performance and Drive More Traffic
date: 2017-08-23 12:00:00
categories: dev seo
description: SEO is really important for many projects. It can increase the number of people who view your application or even boost conversions allowing the user to buy products straight from the search engine.
image: http://blog.codecarrot.net/images/pexels-photo-67112.jpeg
---

SEO is really important for many projects. It can increase the number of people who view your application or even boost conversions! For example, [in e-commerce, 38.9 percent of purchases came from search engines such as Google](http://www.businessinsider.com/most-online-shoppers-are-using-search-engines-before-they-buy-2016-4?IR=T). Also, search engines can make use of the website’s content to allow the user to buy products straight from the search engine. Here are a couple of tips you can use to make sure that search engine robots will love your website.

## 1. Make sure you have good page load speed

Quickly loading pages are crucial not only for efficient SEO but also for a good UX. Users don’t like to wait for content to show on a website they are trying to browse, and neither do search engine web crawlers. To achieve fast pageloads, you can make sure that the server generates responses faster, add pagination or infinite scroll, add responsive images using the imgsrc attribute for the img tag, load images on scroll, reduce CSS and JS script sizes, load stylesheets or scripts in an asynchronous way, and many other things. You can [test the page load speed](https://developers.google.com/speed/pagespeed/insights/). Remember to test it on various links in your application to get a more general overview.

## 2. Use Breadcrumbs

Breadcrumbs give web crawlers an idea of how your website is structured. In the picture below, you can see that the Guardian uses breadcrumbs to define what article is about. The most obvious use case in e-commerce is to show the category of the product to which a given link leads.

![Using Breadcrumbs for SEO Tips](http://blog.codecarrot.net/images/seotips.png)

## 3. Make Sure You Have Text on Your Website

Text is the kind of information that computers and, consequently, search engine robots find the easiest to aggregate. It’s quite easy for such websites as the Guardian or the New York Times, since they offer mostly articles, but it can be different on e-commerce sites, which chiefly consist of photos of products. It’s a good practice to make sure that each product has a unique description. Another way to improve SEO in e-commerce is to implement a blog in your application, where you will report the updates of your application. The more text there is in your app, the easier it will be to aggregate the content on your website.

## 4. Make Sure Your App is Mobile-first

Mobile is a major platform on the web these days. According to TechCrunch, 51% of Internet traffic comes from mobile devices. To make sure that your application is mobile-friendly, you should implement responsive designs (look up “responsive web design”), which will ensure that your webpage can adjust to the given screen’s viewport, be it mobile, tablet, desktop, or a high-DPI display.

## 5. Make Your App PWA

Progressive Web Apps (PWA) is quite a new technology introduced by Google to bring native experience to web applications. They mostly consist of a JavaScript web worker caching the content from your application and manifest file, which can provide a more native experience without the need for building a separate application.

## 6. Make Your Images as Small as Possible

Images are what the web is all about now. Well, almost. Instagram is an example of a company that created a whole platform where images are the only true content. The downside of using images is that they take a lot of space and bandwidth if you don’t compress them properly. You should use tools such as ImageMagick to strip all meta tags, convert your images to JPEG (if they aren’t transparent) and lower their quality – the human eye won’t see the difference unless the user focuses on the image and zooms it. Also, it’s good to make sure that images aren’t too big. There is no point in putting a 15Mpx photo from your vacation in a blogpost viewed on mobile devices.

## 7. Translate Your Routes

Web search engines like to have different paths for content in different languages. If your application is served in many different languages it’s good to translate the paths leading to them, for example:

```
https://www.my-website.co/products/t-shirts/fox-cool-designer - English version

https://www.my-webstie.pl/produkty/t-shirts/lis-fajny-projektant – Polish version
```

Additionally, adding hreflang tags to your site will inform web crawlers of the language of a given link.

## 8. Make a Sitemap of Your Application

This is pretty simple. A sitemap is an XML file that consists of the URLs that are in your application. This makes a lot easier for search bots to crawl your website. You can also adjust the weight of each link or the frequency at which it should be checked by search engines.

## 9. Make Sure Your Content is Accessible

There are a few important things such as adding alt attributes to images or a table of contents for bigger pages. Another cool thing you can do is to add transcriptions for your audio and video files. Again, more text means that it will be easier for search engine bots to index your website.

With these nine simple tips, you can make your website search engine-friendly and as a result substantially improve its accessibility, performance and conversion rate.

## P.S. Can we send you an email?

Once a week or so we send an email with our best content. We never bug you; we just send you our latest piece of content. <a href="#subscribe">Subscribe Here</a>
