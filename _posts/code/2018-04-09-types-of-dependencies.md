---
layout: post
author: yashumittal
title: Types of dependencies
date: 2018-04-09 18:33:39 +0530
categories: code 
tags: coding packages dependencies
description: Dependencies serve many different purposes. Some dependencies are needed to build your project, others are needed when you’re running your program.
image: https://i.imgur.com/PjIYzyi.jpg
---

Dependencies serve many different purposes. Some dependencies are needed to build your project, others are needed when you’re running your program. As such there are a number of different types of dependencies that you can have (e.g. `dependencies`, `devDependencies`, and `peerDependencies`).

Your `package.json` will contain all of these dependencies:

```json
{
  "name": "my-project",
  "dependencies": {
    "package-a": "^1.0.0"
  },
  "devDependencies": {
    "package-b": "^1.2.1"
  },
  "peerDependencies": {
    "package-c": "^2.5.4"
  },
  "optionalDependencies": {
    "package-d": "^3.1.0"
  }
}
```

Most people only have `dependencies` and `devDependencies`, but each of these are important to understand.

### dependencies

These are your normal dependencies, or rather ones that you need when running your code *(e.g. React or ImmutableJS)*.

### devDependencies

These are your development dependencies. Dependencies that you need at some point in the development workflow but not while running your code *(e.g. Babel or Flow)*.

### peerDependencies

Peer dependencies are a special type of dependency that would only ever come up if you were publishing your own package.

Having a peer dependency means that your package needs a dependency that is the same exact dependency as the person installing your package. This is useful for packages like `react` that need to have a single copy of `react-dom` that is also used by the person installing it.

### optionalDependencies

Optional dependencies are just that: optional. If they fail to install, Yarn will still say the install process was successful.

This is useful for dependencies that won’t necessarily work on every machine and you have a fallback plan in case they are not installed (e.g. Watchman).

### bundledDependencies

Array of package names that will be bundled when publishing the package.

Bundled dependencies should be inside your project. The functionality is basically the same as normal dependencies. They will also be packed when running `yarn pack`.

Normal dependencies are usually installed from the npm registry. Bundled dependencies are useful in cases normal dependencies are not sufficient:

* When you want to re-use a third party library that doesn’t come from the npm registry or that was modified.
* When you want to re-use your own projects as modules.
* When you want to distribute some files with your module.

