---
layout: post
author: yashumittal
title: How To Create An Admin Panel In Rails
date: 2017-09-05 16:13:10
categories: dev ruby-on-rails
description: How to create an admin panel in Rails using these different admin panel tools like: RailsAdmin, ActiveAdmin and Administrate.
image: http://blog.codecarrot.net/images/ruby-on-rails.png
---

I did some research on admin panel tools, that is RailsAdmin, ActiveAdmin and Administrate. Every tool did its job perfectly, but there were some major differences.

## [ActiveAdmin](https://github.com/activeadmin/activeadmin)

**Pros:**

* Has its own DSL
* Application progress is pretty steady with ActiveAdmin, that means the cost of adding a new feature will most likely be the same at any point
* Recommended by CodeCarrot as a basic admin panel tool

**Cons:**

* Requires you to do some reading before you are able to create something complex
* Has a slow startup comparing to two other tools
* Doesn’t support nested relations by default, you have to write it on your own



## [RailsAdmin](https://github.com/sferik/rails_admin)

**Pros:**

* Has its own DSL
* Easy to start (after setup, there’s almost no work required to create full administration panel)
* Can use previously created Fields, Actions, Sections and so on, so if you need graphical representation of your data, there’s a big chance that someone did it already and you can use it in your app
* Provide nested relations by default, so you don’t waste time on implementing that

**Cons:**

* Much harder to learn and to do more complex stuff
* Harder to create things that are not included in base gem, modify views

## [Administrate](https://github.com/thoughtbot/administrate)

* Doesn’t have any DSL
* You can override anything without doing hacks, controllers and views are available for you to override
* Easy setup
* Easy everything
* Doesn’t provide nested relations by default
* Still pre 1.0, not ready for production

Administrate looks really promising, but at the time when I’m writing this, it’s still pre 1.0 and may change substantially, so it’s not recommended to use in production applications.

I’d love to tell you: “use RailsAdmin!” or: “use ActiveAdmin”, but unfortunately, I can’t. The tool has to be adjusted to the needs of the client, so if your client has very specific demands for admin panel (which is strange, because it’s not a CMS, it’s a panel for administrate data... but whatever), for example: “This should be on the top left, then next to it should be that, then we need a vertical line and a picture of my cat, and also I’d like to integrate it with Slack in real time”, then you probably should choose **ActiveAdmin**. It’s much easier to operate, has pretty clear syntax and there’s almost no magic happening. Prepare yourself to write nested forms.

On the other hand, if your client only wants an admin panel that works, shows data, allows to create new data, and the styling is not important (even though, in my opinion, the standard RailsAdmin looks much better than ActiveAdmin), then you can be 99% sure that **RailsAdmin** is your choice. Initial setup is really easy, after that you just have to add some kind of authentication and that’s all. You've finished your admin panel, no further work required, no nested forms needed to be written, all new models that should appear in the admin panel can be either added to the whitelist or automatically. In effect, such tasks as “add users to admin panel” will most likely take less than 5 minutes.

I won’t talk much about **Administrate**, because it’s not ready yet, but I think that in a year or so this will be the basic admin panel tool, used by every application, just like Devise right now.

You’ve probably noticed that I wrote about **nested relations** a couple of times, that’s because admin panels mostly don’t have any special logic and are pretty standard, so you’ll mostly spend time on things that are not implemented by default, that is: nested relations. You’ll have to display them in the show action, you’ll have to create forms for them in the edit/new action, you’ll have to show some kind of a summary of them in index actions. That’s the most annoying part of maintaining an admin panel, because you know it doesn’t provide any other additional value than “you don’t have to go to posts section, create a post, then move to comments section and create a comment for that post”, you can do that in one place. In my opinion that’s the biggest benefit of RailsAdmin - you don't have to do that basic stuff all the time.

[![Make your business online with a website](http://blog.codecarrot.net/images/lady-siting-and-working-on-laptop-make-business-online-with-a-website-promo.png)](http://codecarrot.net/)
