---
layout: post
author: yashumittal
title: Your Step-by-Step Guide to A/B Testing with Google Analytics
date: 2017-11-19 13:21:00 +0530
categories: business
tags: business ab ab-testing google google-analytics
description: Learn A/B testing with Google Analytics. 5 easy steps to learn the whole process with a case study of Kapitall that increased its conversion by 44%.
image: 6537-01-ab-testing-1.jpg
---

A/B testing can be as simple as reciting the alphabet…

You design two versions of a web page (A & B), divide the traffic between the two, and choose the one that gives you the maximum conversions.

Simple, right? Wrong.

Most newbies to A/B testing struggle with which tools to use, how to set up their test, and how to know when it’s done. In this article, I’ll show you a free tool, readily available to every website owner. I’ll also give you some guidance on setting up your test and knowing when to call it done.

## Before you start

There are many things you can learn from an A/B test. It can be used to determine whether you should focus on single conversion goal or strive for multiple conversion goals. It can help you know which design elements and messaging are most persuasive for your audience.

No matter what you’re testing, keep your priorities straight. **The end goal of any CRO (conversion rate optimization) process should be to increase your total revenue**.

Imagine you’ve set up an A/B test to choose the best page design for increasing your subscriber rate. It works. Your subscription rate goes through the roof—but the design somehow hurts your sales rate and results in lower revenue.

This might make you insane. Do you keep your winning design? No. Always choose the page that will increase your bottom line, not just your conversions. Remember, companies run on revenue, not on conversion rates.

A conversion for a business could be anything.

* For bloggers, a single subscription could be considered a conversion.
* For eCommerce, a conversion might be a sale, subscription, newsletter sign-up, product carting, or even an event click.

**Before you can start conversion testing, you’ll first need to define what your goal is** for each test, so you can accurately identify the winning page design.

![a/b testing Google analytics](//cdn.codecarrot.net/images/a-b-testing-Google-analytics.png)

There are many conversion testing tools on the market, but the best are usually paid and add to your marketing expenses. The one exception to this rule is Google Analytics.

It’s very simple to use Google Analytics for A/B testing or split testing with two or multiple variations in the website design. Now, I’m going to provide you with a step-by-step guide for easily testing your web page through a Google Analytics content experiment.

## Choose an Experimental Objective

Google has combined A/B testing and split testing into one term—content experiment.

You’ll find it in Google Analytics under “Behavior” and “Experiments.” On that page, simply click the button for “Create Experiment.”

![behavior experiment](//cdn.codecarrot.net/images/behavior-experiment.png)

You’ll be take to a screen (pictured below) where you can set up your experiment.

First, add in the experiment name. For instance, if you want to perform A/B testing for a sign-up form or product selling button, then create a descriptive name that makes it easy to identify the experiment.

Under “Objective for this experiment,” you’ll define the metric you’ll use to evaluate the results from your test. Metrics can be chosen from Adsense, Ecommerce, Goals, Site Usage, etc.

* If you’re looking to improve ad clicks or impressions, then choose the Adsense option.
* If you want to boost revenue or the number of transactions, select eCommerce.
* If you have predefined goals like session duration, event attendances, or destination page clicks, then opt for the goal metric.
* Lastly, if you’re looking to better user experience through average page views or time on site, go for site usage.

The best part is you can set multiple metrics at one time.

![set objective of a/b testing](//cdn.codecarrot.net/images/first-step-to-set-objective-of-experiment.png)

## Divide Your Web Traffic

Once you’ve set the objective, you can divide the percentage of web traffic for the content experiment. This will control how many people visiting your website will see one of your test pages as opposed to your original page.

For quick results, you may want to include a high percentage of visitors in the experiment. However, if your experiment is rather drastic or risky, include only a small percentage of your website’s traffic. It’s also smart to turn on the email notification to stay updated on any changes occurring in the experiment.

In the “Advanced Options” tool, you can control how to divide the traffic by turning on the “Distribute traffic” toggle button. Enable this option to assign an equal amount of traffic to each variation for the life of the experiment.

If this button is left disabled, content experiments will follow the default behavior by adjusting traffic dynamically based on variation performance.

From there, you should set the minimum experiment time at three weeks for the best results.

Google Analytics also allows you to fix the confidence threshold for your content experiment to determine the minimum confidence level that must be achieved before a winner can be declared.

The higher the threshold, the more confident you can be that the winning web page has competed well against the other design. Keep in mind that higher thresholds can make your content experiment considerably longer as Analytics waits to crown a champion.

**Pro Tips:** Use this confidence calculator to determine your confidence threshold.

## Configure Your Experiment and Code

The next step is to configure the experiment by adding in your original web page and your test pages.
As you can see in the image below, you simply need to enter the URL of your current page and all variation web pages.

Once you add the original and test pages, look over the preview image to be sure you’ve entered the right URL. Hit the “Save Changes” button after you check for completeness to head to the next experiment section.

![configure the experiment](//cdn.codecarrot.net/images/configure-the-experiment.png)

Now, you’ll need the experiment code for your testing project.

If Google Analytics tracking codes are properly installed on your original and variation pages, an experiment code will be immediately visible in the box.

Place this code immediately after the opening head tag at the top of your original web page. Once it’s added, hit the “Save Changes” button again to progress to the final step.

![setup the a/b testing code](//cdn.codecarrot.net/images/setup-the-code.png)

**Pro Tips:** You can use the [Google Content Experiments plugin](//wordpress.org/plugins/google-content-experiments/screenshots/) to enter the code on your page.

## Review and Get Started

When you’ve added the code, Google Analytics will validate it and show any errors that have been encountered if applicable.

Sometimes Analytics isn’t able to find the code. In this case, you can skip the validation phase as long as you’re sure the code was properly added. Google recommends skipped validation as only a last resort move. Instead, check your page for any errors that may have been introduced.

Otherwise, you’ll be given the green flag to start your content experiment. Your experiment will launch and you’ll start seeing reported data within one to two days.

![review the experiment](//cdn.codecarrot.net/images/review-the-experiment.png)

## Check Your Results

After your experiment has run its course, Google Analytics will declare the winner based on your previously defined metrics and confidence threshold. It will take at least three weeks to reach this step.

By reviewing your results, you’ll identify the page that performs the best. You can then publish this as the page you want viewed by all website visitors.

Easy. But does it work?

Kapitall increased conversions by 44 percent through A/B testing from a Google Analytics content experiment. So clearly it does.

Overall, Google Analytics is a free tool that’s very easy to configure for running testing experiments because the search engine handles all of the dirty work.

There’s one downside though. Analytics doesn’t support multivariate testing, which is a well-known technique for testing multiple variables like color, text size, and buttons all at once. Google Analytics can’t be used for an email campaign either.

That said, it’s still the best option for running A/B testing on your landing page and conducting a content experiment at the very low price of free.

Have you used Google Content Experiments? What was your biggest win?
