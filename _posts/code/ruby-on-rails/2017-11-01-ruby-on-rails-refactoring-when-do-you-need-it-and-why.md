---
layout: post
author: yashumittal
title: Ruby on Rails Refactoring - When Do You Need It and Why?
date: 2017-11-01 03:58:45
categories: code
tags: ruby-on-rails ruby rails
description: Refactoring can lower development costs and save your project from failure, but it's also risky. Find out how to do it the right way for your Ruby on Rails app.
image: //blog.codecarrot.net/images/hammer-and-nail-449257-edited.jpg
---

Refactoring means, in simplest possible terms, improving existing code without changing its functionality. It’s all about code quality and optimisation, not product redesign. Users never see the changes. So why do it? Because ultimately, refactoring can prevent your app from generating huge upkeep costs and, as a result, make your business more successful.

## Refactoring Ruby on Rails Code

The basic aim behind refactoring is as follows: to fix problems in the code but keep its current functionality. You modify and restructure what you or other developers on the team have written, but the product stays more or less the same. Refactoring is not about improving users’ interactions with the product - it's about the developers’ interactions with the codebase. Refactoring makes the code more readable to the current (and, importantly, future) developers working on it. It’s then easier – and cheaper – for them to continue developing and maintaining the product.

A ‘refactor’ means a single change in the code. To make or do a refactor means to introduce a particular fix which, in accordance with the above definition, enhances the code’s quality. Here are some extra reasons to do it, if you weren’t convinced already.

## 1. Scout’s Rule

If you think about it, making errors when coding is inevitable. Maybe there are geniuses out there who always write clean and flawless code, but if so, they are rare. You can’t expect super-human performance from your development team, and you have to accept that their mistakes will be part and parcel of the development process.

Just like refactoring, fixing those mistakes is a part of the process.

If you see a code fragment that could have been written better, improve it. Immediately. If you don’t do it often enough, your product will suffer as current risks lead to future problems.

## 2. Improved Understanding of the Product

Refactoring helps developers understand how the product works and what it’s supposed to do. They are more engaged in the project, can easily delegate tasks to other developers (who should now have no trouble reading and working with more understandable code), and can take full advantage of others’ work thanks to, for instance, clearer methods. It’s best to put everything a developer needs to know into the code, so comments and remembering a lot of information become unnecessary.

## 3. Better Information Architecture

Clean code means that developers can easily see which fragments hold the most business value. Actually, clean code means developers can more easily spot separate elements in the code. You might think it should be obvious from the beginning which functionalities will matter most, but that’s a fallacy. It’s something you need to learn anew for every product you work on, because every product is different.

## 4. Lowering Costs

Projects get really expensive when you need to fix legacy code months or years down the line. With regular refactoring, developers find bugs more easily, which means a smaller QA budget and fewer hours spent on scrutinising the code by developers themselves. There will be no need to constantly go back and fix something that has become a blocker. By preventing problems from occurring rather than reacting to them, you will be able to achieve faster development. And obviously, the development work is the most expensive part of building a digital product.

## 5. Experts Say You Should Do It

Martin Fowler is a proponent of refactoring, and he knows what he’s talking about, because he’s been doing this for years. Fowler and other experts agree that building a product without any refactoring is a massive risk. Here, have some quotes:

* “I’d always been inclined to clean code, but I’d never considered it to be that important.” - Martin Fowler
* “When you feel the need to write a comment, first try to refactor the code so that any comment becomes superfluous” - Martin Fowler
* “Almost all the time the problems come from methods that are too long” - Martin Fowler
* “If extracting (a method) improves the clarity, do it, even if the name is longer than the code you have extracted” - Martin Fowler
* “It is not enough for code to work” - Robert C. Martin (Uncle Bob)
* “So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.” - Robert C. Martin (Uncle Bob)
* “Clean code always looks like it was written by someone who cares.” - Robert C. Martin (Uncle Bob)
* “Of course bad code can be cleaned up. But it’s very expensive.” - Robert C. Martin (Uncle Bob)
* "No matter how slow you are writing clean code, you will always be slower if you make a mess." - Robert C. Martin (Uncle Bob)
* “Don't make more versions of your source code. Rather than add more code bases, fix the underlying design problem that is preventing you from running from a single code base.” - Kent Beck
* “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” - Martin Fowler

