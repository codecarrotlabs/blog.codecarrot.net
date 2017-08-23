---
layout: post
title:  How to Install Rails 5 on Linux
date:   2017-08-23 03:00:00
categories: dev ruby-on-rails
description: As a little nudge for those of you who still haven't discovered how awesome Rails is, here's how to install Rails 5 on Linux.
image: http://blog.codecarrot.net/images/148.jpeg
---

We figured we’d share those directions here, as a little nudge for those of you who still haven’t discovered how awesome Rails is.

We’ve set up guides for 3 different operating systems:

*  [Windows](/installing-rails-5-windows)
*  [Mac](/installing-rails-5-mac/)
*  Linux (you are here!)

We’re not going to mess with installing a fancy database, alternate testing frameworks, or anything like that; this is an easy, bare-bones installation that will let you try Rails and see if it’s right for you. We chose Ubuntu as the distribution to demonstrate for Linux, but you should be able to adapt these directions for other distros.

*  We’ll use “rvm”, the Ruby Version Manager, to install a new version of Ruby.
*  We’ll use our newly-installed Ruby tools to install the Rails library itself.
*  Lastly, since Rails includes several JavaScript-based features, we’re going to need a JavaScript runtime. So we’ll install Node.js.

First, open a terminal. If you haven’t done that before, you can click the button in the upper-left to search your computer, and type “terminal”. Click the “Terminal” application in the list of results. Once that’s done, you’ll be ready to follow along for the rest of these directions.

## Ruby Version Manager (rvm)

We need to install rvm, the Ruby Version Manager. rvm will download, compile, and install new Ruby versions for us.

But to install rvm, we first need the “curl” program. We’ll install that via a package manager. In your terminal, run this command:

`sudo apt-get install curl`

You’ll need to provide your system password. When the installation is complete, you’ll be returned to your system prompt.

Now we’re ready to install rvm. Copy and paste these two commands into your terminal:

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable
```

(Yes, that is a backslash before the “curl” command. It’s there to avoid potential version conflicts.)

rvm is now installed, but it won’t be available until you open a new terminal window. So go ahead and open a new window from the menu. Then, try running the “rvm” command all by itself. If it outputs usage information, you’ll know it’s working.

## Ruby

Now that rvm is installed, we can have it install a new Ruby version for us. From your terminal, run:

`rvm install 2.3.1`

rvm may need to install some packages that Ruby depends on. If it asks, type your system password and press Enter to continue.

When it returns to the system prompt, Ruby will be installed. But it’s not available in your terminal yet. If you type ruby -v to look at your ruby version, you’ll probably either get a message saying Ruby is NOT installed, or you’ll get an older version of Ruby. To tell rvm to use the Ruby version you just installed, and to use that version by default in the future, run:

`rvm use 2.3.1 --default`

## Setting your terminal for login shell

When you try to run the “rvm use” command, you may get an error: “RVM is not a function… You need to change your terminal emulator preferences to allow login shell.” If that happens, you’ll need to go to a search engine to figure out how to enable login shell for your terminal.

If you don’t know what terminal program you’re using, you can look in the About menu. Ubuntu comes with “Gnome Terminal” by default, so that’s what we used for this installation. So we’d type into a search engine: “gnome terminal login shell”.

Among the results, we found a page that said “you have to enable ‘Run Command as a login shell’ in the gnome-terminal ‘Profile Preferences’, reachable from the Edit menu.” So we followed the menus:

*  “Edit”
*  “Profile Preferences”
*  “Command” tab
*  Check “Run command as a login shell”
*  Click “Close”
*  Open another new terminal window so it takes effect

After that, we ran `rvm use 2.3.1 --default` again, and it worked.

Of course, these particular directions will only help you if you’re using Gnome Terminal. If you’re using a different program, try your own web search.

## Rails

Now it’s time to install Rails. Rails comes as a Ruby “gem”. A gem is a library, a collection of reusable code, that can be automatically downloaded and installed on your system, using the “gem” tool. In your terminal, run:

`gem install rails --version 5.0.0`

The “gem” program will download and install that version of the Rails gem, along with all the other gems Rails depends on.

## Node.js

There’s one last thing we need to take care of… Some libraries that Rails depends on require a JavaScript runtime to be installed. Let’s install Node.js so that those libraries work properly. In your terminal, use your package manager to install the nodejs package:

`sudo apt-get install nodejs`

You’ll be prompted for your system password again, and then Node.js will be installed.