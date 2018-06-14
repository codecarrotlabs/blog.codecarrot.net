---
layout: post
author: yashumittal
title: How To Configure Paranoia Gem With Ruby on Rails
date: 2017-09-05 16:13:10 +0530
categories: code
tags: ruby-on-rails ruby rails paranoia gem paranoia-gem
description: Paranoia is a gem that allows you to hide records instead of destroying them. You can recover them later if you want. It’s a very simple (one file with about 300 lines of code) reimplementation of ActsAsParanoid.
image: https://i.imgur.com/tZW9gIp.jpg
---

Paranoia is a gem that allows you to hide records instead of destroying them. You can recover them later if you want. It’s a very simple reimplementation of [ActsAsParanoid](https://github.com/ActsAsParanoid/acts_as_paranoid).

I assume you have a Rails app with User, Conversation and Message models created, with basic views added with conversations showing authors and messages

We will use [paranoia](https://github.com/rubysherpas/paranoia) gem.

**Pros**

* Very simple gem
* Easy to debug (only one file)
* It does what it claims to do
* Actively maintained
* Nice documentation

**Cons**

* Sometimes unintuitive
* In some cases it’s probably better to implement your own solution

## Step 1

Add paranoia gem to your Gemfile:

```ssh
gem 'paranoia', git: 'git@github.com:rubysherpas/paranoia.git', branch: 'core'
```

You add it like that because the newest release doesn’t include some features that will be used in this tutorial.

## Step 2

Now, let’s say that you want to delete an user, but his messages should still be displayed with his name as an author (in your view you’ll have something like message.user.name). If you removed that user, when trying to display his messages you would get an error:

```ssh
undefined method `name` for nil:NilClass
```

In order to avoid that, instead of destroying records you should mark them as deleted. It’s called soft deleting and it’s what paranoia gem is all about.

To enable this behaviour for User model, add this line to it:

```rb
class User < ActiveRecord::Base
  acts_as_paranoid
  [...]
```

You also need to generate and run this migration:

```rb
rails generate migration AddDeletedAtToUsers deleted_at:datetime:index
rake db:migrate
```

From now on, calling destroy on any user will set deleted_at to a current date instead of actually destroying the record.

## Step 3

But, if you try to softly delete an user and display his messages, you’ll still get the same error as before. That’s because paranoia gem changes the default_scope of a model, so every query will treat softly deleted records as if they weren’t there (WHERE "`users`"."`deleted_at`" `IS NULL` will be added to queries). Of course if you love your default_scope and you don’t ever want it to change you can achieve that:

```rb
# not available in the newest release, you have to add paranoia gem as in step 1
acts_as_paranoid without_default_scope: true
```

You can also access your softly deleted user record in other ways:

* by overriding *user* method in *Message* model:

  ```rb
    def user
      User.unscoped { super }
    end
  ```

* by modifying belongs_to relation in Message model:

  ```rb
    belongs_to :user, -> { with_deleted }
  ```

If you need to include or ignore softly deleted records in other places, there are several ways to do that in addition to the methods above:

* `User.with_deleted, User.without_deleted` and `User.only_deleted` scopes
* you can check if a record is softly deleted by using `user.paranoia_destroyed?` or `user.deleted?` methods

Note that if you want your indexes to ignore softly deleted records, you have to modify them as follows:

```rb
add_index :users, :some_column, where: "deleted_at IS NULL"
```

## Step 4

If you want to restore a user, use this code:

```rb
User.restore(message.user.id)
```

or

```rb
Message.user.restore
```

## Step 5

What if you want to softly delete an user and all of his messages? You can do that simply by implementing `acts_as_paranoid` for Message model (as in step 2, you also need to add a migration) and then using `dependent: :destroy`

```rb
class User < ActiveRecord::Base
  acts_as_paranoid
  has_many :messages, dependent: :destroy
  [...]
```

Note that if you didn’t implement `acts_as_paranoid` for Message model the messages would be destroyed normally and you wouldn’t be able to restore them. Also, restoring the user doesn’t restore all of his messages unless you use:

```rb
User.restore(user_id, recursive: true)
```

or

```rb
user.restore(recursive: true)
```