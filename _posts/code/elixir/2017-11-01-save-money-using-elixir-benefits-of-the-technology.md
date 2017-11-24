---
layout: post
author: yashumittal
title: Save Money Using Elixir - The Benefits of The Technology
date: 2017-11-01 02:25:00 +0530
categories: code
tags: coding elixir
description: Elixir, a new trending backend technology, promises to significantly cut costs by providing exceptional performance. How does it look in reality?
image: pexels-photo-60500.jpeg
---

Building an application that handles millions of users and performs thousands of concurrent operations can be expensive both to develop and maintain. Elixir, a new trending backend technology, promises to cut costs significantly by providing exceptional performance. The [CodeCarrot](//codecarrot.net/) team have recently dug beneath the surface of Elixir to verify whether it delivers on its promises.

Elixir is a functional programming language and runs on Erlang’s battle-tested virtual machine. Compared to Ruby and its ecosystem, Elixir is fresh and small, but it’s growing rapidly with more and more developers running Elixir apps and more and more packages being developed each week.

**Elixir as a Ruby on Rails alternative – the case of BleacherReport**

BleacherReport is a sports-news website, which works real-time and sends over millions of notifications daily. They were initially running on Ruby on Rails, yet they came to the point they couldn’t scale up the application anymore. After struggling with provisioning more servers, they decided to find a different solution. One of the developers stumbled across Elixir, and after some consideration given to other choices such as Go or Node, Elixir was the way to go.

Rewriting the application took quite some time, but as Ben Marx says, the productivity and developers’ happiness during the process were high. The code was easier to understand, and the application came with much less technical debt than the previous version written in Rails.

## Results of Rewriting The App From RoR to Elixir

One of the development highlights for BleacherReport was the night of the NFL Draft 2016, which is the busiest night of the year in sports. They didn’t have to scale the Elixir application, because it was handling concurrent connections really well. Ben Marx, the lead developer, said that it was “just another day for the Elixir application”.  They sent over 200 million push notifications in the first five hours, which arrived on users’ devices virtually instantly, being fast no matter the load. The application was handling over 250,000 users at once.

Thanks to having migrated to Elixir, BleacherReport could also stop using third-party dependencies such as Redis and use Elixir’s built-in tools, e.g. GenServer. BleacherReport’s lead developer also said that they had switched from using around 150 servers on production, to using just five for Elixir. Now, they are still “probably over-provisioned” as Ben Marx says, and they would do fine with only two. Thanks to those steps, they could save a lot of money on tools and servers.

## What Are The Benefits of Using Elixir?

Elixir works on top of a battle-tested technology that was created to handle high concurrency, which makes applications run fast. Compared to Ruby, Elixir is compiled, which yields a performance boost as well. Coming to Elixir from Ruby is easy, because Elixir’s creator, José Valim, also comes from the Ruby community, and Elixir’s syntax is heavily influenced by that of Ruby’s, so understanding code is much less troubling than switching to, for example, Golang.

Elixir comes with OTP, a set of tools to help us build fault-tolerant applications that have a lot of persistent connections at once. Ruby has gems like Celluloid or concurrent-ruby, yet with Ruby’s limitations, things can’t be processed efficiently in parallel – Elixir comes with those tools out of the box!

## Is Elixir Good For All Applications?

With Elixir, you can create all kinds of applications – from server command line apps to web applications using Phoenix, which is a productive, reliable and fast web framework for Elixir. If you know that your application will handle many concurrent connections, go for Elixir. If you need to prototype something small, create an MVP for your project, or you know your app won’t have to handle tonnes of connections, use Rails, which is perfect for fast development, which it has proved over the past couple of years
