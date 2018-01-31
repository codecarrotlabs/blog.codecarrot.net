---
layout: post
author: yashumittal
title: Comparison of Automated Code Review Tools - Codebeat, Codacy and Codeclimate
date: 2018-01-31 16:58:34 +0530
categories: tips
tags: tips coding tools code-review codacy codeclimate automation coding-tools qa
description: What code review tool to use to make code stronger? Comprehensive analysis and comparison of 4 code review tools - Codebeat, CodeClimate and Codacy.
image: https://cdn.codecarrot.net/images/StockSnap_H2SNXCYG1T.jpg
---

Code review makes your code stronger, reduces the risk of overlooking major bugs and supports the culture of feedback. The process constitutes an inherent part of best practices in web development, so skipping it in your projects might be a big mistake. Luckily, it can be easily and effectively conducted thanks to numerous automated code review tools that are available on the market. Don’t get overwhelmed by the number of providers! With our in-depth analysis you’ll find a solution to fit your needs.

## Code review at CodeCarrot

At CodeCarrot, [Code review is a crucial element in product development](/a-quick-guide-to-peer-code-review-and-why-you-should-do-it) and it strongly supports the Test-Driven Development (TDD) process to offer the best practices available in developing Rails, CSS and JavaScript code. It helps us make the project better, faster, and more secure through making the code bulletproof. It is also an opportunity for people, especially newbies, to learn good code quickly.

Our developers used to test the correctness of our code with CodeClimate. However, with increasing needs and expectations we decided to seek a better alternative that would have more advanced features. Our Dev team conducted an in-depth research and that’s how we found Codeacy & CodeBeat, a tool nearly tailored for our business. However, we are aware that your dev team might require different features from the code review provider. Therefore, we share the results of our research, so that you can pick the solution which is right for you and save time on doing your own research.

## [Codebeat](https://codebeat.co/)

Codebeat is a dynamically growing tool that covers major technologies and programming languages. It has evolved substantially within the last few months and it’s worth noting that the team is open for feedback and implementation of new features suggested by their users. However, there are still some things missing. The tool does not allow performing any security checks (perhaps a “simple” integration with Brakeman would do the job). It also does not support any open-source tools or linters (in fact, we are still using Hound) and does not support analysing CSS/SCSS.

**Pros:**

