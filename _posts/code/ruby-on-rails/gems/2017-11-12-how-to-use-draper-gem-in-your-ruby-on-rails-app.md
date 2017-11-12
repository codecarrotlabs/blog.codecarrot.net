---
layout: post
author: yashumittal
title: How To Use Draper Gem In Your Ruby on Rails App
date: 2017-11-12 13:24:00
categories: code
tags: ruby-on-rails ruby rails draper gems
description: Draper adds an object-oriented layer of presentation logic to your Rails application. Without Draper, this functionality might have been tangled up in procedural helpers or adding bulk to your models.
image: //blog.codecarrot.net/images/9503a57339ac09104f7d44082834e709.jpg
---

Draper adds an object-oriented layer of presentation logic to your Rails application.

Without Draper, this functionality might have been tangled up in procedural helpers or adding bulk to your models. With Draper decorators, you can wrap your models with presentation-related logic to organise - and test - this layer of your app much more effectively. 

## What we will use

* Draper gem ([https://github.com/drapergem/draper](//github.com/drapergem/draper))
* Decorator Pattern

Decorator Pattern is a design pattern which allows a developer to add an extra functionality to an object or collection of objects. It is possible to do because a decorator class wraps a decorated model and deals only with presentational issues. Also, it allows moving methods which are not related to a model strictly to separated classes make them cleaner. One of the common application is using it inside views but can be treated like an another layer of abstraction.

Draper is working on a model - view line but the idea of decorator pattern is not limited by any model or view. It is possible to decorate any class whatever you want.

* Forwardable

The [Forwardable](//ruby-doc.org/stdlib-2.3.0/libdoc/forwardable/rdoc/Forwardable.html) module provides delegation of specified methods to a designated object, using the methods [def_delegator](//ruby-doc.org/stdlib-2.3.0/libdoc/forwardable/rdoc/Forwardable.html#method-i-def_delegator) and [def_delegators](//ruby-doc.org/stdlib-2.3.0/libdoc/forwardable/rdoc/Forwardable.html#method-i-def_delegators). - from the documentation (//ruby-doc.org/stdlib-2.3.0/libdoc/forwardable/rdoc/Forwardable.html)

IMO the syntax is not clear enough but in some situation has a huge potential and could be used instead of Draper because it is a part of std-lib of ruby and easily accessible.

## Pros

* Decorate an object as well as collection of objects
* Draper's methods are not visible in a global scope
* Dividing methods into smaller files

## Cons

* The complexity of an app is increasing because we add an extra gem (but IMHO it is worth its price because we receive a cleaner design of an app).
* It requires working the activemodel-serializers-XML which was removed from Rails 5
* Now (09.05.2016), there is a lot of problems with Rails 5.0-pre
* A lack of maintainer in the project so it can cause some problems in the future, especially when new bugs are found

## How Draper works

`delegate_all or delegate`

* delegate_all allows a developer to decorate an object by all methods define inside a decorator but it is not always a good approach, in some cases better would be just the delegate method with a name of a method which allows a developer to increase a legible of code and there is a less amount of metaprogramming.
* delegate_all [https://github.com/drapergem/draper#delegating-methods](//github.com/drapergem/draper#delegating-methods)

## Step 1

Add `draper gem` to Gemfile 

## Step 2

Add a decorator class to a given class 

```rb
class ArticleDecorator < Draper::Decorator
  delegate_all

  def introduction
    object.body.split[0..16].join(' ')
  end
end
```

```rb
class AuthorDecorator < Draper::Decorator
  delegate_all

  def fullname
    object.first_name + " " + object.last_name
  end

  def created_at
    object.created_at.strftime("%a %m/%d/%y")
  end
end
```

Use `object` in order to class an instance of a model which will be decorated by your methods.

## Step 3

Do not forget about decorating your class in a controller by invoking `decorate` method on an instance of a model. Also, you can do it inside a view but it is not a good approach to a problem.

**See example below:**

```rb
class ArticlesPresenter < BasePresenter
  def initialize(model, view)
    @model, @view = model, view
  end

  def h
    view
  end

  def decorate
    model.map { |item| item.decorate }
  end

  private

  attr_accessor :model, :view
end
```

I have decorated items in a presenter which allows me to do more with a data presentation in future but you can decorate an object in a controller.

## Summary

I think draper gem is mature and allows a developer to write methods which add extra functionality to its data. Actually, one of the biggest problem of draper gem is that it is not working with Rails 5 correctly and its team has got a problem with a lack of maintainer.

It is a powerful tool, especially when a developer uses it with the presenter pattern. These two things allow a developer to make thinner controllers and models and move a logic related to presenting data in a cleaner way.