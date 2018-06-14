---
layout: post
author: yashumittal
title: How To Upload Images To Filestack With Ruby on Rails
date: 2017-08-31 22:18:00 +0530
categories: code
tags: ruby-on-rails ruby rails integration
description: Filestack (formerly Filepicker) is a service that allows users to store files in a cloud. Here’s how to use Filestack in a Rails app.
image: https://i.imgur.com/RylJejq.png
---

Filestack _(formerly Filepicker)_ is a service that allows users to store files in a cloud. It has a free plan with some monthly limits: 250 uploads, 500 transformations and 3GB bandwidth. Those numbers get higher if you select one of paid plans. You can also use external storage (S3, Dropbox…), though you have to select any paid plan to enable this feature. Here’s how to use Filestack in a Rails app.

I assume you have:

* Account created on [filestack.com](https://www.filestack.com/), API key obtained (it’s generated automatically after registration)
* Rails app with User model created _([rails-devise](https://github.com/RailsApps/rails-devise) is a good starting point)_

## What you will use:

* [Filepicker-rails](https://github.com/Ink/filepicker-rails) - gem to make uploads easier to implement (to quickly see how it works you can use this repository or just follow the steps below)

## Pros:

* Simple to implement
* Files can be uploaded directly from many different sources such as Google Drive, Facebook, Instagram, etc.
* Images can be cropped before upload

## Cons:

The only gem I found isn’t updated very often, last commit was in October 2015

## Step 1

Add filepicker-rails gem to your gemfile:

```gemfile
gem 'filepicker-rails'
```

## Step 2

Include Filestack js file in your layout:

```rb
<%= filepicker_js_include_tag %>
```

## Step 3

Add your Filestack API key to config/application.rb:

```rb
config.filepicker_rails.api_key = ENV['FILESTACK_API_KEY']
```

## Step 4

Add helpers to your ApplicationController:

```rb
helper FilepickerRails::Engine.helpers
```

## Step 5

Create a migration to add a string column which will store uploaded files urls, e.g. users’ avatars:

```rb
class AddAvatarUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :avatar_url, :string
  end
end
```

## Step 6

Implement the form used to upload a file:

```rb
<%= form_for @user do |f| %>
  <div>
    <%= f.label :avatar_url, 'Upload Your Avatar:' %>
    <%= f.filepicker_field :avatar_url, dragdrop: true %>
  </div>
  <%= f.submit %>
<% end %>
```

You can read about different filepicker_field options [here](https://www.rubydoc.info/github/Ink/filepicker-rails/master/FilepickerRails/FormHelper).

Modal that will allow you to upload your file looks like that:

![Filestack Desktop V3 view](https://i.imgur.com/H5VsTGP.jpg)

If you use devise, remember to properly configure permitted parameters in your ApplicationController (this works for devise 3, there’s a [different syntax](https://github.com/plataformatec/devise#strong-parameters) in devise 4):

```rb
before_action :configure_permitted_parameters, if: :devise_controller?

protected

def configure_permitted_parameters
  devise_parameter_sanitizer.for(:sign_up) << :avatar_url
end
```

## Step 7

In order to display an avatar after submitting the form, you can use this helper:

```rb
<%= filepicker_image_tag @user.avatar_url %>
```

To know more about the FileStack integration, head over to their [documentation](https://www.rubydoc.info/github/Ink/filepicker-rails/master/FilepickerRails/ApplicationHelper#filepicker_image_tag-instance_method) page.