---
layout: post
author: yashumittal
title: How to Install Node.js® and NPM on Windows
date: 2017-10-30 23:52:00 +0530
categories: code
tags: coding npm nodejs windows
description: JavaScript is quickly becoming the go-to language for web developers. Front-end web developers use JavaScript to add user interface enhancements, add interactivity, and talk to back-end web services using AJAX. Web developers who work on the server-side are also flocking
image: nodejs-installer-guide-on-windows.png
---

JavaScript is quickly becoming the go-to language for web developers. Front-end web developers use JavaScript to add user interface enhancements, add interactivity, and talk to back-end web services using AJAX. Web developers who work on the server-side are also flocking to JavaScript because of the efficiencies and speed offered by JavaScript’s event-driven, non-blocking nature.

In fact, concentrating on JavaScript as your language of choice offers the opportunity to master a single language while still being able to develop “full-stack” web applications. The key to this server-side JavaScript revolution is Node.js® — a version of Chrome’s V8 JavaScript runtime engine — which makes it possible to run JavaScript on the server-side.

Node.js is also used for developing desktop applications and for deploying tools that make developing web sites simpler. For example, by installing Node.js® on your desktop machine, you can quickly convert CoffeeScript to JavaScript, SASS to CSS, and shrink the size of your HTML, JavaScript and graphic files. Using NPM — a tool that makes installing and managing Node modules — it’s quite easy to add many useful tools to your web development toolkit.

## Prerequisites

Node isn’t a program that you simply launch like Word or Photoshop: you won’t find it pinned to the taskbar or in your list of Apps. To use Node you must type command-line instructions, so you need to be comfortable with (or at least know how to start) a command-line tool like the Windows Command Prompt, PowerShell, [Cygwin](//www.cygwin.com/), or the Git shell (which is installed along with [Github for Windows](//windows.github.com/)).

## Installation Overview

Installing Node and NPM is pretty straightforward using the installer package available from the Node.js® web site.

### Installation Steps

1. **Download the Windows installer from the [Nodes.js® web site](//nodejs.org/).**
2. **Run the installer** (the .msi file you downloaded in the previous step.)
3. **Follow the prompts in the installer** (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
![node installer](//cdn.codecarrot.net/images/node_installer.png)
4. **Restart your computer.** You won’t be able to run Node.js® until you restart your computer.

### Test it!

Make sure you have Node and NPM installed by running simple commands to see what version of each is installed and to run a simple test program:

**Test Node.** To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type `node -v`. This should print a version number, so you’ll see something like this `v0.10.35`.
**Test NPM.** To see if NPM is installed, type `npm -v` in Terminal. This should print NPM’s version number so you’ll see something like this `1.4.28`.
**Create a test file and run it.** A simple way to test that node.js works is to create a JavaScript file: name it `hello.js`, and just add the code `console.log('Node is installed!');`. To run the code simply open your command line program, navigate to the folder where you save the file and type `node hello.js`. This will start Node and run the code in the `hello.js` file. You should see the output `Node is installed!`.

## How to Update Node and NPM

New versions of Node and NPM come out frequently. To install the updates, just [download the installer](//nodejs.org/download/) from the Nodejs.org site and run it again. The new version of Node and NPM will replace the older versions.

## How to Uninstall Node and NPM

You uninstall Node.js and NPM the same as you would most Windows software:

1. Open the Windows Control Panel
2. Choose the “Programs and Features” option
3. Click the “Uninstall a program” option
4. Select Node.js, and click the Uninstall link.

With Node.js and NPM installed you’ll soon be able to take advantage of the huge world of NPM modules that can help with a wide variety of tasks both on the web server and on your desktop (or laptop) machine. The NPM site lists all of the official Node packages making it easy to make the choice.
