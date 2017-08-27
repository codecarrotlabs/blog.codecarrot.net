---
layout: post
title: Kickstarting Your Business without Servers for Free - A Practical Guide to Serverless
date: 2017-07-10 12:00:00
categories: dev devops
description: What's serverless? It doesn't mean your app won't need any servers. Recently, the trend for “serverless” started gaining a lot of traction both among developers and business people.
image: http://blog.codecarrot.net/images/kickstart-your-business-without-servers.jpg
---

Recently, the trend for “serverless” started gaining a lot of traction both among developers and business people. As you’re reading this, you might be wondering, what on Earth does the new buzzword, **serverless**, even mean.

Well, serverless primarily refers to serverless computing, which goes by “Function as a Service” (FaaS). This is a cloud-computing code execution model in which the cloud provider manages starting and stopping a function's container as necessary to serve requests. In this way, you’re not paying for virtual machine working hours but rather per function invocations count and time.

Serverless might also suggest that there are no servers in that model. This is not true. The name "serverless computing" is used, because you don’t have to purchase, rent or provision servers for the backend code to run on. The servers are still there, but it’s in someone else’s fully-managed environment.

## Serverless = Cost Effective

For businesses, serverless is a massive money saver. Your monthly spendings are directly proportional to the number of users interacting with your app. You no longer have to pay a fixed price for your server. Instead, each call to service costs just a fraction of a cent. You pay only for what you really use. Moreover, your DevOps team does not have to waste time provisioning instances, and configuring and monitoring your infrastructure. Everything is handled by cloud providers.

## Developer Friendly

From the tech perspective, it allows programmers to write modularized code ready to be executed in a highly decoupled architecture. Modularized code often means that the code is easy to test and maintain. Refactors are much easier. Teams can work in parallel on multiple services without running into conflicts, which translates into much higher developer productivity. Also, every part of the application can be written in a different language, preferably the one that is best suited for that job. You could use Go for computational tasks and Node.js for realtime and stream-related actions.

## Better Isolation

On the other hand, a highly decoupled architecture guarantees high resilience and better scalability. It’s very similar to a microservices architecture. Imagine a scenario where one part of your system has a memory leak. In a traditional “monolith” architecture this single engineering flaw would lead to a full system outage or a malfunction. In a serverless system, this kind of failure would be isolated only to that one module and the rest of your application would still work fine.

## Even More Flexibility in Scaling

What differentiates serverless from the traditional backend model is also the way it scales.

Let’s suppose that your application has two endpoints: one for uploading photos and another one for registering users. Your application has recently gained a lot of exposure. Plenty of new users are registering, but only a few of them upload photos. If you were using a traditional backend, you’d have to provision more machines in order to satisfy the demand, regardless of the fact that only one endpoint is exhausted and only that endpoint requires more computational capacity. Serverless doesn’t have that problem.

## Not Only for Computing

Up to this point, my post was only about computing. What about the rest of the application? What about the database, storage, authentication, assets, routing and everything else?

Well, “Serverless” is not only about computing. Actually, it’s just a name for a trend and means much more than just removing the servers from your stack completely.

<blockquote>
“For me, ‘Serverless’ is using services where someone else manages the servers and some logic for you, thereby reducing your maintenance load” - #NoOps
</blockquote>

Ridiculous? At first glance it might be, but look. The today’s world already works this way. Take mail providers for example. Probably, you don’t run your own SMTP server but rely on Gmail. Or analytics solutions – instead of rolling your own, you probably use Google Analytics, Segment.io, Tableau or any other solution. This pattern is very common, and it’s taking the world of development by storm.

## Outsourcing is the Key

The solutions mentioned above are battle-tested and written by people with tons of experience, who are probably better at their jobs than you. They are also dedicated to doing that full time so it’s unlikely that you would do it better. There’s just no point in reinventing the wheel.

## A Step Forward

Serverless is about taking a step forward. It applies outsourcing patterns to the world of development. If you can hire the best devops specialists to handle your instances, and the best DB administrators to take care of your Postgres instance for a fraction of the cost of employing them, why shouldn’t you do that? That’s how AWS Lambda and DynamoDB work. You don’t have to worry about maintaining the machines, you simply use them.

## Developer Mind Shift

There’s also one more consequence or requirement of Serverless which might be counterintuitive. It encourages developers to write less code and less logic, because every line of code added to your repository adds complexity and increases the chance of a bug occurring.  Instead, developers need to switch their mindset into that of a hacker’s. Their job is not to write every single part of an application. Their new challenge is to take the existing parts and nicely stitch them together. I like calling these guys “Cloud Engineers” – a developer, tester, architect and database administrator in one person.

