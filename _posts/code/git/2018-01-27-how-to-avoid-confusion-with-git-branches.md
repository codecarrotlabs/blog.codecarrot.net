---
layout: post
author: yashumittal
title: How to Avoid Confusion with Git Branches
date: 2018-01-27 22:54:33 +0530
categories: code
tags: coding git branches software-development
description: Simple solution how to handle with git error pathspec 'branch' did not match any file(s) known to git. It's a great tool for sure but sometimes I feel quite confused when I see the way how it works.
image: https://cdn.codecarrot.net/images/jack-cain-336725.jpg
---

## This time Git!

It's a great tool for sure but sometimes I feel quite confused when I see the way how it works.

![Git merge](https://cdn.codecarrot.net/images/X9zNSkM.gif)

This time I wanted to check out to the remote branch called release but every time I tried to do it, git just returned following error:

```
error: pathspec 'release' did not match any file(s) known to git.
```

### Solution

The reason for the error described above was a file added to the repository and using the same **RELEASE** name - file included all the necessary commands to execute after deploying the next release.

How to solve the problem?

There are two possible ways:

* rename the file to avoid conflicts with the branch's name
* use more precise way to checkout to the remote branch: 
```
git checkout -b release origin/release 
```

You'd need to run `git checkout --track origin/test` (which is the same thing as running `git checkout -b test origin/test`)

Simple, isn't it?

***

TIL, or Today I Learned, is where our developers share the best tech stuff they found every day. You can find smart solutions for some issues, useful advice and anything which will make your developer life easier.