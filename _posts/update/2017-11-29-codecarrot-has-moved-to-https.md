---
layout: post
author: yashumittal
title: CodeCarrot has moved to Https
date: 2017-11-29 18:45:55 +0530
categories: update
tags: update https
description: Discover why and how the CodeCarrot and Blogs has moved to HTTPS, the secure version of the web protocol that helps to protect user privacy.
image: //cdn.codecarrot.net/images/secure.jpg
---

Our content has now been served over HTTPS for two months and we thought it was time to share some of the reasons, processes and challenges behind the project.

## The reasons for our move

### Privacy

By using HTTPS, internet service providers (ISPs) are not able to track the pages our readers are accessing. It means we protect the privacy of our readers when accessing content that may disclose political opinions, faith, sexual orientation or any information that may be used against them. It matches our core values. We believe that protecting our visitors is good internet citizenship.

### Security

Once on HTTPS, we prevent malicious third parties from inserting code into our site, or tracking what our visitors are doing.

### SEO

It also gives us other benefits such as a potential increase in search results. For the reasons mentioned above Google has announced that it will favour https content. It is also helping us decipher traffic from secure and ‘unknown’ referrers.

### Content authoring and integrity

By switching to HTTPS, browsers will ensure that the content displayed is actually published by the CodeCarrot. Without HTTPS someone between the browser and our website could maliciously display other content or alter our content.

### New features

It allows us to take advantage of emerging technologies, such as service workers, web notifications, ‘add to homescreen’ prompts and offline web pages. This is critical to developing relationships with audiences who are either unable to, or choose not to download the app, such as the majority of audiences in South America or India.

## Why has this taken so long?

### Editorial challenges

We had several specific challenges in front of us:

* avoiding negative audience impacts

For a long time ad agencies and ad exchange networks have not adopted HTTPS, jeopardising revenues of any free mainstream website willing to switch to HTTPS. Despite Google’s willingness and actions on this subject there was a risk of having a negative impact we could not afford.

* continuing to allow embeds to be inserted in articles

Our articles often contain various external components such as YouTube videos or tweets. For each of them we had to find a way to embed them securely or another solution if the providers did not support HTTPS.

* keeping our older interactives working

Interactive content is created differently to our standard articles with a lot of variation in technologies used over the years and without HTTPS being a concern at the time.

### Approach & techniques

The migration was such a big change that it was not possible to highlight all the problems at the beginning of the project, nor find a solution on paper for each of them. We had to work iteratively and solve these issues as they arose.

To overcome those challenges rather than draw a big plan we decided to defeat in detail:

* Migrate one small audience section to HTTPS
* Identify the problems and track them
* Fix the problems that need to be fixed before the next section migration

One advantage of this strategy is that it enabled us to detect real problems rather than discussing hypothetical ones and improve our confidence step by step.

We have complemented this approach with 3 techniques:

### Monitoring

We closely monitored audience numbers, mixed content warnings and errors after each section migration.

### Decoupling backends and frontend migrations

We migrated our backend systems before the frontend. Our content API was returning HTTPS links for all content ahead of time and we updated our internal tools and integrations to support the new scheme at an early stage. By doing this we ensured that any problems we found as part of a section migration to HTTPS were limited to the website itself and could be identified quickly.

### Usage of early adopters

We added the ability for users to enable the entire website to HTTPS. We offered this ability to readers willing to report issues and encouraged our engineers to enable this feature. We enabled us to discover several issues before they were seen by end users. At the same time we ensured that our journalists were shown this secure version of the site when previewing content. This allowed us to capture any further unknown issues and find solutions to problems early on.


## How did we technically migrate?

### Conditional redirection to HTTPS

To enable a migration per section we have leveraged the capability of our CDN provider to write easily and apply very fast redirection rules based on the path of the request (our path contains the section of an article).

We used this, not the upgrade-insecure-requests option for two reasons. Most importantly, this feature was (and is currently still) not supported by enough browsers. Secondly the specification is quite complex and interaction with HSTS was not crystal clear to us and HSTS was our final goal. This meant that, sadly, the upgrade-insecure-requests feature was not useful to us in practice.

### Content-Security-Policy with report only

This feature has enabled us to log all mixed mode warning and errors and analyze them later. Passive content was still displayed, so minimizing impact for the end users. We switched to block only recently when we were confident there would be almost no impact.

### Rewriting of old content

To migrate historic interactive content we wrote a simple script to update a predefined list of urls to HTTPS. We migrated most of the interactive archive using this tool before enabling HTTPS on them.

### HSTS header

The HTTP Strict-Transport-Security response header lets a web site inform the browser that it should never load the site using HTTP and should automatically convert all attempts to access the site using HTTP to HTTPS requests instead. It is intended to protect against man-in-the-middle attacks such as SSL stripping.

We added this header at the very end of the migration after all sections were redirected to HTTPS, which meant we were extremely confident that adding the header would not have any negative impact.
