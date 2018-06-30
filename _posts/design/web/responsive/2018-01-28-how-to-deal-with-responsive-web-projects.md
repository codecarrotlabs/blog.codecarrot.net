---
layout: post
author: yashumittal
title: How to Deal With Responsive Web Projects?
date: 2018-01-28 12:00:00 +0530
categories: design
tags: developer designer responsive project
description: Great web projects don’t succeed through good design or development chops alone—they also need communication and collaboration, brainstorming or exchanging ideas between designers and developers.
image: https://i.imgur.com/Mt7sGsm.jpg
---

Great web projects don’t succeed through good design or development chops alone—they also need communication and collaboration, brainstorming or exchanging ideas between designers and developers.

Usually designers and developers work in a silos culture, with very little communication between the team. Once the designs is complete, designers would digitally hand off the files to the developers to integrate the designs without any form of communication.

Is there a way to minimize the problems? Is it possible to _bridge the desginer and developer gap on responsive web projects_ and provide maximal value to the clients?

***

Here at [CodeCarrot](https://www.codecarrot.net/), both designer-developer teams work together to deliver amazing results. They resolved potential pitfalls early, delivered their projects on time, and iterated quickly. This kind of coordination isn’t just good for projects—a communicative, collaborative team is also a happier team. There are fewer misunderstandings and less tension if tasks aren’t going as planned.

Design-development collaboration becomes particularly critical in responsive web design (RWD) projects. Teams now have to account for a wide array of devices. Fixed, “pixel perfect” design must be exchanged for fluid ratios and proportions. And image assets need optimization for various device sizes and resolutions.

Here are a few techniques I’ve found helpful in overcoming these hurdles.

## 1. Focus on the “extreme” viewport sizes first

![When in doubt, base your viewport range on common web experiences: the iPhone and an expanded desktop browser](https://i.imgur.com/qykhsJy.png)

*When in doubt, base your viewport range on common web experiences: the iPhone and an expanded desktop browser.*

Involve developer early in the process, having their insight on how the structure of pages might lead to the evolution of a different design.

Most design start static: you pick a viewport width and height, and sketch or mock up accordingly.

**But begs a few questions:** What dimensions do you prioritize with the dev team? What high-fidelity deliverables should you hand off first? Which devices should you consider first for technical constraints?

I almost always recommend starting with your user base’s “extremes”—the smallest and largest common device sizes. If your application only works on desktop, then you don't have to work on viewport smaller than 1000px. When in doubt, I’d suggest the following for web users:

* 320px
* 576px
* 768px
* 992px
* 1200px

**Note:** Your audience may differ, so check your analytics to determine your “extremes.”

Tackling the small viewport size early forces you to make hard choices about the most important features in your design. The large viewport brings in the opposite considerations: How much content is too much? Are text columns getting too wide, lowering readability?

Should select elements get extra white space, and if so, how much to avoid feeling disjointed? Finally, addressing the smallest and largest viewports usually requires that you consider at least a couple input methods—the smallest viewports are often touch-based, while the largest use the mouse and keyboard.

<blockquote>
Start designing for the smallest to the largest device sizes.
</blockquote>

Perhaps most importantly, when you tackle the extremes, you’re tackling 2 sizes at once, not trying to fully flesh out just 1 viewport and retrofit the rest later. That delay alone could trigger clashes between designers and developers down the road.

## 2. Discuss content layout between breakpoints

Designer giving so much of design attention to static wireframes, it’s important to remember that responsive web design is inherently fluid. Which means that a lot of your web audience will experience the design in its “in-between” states.

So almost every design has to consider the layout adjustments necessary between the spec'd sizes. For example, when the screen size decreases, text content may shrink and images drop into a single column.

<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcodecarrotinc%2Fvideos%2F405803683264652%2F&show_text=0&width=560" width="100%" height="298" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>

Avoid making assumptions about what those adjustments can or should be with your development team. Be proactive, and meet with your developers before they get too deep in their work.

For especially complex layout changes, it’s a smart idea to create another wireframe or sketch to illustrate. Where specificity is less important, a brief discussion or an email describing the transitions can suffice.

## 3. Have an image asset strategy early

![Many responsive images require multiple assets.](https://i.imgur.com/BsMyUIT.png)

_Many responsive images require multiple assets._

Image formats and sizes often create stumbling blocks between designers and developers. You might use PNGs, JPGs, icon fonts, or SVGs for smaller elements and icons. There’s no one right answer: everything depends on the content and resources available. But it’s important to agree on one format and stick with it. Also, you’ll likely develop patterns for common image sizes as your web project progresses.

Yet for modern responsive design, that’s just the starting point. You’ll need at least 2 assets for raster formats _(JPGs)_: 1 for normal displays and a second for high-resolution ones. Advanced responsive image techniques call for more assets for different viewport sizes.

Avoid leaving decisions on responsive image formats to the end of a project. At the bare minimum, have a strategy for display density. Read up on [srcset](/responsive-images-with-srcset-display) to ensure good cross-browser support. If it feels overwhelming, start small. Just altering a few image elements with the `srcset` attribute is a good first step.

## 4. Think atomic, modular design

My RWD workflow is influenced by Brad Frost’s thoughts on [Atomic Web Design](https://www.youtube.com/watch?v=kxxOwYIhgUk) and Jonathan Snook’s [SMACSS](https://smacss.com/). Both frameworks rely on small, reusable components as the basis for strong web architecture.

So for developer handoffs, I like to concentrate on small and reusable components first, because they generally present the same UX and visuals across different devices. That consistency can be easier to digest for the development team. Plus, small components tend to be more reusable across application. So if you design an effective solution, it’s that much easier to re-apply it later on.

<blockquote>
Smaller components is reusable across application and it's easier to re-apply it later on.
</blockquote>

Imagine you’re designing a signup page with a headline, large graphic, and form. Depending on the device, these elements may shift around or change in size.

Early on, focus on the smaller details of the signup form with the dev team. How does it look? What kind of validation do you need? How might the form change for touch input versus mouse and keyboard?

## 5. Bring in developers for visual and UX feedback

Some designers shield developers from product meetings, usability sessions, and other opportunities for feedback. There’s a kickoff, a handoff, and little else. That’s a mistake.

Remember that experienced developers have a ton of applicable knowledge. They might also have intimate knowledge of the product if they’ve worked with it for awhile.

Front-end developers’ and designers’ skills often overlap. More and more designers write their own code. Developers are boning up on rapid prototyping, wireframing, and aesthetic design. RWD has only exacerbated this trend. A developer can bring strong design insights even without a “designer” title.

Granted, separate roles and responsibilities remain valuable. But small steps toward inclusion can significantly improve the final product. So for your next usability test, bring in a developer to discuss the outcome. Or if you’re running a design brainstorm, maybe invite a few devs.

## Collaboration matters

All these techniques need planning and buy-in. With so much attention focused on launching products and hitting deadlines, that can be hard. But good designer-developer relations can bring a lot to any web project—particularly responsive ones. A small investment at the start can have an exponential payoff for your team.
