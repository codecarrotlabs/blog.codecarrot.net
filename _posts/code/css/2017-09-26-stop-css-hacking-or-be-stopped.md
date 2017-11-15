---
layout: post
author: yashumittal
title: Stop CSS Hacking, or be Stopped
date: 2017-09-26 13:10:00
categories: code
tags: code css3 css hacking
description: CSS has experienced a colourful and unusual history. From historic slow adoption to the current slow rate of development, ugly hacks have meant filling in the gaps is par for the course. With CSS1, we had a simple and elegant...
image: //blog.codecarrot.net/images/css-1.png
---

CSS has experienced a colourful and unusual history. From historic slow adoption to the current slow rate of development, ugly hacks have meant filling in the gaps is par for the course.

With CSS1, we had a simple and elegant styling language that was supposed to be friendly to even non-programmers. Hence decisions like, say, lack of variables and constants, or conditional logic. *(My kingdom for an “if” statement!)*

Then CSS2 came along and provided us with some powerful layout tools. Except some browsers completely disagreed on how to implement them *(the box model and floats are two examples that come to mind)*. Us web designers took care of that problem however, thanks to our lovely CSS hacks and filters. Using perfectly valid CSS, we were able to exploit a browser’s parsing error and specifically serve *(or hide)* our CSS to it. Problem solved. Lucky us.

But now that Internet Explorer 7 is looming, we’re getting ready to deal with the first really major upgrade to a browser’s rendering engine since we’ve started using CSS-based layouts in earnest. *(The launch of Safari didn’t really count, since it was so capable right out of the gate.)* The truth is that when IE 7 comes most of our usual hacking methods are going to fail. Afraid yet?

Here’s the nasty little secret of CSS-based development over the past few years: we’ve had a stable target. Because of IE6’s limitations, we’ve been fairly conservative in our usage. There’s really no such thing as cutting-edge CSS, since the CSS2 spec has been final since the late 90’s and CSS3 is off somewhere in the future. Anything we’ve done to date has been able to degrade as gracefully as possible in IE, so we’ve held back on even the more interesting bits of CSS2.

Sure, there are great advanced demos in the form of the CSS Playground, or CSS/edge, or even various CSS Zen Garden designs. But for production-based sites that we create for clients? Conservative CSS use has reigned supreme.

Except … some of us have been a little more than liberal in our hack usage, haven’t we? You might argue that those hacks were necessary to make any sense of the messy browser landscape we were presented with. At the end of a long day of coding, loading that beautiful new site in Internet Explorer has always been a soul-crushing experience. Almost none of us want to spend the time necessary to wrap our minds around just how on earth IE has decided to mangle our code. A few dashes of “html” or “width” there and the problem goes away. The short term fix we applied three years ago, however, now threatens to come back and bite us in the rear.

## Conditional Comments

IE7 will fix a lot of traditional CSS hacks. The Internet Explorer team has publicly expressed disapproval of the whole idea of hacks, in favour of an IE-proprietary method known as conditional comments. Instead of code like this to filter a rule to Win/IE:

```
* html #selector {
	width: 100px;
}
```

We should instead be using an HTML comment syntax to selectively serve up a link to an external CSS file, which will contain a similar rule. The syntax looks like so

```
<!--[if IE]>
	<link rel="stylesheet" href="ie-specific-file.css" />
<![endif]-->
```

And then the IE-specific CSS file in question might contain the following rule:

```
#selector {
	width: 100px;
}
```

In theory, this system works much better than CSS hacks ever did. Instead of specifically exploiting bugs in a browser, bugs that will obviously one day get fixed, conditional comments are an officially-sanctioned feature of the browser that won’t ever go away. They validate, and even though they’re proprietary, when used with discretion they allow us to accomplish exactly the same thing as CSS hacks.

## Sidebar

The question is begged, of course: why are conditional comments implemented only in HTML, and not in CSS? I have it on good word this is something the IE team may look into for future releases. For now, we must place our conditional comments in our HTML files.

## Future Updates

But this is simply one single browser updating, and there’s a larger issue here which we’re going to have to start thinking about sooner or later. I’d prefer sooner.

