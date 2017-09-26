---
layout: post
author: yashumittal
title: Favicon Cheat Sheet
date: 2017-09-26 14:35:00
categories: design
tags: design favicon icon make-favicon
description: Obsessive cheat sheet to favicon sizes/types. Short for favorite icon it's the picture you see in browser tabs.
image: http://blog.codecarrot.net/images/74739.jpg
---

## HTML

### Basics

For the main favicon itself, it's best for cross-browser compatibility not to use any HTML. Just name the file favicon.ico and place it in the root of your domain.

This works in every desktop browser/version all the way back to IE6, except for SeaMonkey.

### Optional But Encouraged

You probably also want the following:

1. Touch icon for iOS 2.0+ and Android 2.1+:

```
<link rel="apple-touch-icon-precomposed" href="path/to/favicon-152.png">
```

2. IE 10 Metro tile icon (Metro equivalent of apple-touch-icon):

```
<meta name="msapplication-TileColor" content="#FFFFFF">
<meta name="msapplication-TileImage" content="/path/to/favicon-144.png">
```

Replace #FFFFFF with your desired tile color.

3. IE 11 Tile for Windows 8.1 Start Screen

```
<meta name="application-name" content="Name">
<meta name="msapplication-tooltip" content="Tooltip">
<meta name="msapplication-config" content="/path/to/ieconfig.xml">
```

ieconfig.xml

```
<?xml version="1.0" encoding="utf-8"?>
    <browserconfig>
      <msapplication>
        <tile>
          <square70x70logo src="/path/to/smalltile.png"/>
          <square150x150logo src="/path/to/mediumtile.png"/>
          <wide310x150logo src="/path/to/widetile.png"/>
          <square310x310logo src="/path/to/largetile.png"/>
          <TileColor>#FFFFFF</TileColor>
        </tile>
      </msapplication>
    </browserconfig>
```

### Very Optional, for the Obsessive

If you're obsessive, you want all this too:

1. Largest to smallest apple-touch-icons:

2. Favicons targeted to any additional png sizes that you add that aren't covered above:

```
<link rel="icon" href="/path/to/favicon-32.png" sizes="32x32">
```

3. Favicon Chrome for Android

```
<link rel="shortcut icon" sizes="196x196" href="/path/to/favicon-196.png">
```

## Images

Create at least this:

| Sizes |	Name | Purpose |
| ----- | ----- | ----- |
| 16x16 & 32x32 | favicon.ico | Default required by IE. Chrome and Safari may pick ico over png, sadly. |

More about favicon.ico below. Yes, it's 1 file with multiple sizes.

If you also sort of care about iOS and Android but are lazy:

| Size |	Name |	Purpose |
| ----- | ----- | ----- |
| 152x152 |	favicon-152.png | General use iOS/Android icon, auto-downscaled by devices. |

But keep in mind that icons with complex detail often don't downscale well. Often you have to tweak subtle design details for smaller sizes.

If you're obsessive, create these too:

| Size | Name | Purpose |
| ----- | ----- | ----- |
| 32x32 |	favicon-32.png | Certain old but not too old Chrome versions mishandle ico |
| 57x57 |	favicon-57.png | Standard iOS home screen (iPod Touch, iPhone first generation to 3G) |
| 76x76 |	favicon-76.png | iPad home screen icon |
| 96x96 |	favicon-96.png | GoogleTV icon |
| 120x120 |	favicon-120.png | iPhone retina touch icon (Change for iOS 7: up from 114x114) |
| 128x128 |	favicon-128.png | Chrome Web Store icon |
| 128x128 |	smalltile.png | Small Windows 8 Star Screen Icon |
| 144x144 |	favicon-144.png | IE10 Metro tile for pinned site |
| 152x152 |	favicon-152.png | iPad retina touch icon (Change for iOS 7: up from 144x144) |
| 180x180 |	favicon-180.png | iPhone 6 plus |
| 195x195 |	favicon-195.png | Opera Speed Dial icon (Not working in Opera 15 and later) |
| 196x196 |	favicon-196.png | Chrome for Android home screen icon |
| 228x228 |	favicon-228.png | Opera Coast icon |
| 270x270 |	mediumtile.png | Medium Windows 8 Start Screen Icon |
| 558x270 |	widetile.png | Wide Windows 8 Start Screen Icon |
| 558x558 | largetile.png | Large Windows 8 Start Screen Icon |

## ICO File

An .ico file is a container for multiple .bmp or .png icons of different sizes. In favicon.ico, create at least these:

| Size | Purpose |
| | ----- | ----- | ----- | |
| 16x16 | IE9 address bar, Pinned site Jump List/Toolbar/Overlay |
| 32x32 | New tab page in IE, taskbar button in Win 7+, Safari Read Later sidebar |
| 48x48 | Windows site icons |

If you're obsessive and don't mind 1-3kb extra size, also include these sizes in your .ico:

