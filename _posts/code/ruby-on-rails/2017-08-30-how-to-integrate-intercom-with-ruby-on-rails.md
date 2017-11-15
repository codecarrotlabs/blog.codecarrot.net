---
layout: post
author: yashumittal
title: How To Integrate Intercom With Ruby on Rails
date: 2017-08-30 11:40:00
categories: code
tags: ruby-on-rails intercom ruby rails communication marketing
description: Intercom is a popular marketing and consumer communication tool. Intercom integration in your Ruby on Rails app is not complicated and, thanks to this guide, you should be able to do it in no time.
image: integrate-intercom-with-ruby-on-rails.png
---

Intercom is a popular marketing and consumer communication tool. Intercom integration in your Ruby on Rails app is not complicated and, thanks to this guide, you should be able to do it in no time.

I assume you have:

* User model configured, or

* `config.include_for_logged_out_users = true` set in Intercom configuration (for more info see Step 3)

## What you will use

* [Intercom-rails](//github.com/intercom/intercom-rails) - gem

**Pros**

* Easy to integrate
* Multipurpose - in-app live chat, marketing automation, customer feedback, customer support, client tracking
* Many integrations available - Facebook, Github, Mailchimp, Salesforce, Mixpanel, Stripe, Hipchat, Zendesk, Slack, Zapier, Webhooks
* Great documentation

**Cons**

* Pricing - can become expensive in certain scenarios - few different plans to choose from (Live Chat, Marketing Automation, Customer Feedback, Customer Support), pricing based on number of tracked customers

**Step 1**

Obtain app id from [//www.intercom.io/](//www.intercom.io/) - 14 days trial is available, however credit card is needed.

**Step 2**

Add intercom-rails gem to your Gemfile:

```
gem 'intercom-rails'
```

Then run

```
bundle install
```

Use your app id to generate a config file

```
rails generate intercom:config APP-ID
```

**Step 3**

Initializer is saved as `config/initializers/intercom.rb`, here is where all the customization is done.

```
config.app_id = ENV["INTERCOM_APP_ID"] || "sOm3th1ng"
```

Remember to remove hard coded APP-ID from initializer, it should be stored either in git ignored config file or as environmental variable.

By default, intercom script is added on every page where current user can be identified, this behavior can be changed by either limiting chat insertion for a specific controller:

```
skip_after_action :intercom_rails_auto_include
```

Or chat can also be added for unidentified users:

```
config.include_for_logged_out_users = true
```

**Step 4**

Further customization. Intercom offers some really interesting options.

Method that defines current user can be associated with Intercom via:

```
config.user.current = Proc.new { some_method }
```

Custom data can be associated with user:

```
config.user.custom_data = {
 plan: Proc.new { |user| user.plan.name },
 happy_user: Proc.new { |user| user.happy? }
}
```

Users can be grouped in order to treat them as if they were from a single company:

```
config.company.current = Proc.new { company_method }
```

Intercom by default adds button to active chat, to override this behaviour add:

```
config.inbox.style = :custom
```

Now each element with id of Intercom will act as an activator, further customization of CSS selector can be achieved with:

```
config.inbox.custom_activator = '.intercom-link'
```

## Use Cases

Intercom can be used in four vital areas of the application.

**Live Chat**

Real-time chat - makes possible to track which users are currently visiting page and what they are doing, most frequently answered question can be saved as templates, messages can be automatically sent (e.g. when user visits specific page for the first time, when user visits site for the 3rd time). Intercom inbox informs when customer is entering a message and which team member handles the conversation.

**Marketing Automation**

Automated, targeted emails for customers. Creating rules for users messaging (e.g. user didn’t login for 1 month, user used specific part of application only once). Personalized, content rich messages - embedded images, videos, button, etc. Metrics can be created based on the effectiveness (e.g. 70% of users filled up profile page after receiving message A, 60% of users filled up profile page after receiving message B, message A performs better).

**Customer Feedback**

Gathering information about product (e.g. message asking for feedback after user stopped using application, asking for feedback about new feature just after first interaction). Lightweight replying system (thumb up / thumb down), asking users about feedback without causing too much distraction.

**Customer Support**

Customers can get in touch via inbound email or in-app messenger. Client questions handling can be assigned to a team member with greatest experience in given field. All customer data and previous conversations are stored in one place so team is always on the same page as customer. Private notes can be added to any conversation - these notes are only visible to the team, not the client.

## Summary

During this tutorial you have learned how to properly integrate and customize Intercom using a gem and example uses cases how to use it in business applications. I hope you find it helpful - feel free to comment if you have questions or like to add something.
