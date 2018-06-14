---
layout: post
author: yashumittal
title: Ruby on Rails - Pros & Cons
date: 2017-08-20 10:00:00 +0530
categories: code
tags: ruby-on-rails ruby rails
description: Selecting a technology to develop a web app is difficult. A wrong decision may cost much. Learn what are the pros and cons of Ruby on Rails and choose wisely.
image: https://i.imgur.com/JSa7XoK.jpg
---

We're big fans of Ruby on Rails and over the years we've had countless conversations about the pros and cons of Ruby.

Selecting a technology for your web app is a challenge that every product or business owner has to face. If you make the right choice, it will give you a solid base for growth and expansion. If you choose wrong though, it may cost you.

Ruby on Rails, or Rails, is a popular server-side web application framework built on the Ruby programming language.

As a full-fledged web framework, RoR _(a.k.a Ruby on Rails)_ offers many components of a successful web project, providing default structures for a database. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern.

Still, to decide whether RoR is a good fit for your project, you need to know what makes this framework different from others. To help you build a deeper understanding of RoR, let's dive in its main strengths and limitations.

## RoR Pros

### 1. Best Industry Standards

Ruby on Rails is an opinionated framework which means it guides you into their way of doing things. It promotes the best standards and practices of web development.

The central pillar of the Rails philosophy is the DRY _(Don’t Repeat Yourself)_ principle that ensures a clear separation of concerns and maintainability of your application. The framework embraces the principle of CoC _(convention over configuration)_, according to which Rails defaults to a set of conventions that specify the best way of doing many things.

No matter how complex your application is, it can be easily extended with new features and the philosophy behind is MVC _(Model-View-Controller)_ that promotes modularity and extensibility of your applications.

Just to show the level of complexity one can achieve using RoR, take a look at Airbnb, GitHub, SlideShare, Dribbble, Bloomberg, CrunchBase, and Shopify have also trusted Ruby on Rails and built on a complex architecture of version control and distributed software development, which is successfully managed by an RoR framework.

### 2. Speed of Development

RoR was created with the high velocity of prototyping and application development in mind. Its well-developed system of modules, generator scripts, and an efficient package management system allow scaffolding a complex application in just a few commands. One can achieve rapid application development thanks to the expressive and concise nature of Ruby language, and also to dozens of open-source libraries for just about any purpose, which the Ruby community calls ‘gems’.

As an added bonus, Rails ships with a default ORM system (ActiveRecord), which helps developers quickly put application and data logic together and deploy a fully functional prototype to be expanded with new features later.

### 3. Vibrant RoR Community

Rails is an open-source web framework supported by a talented community members. Using RoR in their own projects, they are interested in the constant improvement of the code base and bring new functionalities.

RoR’s ecosystem contains many “gems”, i.e. pieces of software that can be added into your project. Ruby community takes care of that. Almost any functionality you might think of has already been created. A community that runs Rails also ensures that the framework is regularly updated, issues are fixed, and security is kept up-to-date with the best industry standards.

## RoR Cons

### 1. Runtime Speed and Performance

One of the most frequent arguments against RoR is its ‘slow’ runtime speed, which makes it harder to scale your RoR applications. While it’s true that other top environments and frameworks _(Node.js or Django)_ are somewhat faster than RoR.

In most cases, performance issues your RoR application will face will be linked to the server or database architecture and the skillfulness of your engineering team rather than RoR itself. Performance considerations should be still kept in mind, though.

Twitter, for example, struggled to improve RoR’s performance that deteriorated after the social network became very popular, it is unlikely that your application will witness performance bottlenecks, unless it has a user base comparable to such large websites as Twitter. Although [Twitter did not abandon RoR completely](/why-did-twitter-switch-from-ruby-on-rails), it had to replace certain internal communication components and server daemons with Scala solutions.

### 2. Lack of Flexibility

RoR is an opinionated framework with a lot of hard dependencies and modules. To kickstart the project, your developers should configure routing, database migrations, and other modules shipped with the framework.

These default modules are good if you want to create an application with some standard functionalities, but they might backfire on you if you have something unique in mind.

In this case, it may be harder to adjust RoR to your product’s needs. At some point, you will have to make a difficult choice between giving a deep overhaul to your Rails application or using another framework that better suits your requirements.

### 3. High cost of wrong decisions in development

Wrong architecture decisions during the initial stages of your project might cost you more in Rails than in any other framework.

Since prototyping with Rails is incredibly fast, an engineering team inexperienced in Rails might make unobvious mistakes that will gradually destroy your application’s performance in the future. These structural deficiencies will be hard to fix because Rails is an open framework, where all components are tightly coupled and depend on each other.

For instance, too much reliance on ActiveRecord makes an application logic tightly coupled with database models, which leads to maintainability problems in the long run. At CodeCarrot, we have patterns that help us prevent these issues from the beginning.

## Conclusion

Ruby on Rails is definitely one of the best web development frameworks to consider for your next project. With RoR you can do pretty much the same as with other good frameworks.

The excellent community, a quality code base, the sheer size of the module database, and the maintainability of RoR applications made it the preferred choice for such successful projects as Airbnb, GitHub, BaseCamp, Zendesk, and Bloomberg. RoR is definitely a good choice if your project has tight deadlines and budget requirements.

On the other hand, a less opinionated framework such as Node.js may be a better choice for innovative web development solutions that require a total control over the framework architecture, modules, database integrations, and server deployment. The same will apply if you are building I/O-heavy Real-Time Applications for which performance and scalability are a major concern.

## P.S. Can we send you an email?

Once a week or so we send an email with our best content. We never bug you; we just send you our latest piece of content. [Subscribe Here](#subscribe).
