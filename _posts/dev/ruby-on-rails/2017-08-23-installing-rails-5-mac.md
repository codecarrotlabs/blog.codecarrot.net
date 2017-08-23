---
layout: post
title:  How to Install Rails 5 on Mac
date:   2017-08-23 01:00:00
categories: dev ruby-on-rails
description: As a little nudge for those of you who still haven't discovered how awesome Rails is, here's how to install Rails 5 on Mac.
image: http://blog.codecarrot.net/images/screen-shot-22.41.17.png
---

We figured we’d share those directions here, as a little nudge for those of you who still haven’t discovered how awesome Rails is.

We’ve set up guides for 3 different operating systems:

*  [Windows](/installing-rails-5-windows)
*  Mac (you are here!)
*  [Linux](/installing-rails-5-linux/)

We’re not going to mess with installing a fancy database, alternate testing frameworks, or anything like that; this is an easy, bare-bones installation that will let you try Rails and see if it’s right for you.

*  We’ll use Homebrew, a software package installer, to install some libraries that both Ruby and Rails rely on.
*  Then we’ll use “rvm”, the Ruby Version Manager, to install a new version of Ruby. Macs already come with a version of Ruby installed, but it’s usually a little out of date. rvm will install an up-to-date version alongside your existing version.
*  Lastly, we’ll use our newly-installed Ruby tools to install the Rails library itself.

First, you’ll need to open a terminal. If you haven’t done this before, visit your Applications folder in the Finder, then open the “Utilities” folder, and double-click the “Terminal” app. Once that’s done, you’ll be ready to follow along for the rest of these directions.

## Homebrew

Installing Rails requires several software packages. And Homebrew, the package manager, can automatically download and install these packages for us. So let’s start by installing Homebrew.

Copy and paste this Ruby command into your terminal, then hit the Return key to run it:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

(Macs actually come with a version of Ruby pre-installed. It’s a bit outdated, but it’s recent enough to install Homebrew for us.)

When the install finishes, you’ll see the dollar sign prompt again. Now it’s time to install our first Homebrew package. For security reasons, we’re going to need an encryption tool named “gpg”, so let’s install that. In your terminal, run:

`brew install gpg`

Wait a bit, and when it returns to the command prompt, the gpg software will be installed.

## Ruby Version Manager (rvm)

And now we’re ready to install rvm, the Ruby Version Manager. rvm will download, compile, and install new Ruby versions for us.

Copy and paste these two commands into your terminal:

```
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable
```

(Yes, that is a backslash before the “curl” command. It’s there to avoid potential version conflicts.)

rvm is now installed, but it won’t be available until you open a new terminal window. So go ahead and open a new window from the menu. Then, try running the “rvm” command all by itself. If it outputs usage information, you’ll know it’s working.

## Ruby

Now that rvm is installed, we can have it install a new Ruby version for us. Run this command from your terminal:

`rvm install 2.3.1`

When it returns to the system prompt, Ruby will be installed. But it may not be available in your terminal yet. To tell rvm to use the Ruby version you just installed, and to use this version by default in the future, run this command in your terminal:

`rvm use 2.3.1 --default`

## Rails

Now it’s time to install Rails. Rails comes as a Ruby “gem”. A gem is a library, a collection of reusable code, that can be automatically downloaded and installed on your system, using the “gem” tool. In your command prompt, run:

`gem install rails --version 5.0.0`

The “gem” program will download and install that version of the Rails gem, along with all the other gems Rails depends on.