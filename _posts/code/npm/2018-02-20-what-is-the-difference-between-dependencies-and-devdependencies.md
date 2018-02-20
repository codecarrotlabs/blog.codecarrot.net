---
layout: post
author: yashumittal
title: What is the difference between dependencies and devdependencies?
date: 2018-02-20 16:54:39 +0530
categories: code
tags: npm dependencies devdependencies
description: When using NPM, the first thing to do is an npm init, which will set up a package.json file for us based off our answers to its survey
image: https://cdn.codecarrot.net/images/dependencies-devdependencies.jpg
---

## What is the difference between save and save-dev?

When using NPM, the first thing to do is an `npm init`, which will set up a `package.json` file for us based off our answers to its survey. This `package.json` describes our module, and in it we can see a list of all installed dependencies and devDependencies that we have installed and added to our project.

The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.

To save a dependency as a devDependency on installation we need to do an `npm install --save-dev`, instead of just an `npm install --save.` A nice shorthand for installing a devDependency that I like to use is `npm i -D`. The shorthand for saving a regular dependency is `-S` instead of `-D`.

Some good examples of dependencies which would be required at runtime include _React, Redux, Express,_ and _Axios._

Some good examples of when to install devDependencies would be _Nodemon, Babel, ESLint,_ and testing frameworks like _Chai, Mocha, Enzyme, etc…_