## Quick Guide to Ruby on Rails Refactoring

All right, now that we’ve established that your project needs regular refactoring, how should you go about it?

Before you even start thinking about it, make sure the code under scrutiny has been tested. Extensively. Never refactor before you’ve written tests, that’s just asking for trouble. I mean it. Never. If you have no tests, write them. Then come back to the idea of refactoring.

## Where to Refactor

Here’s a list of warning signs that almost always mean that particular fragment of code needs a refactor and some basic guidelines on what you can do with them:

1. **Long methods:** nobody likes to even touch methods that are 300 lines of code long. Write short, specific and understandable ones. They will be easier to test, explain and change in case that becomes necessary.
2. **Huge classes:** avoid them if you can. It’s easier to deal with code that contains 50 classes, 200 lines of code each, than code with 5 classes, 2000 lines of code each.
3. **Code repetitions:** if you see basically the same code in several different places, give some thought to the structure of your application. It might have some kinks that need ironing out.
4. **Long parameter lists:** if an action or method takes 11 parameters, there has to be something wrong with it.
5. **Strange dependencies:** if a change you make in one part of the code forces you to make changes in another 5 places, your code is not good code.
6. **Dozens of variables:** if there’s a fragment of code where a lot of variables are created and handled, figure out why, and if there’s no good reason for it, refactor. A method with 15 local variables is the opposite of easy to understand.
7. **Weird code:** developers like to show off sometimes. Or metaprogram. If you spot really strange solutions that are super hard to understand, try to simplify them.

RoR is one of the favourite and most often used technologies at [CodeCarrot](https://codecarrot.net/), so we’ve picked up a few tricks over the years and are always happy to share our knowledge. (On our blog, you can read articles about [service objects](/service-objects-in-rails-will-help-you-design-clean-and-maintainable-code-heres-how), [writing good code](/how-to-write-code-that-speaks-for-itself) and [being a better developer](/patterns-that-will-help-you-be-a-better-developer), and many other subjects)

## Refactoring Risks

Refactoring is a wonderful tool, as long as it’s done well. In some situations and without the necessary experience, it may do more harm than good. If you aren’t sure that refactoring will bring business value to your product, don’t do it.

Stakeholders will naturally view refactoring as a waste of time. They will usually be wrong, but it’s important for the product owner to establish what’s most important for the project at any given time. Should we focus on time to market or future refactoring debt? The latter may seem like a problem that can be taken care of later, but many people who have thought so, have suffered by adopting this approach.

Finally, refactoring should always have a clear goal: improving the code behind one functionality. If it’s about a very general value, such as efficiency, you will simply never reach your goal. It’s too big a task for a single refactor, and it can be a waste of resources. Moreover, without a clearly defined goal, you won’t even be able to tell whether you’ve achieved it or not.

## Closing Remarks

We’ve witnessed refactors doing wonders for projects, and we’ve witnessed refactors going really, really wrong. One example of the former is a project that involved generating reports from questionnaires. It used a really old gem that had had no support for 6 years. It took care of the whole functionality, but seriously complicated the code, which means that adding features to the product was pretty much a heroic feat. And expensive. We talked to the client and did a refactor, which resulted in dumping the prehistoric gem and building a custom solution with the same functionality. The database shrank from 15 to only 2 tables, a critical component of the app started working more quickly, and the behaviour of the whole product became more predictable. The code was, of course, easier and cheaper to maintain and develop further.

A less cheerful example is a client who wanted a refactoring for its own sake. The whole process wasn’t well thought out, we had too little information and instead of completing the refactor in 3 months, as we estimated, we laboured over it for half a year. During that time, no new code was produced, which obviously set the project back quite a bit. Eventually, we managed to get the development work going at full speed and the project is doing quite well, but doing the refactor was a waste of time and resources.

These stories show you that, while refactoring is crucial and should be an integral part of your process, there must a time and place for it. Refactoring comes with a risk that can be mitigated by an experienced team. So, if you are thinking about refactoring your project, feel free to contact us about any questions or doubts you might have, and we will be happy to share our knowledge and experience with you.