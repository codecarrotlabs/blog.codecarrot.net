---
layout: post
author: yashumittal
title: HTML 5 - Is it br, br/, or br /?
date: 2018-02-08 20:56:00 +0530
categories: code
tags: coding html br
description: HTML 4.01 was supposed to "allow" single-tags to just be img and br. Then XHTML came along with img / and br /.
image: https://cdn.codecarrot.net/images/html-5-is-it-br-br-br.png
---

HTML 4.01 was supposed to "allow" single-tags to just be `<img>` and `<br>`. Then XHTML came along with `<img />` and `<br />`.

If you are not sure which one is correct or which one should I use? Then you are at the right place for you.

Simply `<br>` is sufficient.

The other forms are there for compatibility with XHTML; to make it possible to write the same code as XHTML, and have it also work as HTML.

Some systems that generate HTML may be based on XML generators, and thus do not have the ability to output just a bare `<br>` tag; if you're using such a system, it's fine to use `<br/>`, it's just not necessary if you don't need to do it.

Very few people actually use XHTML, however. You need to serve your content as `application/xhtml+xml` for it to be interpreted as XHTML, and that will not work in old versions of IE - it will also mean that any small error you make will prevent your page from being displayed in browsers that do support XHTML. So, most of what looks like XHTML on the web is actually being served, and interpreted, as HTML.

Some elements, however, are forbidden from containing any content at all. These are known as void elements. In HTML, the syntax cannot be used for void elements. For such elements, the end tag must be omitted because the element is automatically closed by the parser. Such elements include, among others, br, hr, link and meta.

**HTML Example:**

```html
<link type="text/css" rel="stylesheet" href="style.css">
```

In XHTML, the XML syntactic requirements dictate that this must be made explicit using either an explicit end tag, as above, or the empty element syntax. This is achieved by inserting a slash at the end of the start tag immediately before the right angle bracket.

**Example:**

```html
<link type="text/css" href="style.css"/>
```

Authors may optionally choose to use this same syntax for void elements in the HTML syntax as well. Some authors also choose to include whitespace before the slash, however this is not necessary. (Using whitespace in that fashion is a convention inherited from the compatibility guidelines in XHTML 1.0, Appendix C.)

XML doesn't allow leaving tags open, so it makes `<br>` a bit worse than the other two. The other two are roughly equivalent with the second preferred for compatibility with older browsers. 

Actually, space before `/` is preferred for compatibility sake, but I think it only makes sense for tags that have attributes. So I'd say either `<br/>` or `<br />`, whichever pleases your aesthetics.

To sum it up: all three are valid with the first one being a bit less "portable".

Start tags consist of the following parts, in exactly the following order:

1. A "<" character.
2. The element’s tag name.
3. Optionally, one or more attributes, each of which must be preceded by one or more space characters.
4. Optionally, one or more space characters.
5. **Optionally, a "/" character, which may be present only if the element is a void element.**
6. A ">" character.