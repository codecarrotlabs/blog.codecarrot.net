---
layout: post
author: yashumittal
title: Why We Use PostCSS at CodeCarrot
date: 2017-07-02 12:00:00
categories: code
tags: css postcss css3
description: PostCSS provides a set of extremely useful features that would make every CSS codebase more maintainable and it can work alongside SASS or replace it.
image: why-we-use-postcss-at-codecarrot.jpg
---

<blockquote>
PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more. //github.com/postcss/
</blockquote>

## How does it work?

PostCSS alone doesn’t actually do anything on its own – it parses CSS into an Abstract Syntax Tree (AST) represented in JSON and then stringifies it back into CSS. What enables its power are plugins, which get the parsed version and can transform it freely with JavaScript. Here's a visual representation:

`original.css -> Parser -> Plugins -> Stringifier -> output.css`

## Comparison with SASS

PostCSS can provide all the features that SASS has. There is even a package which does exactly that – it’s called PreCSS.

A nice thing about PostCSS is, however, that it can very well coexist with SASS. It can run after a SASS compilation, applying its transforms to the resulting CSS. This makes it very easy to integrate it even into SASS-heavy projects.

New projects can use just the PostCSS with plugins providing SASS-like features, like nesting or mixins. It allows us to replace SASS features found in new web standards, such as variables, and leave those available exclusively in SASS, such as nesting. This is beneficial, because we can use as much CSS and as little other languages/syntaxes as possible, which would make it easier for developers not familiar with SASS.


## Does it require a lot of setup?

It depends. If your project already has Webpack/Gulp or some other JavaScript-y automatization tool – good job, you're about 10 minutes away from having a working PostCSS installation. This will be the case most of the time, since most projects already use some kind of automation for transpiling ES6 with Babel.

If it doesn’t have anything like that – sorry, you have to get one to use PostCSS.

Example config (using webpack):

```
// install postcss with autoprefixer
npm install --save-dev postcss autoprefixer

// add webpack loader
{
  key: 'style',
  test: /\.s?css$/,
  loader: ExtractTextPlugin.extract('css!postcss!sass')
}

// define plugins (in webpack's module.exports)
postcss: [
  require(‘autoprefixer’)
]
```

That’s it!

## Keeping our stack tight

Because it’s very easy to add new plugins, it’s also difficult to enforce a single stack through many projects. If stacks differ, new developers need to learn new syntaxes and features, which may prove troublesome in an environment with a high turnover. This is both the greatest strength and the greatest drawback of PostCSS if looking from a company’s perspective.

## PostCSS pros

* Allows for the usage of the most current web standards
* Enables modular, more maintainable CSS
* Allows picking a setup catered to one’s needs
* Easy to write own plugins
* Easy to add to existing Webpack/Gulp/whatever setup
* Can work alongside SASS
* Faster compilation than SASS

## PostCSS cons

* One more tool
* Doesn’t support Rails Asset Pipeline
* Requires a task runner/module bundler to work
* Harder to maintain across different projects

## Conclusion

With great power comes great responsibility. PostCSS provides a set of extremely useful features that would make every CSS codebase more maintainable, and it can work alongside SASS or even replace it. Nonetheless, a company wanting to adopt it needs solid agreements or a centralized configuration to make the setup consistent across a bunch of different projects to ensure effortless onboarding of new developers.

## Hepfull Links:

1.  [www.youtube.com/watch?v=-_gIKdHYP3E](//www.youtube.com/watch?v=-_gIKdHYP3E)
2.  [postcss.org](//postcss.org/)

## P.S. Can we send you an email?

Once a week or so we send an email with our best content. We never bug you; we just send you our latest piece of content. [Subscribe Here](#subscribe).
