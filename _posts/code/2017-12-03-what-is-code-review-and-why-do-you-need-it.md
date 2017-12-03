---
layout: post
author: yashumittal
title: What Is a Code Review and Why Do You Need It?
date: 2017-12-03 22:35:00 +0530
categories: code
tags: coding
description: A discussion of the Agile practice of code reviews, where teams collaboratively review code created by their peers to find bugs and suggest improvements.
image: lee-campbell-86958.jpg
---

Building a startup is hard, building software for it is not easier. But what makes software great? Good code. But how can you be sure that the code is good?

Working with many clients who came to us with software samples they would like to develop, we found out that, apparently, many freelance developers and even IT companies ignore the process of code review. Since we in [CodeCarrot](//www.codecarrot.net) consider the code review stage to be a basic service, we decided to explain our perspective.

So let’s start with the basic terminology.

## What Is Code Review?

Code review is a systematic examination of software source code, intended to find bugs and to estimate the code quality.

The code review process contains the following stages:

* Best practice - identifying more efficient ways of completing any task.
* Error detection - finding the logical errors.
* Vulnerability exposure - identifying the most common vulnerabilities.
* Malware discovery - a special kind of code review used to detect the suspicious pieces of code or to find the back-doors and any malware integrated into the software.

## Why Do You Need Code Review?

There are several reasons why doing a code review is a necessary part of development.

The first reason is reducing risks. For example, if you have some software that was coded by a freelancer or an agency but you are not sure of the quality of the work because even good developers can miss something. So, double-checking is always a good idea.

Moreover, while working together on examining the code, every team member can suggest smarter solutions that would improve the general performance of the project.

The main thing you need to remember about code review is that it should be performed **BEFORE** your new development team takes on a new codebase or project. Checking the code before starting a project gives your team the chance to get familiar with it and to determine whether the code is clean or requires any rework.

![Money coding on laptop](//blog.codecarrot.net/images/coding-zOvBKUUEERdNm.gif)

## Code Review Checklist:

Having a lot of practice in reviewing code, we decided to prepare a small guideline for developers who are going to check the source code for their projects.

Divide the review into time slots. Don’t try to review the whole project at once. Experts advise not to review more than 400 lines of code at once. Moreover, a single check should take no more than an hour. The reason is humans cannot effectively process that amount of information, especially over such a long period of time. When you try to go beyond this mark, the ability to detect bugs decreases notably, so you might miss some crucial errors.

Ask teammates for help. Two heads are better than one. You might be surprised how the quality of the review increases when you share this process with someone else. We are used to performing the collaborative code review using [Crucible](//www.atlassian.com/software/crucible) by Atlassian. This tool allows you to assign reviewers from across our team, discuss the chosen lines of source code, files, or an entire changeset. We can also track and report the parts of the code that have now been reviewed yet. [Collaborative code review](/code-together-in-real-time-with-teletype-for-atom) not only enhanced the code itself but also the level of the team's’ expertise due to sharing knowledge while discussing changes.

Capture metrics. Before starting the review, the team should set precise goals like “reduce the percentage of defects in half”. The goal “to find more bugs” is not clear so it’s impossible to reach. Besides setting goals, capture such metrics as the speed of performing the review, number of bugs found per hour, an average number of bugs per code line. Constant tracking of review performance will show you the real picture of your inner processes.

Stay positive. Code review can sometimes put a strain on the relationships within the team. Nobody likes to be criticised, so it’s very important to keep a friendly atmosphere unless you want your coworkers to lose their motivation. Instead of perceiving each and every bug negatively, think positively, as they are the new opportunities for improving the code quality in general.

Set up the bug fixing process. So your team provided the code review of the whole process but how about fixing all those bugs found? It was a pure surprise for us, but not all the development teams actually have the established a method for fixing bugs that they find. Fortunately, we use the collaborative method, not only to discover bugs and errors but also to fix them. All the bugs are discussed with the creator *(except situations when we review another team’s code)*, and all the changes are always approved before submission into the source code.

## Wrapping Things Up

Providing code review must be an essential process in any web development company, as it helps to maintain high-quality coding standards. Working together on code analysis brings the team together and gives the opportunity to share knowledge and experience within the company.

So if you run a startup and you decided to hand over the project to another team, always request a code review in order to get the best quality software in the end.
