---
layout: post
author: yashumittal
title: Patterns that Will Help You Be a Better Developer
date: 2017-11-10 01:17:40 +0530
categories: code
tags: coding coding-pattern developer
description: Check out how patterns will help you keep your code clean and effective. In today’s fast moving world deadlines can be a real nightmare, especially for devs who have to focus on the code they’re writing to keep its quality high.
image: stairpath-565865-edited.jpg
---

In today’s fast moving world deadlines can be a real nightmare, especially for devs who have to focus on the code they’re writing to keep its quality high. One solution to help devs deal with time pressure, while keeping the code clear of bugs and easy to test, is to use patterns: methodologies for creating code that solve the most common problems in development. In this article we describe the ones we use and see the most.

## Why do you need to use patterns?  

Writing code is not really hard. However writing code which is easy to read, easy to maintain, easy to extend and performance-friendly is something that every developer struggles to achieve. Patterns exist to help you quickly deal with problems that almost every developer encounters.

## Patterns that we work with the most

### Repositories pattern

In the world of Ruby on Rails, Active Record - as a default ORM library - is used so widely, that sometimes it’s hard, especially for new developers, to think beyond it. However, if you’ve ever found yourself in a situation where there’s more than one source of truth - and by that i mean more than one database where you store the data - be it another database from external api, XML/JSON documents, CSV files, etc...

As it is, ActiveRecord is certainly a great library that will do its job for the early stages of an application’s life (or even longer). However as the time passes and a more customized approach on the data storage level becomes necessary, this is where this pattern comes in handy.

![Untitled_drawing_2.png](//blog.codecarrot.net/images/78ihjr64-Untitled_drawing_2.png)

Thanks to this division, we can easily manage business logic without mixing it with the data persistence layer. If there are any changes involving where we store our data, then we can change it without worrying about how to deal with ActiveRecord.

Another advantage is better quality of SQL queries. It’s lovely how ActiveRecord helps us easily write only ruby code which is translated directly to SQL. However there are places where it might not meet our expectations. If they’re more specific than simply returning a row or creating a new one, then it’s likely that they can be optimized.

## View objects

Simple and very helpful, view objects are for cleaning up models and views with unnecessary functions/complex code, which are only meant for display. It’s worth using in places with heavy views where you need to add a lot of new functions to cover that specific page. Dashboard would be a good example:

```rb
def DashboardViewObject
  def initialize(project, raports)
    @project = project
    @raports = raports
  end

  def raports_available?
    @raports.recent.any?
  end

  def projects_with_people
    @project_with_users ||= "#{project.name} owned by #{project.owner}"
  end

  def due_raports
    @due_raports ||= "Due date passed #{(raports.due_date - Date.today).to_i} days ago"
  end
end
```

Instead of writing complex views, you can handle the logic meant only for this specific part of a view. You can reduce the amount of IF’s in the page and easily stub the data for these classes in the tests to run them fast.

## Form objects

Whenever you’re dealing with complicated forms, you need to create a lot of nested attributes from the form data or you have one model which should have different validations on specific pages - this is the perfect place to use a form object pattern. It’s basically replacing the model instance in a form with a specially crafted object that represents the object, but is not directly it. This way we can easily customize every form, even if they’re for the same model.

There are 3 common approaches for Form Object creation:

* Using the [reform gem](//github.com/apotonick/reform)
* Using the [virtus gem](//github.com/solnic/virtus)
* Creating a class with `ActiveModel::Model` included
This is another great way to extract business logic from views and controllers. You can use these objects as you would use ActiveRecord models and still gain the advantage of available customizations and better readability.

# #Query objects

Another simple yet very useful pattern. If you ever find yourself in situations where you need to retrieve a lot of related/nested data with a single query and a 5th method in a scope still doesn’t solve your issue - then think of writing pure SQL wrapped in a PORO (plain old ruby object). This way you can optimize the call in terms of speed and  easily perform a more customized approach. There are some great posts covering these topics in detail in our blog that I highly encourage you to read: [thinking in sql](/why-i-went-back-to-thinking-in-sql) and more about [query objects](/sql-query-result-model-part-2).

## Service Objects

Service objects are crafted with solely one thing in mind - to execute one thing, a specific part of business logic, to keep controllers and models nice and clean. Instead of adding yet another method to your already fat model or extending your controller method which you need to scroll to find a place where you can fit it in - move that business logic inside a new poro object and simply execute it from within the desired place. There’s a great blogpost from Tomasz Pewiński regarding service objects that I highly recommend. [Check out this blog](/service-objects-in-rails-will-help-you-design-clean-and-maintainable-code-heres-how) on How service objects in Rails will help you design clean and maintainable code?

## Wrapping up

In summary, patterns are not the holy grail of problem solving. They’re only good if used well. The Rails Way™ is , of course, great - it can help us develop apps blazingly fast. But when an app grows to the point where it’s becoming messy, correct patterns are often a must. It will surely help you maintain the app, make writing tests easier, and help you develop your application in a confident way.