## Practical Example

This might all sound nice, but how does it work in practice? Let’s try to architect a simple mobile app using AWS services.

Our app is called “This, this or that.” It’s an application where the user can upload three photos of three alternatives, e.g. profile pictures, and other users vote for the best one. After the 24th vote, the user gets a notification about the result. We’d also like to auto-categorize images using machine learning.

From this user story, we know that the app needs:

* Some logic, preferably in Node.js
* Storage for photos and assets
* Database to store information about “competitions” and votes
* Notification system
* Image recognition system

## App Logic

For application logic, we can use AWS Lambda in conjunction with API Gateway, instead of rolling out our own servers or EC2 instances. It’s way cheaper, it’s free under 3.2M requests per month (*with 128mb of memory), and we don’t have to worry about the provisioning, configuring, managing, maintaining, patching, and monitoring of our machines. We simply write code, deploy it, and it just works™. Every request = one Lambda function invocation = [0.000000208$](https://aws.amazon.com/lambda/pricing/).

## Storage

Instead of rolling our own CEPH cluster, storing assets on a hard disk, or pushing it as blobs into a database, we can just use AWS S3. S3 is a proven object storage with [99.999999999%](https://aws.amazon.com/s3/) durability. It’s fast, cheap, scalable, secure, easy to setup, and used by such companies as Netflix, Airbnb or Nasdaq. You might be worried about it’s reliability because of the recent incident, but that was only temporary and related to only one of many regions. Many companies admit that it’s considerably more reliable than their own internal storage.

## Database

If you’d like to go truly Serverless, you should check out [AWS DynamoDB](https://aws.amazon.com/dynamodb/). It’s a fully-managed NoSQL database where the machine level is not even accessible or visible to developers. You simply create a database table, set your throughput, and let the service handle the rest. You no longer need to worry about database management tasks. DynamoDB fully embraces “Event Driven Programming”. It integrates seamlessly with AWS Lambda by triggers, so you can do some computations when a new row is inserted into the database.

Notifications System

AWS have you covered even when it comes to sending notifications to iOS or Android devices. The service dedicated for that purpose is called [Simple Notification Service](https://aws.amazon.com/sns/). SNS lets you push thousands of messages simultaneously to devices around the world, in milliseconds. In case you’d like to launch a targeted marketing campaign, Amazon has a service just for you – it’s called [Pinpoint](http://docs.aws.amazon.com/pinpoint/latest/userguide/welcome.html). Pinpoint lets you understand the behaviour of people that use your app and define user segments based on monetization, activity, platform, countries, and many other attributes.

## Machine Learning

This is the most interesting part, I guess.
If you’re a small startup, you probably don’t have the money to hire a decent Machine Learning engineer. You probably also don’t have the time to study Neutral Networks or Deep Learning. Luckily, AWS engineers came up with _Image Recognition_ as a Service called [AWS Rekognition](https://aws.amazon.com/rekognition/). With that API you can detect faces, objects or scenes, search for inappropriate content and add image classification needed for our example app. Its pricing is very simple – 1,000 images cost $1. The first 5,000 analyses per month are free.

## Costs Simulation

Let’s say your app was downloaded 10,000 times a month.

From these 10,000 downloads, you generated 15,000 sessions.

Each session consisted of one login request and about 20 vote requests.

Sadly, only 15% of users created a “competition”, so there were about 4500 images uploaded (remember, each contest consists of 3 images).

Using the Cost Calculator, I calculated an [estimation of how expensive it would be](https://calculator.s3.amazonaws.com/index.html#r=IAD&key=NONE).

Sadly, this calculator cannot estimate the costs of AWS Lambda and AWS Rekognition, but here’s that missing part.

AWS Lambda:

`15,000 Sessions * 21 requests * 5 (let’s say each requests takes 500ms = ) = $0.00`

AWS Recognition:

`4,500 Image Recognitions is less than 5,000, so it’s totally free.`

**Total cost: 0.03 USD per month.**

As you can see, it’s entirely possible to create an infrastructure for quite a successful app almost for free. If you use services of other cloud providers such as Google Cloud or Microsoft Azure, you can achieve even better results by combining the best of them.

## P.S. Can we send you an email?

Once a week or so we send an email with our best content. We never bug you; we just send you our latest piece of content. <a href="#subscribe">Subscribe Here</a>
