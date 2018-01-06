---
layout: post
author: yashumittal
title: Ruby on Rails Invoicing Solutions Comparison
date: 2018-01-07 01:28:35 +0530
categories: code
tags: ruby-on-rails ruby rails invoicing ecommerce
description: Ruby on Rails offers many solutions to invoicing. You can use an existing product, external APIs or just have your own custom implementation.
image: https://cdn.codecarrot.net/images/money-money-380438-edited.jpeg
---

Invoicing is one of the most important and most complex parts of almost every application that allows its users to perform payments. All the numbers, taxes, fields, rules, and equations can give a developer quite a headache. Fortunately, many solutions for invoicing exist and, even more fortunately, many of them are available in Rails. Let’s take a look at some of the ways we can implement invoicing in our Ruby on Rails app.

To present every solution as objectively as possible, I’ll use the same set of criteria for all of them (usually by giving from one to five points in each category):

* **Ease of use:** how easy it is to use and implement the solution
* **Maintenance:** if the solution still maintained by its creators (based on the date of the last commit)
* **Comprehensiveness:** how complex and universal the solution is
* **Usability:** how many useful functions it offers

For the solutions available on GitHub, I’ll also take a look at two other important things:

* **Stars:** how popular it is based on Github stars (let’s assume for the sake of this review that 250 stars is a very good result)
	* 200-250 stars = 5 points
	* 150-199 stars = 4 points
	* 100-149 stars = 3 points
	* 50-99 stars = 2 points
	* 0 - 49 stars = 1 point.
* **Open issues:** how many issues (bugs or missing functionalities) have been reported and have not yet been resolved (the bigger the number the worse)
	* 0-1 issue = 5 points
	* 2-4 issues = 4 points
	* 5-7 issues = 3 points
	* 8-9 issues = 2 points
	* 10 issues and more = 1 point.

## code-mancers/invoicing

[Github](//github.com/code-mancers/invoicing)

The gem named “invoicing” will probably be the first thing you will encounter when searching for invoicing solutions for your Rails service. It offers a wide range of functionalities. Here are only some of them (taken from the official documentation):

* representing customer and supplier accounts, as well as multi-party billing relationships;
* automatically rounding currency values to the customary precision for that currency, e.g. based on the smallest coin in circulation;
* supporting any number of different currencies simultaneously;
* rendering invoices, account statements etc. into a fully customisable HTML document;
* providing default Value Added Tax (VAT) implementation and the ability to plug in your own tax logic;
* summarising account balances, sales statements, etc. under chosen conditions (e.g. data from one quarter, or payments due at a particular date).

Sounds good, doesn’t it? Let’s add very easy installation and initialisation, many useful features and well-written guides, and we may end up with the perfect solution at the very beginning of our little investigation. Unfortunately, things start to get a bit disappointing when you check the date of the last commit and see “3 years ago”. What a shame!

| Description | Rating |
| --- | --- |
| Ease of use | 4 |
| Maintenance | 1 |
| Comprehensiveness | 4 |
| Usability | 3 |
| Stars | 197 |
| Open issues | 6 |
|**Total** | **3** |

## siwapp/siwapp

[Github](//github.com/siwapp/siwapp)

This piece of code isn’t a gem. Instead, it’s an out-of-the-box solution for invoice management based on Rails. It’s described as “an open source web application meant to help manage and create invoices in a simple, straightforward way”. It is still maintained (the last commits are three months old) and offers a basic range of useful functionalities, e.g. drafting, printing, as well as managing customers and products. It also comes with a nice plain layout and seems to be very easy to use. Even if you don’t need a separate solution, you can still find some inspiration in siwapp on how to improve your own approach to invoicing in your app.

| Description | Rating |
| --- | --- |
| Ease of use | 5 |
| Maintenance | 4 |
| Comprehensiveness | 3 |
| Usability | 4 |
| Stars | 106 |
| Open issues | 9 |
|**Total** | **3.5** |

## ianmurrays/active_invoices

[Github](//github.com/ianmurrays/active_invoices)

Another out-of-the-box solution for invoicing created in Rails is called *active_invoices*. Its name comes from the gem it’s based on, called *active_admin*, which provides a basic administration panel. The author describes it as a “very simple invoicing application”, and these words are the most accurate review it could receive. But simplicity doesn’t always come hand in hand with usefulness. Especially that it hasn’t been maintained since the end of 2012 (maybe the end of the world that year was real in some cases after all).

| Ease of use | 4 |
| Maintenance | 0 |
| Comprehensiveness | 2 |
| Usability | 2 |
| Stars | 150 |
| Open issues | 1 |
|**Total** | **2.5** |

## External API

When none of the out-of-the-box solutions to our invoicing problem fit our needs, it’s good to consider some other options. There are plenty of tools and applications meant to help with creating and managing invoices, many of them offering their own APIs. This usually offers us more possibilities and functionalities, but, on the other hand, implementing a complete solution is much more time consuming. It’s definitely sensible to consider such an option if we need a complex solution, or we just want to have everything under absolute control. In exchange for higher implementation costs, you will receive a custom high-quality solution adjusted to your needs.

Here are some online invoicing and accounting providers who offer nice and rich APIs:

* Xero
* Freshbooks
* Zoho

If you want to learn more and see some real-life examples, check out our article about [How to use Xero API for invoicing in Ruby on Rails](/how-to-use-xero-api-for-invoicing-in-ruby-on-rails).

| Ease of use | 2 |
| Maintenance | 5 |
| Comprehensiveness | 5 |
| Usability | 5 |
| **Total** | 4 |

## Custom implementation

In case not a single one of the presented solutions fit your needs (or maybe they offer too many functionalities you don’t need), you can still have a tailor-made invoicing system for your app. It’s time-consuming as well, but it’s definitely worth giving a try – especially if you don’t need complex calculations and features, only simple invoice generation based on users’ orders. In our article “[How to do basic invoicing for your Ruby on Rails application](/how-to-do-basic-invoicing-for-your-ruby-on-rails-application)”, you can have a look at one possible approach to this topic, which uses the gem “invoicing” mentioned at the beginning of this analysis.

| Ease of use | 3 |
| Maintenance | 5 |
| Comprehensiveness | 4 |
| Usability | 4 |
| **Total** | 4 |

## Summary

To cut a long story short, Ruby on Rails offers many solutions to many needs, and invoicing is not an exception. Even if certain popular gems are no longer maintained, you can still have exactly what you need by using external APIs for invoicing tools or just by having your own custom implementation. The Polish application inFakt is a very complex and useful tool for invoicing and accounting (it is an online accounting office), and it’s based on Ruby on Rails. There is no better proof that the sky is the limit with the help of your imagination and experienced developers.
