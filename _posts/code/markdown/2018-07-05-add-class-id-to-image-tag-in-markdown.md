---
layout: post
author: yashumittal
title: How to add class name or id to an image tag inside a markdown file?
date: 2018-07-05 23:48:59 +0530
categories: code
tags: markdown jekyll gatsby vuepress hugo ghost
description: When you want to add class name or id to an image tag inside a markdown file, you always have to use html to make it work.
image: https://i.imgur.com/pbt6G5N.jpg
---

When you want to add class name or id to an image tag inside a markdown file, you always have to use `HTML` to make it work.

For example:

```html
<img src="https://www.codecarrot.net/images/favicon.png" alt="Image" class="className" />
```

But that's not the case now.

When I started using Jekyll a year ago, there was this question always bugging me *“How to add class name or id to an image tag inside a markdown file?”*

A year later, when I was working on a new open source theme called [Jasper](https://gitlab.com/mittalyashu/jasper) 👻, the same question strikes again.

And after an hour's of searching the web, reading the documentation and talking to the people in different communities.

This time I nailed it down.

Here’s the solution:

### Add a Class Name

```markdown
![Image](https://www.codecarrot.net/images/favicon.png){:.className}
```

### Add an Id

```markdown
![Image](https://www.codecarrot.net/images/favicon.png){:#id}
```


