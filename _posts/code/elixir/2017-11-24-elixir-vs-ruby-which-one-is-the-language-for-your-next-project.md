---
layout: post
author: yashumittal
title: Elixir vs Ruby - Which One is the Language for Your Next Project?
date: 2017-11-24 13:59:50 +0530
categories: code
tags: coding elixir ruby web-development
description: RoR is a trusted technology. Elixir is the new, hot solution. RoR is great for fast prototyping, and Elixir for hardware efficiency. Which is better for you?
image: https://cdn.codecarrot.net/images/applesandoranges-167668-edited.jpg
---

Ruby is the one of the main language we use for web development at [CodeCarrot](//www.codecarrot.net/). It’s already solid on its own, but gets even better with Ruby on Rails - a great framework that had a major influence on web development. Still, life goes on and the whole tech industry keeps moving forward. New languages are invented, new frameworks are created and different architectures gain popularity. The Ruby community is looking towards Elixir, a language based on the Erlang VM - the language that helped WhatsApp build their product. As an app owner, you’re probably wondering which language to choose for your new project. This article aims to shed some light on the pros and cons of both Ruby and Elixir.

## Elixir and Ruby - a comparison

Elixir is built on top of the Erlang VM (virtual machine). The language itself was invented and co-created by José Valim, a well-known Ruby developer and creator of many great gems (libraries in Ruby parlance), such as Rails or Devise. The Erlang VM is over 30 years old. It was created by Ericsson to handle large numbers of concurrent connections - a must for the telecom industry. The solution had to be fault-tolerant, reliable and offer high concurrency at the same time.

José created Elixir because he was tired of improving the performance of Rails applications in multicore environments. Elixir already has many great libraries such as Phoenix, a tool that helps you build web applications that are fault-tolerant and perform well. At the same time, Phoenix makes it quick and easy to implement new features and write maintainable code.

Ruby was created back in 1993 by Yukihiro Matsumoto. His main objective wasn’t to create a fast language, but to make developer happiness his top priority. A couple of years later David Heinemeier Hansson created the Ruby on Rails framework that changed how we write web applications forever. It allowed developers around the globe to work much faster and was a breath of fresh air at a time when most web development was done in Java EE or PHP - neither of which were really known for their good quality or development speed.

## Pros of Elixir:

### 1. Battle-proven solution

Elixir is based on the Erlang VM (BEAM). It’s one of the oldest virtual machines in the world, but remains broadly used. It’s actually older than the Java VM (1994) or the C# VM (2000). Erlang and Erlang VM are a the go-to solution for messaging systems or applications that have to manage a lot of persistent connections.

### 2. Performance

Elixir is a compiled language, which makes it faster than Ruby. Is it comparable to Node.js? It’s similar performance-wise, but since most of the code runs concurrently, it’s more difficult to write blocking code in CPU-bound applications. Node.js makes use of the JavaScript event loop - it blocks the whole Node.js process when you have your code calculating something. That’s a clear advantage of Elixir over both Ruby and Node.js, especially when speed matters.

### 3. OTP

The Open-Telecom Platform (OTP) is a set of tools that makes writing concurrent programs easy and fault-tolerant by providing a generic framework on top of which you can write your applications. It makes extensive use of actor model concurrent programming - you may know it from other popular libraries such as [Celluloid](//github.com/celluloid/celluloid#motivation) or [concurrent-ruby](//github.com/ruby-concurrency/concurrent-ruby#general-purpose-concurrency-abstractions). This makes Elixir great at handling a lot of concurrent connections at once.

## Cons of Elixir:

### 1. Lack of talent on the market

Because Elixir is still a fresh programming language, there may not be too much talent on the market with expertise in it. Nonetheless, most Ruby developers can be up and running with Elixir in around a week or two. This should be enough time for most programmers to be able to build CRUD applications and implement basic functionalities.

### 2. Functional programming paradigm

It’s not a bad thing per se that Elixir is based on the functional paradigm but, since most people program in object-oriented languages such as Ruby, Java, C# or Python, it may be harder for them to adjust to this new way of thinking. Functional languages aren’t better or worse - they’re just different.

### 3. Smaller ecosystem

Because Elixir is relatively young, there are fewer libraries around for it than for Ruby. This means that you might have to write features from scratch that you would get by simply importing a gem in Ruby. Most basic functionalities are already written and can be re-used, but some libraries may still be missing.

## Pros of Ruby:

### 1. Really fun to write

Ruby was created with developer happiness in mind. Because of this, it’s still fun to write Ruby code, even after so many years. Reading well-written Ruby code is also a pleasure.

### 2. Ruby on Rails

Ruby on Rails, created back in 2005, was a really disruptive piece of technology. It changed how we write web applications - it was just mind blowing how much you could achieve by writing so little code. It also made prototyping applications faster.

### 3. Productivity

Ruby is a really expressive language. A couple of lines in Ruby can do the same job as whole chunks of code in other languages. There are a lot of gems that solve almost all problems, making it easier to build an MVP.

## Cons of Ruby:

### 1. Harder to maintain

Many Ruby libraries and tools use magic behind the scenes to keep the code concise. This is fine as long as you use each library the way it was designed to be used. Problems appear when you need to change a gem’s implementation to fit your business needs. Another thing is that Ruby doesn’t introduce any “good practices” out of the box. Seasoned developers use them to make sure that code stays maintainable, but doing so requires discipline.

### 2. Threading and concurrency

Ruby isn’t great for writing concurrent applications. The Global Interpreter Lock (GIL) makes it so that, at any given time, only one thread and one core are busy. GIL doesn’t allow developers to take full advantage of most hardware. Additionally, some base classes are not thread-safe.

### 3. Worse performance

Ruby was never a performance beast but, then again, it was never meant to be one. You may think that this only affects production speed, but it’s not entirely true. There is a great article written on this subject that you can find [here](/the-fallacies-of-web-application-performance).

## What Should You Choose?

As is almost always the case in our industry, the answer is “it depends”. If you will need to use a lot of concurrent connections (chat, IoT) or you know that your application will have a high user count - use Elixir. If you just want to prototype something, create a small application or know that your product won’t have too many users, then Rails is a proven solution for such products. It helped many companies create great software. Another thing for you to consider is the ability to maintain and extend your product as time goes on - you can do this with Ruby, but Elixir makes the process more sustainable.
