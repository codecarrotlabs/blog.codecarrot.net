---
layout: post
author: yashumittal
title: How to write code that speaks for itself
date: 2017-11-09 22:27:40 +0530
categories: code
tags: coding
description: The very real danger with commenting code is that it becomes outdated while the codebase rapidly evolves. And out of date comments are far worse than no comments. So what's the alternative?
image: //cdn.codecarrot.net/images/1425999552-1412068618.jpg
---

The very real danger with commenting code is that it becomes outdated while the codebase rapidly evolves. And out of date comments are far worse than no comments. So what's the alternative?

At CodeCarrot we aim for fast iterations as part of that goal we've come to the opinion that comments in code are not worthwhile. That's not to say we never comment code, but it's a guideline to write code that is easy to read.

The very real danger with commenting code is that it becomes outdated while the codebase rapidly evolves. And out of date comments are far worse than no comments. So what's the alternative?

**Self documenting code is code that speaks for itself.** The code becomes an understandable piece of text that tells stories about business objects that interact with each other in various contexts.

We've gathered our team's thoughts about how to make readable code:

## Write short methods

If you find methods starting to get longer than 5 lines it's doing too much. Try to shorten it down.

```
def process_payment(payment)
  charge_service = ChargeCustomerService.new(payment).call
  if charge_service.success?
    PaymentsMailer.notify_order_complete(payment.user)
  else
    redirect_to new_payment_url, alert: charge_service.error
  end
end

#  becomes:
def process_payment(payment)
  charge_service = ChargeCustomerService.new(payment).call
  charge_service.success? ? success(payment) : error(charge_service.error)
end

def success(payment)
  PaymentsMailer.notify_order_complete(payment.user)
end

def error(error)
  redirect_to new_payment_url, alert: error
end
```

## Carefully choosing method names

A method like #inspect is short and simple and perfectly describes what it does. Ruby is full of these kinds of methods: `Time.now`, `each`, `upcase`, `is_a?`, `instance_of`?

We've already established (step 1) that the method will do one thing, so name it by what it does. Short and sweet is the goal... Examples: `authorize_user`, `save_in_background`. If a method takes arguments it is possible to take this into account: `authorize(user)`, `json_for(product)`.

In ruby adding a `!` to a method tells you the method will modify the object it is called on.

```
title = 'Ruby Ruby Ruby Ruby!'
title.downcase!
title # => 'ruby ruby ruby ruby!'
```

Add a `?` to any method that returns true or false.

```
nil.present? # => false
nil.nil?     # => true
```

## Variable naming

Variables are a way to cheat if you weren't able to find a good name for the method. `@user = GoogleAuthService.call(security_token)` Finding the perfect name for a variable is difficult. But it will pay off the next time someone looks into the code.

## Use common design idioms

## Use Ruby’s opinions on method naming

Reuse method names like call and to_s that developers already understand from ruby. Ruby uses the call method for an executable block of code. That's why it's good practice to use the call method in a service. That way if someone comes along and sees a call method, they can already guess how it works.

## Service Objects

[Services are a great place to group logical pieces of functionality.](/service-objects-in-rails-will-help-you-design-clean-and-maintainable-code-Heres-how) In fact, inspecting the services folder of an application should tell the programmer what the application really does, which is not always obvious when looking at controllers or models.

## Decorators

Decorators let you create methods on objects that return data in only the contexts they are needed. The most common place to use a decorator is in the view.

```
class ProductDecorator < Draper::Decorator
  def short_title
    object.title.truncate_words(5)
  end
end
```

## Readability > Optimization

Optimization is great. In databases and other places where it actually makes a difference to response times. Premature optimization: you don't know if it will actually make a difference. Skipping a more verbal series of steps for a few shortcuts might shave off some milliseconds, but it adds minutes to the next time you try debug what you wrote.

## Writing specs

Testing code properly will be a guide to future developers when they approach your codebase. They'll get an overview of the flow of the application. The same ideas with improving code readability apply to writing specs!

Focus on contexts in tests. They are useful for separating specific behaviors and conditions in the program’s flow.

```
describe "Admin dashboard" do
  let(:admin) { create :user, :admin }

  context "with a new notification" do
    let(:notification) { create :notification }

    it "displays the notice" do
      log_in_admin
      visit admin_root_path
      expect(page).to have_content 'New notification'
      expect(page).to have_content notification.title
    end
  end
end
```

The naming in each block is important. When the test fails it will read in a way that makes sense: Failed: Admin dashboard with a new notification displays the notice.

## Use language style guides

At [CodeCarrot](//www.codecarrot.net/) we use automated checking of our style with [Thoughtbot's hound which uses rubocop](/how-rubocop-can-ease-your-code-review-pains). If that wasn't enough our code reviews not only check code quality but also code readability.

There are style guides for:

* [coffeescript](//github.com/polarmobile/coffeescript-style-guide)
* [rspec](//betterspecs.org/)
* [css/sass](//github.com/styleguide/css)
* [haml](//blog.rivalfox.com/haml-best-practices/)
* [ruby](//www.caliban.org/ruby/rubyguide.shtml)
