---
layout: post
author: yashumittal
title: Ruby on Rails - Pros & Cons
date: 2017-08-20 10:00:00 +0530
categories: code
tags: ruby-on-rails ruby rails technology
description: Selecting a technology to develop a web app is difficult. A wrong decision may cost much. Learn what are the pros and cons of Ruby on Rails and choose wisely.
image: https://cdn.codecarrot.net/images/pros-cons-ruby-on-rails.jpg
---

Selecting a technology in which you will develop a web app is a challenge that every product or business owner has to face. If you make the right choice, it will give you a solid base for growth and expansion. If you choose wrong though, it may cost you an arm and a leg.

Ruby on Rails (RoR) is a popular web framework for web application development built on the Ruby programming language. As a full-fledged web framework, RoR offers many components of a successful web project, such as an ORM (Object Relational Mapping) system for business data and logic, routing, and application management out of the box. Still, to decide whether RoR is a good fit for your project, you need to know what makes this framework different from others. To help you build a deeper understanding of RoR, we are going to give an overview of its main strengths and limitations.


## What Ruby on Rails does great

**1. Best Industry Standards**

Ruby on Rails is an opinionated framework which means it guides you into their way of doing things. It promotes the best standards and practices of web development.

The central pillar of the Rails philosophy is the DRY (Don’t Repeat Yourself) principle that ensures a clear separation of concerns and maintainability of your application. The framework embraces the principle of 'convention over configuration', according to which Rails defaults to a set of conventions that specify the best way of doing many things.

Rails is also built around the MVC (Model-View-Controller) philosophy that promotes modularity and extensibility of your applications. This means that no matter how complex your application is, it can be easily extended with new features and business logic.

Just to illustrate the level of complexity one can achieve with RoR, take a look at GitHub. This is the largest repository of source code in the world, built on a complex architecture of version control and distributed software development. All this complexity is successfully managed by an RoR framework.

**2. Speed of Development**

RoR was created with the high velocity of prototyping and application development in mind. Its well-developed system of modules, generator scripts, and an efficient package management system allow scaffolding a complex application in just a few commands. One can achieve rapid application development thanks to the expressive and concise nature of Ruby language, and also to dozens of open-source libraries for just about any purpose, which the Ruby community calls ‘gems’.

As an added bonus, Rails ships with a default ORM system (ActiveRecord), which helps developers quickly put application and data logic together and deploy a fully functional prototype to be expanded with new features later.

**3. Vibrant RoR Community**

Rails is an open-source web framework supported by a vibrant community of talented developers. Using RoR in their own projects, Rails developers are interested in the constant improvement of the code base and incorporation of new functionalities. As a result, with Rails, there is no need to reinvent the wheel in your projects.

RoR’s ecosystem contains many “gems”, i.e. pieces of software that can be incorporated into your project. Ruby community takes care of that. Almost any functionality you might need for your web project has already been created. A vibrant community that runs Rails also ensures that the framework is regularly updated, issues are fixed, and security is kept up-to-date with the best industry standards.


## Where Ruby on Rails falls short

**1. Runtime Speed and Performance**

One of the most frequent arguments against RoR is its ‘slow’ runtime speed, which makes it harder to scale your RoR applications. While it’s true that other top environments and frameworks (Node.js or Django) are somewhat faster than RoR, it is unlikely that your application will witness performance bottlenecks, unless it has a user base comparable to such large websites as Twitter.

In most cases, performance issues your RoR application will face will be linked to the server or database architecture and the skillfulness of your engineering team rather than RoR itself. Performance considerations should be still kept in mind, though. Twitter, for example, struggled to improve RoR’s performance that deteriorated after the social network became very popular. Although Twitter did not abandon RoR completely, it had to replace certain internal communication components and server daemons with Scala solutions.

**2. Lack of Flexibility**

RoR is an opinionated framework with a lot of hard dependencies and modules included out of the box. To kickstart the project, your developers should configure routing, database migrations, and other modules shipped with the framework. These default modules are good if you want to create an application with some standard functionalities, but they might backfire on you if you have something unique in mind. In this case, it may be harder to adjust RoR to your product’s needs. At some point, you will have to make a difficult choice between giving a deep overhaul to your Rails application or using another framework that better suits your needs.

**3. High cost of wrong decisions in development**

Wrong architecture decisions during the initial stages of your project might cost you more in Rails than in any other framework. Since prototyping with Rails is incredibly fast, an engineering team inexperienced in Rails might make unobvious mistakes that will erode your application’s performance in the future. These structural deficiencies will be hard to fix because Rails is an open framework, where all components are tightly coupled and depend on each other. For instance, too much reliance on ActiveRecord makes an application logic tightly coupled with database models, which leads to maintainability problems in the long run. At CodeCarrot, we have patterns that help us prevent these issues from the beginning.

**Conclusion**

Ruby on Rails is definitely one of the best web development frameworks to consider for your next project. With RoR you can do pretty much the same as with other good frameworks.
The excellent community, a quality code base, the sheer size of the module database, and the maintainability of RoR applications made it the preferred choice for such successful projects as Airbnb, GitHub, BaseCamp, Zendesk, and Bloomberg. However, the devil is in the detail. RoR is definitely a good choice if your project has tight deadlines and budget requirements. On the other hand, a less opinionated framework such as Node.js may be a better choice for innovative web development solutions that require a total control over the framework architecture, modules, database integrations, and server deployment. The same will apply if you are building I/O-heavy Real-Time Applications for which performance and scalability are a major concern.

## P.S. Can we send you an email?

Once a week or so we send an email with our best content. We never bug you; we just send you our latest piece of content. [Subscribe Here](#subscribe).