All popular browsers are improving at a frequent clip again. We’re not stagnating anymore; the improvements are going to keep coming. CSS3 isn’t finished yet, but [various modules of it](//www.w3.org/TR/css3-selectors/) are being implemented already. The future is just around the corner.

As the modern browsers update, in what other interesting and creative ways will our code break? How are we going to test them? How are we going to selectively serve up code to various versions?

Take Safari. Version 2.0 was recently released. Apple has no provision for installing and running multiple versions side by side however, much the same as Microsoft has always done with Internet Explorer.

The practical implication here is that I simply can’t test my work in Safari 1.0 any longer. How do we test now, without needing to own a separate computer for each individual version of a browser? Microsoft suggests we buy Virtual PC and multiple Windows licenses to maintain multiple versions of IE, an expensive proposition. Apple hasn’t suggested anything.

Causing web developers to buy more software and hardware simply to test seems an unlikely scenario; but somehow, test we must.

## Versioning

And the problem will amplify over time, as more incremental updates are released, and the browser share fragments. In one sense this won’t be 1998 all over again with its 85 different versions of Netscape 4, thanks to browser auto-updating keeping most users current. But, not every user will keep up to date. I can’t count how many times I ignore the update nag message on my own machine, so they can hardly be blamed.

What are the odds that all those early adopters of Firefox 1.0 or 1.2 have kept updating, and made it to version 1.5? Likely not as high as we’d hope. Are we going to continue testing in each of them? How will we fix rendering issues that affect 1.0 and 1.2, but not 1.5? No CSS hack I’m aware of can address that discrepency.

Now, let’s be clear. Ever since CSS1, there’s been a very simple versioning control built into the language. If a browser can’t understand a selector or a rule, it simply ignores it. The theory being, as browsers add new support for a particular CSS property or selector, they’ll simply start rendering the rule they previously ignored all along.

Hasn’t worked out so well, has it? One fatal flaw of this method is that it assumes that support for new selectors and properties will be perfect from the start. Need I even get into the problems that have resulted in browser implementation errors? Box model, anyone?

The other, more subtle flaw in this method is that it assumes the fallback is good enough. Simply not rendering a rule due to lack of support, however, causes adverse side effects in styles that depend on that rule. Side effects that can translate into major usability problems for your site’s visitors.

The most obvious example I can give you lies within the CSS3 “text-shadow” property, which is supported only by Safari at the moment. By using the drop shadow as an outline, we can do things previously impossible, like set white text on a white background.

## Text Shadow Demo

To the left, you see the results in Safari; a perfectly legible pairing. To the right, you see almost nothing at all. This is what the text looks like in every other major browser, since they ignore the “text-shadow” property.

Is just ignoring the unsupported property a good enough fallback? Not in this case, and there are other potential problems in this vein. Point being, this all-or-nothing method of managing change simply doesn’t cut it. We need browser-specific filtration, to account for scenarios where the fallback causes more harm than good.

“A standard is a standard – you should be able to render the same code consistently in every browser,” I hear some cry. “Browser-specific authoring is a dead end.” And they have my emphatic agreement. I’d love it if the real world proved that were the case. But it’s not.

## Legitimate Hack Use

No matter how browsers evolve over the next few years, one thing seems relatively safe to predict – there will always be differing levels of support for web standards, whether it be a difference in rendering between major browsers, or even between various versions of the same browser.

The legitimate need for hacks arose as we discovered major browser bugs that prevented us from adopting CSS in the first place; through the use of hacks, we were able to specifically target versions of browsers and force them to comply. Even those on the W3C CSS working group recognize the need for page authors to work around these bugs; wasn’t it Tantek Çelik who gave us the Box Model Hack, after all?

But our CSS hacks are meant for an older set of browsers that will become less relevant in the near future; we don’t have any new mechanisms for filtering the current stable of browsers. How will we deal with browser discrepancies going forward, in light of potential usability problems?

## Coping

I see a few ways.

1. Limit yourself to only those CSS properties and selectors that you know will work across all browsers without fail. In fact, you don’t even have to wait for this, you can start today. Sure, it’s frustrating when all browsers but a single one render on your intended effect, but we’ve pretty well gotten used to that with things like “:hover” support on non-anchor elements. So, hang on to that patience, because you’ll need it.
2. Perhaps this may not even be an issue. If all browsers continually improve, and we never see another repeat of Internet Explorer’s stagnation over the past 5 years, then we simply need to be patient until the effects we seek become practical, and with any luck that won’t be long.
3. We could discover a whole new bag of hacks and filters. With the number of people hacking away at CSS these days, the chances aren’t small that sooner or later we’ll be able to exploit other bugs in other browsers, and get ourselves right back into this situation. I think a lot of people would prefer we didn’t go this route again, but it’s almost inevitable that sooner or later, the first IE7 and Firefox 1.0 hacks will rear their heads.
4. Let’s think pie-in-the-sky here: we could get a bit of recognition that this problem is legitimate, and an official W3C-sanctioned method of browser filtration. I suspect the browser manufacturers are well aware that this is a problem; the IE team has given us a method for filtering out their own browser in the form of conditional comments, after all. Suggestions for codifying a similar method within CSS have been made to the CSS working group many times over the years, and I have it on good authority that there has been at least one formal proposal made in the past on the subject, but as far as I know, nothing has developed from either.

The danger in going this route echos what we learned about HTTP user agent strings in the [late 90’s](//en.wikipedia.org/wiki/User_agent), of course. Crappy browsers will force page authors to filter them somehow. Crappy filtering will cause browsers to pose as each other. Maybe it would be better this time around, since the base technologies have matured a little bit. Maybe it wouldn’t.

## The Reality

So what do I think is actually going to happen moving forward? Quite likely, a bit of everything.

Many will certainly follow the path of least resistance and simply limit themselves to code that works cross-browser. Others won’t settle for the status quo, and instead will look high and low for new hacks that target specific versions of specific browsers.

And maybe, just maybe, we’ll get a reliable method of filtering on a per-browser basis. I’m not holding my breath on that last one, but stranger things have happened.

## Notes

1. The Tan Hack, or * html bug as it’s also known, causes only IE to parse the CSS within the selector to which it’s applied. It will be fixed in IE7.
2. The underscore hack causes only IE to parse the CSS within the rule to which it’s applied. It also will be fixed in IE7.
