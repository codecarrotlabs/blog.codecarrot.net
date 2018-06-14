---
layout: post
author: yashumittal
title: Why We Use PostCSS at CodeCarrot
date: 2017-07-02 12:00:00 +0530
categories: code
tags: css postcss css3
description: PostCSS provides a set of extremely useful features that would make every CSS codebase more maintainable and it can work alongside SASS or replace it.
image: https://i.imgur.com/WNNfSL5.jpg
---

## Why PostCSS

<blockquote>
PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
</blockquote>

## How does it work?

PostCSS alone doesn’t actually do anything on its own – it parses CSS into an Abstract Syntax Tree (AST) represented in JSON and then stringifies it back into CSS. What enables its power are plugins, which get the parsed version and can transform it freely with JavaScript. Here's a visual representation:

```
original.css -> Parser -> Plugins -> Stringifier -> output.css
```

## Comparison with SASS

PostCSS provides all the features that SASS has. There is a package name [PreCSS](https://github.com/jonathantneal/precss) which does exactly the same.

Best thing about PostCSS is it can run after a SASS compilation, applying its transforms to the resulting CSS. This makes it very easy to integrate it even into SASS-heavy projects.

New projects can use just the PostCSS with plugin like PreCSS. It allows us to replace SASS features found in new web standards, such as variables, and leave those available exclusively in SASS, such as nesting. 


## Does it require a lot of setup?

It depends. If your project already has Webpack/Gulp/Grunt or some other tool, you can start working with PostCSS after installation.

If it doesn’t work, example config _(using webpack)_:

```
// install postcss with autoprefixer
npm install --save-dev postcss autoprefixer

// add webpack loader
{
  key: 'style',
  test: /\.s?css$/,
  loader: ExtractTextPlugin.extract('css!sass!postcss')
}

// define plugins (in webpack's module.exports)
postcss: [
  require(‘autoprefixer’)
]
```

## Keeping our stack tight

Because it’s very easy to add new plugins, it’s also difficult to enforce a single stack through many projects. If stacks differ, new developers need to learn new syntaxes and features This is both the greatest strength and the greatest drawback of PostCSS if looking from a company’s perspective.

## PostCSS pros

* Allows for the usage of the most current web standards
* Enables modular, more maintainable CSS
* Allows picking a setup catered to one’s needs
* Easy to write own plugins
* Easy to add to existing Webpack/Gulp/Grunt/whatever setup
* Can work alongside SASS
* Faster compilation than SASS

## PostCSS cons

* One more tool
* Doesn’t support Rails Asset Pipeline
* Requires a task runner/module bundler to work
* Harder to maintain across different projects

## Conclusion

PostCSS provides a set of extremely useful features that would make every CSS codebase more maintainable, and it can work alongside SASS or even replace it.

## P.S. Can we send you an email?

Once a week or so we send an email with our best content. We never bug you; we just send you our latest piece of content. [Subscribe Here](#subscribe).
