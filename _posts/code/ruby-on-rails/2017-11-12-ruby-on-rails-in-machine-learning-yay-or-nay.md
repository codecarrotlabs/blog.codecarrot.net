---
layout: post
author: yashumittal
title: Ruby on Rails in Machine Learning - Yay or Nay?
date: 2017-11-12 14:58:45 +0530
categories: code
tags: ruby-on-rails ruby rails machine-learning
description: Machine Learning can take your app to the next level. What technology should you use to Make the most of it?
image: //cdn.codecarrot.net/images/dominik-scythe-414905.jpg
---

Machine Learning is a trending field of Computer Science turning computer’s computations into a new level and giving a number of unique opportunities. It’s getting more and more popular, and it’s common for modern web application as well as services, such as Netflix, Spotify, Amazon.com and Facebook. Machine Learning is a good solution for apps based on recommendations or some kind of predictions. If you want to build such apps, you will need an efficient backend technology to support it. Is Ruby on Rails the right choice?

## What’s Machine Learning?

The most famous definition of Machine Learning is *the subfield of computer science giving computers the ability to learn without being explicitly programmed*.

In fact, it gives a nice clue of what it is all about. [Machine Learning is a part of data science](/smart-skill-distribution-in-project-teams-taking-the-machine-learning-approach). It is used when we want to use computers to predict unknown results based on related bulky data sources. It is a good way to discover any kind of uncertainty, such as recommendations, predictions or detections of described situations. We don’t need to plan and implement any algorithms. We say that a computer gains  the ability to be smart and learn new things.

## How Does It Work?

We don’t need to specifically instruct a computer on what to do. If you want to be smart and predict uncertain values applications, use specific structures and tools, e.g. neural nets. These technologies learn new facts and make predictions in a way which is similar to that of the human brain. For example, neural nets are composed of layers of units called neurons. We see a clear analogy of how it could work.

## What Do We Need?

As Machine Learning is a part of Data Science, it is a composition of various mathematical computations. It means that an application uses the technology needs to provide complex calculation fast. Since it’s not a trivial software problem, we need to take care of the best tool choices.

## Is Ruby on Rails a Good Choice for Machine Learning?

[Ruby is an elegant programming language](/pros-cons-ruby-on-rails) which found its role in the web development and scripts. With the help of Ruby and Rails framework, developers can build MVPs in a way which is both fast and stable. This is thanks to  the availability of various packages called gems, which helps solving diverse problems speedily.

However, looking for the Machine Learning gems, we can conclude that the choice is not that rich. Going deeper, the described solutions are not documented enough. The reason is that they do not provide efficient computation speed and gather a too small community around. All these factors attest to the fact that there are more risks than advantages of using Ruby gems as Machine Learning solutions, and it is not the best choice after all.
Moreover, tools and packages are as useful as the language of development. Ruby is definitely one of the most interesting programming languages. It has many proved purposes, but fast computing is not one of them. Ruby does not match Machine Learning, and we need to look into something better.

## What’s the Alternative?

Python is also a popular programming language which is often used in Data Science projects because:

* It has numerous packages for Machine Learning and other computations. The prime examples are *numpy, pandas, keras, tensorflow*. These packages are well-documented, which is helpful in starting with new projects and solutions. It also speeds up the process of fixing bugs.
* Its libraries are simply powerful. It means that they comprise many features helpful in complex computations. The development is fast, efficient and stable. It is also common that they use a range of computation speed improvements. All of these advantages make these tools mature and reliable.
* Another important advantage of using Python libraries is a considerable support from the community as the developers can easily find tutorials and tips valuable in a development process. A stable community makes the start threshold lower - it is easier to use new technologies from scratch.
* Python is a developer-friendly language which is easier to start with for Ruby on Rails developers comparing to other, lower-level programming languages. The syntax is intuitive, and it parallels the one in Ruby more than other popular languages.

## Tensorflow

We need to choose the best Python library for the Machine Learning purposes. We recommend using Tensorflow, a popular and powerful tool from Google. It provides stable implementation for Python, C++ and many other programming languages. We decide to use Tensorflow for the benefits it provides:

* it has an excellent documentation, a bunch of helpful tutorials and howtos, which helps developers go deep into the Machine Learning solutions;
* it performs all complex calculations “behind” Python - it uses a unique computational engine and leaves Python free of heavy operations;
* it allows building neural nets and other Machine Learning structures like graphs and chains of single operation blocks;
* it allows using Graphics Processing Unit for a much better performance.

## RoR as a Web Application for ML

Ruby on Rails is a perfect choice for web development. It gives developers the possibility to kick off a stable MVP really fast. However, it does not guarantee the best performance and the quality of complex and heavy computations.

Based on the above, it is a good idea to connect the brilliance of Ruby on Rails framework with Python as a microservice performing Machine Learning computations. This architecture gives us the mix of the best computation efficiency and web application development stability. It minimises the time of building a prototype and provides the best quality of usage.

What are the main benefits of such a combination?

* It’s easy and convenient to connect our app with other microservices. The Rails framework provides many reliable ways of communication between different services. It does not break the integrity with the core services.
* Rails is great for building MVPs. Developers can build a web application fast and pitch it to investors.
* It is a stable solution with a really good documentation. Moreover, there are many famous companies which trusted this framework and built efficient software.
* Active community support also makes this choice smart.
* With the help of gems, Rails packages, developers can quickly build more complex parts of an application.

## How to Connect Microservices in Python with RoR

So, we chose Ruby on Rails as a web application framework and Python with Tensorflow as a Machine Learning microservice. Great! The very last element of our technology chain is the efficient connection between these two endpoints. It is important to choose connection technology carefully. Let’s compare two most common options:

## HTTP Communication

The first option is the *HTTP communication*. It is definitely the most popular way of connecting the two services. The most popular one may not be the best. HTTP protocol is getting older and older. There are still some boilerplates, issues and difficulties on our way. Moreover, it is said that the protocol does not provide the best speed in all cases. We are looking for the best efficiency in each step of development, so it is worth finding something better.

Secondly, this type of communication needs lots of effort in Rails and Python. It results in more time needed to build a stable communication solution. In the case of Ruby on Rails, it is quite straightforward, but we also need an endpoint in Python. If we chose HTTP, we would have to use an additional tool to build it on the Python side. It breaks Single Responsibility Principle which we are aware of.

Overall, HTTP is quite complex itself. We need a really simple and efficient way.

## RabbitMQ

The second option is a tool called RabbitMQ. It is stable, fast and it is growing in popularity among developers. The communication model is simpler and faster than the HTTP protocol. An outstanding documentation and examples ensure that developers easily start using this tool. Another important advantage is the presence of truly solid Ruby and Python libraries providing RabbitMQ communication in these languages. It makes the usage really easy and stable.

Using RabbitMQ is a good choice for connecting the Rails web application and Python microservice.

## Wrap-up

The proposed architecture of web application using Machine Learning features has both its strong and weak sides. Web application development is stable, and it’s possible to use [Ruby gems](/top-10-ruby-on-rails-gems-to-make-ruby-devs-life-easier) to build a web application fast. It ensures great efficiency of Machine Learning computations thanks to the Python and Tensorflow library. Finally, the connection between both services is fast and safe.

On the other hand, you should consider the downsides as well. It has a bit more complex architecture model at the cost of creating an almost perfect solution.

In the case of Machine Learning ecosystem, it is better to mix different technologies and select the best tools to support them than rely on standalone choices which are not always as good as they seem.
