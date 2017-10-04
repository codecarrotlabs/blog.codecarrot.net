---
layout: post
author: yashumittal
title: Ruby on Rails for E-commerce
date: 2017-10-05 12:18:00
categories: code
tags: ruby-on-rails ruby rails ecommerce coding
description: Spree is the most popular e-commerce framework built on Ruby on Rails, supported by the community and constantly updated to better fit your needs.
image: http://blog.codecarrot.net/images/make-e-commerce-platforms.png
---

An online store is a good business model. Customers visit your website, browse, put items in the basket, and transfer money to your account. Whereas it might look simple from the outside, many things can go wrong inside your business, especially from the technological perspective.

## Choosing The Right Technology

The technology that you use in the e-commerce platform development will determine the platform’s performance, stability and security, that is the factors that are vital to your customers. If the website crashes every other step of a customer’s journey, the loading times exceed 15 seconds, or the payment gate seems to be dodgy, you can’t expect many customers to buy products from you. If you don’t want this scenario to come true, you should pay attention to a range of factors and requirements that are important when choosing the framework for an e-commerce store.

## Flexibility

Trends and technologies are constantly evolving, and your platform should be evolving too. If you want to stay on top of things, you should take into consideration that you might scale your store up some time after the kickoff, or that you will need to implement new features as the business grows. That’s why the platform should be flexible enough to accommodate the changes you will want to implement. It should be possible and easy (!) to develop the platform and adjust its structure to your needs. If the framework you choose for the development is not flexible enough, every single change will be a pain for the dev team and yourself.

## Stability And Performance

Stability and performance are some of the key factors determining whether users will buy from you or not. People hate to wait for anything, and it also applies to the online environment. If your website is slow, users will simply abandon it. The same goes for stability – when your potential customers can’t achieve their goal (buying a product) fast, they will go shop at one of your competitors. The framework should provide a stable and performant ecosystem for your platform, even when the number of users becomes really high.

## Payment Integrations

Secure payments are essential for a good shopping experience. When customers submit sensitive personal data, such as a credit card number, they want to be certain that the data will not be collected and processed for purposes other than completing the transaction. Anything that suggests otherwise is bound to prevent them from buying at your store. Users also value convenient payment options. If they proceed to the last step and don’t find a payment gate they usually use, it may stop them from finalising the transaction. Therefore, the framework should make it easy to integrate it with many payment processors.

## The Number of Ready Solutions

When you start building an online store, it is good to have some out-of-the-box functionalities so that the development team doesn’t need to write all modules from scratch. If the framework you choose provides ready-to-implement packages that will enable you to add products, configure the checkout, or integrate payment gates, you will save loads of development time. On top of that, using proven modules that have already worked in a ton of projects gives you a guarantee that they will work from the get-go.

## Ease of Deployment

Building an e-commerce platform is a long process that will require much effort from your team. After months of code writing and testing, you want to kick off with the platform fast and with ease. You don’t want any problems on the run-up to the commercial launch. That’s why the framework should offer an easy way to deploy the application. If all the processes which are part of deployment are automated, the dev team can quickly put your app into production.

## Admin Page Offered by The Framework

Whereas the interface of your online store will adjust to user needs, the admin page usually remains in the form the framework offers it. Maybe you don’t need your dashboard to be beautifully designed, but it must be easy to navigate, and you need to find what you’re looking for easily.

## Ruby on Rails’ Spree for your e-commerce

[Ruby on Rails is our technology of choice because it’s mature, has an active community supporting it, and provides out-of-the-box solutions that make the development process easier and faster](/pros-cons-ruby-on-rails). We’ve built dozens of applications in RoR, and many of those projects involved developing an e-commerce platform. Ruby on Rails gives you a reliable framework intended for building online stores: Spree. Spree is the most popular e-commerce solution for RoR, supported by the community and constantly updated to better fit your needs. Does it fulfil the requirements of a good framework?

## Mature Codebase

