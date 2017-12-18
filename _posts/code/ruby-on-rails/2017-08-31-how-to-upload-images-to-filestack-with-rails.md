---
layout: post
author: yashumittal
title: How To Upload Images To Filestack With Rails
date: 2017-08-31 22:18:00 +0530
categories: code
tags: ruby-on-rails ruby rails filestack images
description: Filestack (formerly Filepicker) is a service that allows users to store files in a cloud. Here’s how to use Filestack in a Rails app.
image: how-to-upload-images-to-filestack-with-rails.png
---

Filestack (formerly Filepicker) is a service that allows users to store files in a cloud. It has a free plan with some monthly limits: 250 uploads, 500 transformations and 3GB bandwidth. Those numbers get higher if you select one of paid plans. You can also use external storage (S3, Dropbox…), though you have to select any paid plan to enable this feature. Here’s how to use Filestack in a Rails app.

I assume you have:

* Account created on [//www.filestack.com/](//www.filestack.com/), API key obtained (it’s generated automatically after registration)
* Rails app with User model created ([rails-devise](//github.com/RailsApps/rails-devise) is a good starting point)

## What you will use:

* [Filepicker-rails](//github.com/Ink/filepicker-rails) - gem to make uploads easier to implement (to quickly see how it works you can use this repository or just follow the steps below)

Pros:

* Simple to implement
* Files can be uploaded directly from many different sources such as Google Drive, Facebook, Instagram, etc.
* Images can be cropped before upload

## Cons:

The only gem I found isn’t updated very often, last commit was in October 2015

## Step 1

Add filepicker-rails gem to your gemfile:

```
gem 'filepicker-rails'
```

## Step 2

Include Filestack js file in your layout:
```
<%= filepicker_js_include_tag %>
```

## Step 3

Add your Filestack API key to config/application.rb:

```
config.filepicker_rails.api_key = ENV['FILESTACK_API_KEY']
```

## Step 4

Add helpers to your ApplicationController:

```
helper FilepickerRails::Engine.helpers
```

## Step 5

Create a migration to add a string column which will store uploaded files urls, e.g. users’ avatars:

```
class AddAvatarUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :avatar_url, :string
  end
end
```

## Step 6

Implement the form used to upload a file:

```
<%= form_for @user do |f| %>
  <div>
    <%= f.label :avatar_url, 'Upload Your Avatar:' %>
    <%= f.filepicker_field :avatar_url, dragdrop: true %>
  </div>
  <%= f.submit %>
<% end %>
```

You can read about different filepicker_field options [here](//www.rubydoc.info/github/Ink/filepicker-rails/master/FilepickerRails/FormHelper).

Modal that will allow you to upload your file looks like that:

![Filestack Desktop V3 view](//cdn.codecarrot.net/images/filestack-desktop-initial-view.jpg)

If you use devise, remember to properly configure permitted parameters in your ApplicationController (this works for devise 3, there’s a [different syntax](//github.com/plataformatec/devise#strong-parameters) in devise 4):

```
before_action :configure_permitted_parameters, if: :devise_controller?

protected

def configure_permitted_parameters
  devise_parameter_sanitizer.for(:sign_up) << :avatar_url
end
```

## Step 7

In order to display an avatar after submitting the form, you can use this helper:

```
<%= filepicker_image_tag @user.avatar_url %>
```

Options are in the [documentation](//www.rubydoc.info/github/Ink/filepicker-rails/master/FilepickerRails/ApplicationHelper#filepicker_image_tag-instance_method).

## Summary

The filepicker-rails gem makes uploading files to Filestack easy. Files can be selected from one of the very numerous sources and images can be cropped before upload. Unfortunately, since the gem doesn’t seem to be actively maintained there’s risk of encountering some bugs.
