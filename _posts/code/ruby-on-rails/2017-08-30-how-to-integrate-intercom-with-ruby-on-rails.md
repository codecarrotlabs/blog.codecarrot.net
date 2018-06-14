---
layout: post
author: yashumittal
title: How To Integrate Intercom With Ruby on Rails
date: 2017-08-30 11:40:00 +0530
categories: code
tags: ruby-on-rails integration ruby rails
description: Intercom is a popular marketing and consumer communication tool. Intercom integration in your Ruby on Rails app is not complicated and, thanks to this guide, you should be able to do it in no time.
image: https://i.imgur.com/cM3CfRC.png
---

Intercom is a popular marketing and consumer communication tool. With the help of this guide you will be able to integrate intercom no time.

I assume you have:

* User model configured, or
* `config.include_for_logged_out_users = true` set in Intercom configuration (for more info see Step 3)

We will use [Intercom-rails](https://github.com/intercom/intercom-rails) gem.

## Pros & Cons

### Pros

* Easy to integrate
* Multipurpose - in-app live chat, marketing automation, customer feedback, customer support, client tracking
* Many integrations available - Facebook, Github, Mailchimp, Salesforce, Mixpanel, Stripe, Hipchat, Zendesk, Slack, Zapier, Webhooks
* Great documentation

### Cons

* Pricing - can become expensive in certain scenarios - few different plans to choose from (Live Chat, Marketing Automation, Customer Feedback, Customer Support), pricing based on number of tracked customers

## Step 1

Obtain app id from [intercom.io](https://www.intercom.io/).

## Step 2

Add intercom-rails gem to your Gemfile:

```gemfile
gem 'intercom-rails'
```

Then run

```ssh
bundle install
```

Use your app id to generate a config file

```rb
rails generate intercom:config APP-ID
```

## Step 3

Initializer is saved as `config/initializers/intercom.rb`, here is where all the customization is done.

```rb
config.app_id = ENV["INTERCOM_APP_ID"] || "sOm3th1ng"
```

Remember to remove hard coded APP-ID from initializer, it should be stored either in git ignored config file or as environmental variable.

By default, intercom script is added on every page where current user can be identified, this behavior can be changed by either limiting chat insertion for a specific controller:

```rb
skip_after_action :intercom_rails_auto_include
```

Or chat can also be added for unidentified users:

```rb
config.include_for_logged_out_users = true
```

## Step 4

Further customization. Intercom offers some really interesting options.

Method that defines current user can be associated with Intercom via:

```rb
config.user.current = Proc.new { some_method }
```

Custom data can be associated with user:

```rb
config.user.custom_data = {
 plan: Proc.new { |user| user.plan.name },
 happy_user: Proc.new { |user| user.happy? }
}
```

Users can be grouped in order to treat them as if they were from a single company:

```rb
config.company.current = Proc.new { company_method }
```

Intercom by default adds button to active chat, to override this behaviour add:

```rb
config.inbox.style = :custom
```

Now each element with id of Intercom will act as an activator, further customization of CSS selector can be achieved with:

```rb
config.inbox.custom_activator = '.intercom-link'
```

Check out their [documentation](https://docs.intercom.io/) to know more about Intercom integration.