[Spree](https://github.com/spree/spree) was created in 2007, and since then, over 700 developers have contributed to the codebase. The community actively supports the framework by adding new repositories and creating more and more features that can be directly implemented in the platform. The codebase is mature, and contributors make a lot of effort to provide the highest possible quality. It all translates into the exceptional stability of the framework. That’s why it’s been used by many companies, for instance, Chipotle Mexican Grill, Second Life, Bonobos, Fortnum and Mason.

## Ready Functionalities

[Spree offers basic out-of-the-box shop functionalities essential for every e-commerce platform.](/why-spree-is-a-good-choice-for-your-store) The features important from a customer’s point of view but hard to write from scratch are available in Spree as ready-to-use packages:

* **Managing products.** You can add products in distinct variants, such as colours, sizes etc. You will be able to upload images for products and for their specific versions separately. The packages also allow managing the stocks of the created products.
* **Managing tax zones.** This feature is especially important when you run an international business. Spree offers a well-developed system for managing taxes. It allows creating many tax categories (e.g. food, clothes, or electronics) various tax zones (e.g. EU, USA) and also to easily combine zones with categories.
* **Managing shipments.** You can create different shipping methods and use different delivery methods for different zones, making it easy to integrate the system with local logistics companies.
* **Managing promotion campaigns.** You can apply a promotion to a specific order if a predefined condition is met (for instance if the total value of the basket is higher than $100, or a specific product was added to the cart). It also facilitates applying promo codes.

Taking into consideration the sheer number of functionalities and the amount of complexity that Spree offers, its performance is very good.

## Easy Payment Integrations

Spree offers a wide range of payment integrations, including the most popular services such as Stripe, PayPal, or SagePay, but also smaller providers. It has a highly flexible payment integration model, enabling you to provide your customers with multiple payment methods during checkout. The biggest advantage is that if gives developers a built-in service for managing payment gates. As a result, they don’t need to write code – clicking through it will be enough to make it work.

## Documented Admin Dashboard

Even though you might feel a little bit confused when you first see the admin dashboard, it won’t take you long to familiarise yourself with it. The dashboard offers numerous functionalities that can be overwhelming at the beginning, but you will definitely appreciate the wide range of options it offers. On top of that, [the admin page is solidly documented](http://guides.spreecommerce.org/user/) making navigating through the platform easy, especially during the first use.

## Easy Deployment

Just like with any other Ruby on Rails app, the deployment doesn’t cause any problems. It’s quick and easy. We’ve tested it on our Docker flow many times, and we haven’t come across any major issues.

## Things to Consider Before Development

Despite the maturity of the codebase and the stability of the framework, like any other technology, developing in Spree involves some risks, and problems may occur. However, if you know those risks in advance, you will know what to expect and how to handle the problems that might ensue.

The first thing you should consider is the framework’s integration with JavaScript. If you’re using Ember or React on the front end, it can take a little bit more time to connect the technologies. Spree's out-of-the-box API is not well-suited for rich [Javascript](/the-history-of-javascript) applications, and developers need to modify it slightly before connecting the customer’s side with Spree. It might get especially complicated with Ember. On top of that, search engines in Ember or React might sometimes refuse to work smoothly with such applications. Secondly, if you want to implement some non-standard functionalities (e.g. replacing the multi-page checkout with a single-page checkout) in your online store, you should know that introducing deep modifications to Spree can take a lot of development time and might require more experienced programmers. Still, introducing deep changes into Spree is possible. Another thing is that payments that need a 3D-secure verification will also involve more development work and testing. It is doable, but problems can occur, and the dev team will have to put more effort into making it all work. Finally, you might encounter some performance issues the performance if you don’t use external services such as CloudFront.

## Is Ruby on Rails Good for My E-commerce?

The question above is a question that everyone will need to answer considering their own needs and circumstances. We hope that the article will help you make an informed decision. If you have more questions concerning RoR, Spree, or good pubs to visit in London, pop [us a message](mailto:contact@codecarrot.net) or start a [chat with us](http://codecarrot.net/). We’ll be more than happy to help!