| Size | Purpose |
| ----- | ----- | ----- |
| 24x24 | IE9 Pinned site browser UI |
| 64x64 | Windows site icons, Safari Reading List sidebar in HiDPI/Retina |

Create your .ico out of optimized .png files.

**TODO:** get confirmation that IE9+ supports .ico files that contain .png files.

## SVG File

Pinned tabs in Safari 9+ use an SVG vector mask for the favicon instead of any other PNG/ICO/etc. favicons that may be present. Vector artwork in the SVG file should be black only (no shades of black or other colors) with a transparent background. Also, a fill color needs to be defined in the <link> tag - a hex value or color shorthand will work. Here's the markup for adding the icon:

```
<link rel='mask-icon' href='icon.svg' color='#ff0000'>
```

## Forcing a Favicon Refresh

Not normally needed. This is only for those frustrating times when you can't get your favicon to refresh, during development:

* Clear the browser cache on Windows (Ctrl+F5 or Ctrl+Shift+R) and on Mac (Command + Shift + R).
* Also close and reopen browser if IE.
* If still stuck, try opening new tab. Or see [http://stackoverflow.com/questions/2208933/how-do-i-force-a-favicon-refresh](http://stackoverflow.com/questions/2208933/how-do-i-force-a-favicon-refresh)
* Temporarily add explicit HTML markup and append a query string. Remove this when you're done:

```
<link rel="shortcut icon" href="http://www.yoursite.com/favicon.ico?v=2" />
<link rel="icon" sizes="16x16 32x32" href="/favicon.ico?v=2">
```

For large versioned deployments, if all site visitors need their favicon force-refreshed in an extreme situation:

* Add explicit HTML markup (customize the sizes part) and put your version number in the filename.

```
<link rel="shortcut icon" href="/favicon-v2.ico" />
<link rel="icon" sizes="16x16 32x32" href="/favicon-v2.ico">
```

**TODO:** find edge cases where this markup doesn't work.

## FAQ

**What about having both a default root favicon.ico and favicon.png?** I think it's actually better to provide only favicon.ico and not favicon.png, because:

* An .ico is a container for multiple .bmp or .png files. If you specify 1 default favicon.png, and if that favicon.png overrides the favicon.ico, you are giving up control over how the favicon looks at different resolutions and allowing the browser to do all resizing. For example, you might want the 64x64 version to contain text and the 16x16 version to not display the text at all, since at 16x16 it would be unreadable anyway.
* There is no favicon.png in the HTML5 specification, just /favicon.ico. From [http://www.w3.org/TR/html5/links.html#rel-icon](http://www.w3.org/TR/html5/links.html#rel-icon):

  * 'In the absence of a link with the icon keyword, for Documents obtained over HTTP or HTTPS, user agents may instead attempt to fetch and use an icon with the absolute URL obtained by resolving the URL "/favicon.ico" against the document's address, as if the page had declared that icon using the icon keyword.'

More about this in [stackoverflow question](http://stackoverflow.com/questions/1344122/favicon-png-vs-favicon-ico-why-should-i-use-pngs-instead-of-icos/1344379#1344379) (Note: the text in the chosen answer about alpha transparency is incorrect. See the 2nd answer.)

**Is it true that favicons should be in the site root?** No, that's only if you don't explicitly specify the browser/device-specific <link> tags with a favicon path. [Learn more about favicon](https://en.wikipedia.org/wiki/Favicon.ico).

If you don't have favicon.ico in the root consider adding one, or returning a HTTP 204 instead. Many tools and services e.g. bookmarking sites, feed readers, web crawlers etc., request a favicon.ico from the site root, and so receive a HTTP 404 if it's not present. In the worst case some frameworks will return a custom error page which is likely to be many times larger than the missing favicon.

**Is it true that the png has to be named favicon.png?** No, this has never been true as far as I can tell from my obsessive research.

**Is it true that the ico has to be named favicon.ico?** If you don't explicitly specify its `<link>` tag, yes. Explicitness is best, so we both name it favicon.ico and explicitly specify the `<link>` tag.

**Why not prefix with "apple-touch-icon"?** If you don't specify `<link>` tags, iOS looks for files prefixed with apple-touch-icon or apple-touch-icon-precomposed. Many *(e.g. HTML5 Boilerplate)* rely on this assumption, but:

* Explicitly specifying `<link>` tags is clearer and supported by Apple.
* Not hard-coding names as apple-touch-icon clears up confusion as to whether the same icons can be reused for other purposes as-is, e.g. reusing favicon-144.png for Windows pinned site.

**Why use iOS precomposed icons?**

* iOS non-precomposed icons add rounded corners, drop shadow, and reflective shine. Sounds great in theory, but in practice the results can be very frustrating, especially to designers.
* Non-precomposed icons don't work with Android 2.1.

**Why absolute paths?** Some Firefox versions require absolute paths. Since all browsers support them, it's the simplest choice.

**Why not append a query string to force-refresh for all visitors?** Some proxies and load balancers can fail to read query strings in edge cases.