* support for most of the languages we use (Ruby, JS, Swift, Objective-C),
* [metrics customization](https://hub.codebeat.co/docs/metrics-customization),
* measuring tools with own algorithms nicely described in the docs (not just a bunch of open-source projects combined together),
* very good support from their team,
* small but well-documented API, which facilitates management e.g. it provides accesses to users working on selected projects (via teams),
* unique quick wins tab,
* `codeclimate-test-reporter` gem that integrates Codebeat with Simplecov coverage reports,
* customer suggestions considered and implemented in the product,
* It is a dynamically growing tool,
* support for Kotlin and Elixir (beta). 

**Cons:**

* still missing some things in the documentation (e.g. explanation of code duplication detection [here](https://hub.codebeat.co/docs/code-duplication-demystified)),
* no possible security issues check,
* no CSS/SCSS analysis.

**Possible issues:**

* I don’t see an option to list all issues found (with the option to search by category) - there’s only the option to check every single file or a “Quick Wins” tab,
* performance is sometimes surprisingly poor.

## [Codacy](https://www.codacy.com/)

Codacy has an awesome UI, lots of features and it’s very flexible thanks to dozens of options. There is also a tool (in beta) which allows you to define your own patterns and implement it to be checked automatically. Frankly, it wasn’t easy to find disadvantages of this tool or any clients’ complaints. However, there is still some area for improvement and potential to growth for Codacy.

**Pros:**

* used by big players like Paypal or Adobe,
* great and intuitive UI,
* the possibility to define issue-based goals to improve the codebase,
* checking lots of security issues (like assigning strange values to private APIs which may lead to unexpected app behaviour),
* a nice feature of browsing commits and monitoring related issues,
* docker analysis,
* huge flexibility thanks to disabling/enabling patterns or whole packages and even ignoring certain patterns in selected files,
* time to fix estimation for each issue,
* small company but growing fast, delivering fresh features frequently,
* well-described issues with examples right below each case (no need to browse the documentation to find out why the issue actually occurred).

**Cons:**

* Incomplete documentation in some parts (some images are hard to read and the amount of information is insufficient sometimes),
* unintuitive one-page charts to track code quality changes over time (it’s a new feature, maybe not fully implemented yet),
* no `hotspots` or `quick wins`,
* no issues searching, only a few dropdown filters.

**Possible issues:**

* we don’t know how the support works there,
* we also don’t know how flexible are they in terms of implementing clients’ suggestions into their product.

## [CodeClimate](https://codeclimate.com/)

CodeClimate is a well-developed and very stable solution with a great number of features. It has many advantages over its competitors and many big players recommend it as the best option. However, it lacked some crucial functionalities that we required for the CodeCarrot code review process, so we switched to an alternative solution.

**Pros:**

* a great number of supported languages, technologies and frameworks,
* used by the biggest players, including Pivotal, New Relic for enterprise and Rails, jQuery for open-source,
* very stable,
* nice new UI,
* well-maintained test coverage feature gem,
* [browser extensions](https://codeclimate.com/browser-extension),
* trends charts,
* test coverage out of the box,
* hotspots - a `quick wins` list.

**Cons:**

* seemingly an integrated bunch of open-source projects,
* pricing - it seems to be the most expensive tool in this comparison,
* still unpredictable API (in beta),
* no support for Objective-C,
* no distinct types for total issues number,
* no detailed description of the issue, only a header with source code,
* no issue searching/filtering, just a paginated list with all of them,

**Possible issues:**

* no interest from the Code Climate team to extend the tool the way customer may suggest.

## Code Review Tools Comparison Summary

### Supported languages and technologies:

**[CodeClimate](https://codeclimate.com/):** Ruby/Rails, JavaScript, Python, PHP, Swift, SCSS/CSS, Go, CoffeeScript, Apex, Ember, ESLint, Haskell, Haxe, RubyMotion, Vim Script

**[Codebeat](http://codebeat.co/):** Ruby, Javascript, Python, Java, Swift, Go, Typescript, Objective-C, Kotlin, Elixir

**[Codacy](https://www.codacy.com/):** Ruby, JavaScript, Python, PHP, Java, Swift, CSS, TypeScript, CoffeeScript, Scala, C/C++, Dockerfile, SASS, Shell Script

### Measuring tools

**[CodeClimate](https://codeclimate.com/):** many existing, open-source tools like Rubocop, Brakeman, CSS/SCSS Lint, ESLint, Flog etc. [full list here](https://docs.codeclimate.com/docs/)
**[Codebeat](http://codebeat.co/):** their own algorithms and implementation written from scratch [see how it works](https://hub.codebeat.co/docs/how-does-it-work)
**[Codacy](https://www.codacy.com/):** many existing, open-source tools like Rubocop, Brakeman, CSS/SCSS Lint, ESLint, Flog etc. [full list here](https://support.codacy.com/hc/en-us/articles/213632009-Engines)

### Pricing

**[CodeClimate](https://codeclimate.com/)**: $16,67/user/month (when billed yearly - otherwise 20$)
**[Codebeat](http://codebeat.co/)**: $20/user/month, but you can probably negotiate
**[Codacy](https://www.codacy.com/)**: $15/user/month

### Documentation

**[CodeClimate](https://codeclimate.com/)**: very good and comprehensive
**[Codebeat](http://codebeat.co/)**: still some things missing
**[Codacy](https://www.codacy.com/)**: not bad, not too much text and some images are not clickable so the readability is limited

## API

**[CodeClimate](https://codeclimate.com/)**: yes, still in beta version
**[Codebeat](http://codebeat.co/)**: yes, simple but usable
**[Codacy](https://www.codacy.com/)**: yes, not described perfectly in their docs

 

| **Features** | **[CodeClimate](https://codeclimate.com/)** | **[Codebeat](http://codebeat.co/)** | **[Codacy](https://www.codacy.com/)** |
| --- | --- | --- | --- |
| **Coverage report** | yes, [link](https://github.com/codeclimate/ruby-test-reporter) | yes, [link](https://hub.codebeat.co/docs/test-coverage-reports) | yes, [link](https://github.com/codacy/ruby-codacy-coverage) |
| **Security analysis** | yes | no | yes |
| **Team per project** | yes | yes | yes |
| **Github PR integratio**n | yes | yes | yes |
| **Slack integration** | yes | yes | yes |
| **Jira integration** | yes | no | yes |
| **total no. of integrations** | 13 | 6 | 10 |

## Wrap up

After a deeper look at all the tools described above, Codebeat seems to be a comparable tool to CodeClimate or Codacy. In case of these three solutions, pros seem to overweigh the cons and a particular feature might clinch the final choice, which would stem from individual needs. Just like it did in case of [CodeCarrot](//www.codecarrot.net/).

*Which is your prefered code review tool, let us know in the comment section.*
