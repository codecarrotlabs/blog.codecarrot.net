---
layout: post
author: yashumittal
title: Should I use Grid or Flexbox?
date: 2018-01-07 15:12:00 +0530
categories: design
tags: design website grid flexbox css
description: A look at the differences between CSS Grid Layout and Flexbox. Why would you choose one over the other?
image: https://cdn.codecarrot.net/images/one-dimensional-vs-two-dimensional.png
---

the differences between Flexbox and CSS Grid Layout. Right now, we can only use CSS Grid Layout by enabling browser flags, however once Grid ships there will be many layout tasks where we could argue for the use of Grid or Flexbox as the solution. Here are some thoughts.

## Major layouts vs. UI elements

When people first encounter CSS Grid Layout, they tend to think of Grid as being the controller of the major page layout, providing a framework for headers and sidebars, main content and footers.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/t2cq0sohb4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

You can see this use case in this example. Only the direct children become a Grid Item and so by declaring a Grid on my wrapper the header, panel, content and footer all become Grid Items and can be placed onto that Grid. Any elements inside those main containers can then be laid out by whichever method makes sense.

Flexbox is not so well suited to creating these types of layouts. It is certainly possible to create a simple layout like the one above using Flexbox. However once flex items wrap, each row (or column if working with flex-direction: column), becomes a flex container itself. Space distribution happens across that row or column, you lose the ability to line things up with items in rows above.

Here we find the biggest difference between Grid and Flexbox. Flexbox is essentially for laying out items in a single dimension – in a row OR a column. Grid is for layout of items in two dimensions – rows AND columns.

## One dimensional vs. Two dimensional

Here is the most simple example of one versus two dimensional layout.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/U6HR7KM41xQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

In the top layout I am using Flexbox to display a set of “cards”. The container has flex-wrap set to wrap and so the flex items wrap onto two lines, I have set flex-grow to 1, flex-shrink to 1 and flex-basis to 200 pixels. So my ideal box width is 200 pixels, but items are able to grow larger and shrink smaller.

If my viewport is at a small enough width to display three boxes on row one, two boxes then wrap below. As flex-grow is set to 1, this means that the space leftover after the flex-basis value has been removed is shared equally between those boxes. Row one has three boxes, which are narrower than the boxes on row two where there are only two boxes.

This is how flexbox works. However, most of the flexbox problems I am asked about are due to developers trying to make flexbox do layout in two dimensions. This is where you need Grid Layout.

In the Grid version we define our grid on the wrapper element, the Grid Items then just drop into the Grid Cells already defined. So an item can line up with other items in the row but also in the column. If we want one of our items to stretch over two column or rows tracks we would need to target that item in some way.

## Working from the content out vs. working from the Grid definition in

What we see in the above example is how when we use Grid Layout we declare our grid and the content of any grid item then has to adapt to fit the shape of the area it is placed in.

If you have a bunch of items, don’t need them to line up with any other elements, but just want them displayed evenly and flexibly, you want flexbox. The most basic of examples demonstrates the behaviour of items getting an equal amount of space between them using justify-content: space-between.

![Working from the content out vs. working from the Grid definition in](chrome_2018-01-06_15-25-18.png)

Grid implements the space distribution and alignment properties that are part of the Box Alignment Module, so there are possibilities to play with the alignment and spacing of grid items to some degree, but the fact remains that due to the two dimensional approach of grid, you can’t make one row of the grid behave differently to the one above. Instead you’ll need to change the properties on the individual grid items. Making them span more cells, or use different alignment values.

So there is your choice. Do you want to let your content control the way it is displayed, on a row by row or column by column basis? That’s flexbox.

Or, do you want to define a grid, and either allow items to be auto-placed into the cells defined by that grid, or control their positioning using line-based positioning or grid template areas. That’s grid.
