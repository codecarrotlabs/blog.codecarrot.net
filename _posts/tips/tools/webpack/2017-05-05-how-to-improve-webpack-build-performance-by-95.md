---
layout: post
author: yashumittal
title: How to improve webpack build performance by 95%
date: 2017-05-05 15:28:10 +0530
categories: tips
tags: tips webpack
description: If you are using frameworks such as react and redux, and webpack for the build process. No doubt you will face performance issues with the new tools and libraries adopted along the way.
image: https://i.imgur.com/WVkQCKM.png
---

If you are using frameworks such as react and redux, and webpack for the build process. No doubt you will face performance issues with the new tools and libraries adopted along the way.

TL;DR: You can try with multiple configurations to accelerate the webpack build performance for a webapp that supports 25 locales

* a single CPU
  * enabling caching on the babel-loader improves performance by **26%**
  * enabling caching and parallel processing with uglifyjs-webpack-plugin v1 improves performance by **45%**
  * NOT exporting an array of configurations from webpack.config.js improves performance by **28%**
* 10 CPUs
  * leveraging node.js Child Process API improves performance by **67%**

**Result:** build performance improved by **95%**

### If your build machines have limited memory, don’t export an array of configurations in your webpack.config.js file

Webpack allows you to [export multiple configurations](https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations) as an array from the webpack.config.js file. Previously we were taking advantage of this feature to export an array of 25 configurations, one for each locale, so when we run webpack all 25 locales’ bundles are built at the same time. 

This could be a useful feature if you only have a small set of configurations, however, in our case, it made the build process very **memory intensive** and unoptimized. Initially, we set the --max_old_space_size (memory limit) of the node process running webpack to 4GB, by doubling the limit to 8GB, we improved the performance by 50% (build time down from 3.35 hours to 1.7 hours).

However, with the same memory limit, when switched to running webpack on each configuration sequentially, we improved the performance by another 28% compared to processing multiple configurations at the same time.

## Enable caching on the babel-loader

[Babel-loader caching](https://github.com/babel/babel-loader#options) can be easily enabled with the cacheDirectory option. With

```
loader: 'babel-loader?cacheDirectory
```

babel-loader caches its results in node_modules/.cache/babel-loader by default. After enabling caching with babel-loader we improved the build performance by another 26%. Although configurations vary among locales, most of the modules are the same. By enabling caching, expensive babel recompilations are avoided for subsequent locales being processed.

## The new uglifyjs-webpack-plugin v1 makes a huge difference

You’re probably already using the UglifyJS plugin that ships with webpack 3, [webpack.optimize.UglifyJsPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/), either by adding it explicitly into the configuration or running webpack with -p flag. It is identical to uglifyjs-webpack-plugin v0.4.6, which has UglifyJS v2 at its core.

The new [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) v1 uses UglifyJS v3 under the hood and is scheduled for webpack 4. Its new features such as multi-process parallel running support and caching capability improved the build performance significantly by 45%.

In order to use uglifyjs-webpack-plugin v1 today with webpack 3, you need to

* add "uglifyjs-webpack-plugin": "1.0.1" to devDependencies
* remove -p flag passed to webpack, to avoid uglifyjs-webpack-plugin v0.4.6 from running unnecessarily

Then add the plugin with cache and parallel options enabled and you’re good to go!

```js
new UglifyJsPlugin({
  cache: true,
  parallel: true
})
```

## Take advantage of your multi-core build machine

In case your build machine has multiple CPUs, you can take advantage of those for your webpack build by using node.js [Cluster](https://nodejs.org/api/cluster.html) and [Child Process](https://nodejs.org/api/child_process.html) API, or [worker-farm](https://github.com/rvagg/node-worker-farm). By enabling 9 webpack configurations being processed in parallel, we managed to shorten the build process for processing all 25 configurations by 67%.

Reliability is important for asset building, if you want to make sure that in case where build for a single locale fails, the entire build should fail loudly. Also, to prevent potential race conditions, you should disable babel-loader and uglifyjs-webpack-plugin cache options since multiple processes running in parallel are all trying to read/write to the file system simultaneously.

With [worker-farm](https://github.com/rvagg/node-worker-farm), the script for building all locales looks like the following

![code snippet](https://i.imgur.com/hbYTJ40.png)

Before you went with our own multi-core solution you should also try [parallel-webpack](https://github.com/trivago/parallel-webpack) which promises to run webpack configurations in parallel, however it didn’t make much improvement to build performance. Having to work with another interface that’s slightly different from webpack is also undesirable.