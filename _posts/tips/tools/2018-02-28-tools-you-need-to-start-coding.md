---
layout: post
author: yashumittal
title: Tools you need to start coding
date: 2018-02-28 13:10:15 +0530
categories: tips
tags: tips coding
description: In the tech world, there are thousands of tools that people will tell you to use. How are you supposed to know where to start?
image: https://i.imgur.com/qzGqDb9.jpg
---

In the tech world, there are thousands of tools that people will tell you to use. How are you supposed to know where to start?

As somebody who started coding relatively recently, this downpour of information was too much to sift through. I found myself installing extensions that did not really help me in my development cycle, and often even got in the way of it.

I am by no means an expert, but over time I have compiled a list of tools that have proven extremely useful to me. If you are just starting to learn how to program, this will hopefully offer you some guidance. If you are a seasoned developer, hopefully you will still learn something new.

I am going to break this article up into Chrome Extensions and VS Code extensions. I know there are other browsers and other text editors, but I am willing to bet most of the tools are also available for your platform of choice, so let’s not start a religious argument over our personal preferences.

Feel free to jump around.

## Chrome Extensions

![Chrome Extensions](https://i.imgur.com/4LrKRk9.jpg)

Now that I am a self-proclaimed web developer, I practically live in my Chrome console. Below are some tools that allow me to spend less time there:

* [WhatFont](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=en)  — The name says it all. This is an easy way of finding out the fonts that your favorite website is using, so that you can borrow them for your own projects.
* [Pesticide](https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh?hl=en)  —  Useful for seeing the outlines of your `<div>`s and modifying CSS. This was a lifesaver when I was trying to learn my way around the box-model.
* [Colorzilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en)  —  Useful for copying exact colors off of a website. This copies a color straight to your clipboard so you don’t spend forever trying to get the right RGBA combination.
* [CSS Peeper](https://chrome.google.com/webstore/detail/css-peeper/mbnbehikldjhnfehhnaidhjhoofhpehk?hl=en)  —  Useful for looking at colors and assets used on a website. A good exercise, especially when starting out, is cloning out websites that you think look cool. This gives you a peek under the hood at their color scheme and allows you to see what other assets exist on their page.
* [Wappalyzer](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=en)  —  Useful for seeing the technologies being used on a website. Ever wonder what kind of framework a website is using or what service it is hosted on? Look no further.
* [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)  —  Useful for debugging your React applications. It bears mentioning that this is only useful if you are programming a React application.
* [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)  —  Useful for debugging applications using Redux. It bears mentioning that this is only useful if you are implementing Redux in your application.
* [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)  —  Useful for making JSON look cleaner in the browser. Have you ever stared an ugly JSON blob in the face, trying to figure out how deeply nested the information you want is? Well this makes it so that it only takes 2 hours instead of 3.
* [Vimeo Repeat and Speed](https://chrome.google.com/webstore/detail/vimeo-repeat-speed/noonakfaafcdaagngpjehilgegefdima?hl=en)  —  Useful for speeding up Vimeo videos. If you watch video tutorials like most web developers, you know how handy it is to consume them at 1.25 times the regular playback speed. There are also versions for YouTube.

## VS Code Extensions

![VS Code Extensions](https://i.imgur.com/QJb6qAo.jpg)

Visual Studio Code is one of my editor of choice.

People love their text editors, and I am no exception. However, I’m willing to bet most of these extensions work for whatever editor you are using as well. Check out my favorite extensions:

* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)  —  Auto rename paired HTML tags. You created a `<p>`tag. Now you want to change it, as well as its enclosing `</p>` tag to something else. Simply change one and the other will follow. Theoretically improves your productivity by a factor of 2.
* [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)  —  CSS support for HTML documents. This is useful for getting some neat syntax highlighting and code suggestions so that CSS only makes you want to quit coding a couple of times a day.
* [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)  —  Useful code snippets. Another nice time saver. Pair this with [Emmet](https://emmet.io/) and you barely ever have to type real HTML again.
* [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)  —  Adds JavaScript Babel syntax coloring. If you are using Babel, this will make it much easier to differentiate what is going on in your code. This is neat if you like to play with modern features of JavaScript.
* [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)  —  Adds colors to brackets for easier block visualization. This is handy for those all-too-common bugs where you didn’t close your brackets or parentheses accurately.
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)  —  Integrates ESLint into Visual Studio Code. This is handy for getting hints about bugs as you are writing your code and, depending on your configuration, it can help enforce good coding style.
* [Guides](https://marketplace.visualstudio.com/items?itemName=spywhere.guides)  —  Adds extra guide lines to code. This is another visual cue to make sure that you are closing your brackets correctly. If you can’t tell, I’m a very visual person.
* [JavaScript Console Utils](https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils)  —  Makes for easier console logging. If you are like most developers, you will find yourself logging to the console in your debugging flow (I know that we are supposed to use the debugger). This utility makes it easy to create useful `console.log()` statements.
* [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)  —  Spelling checker that accounts for camelCase. Another common source of bugs is fat-thumbing a variable or function name. This spell checker will look for uncommon words and is good about accounting for the way we write things in JavaScript.
* [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)  —  Makes it easier to see when, and by whom, changes were made. This is nice for blaming the appropriate person when code gets broken, since it is absolutely never your fault.
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)  —  File path autocompletion. This is super handy for importing things from other files. It makes navigating your file tree a breeze.
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  —  Automatic code formatter. Forget about the days where you had to manually indent your code and make things human-legible. Prettier will do this for you much faster, and better, than you ever could on your own. I can’t recommend this one enough.
* [VSCode-Icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)  —  Adds icons to the file tree. If looking at your file structure hurts your eyes, this might help. There is a helpful icon for just about any kind of file you are making which will make it easier to distinguish what you are looking at.

## Conclusion

You likely have your own set of tools that are indispensable to your development cycle. Hopefully some of the tools I mentioned above can make your workflow more efficient.

Do not fall into the trap, however, of installing every tool you run across before learning to use the ones you already have, as this can be a huge time-sink.

I encourage you to leave your favorite tools in the comments below here, so that we can all learn together.
