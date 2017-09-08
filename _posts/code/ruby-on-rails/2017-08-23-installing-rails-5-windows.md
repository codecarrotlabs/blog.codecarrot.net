---
layout: post
author: yashumittal
title: How to Install Rails 5 on Windows
date: 2017-08-23 01:00:00
categories: dev ruby-on-rails
description: As a little nudge for those of you who still haven't discovered how awesome Rails is, here's how to install Rails 5 on Windows.
image: http://blog.codecarrot.net/images/screen-shot-10.21.38.png
---

We figured we’d share those directions here, as a little nudge for those of you who still haven’t discovered how awesome Rails is.

We’ve set up guides for 3 different operating systems:

*  Windows (you are here!)
*  [Mac](/installing-rails-5-mac/)
*  [Linux](/installing-rails-5-linux/)

We’re not going to mess with installing a fancy database, alternate testing frameworks, or anything like that; this is an easy, bare-bones installation that will let you try Rails and see if it’s right for you.

*  We’ll use a program called “Ruby Installer” to install the Ruby programming language.
*  Then we’ll use Rubygems, a tool that’s included with our Ruby installation, to automatically download and install the Rails library.
*  We’ll install a Ruby “Development Kit” that Rails needs to work correctly.
*  Lastly, since Rails includes several JavaScript-based features, we’re going to need a JavaScript runtime. So we’ll install Node.js.

**Ready? Let’s get started!**

## Ruby

First, we need an installation of the Ruby programming language. We’re going to use a precompiled version of Ruby called Ruby Installer.

*  Download and run [Ruby Installer](http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.2.5.exe) from rubyinstaller.org. (For convenience, we linked directly to the version you need. The rubyinstaller.org site hosts its files on bintray.com.)
*  Allow the download to finish, then go to your Downloads folder, and open the “rubyinstaller” program. An installation wizard will open. Check “Add Ruby executables to your PATH”, then click Install. Wait while the installer runs, and click Finish when done.
*  To access Ruby, go to the Windows menu, click All Programs, scroll down to Ruby, and click “Start Command Prompt with Ruby”. A command prompt terminal will open. If you type `ruby -v` and press Enter, you should see the Ruby version number that you installed.

## Ruby Development Kit

At this point, we could attempt to install Rails. But some of the libraries Rails depends on need some “build tools” in order to be compiled, and Windows lacks those tools by default. (You’ll know this is happening if you see an error when attempting a Rails install: “Gem::InstallError: The `‘[gem name]’` native gem requires installed build tools.”) To fix this, we need to install the Ruby “Development Kit”, which includes those build tools.

*  Download the [Ruby Development Kit](http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe). (This download also originates from rubyinstaller.org, and is also hosted on bintray.com.)
*  When it’s done, go to your downloads folder and double-click the DevKit executable.
*  We need to specify a folder where we’re going to permanently install the DevKit. I recommend installing it in the root of your hard drive, at "`C:\RubyDevKit`". (Don’t use spaces in the directory name.)

Now we need to make the DevKit tools available to Ruby.

*  Back in your command prompt, change to the the DevKit directory. (“Directory” is another name for a folder.) Type "`cd C:\RubyDevKit`", or whatever other directory name you installed it in.
*  Next we need to run a Ruby script to initialize the DevKit setup. Type "`ruby dk.rb init`".
*  Now we’ll tell that same script to add the DevKit to our Ruby installation. Type "`ruby dk.rb install`".

The DevKit should now be available for your Ruby tools to use when installing new libraries.

## Rails

Now it’s time to install Rails. Rails comes as a Ruby “gem”. A gem is a library, a collection of reusable code, that can be automatically downloaded and installed on your system, using the “gem” tool. In your command prompt, type:

`gem install rails --version 5.0.0`

This will ensure you’re downloading the correct version of the gem. Once you press Enter, the “gem” program will download and install that version of the Rails gem, along with all the other gems Rails depends on.

## Node.js

One last thing. . . Some libraries that Rails depends on require a JavaScript runtime to be installed. Let’s install Node.js so that those libraries work properly.

*  Download the [Node.js installer](https://nodejs.org/dist/v4.4.7/node-v4.4.7-x86.msi).
*  When the download completes, visit your downloads folder, and run the “node-v4.4.7.pkg” installer.
*  Read the full license agreement, accept the terms, and click Next through the rest of the wizard, leaving everything at the default.
*  A window may pop up asking if you want to allow the app to make changes to your computer. Click “Yes”.
*  When the installation is complete, you’ll need to restart your computer so Rails can access Node.js.
*  Once your computer restarts, don’t forget to go to the Windows menu, click “All Programs”, scroll down to Ruby, and click “Start Command Prompt with Ruby”.

## P.S. Can we send you an email?

Once a week or so we send an email with our best content. We never bug you; we just send you our latest piece of content. <a href="#subscribe">Subscribe Here</a>
