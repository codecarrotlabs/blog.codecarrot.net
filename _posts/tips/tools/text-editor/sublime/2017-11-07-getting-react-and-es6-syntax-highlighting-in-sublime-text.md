---
layout: post
author: yashumittal
title: Getting React and ES6 Syntax Highlighting in Sublime Text
date: 2017-11-07 23:30:00
categories: tips
tags: tips sublime-text text-editor react es6 react-native
description: Lately I've been writing a lot of React in Sublime and one of the most difficult aspects to deal with has been the improper syntax highlighting.
image: 01_basic_javascript_syntax_highlighting-1.png
---

Lately I've been writing a lot of React in Sublime and one of the most difficult aspects to deal with has been the improper syntax highlighting. When writing React components the basic JavaScript syntax highlighting that I was using would consistently highlight parts of my code incorrectly, as it didn't know how to deal with the JSX. Specifically it would have issues when I closed my HTML tag on a separate line as seen in the image below.

![Without using Syntax highlighting](//blog.codecarrot.net/images/01_basic_javascript_without_syntax_highlighting.png)

Fortunately my issue was solved when I read through the [BabelJS page](//www.babeljs.com/) today and discovered their [babel snipppet](//packagecontrol.io/packages/Babel%20Snippets) package! I immediately transitioned over to Sublime and installed the package using the following steps:

1. Open the "Command Palete..." via `cmd + shft + p`.
2. Select the `Package Control: Install Package` option, which can be found by typing "install".
3. Type in "Babel" and select the "Babel" package to install.

After the babel-sublime package is installed there are still a couple of options to configure. Specifically I set Babel as my default syntax highlighter for `.js` and `.jsx` files by performing the following steps.

1. Open a file with the .js or .jsx extension.
2. Select  `View -> Syntax -> Open all with current extension as... -> Babel -> JavaScript (Babel)`.
![list-of-different-js-syntax-highlighting-option](//blog.codecarrot.net/images/list-of-different-js-syntax-highlighting-option.png)
3. Repeat these steps for other file extensions.

The babel-sublime package also comes with two color themes to choose from as well. It has a "Monokai Phoenix" theme, as well as a "Next" theme which can both be seen below in that order. Both images show the updated syntax highlighting which gracefully handles the closing HTML tag correctly. Coding in React and ES6 never looked better!

![Using Syntax highlighting](//blog.codecarrot.net/images/01_basic_javascript_syntax_highlighting-1.png)
