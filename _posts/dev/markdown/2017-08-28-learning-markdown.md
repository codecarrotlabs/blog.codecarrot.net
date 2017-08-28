---
layout: post
title: Learning Markdown
date: 2017-08-28 04:14:00
categories: dev markdown
description: Learn how to use Markdown in order to write great web content without needing to be a HTML rockstar.
image: http://blog.codecarrot.net/images/learning-markdown.png
---

Markdown is a simple text-based markup language and conversion tool that allows writers to create great content for the web without having to worry too much about HTML. The syntax of the language is designed to be easy to learn and intuitive. It’s ideal for people that write content for the web but that might be distracted by the HTML syntax.

***

**Note:** Markdown wasn’t really designed as a language for creating complete web pages. It’s more suitable for just content areas like the body of a blog post, an article or web page copy.

Markdown files use the `.md` or `.text` extensions.

***

A common problem that faces HTML is that having all those tags in your markup makes it hard to actually read the content without viewing the page in a web browser. Markdown aims to solve this problem by providing a simple, unobtrusive syntax for marking up content elements such as headings, links, lists, images and more!

The Markdown syntax consists of a number of standard characters that represent HTML elements. When you are ready to publish your content, you pass your Markdown code through a converter that generates the HTML code for you.

## Converting Markdown to HTML

There are a number of different ways that you can convert your Markdown to HTML.

Use a plugin for your **Content Management System**.

There are plugins available for many popular Content Management Systems that will allow you to write your content using Markdown. Your Markdown will then be converted to HTML when you save your changes. If you are a WordPress user check out [WP-Markdown](http://wordpress.org/extend/plugins/wp-markdown/).

Use a plugin for your **Text Editor**.

There also plugins available for popular text editors that provide tools for previewing and converting your markdown code. Federico Viticci put together a great [list of plugins](http://www.macstories.net/roundups/sublime-text-2-and-markdown-tips-tricks-and-links/) for Sublime Text 2.

Finally, you can also your the **Command Line Tools**.

The command line tools that can be downloaded from the project website also allow you to convert your markdown to HTML. If you’re a Mac user with homebrew you can simply do `brew install markdown` at the terminal to get these tools installed. Once installed, to use the command line interface you issue the following command.

`markdown /path/to/input_file.md > output.html`

Before I take you through the Markdown syntax lets take a look a simple example.

```
# CodeCarrot
CodeCarrot is an Agile team with excellent track record & great communication skills. We love Web and mobile application development!
```

Running this through the Markdown converter would produce the following HTML.

```
<h1 id="codecarrot">CodeCarrot</h1>
<p>CodeCarrot is an Agile team with excellent track record & great communication skills. We love Web and mobile application development!</p>
```

As you can see, the Markdown version is much easier to read. This is one of the biggest benefits of using Markdown and is also one of the reasons that a lot of experienced developers opt to use it over writing pure HTML.

Now that you understand the problem that Markdown is out to solve lets take a detailed look at the syntax.

## Headings

There are two different styles for marking up headings, *setext* and *atx*. In this article I’m going to focus on the *atx* style as it supports more heading levels (six levels against the two levels support by the setext style).

To create headings in Markdown you simply prefix the heading text with a pound sign (#) followed by a space. The number of pound signs that you use indicates the importance of the heading.

```
# Level 1 Heading  
## Level 2 Heading  
### Level 3 Heading  
#### Level 4 Heading  
##### Level 5 Heading  
###### Level 6 Heading
```

This Markdown would produce the HTML below.

```
<h1>Level 1 Heading</h1>
<h2>Level 2 Heading</h2>
<h3>Level 3 Heading</h3>
<h4>Level 4 Heading</h4>
<h5>Level 5 Heading</h5>
<h6>Level 6 Heading</h6>
```

In accordance with the HTML specification you can only use up to six pound signs (indicating a level 6 heading). If you use more than six pound signs the converter will not create a heading at all and the pound signs will be visible to the reader.

## Paragraphs

Creating paragraphs of text is easy. Simply separate paragraphs using one or more blank lines, you don’t need to use any special characters.

```
This is a paragraph of text.

This is another paragraph.
```

This Markdown would create two paragraphs.

```
<p>This is a paragraph of text.</p>
<p>This is another paragraph.</p>
```

## Line Breaks

If you want to add a line break simply add two spaces to the end of the line.

```
This is the first line.  
This is the second line.
```

The first line in this example has two spaces at the end so the HTML will include a line break. A single paragraph element encloses both of the lines of text.

```
<p>This is the first line. <br />
This is the second line.</p>
```

## Blockquotes

To create a blockquote you need need to prefix each line of the blockqoute with an angled bracket (>) followed by a space. You can create multiple paragraphs within a blockquote using empty lines, as you did before.

```
> A person who never made a mistake never tried anything new.

> The true sign of intelligence is not knowledge but imagination.
```

This Markdown would become the following HTML.

```
<blockquote>
    <p>A person who never made a mistake never tried anything new.</p>
    <p>The true sign of intelligence is not knowledge but imagination.</p>
</blockquote>
```

(Quotes provided by the mind of the great Albert Einstein.)

## Phrase Emphasis

Adding emphasis to phrases is pretty straightforward. To create a `<strong>` element, wrap the phrase within double asterisks `(**)` or double underscores `(__)`. Creating an `<em>` element requires single asterisks or underscores.

```
**Double asterisks produces a strong element**    
__As does double underscores__

*A single asterisk produces an em element*  
_As does a single underscore_
```

Here’s the HTML conversion (I added some line breaks).

```
<p><strong>Double asterisks produces a strong element</strong> <br>
<strong>As does double underscores</strong></p>

<p><em>A single asterisk produces an em element</em> <br>
<em>As does a single underscore</em></p>
```

## Lists

Markdown supports both ordered and unordered lists as well as nesting.

## Unordered Lists

Unlike in HTML you don’t need to worry about creating an enclosing element for Markdown lists, you only need to focus on the actual list items. To create an unordered list you need to prefix each list item with either an asterisk `(*)`, minus `(-)` or plus `(+)` and the follow that up with a space. It is up to you which symbol you use, just be consistent once you have made your choice.

```
* Item One
* Item Two
* Item Three

- Item One
- Item Two
- Item Three

+ Item One
+ Item Two
+ Item Three
```

The Markdown above shows three examples of unordered lists using varying syntax. All of these examples will produce the same HTML shown below.

```
<ul>
<li>Item One</li>
<li>Item Two</li>
<li>Item Three</li>
</ul>
```

## Ordered Lists

To create an ordered list you prefix each list item with a number, followed by a period, and finally a space. It’s worth noting that the actual number you use doesn’t matter. This is because the number that is displayed to the reader is handled by the browser and not in HTML (although you can manipulate the display behavior using CSS).

```
1. Item One
2. Item Two
3. Item Three

1. Item One
1. Item Two
1. Item Three
```

Both the of the Markdown examples above will be converted into the following HTML.

```
<ol>
<li>Item One</li>
<li>Item Two</li>
<li>Item Three</li>
</ol>
```

## Nested Lists

To create nested lists you need to indent the nested list items using 4 spaces (or one tab). You can mix-and-match list types when nesting. So you could have an ordered list nested within an unordered one and vice-versa.

```
* Item 1
    * Item 1.1
    * Item 1.2
* Item 2
* Item 3
```

The example above demonstrates nesting an unordered list within another unordered list. This would produce the following HTML.

```
<ul>
    <li>Item 1
        <ul>
        <li>Item 1.1</li>
        <li>Item 1.2</li>
        </ul>
    </li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

## Links

The syntax for creating links has been simplified as much as possible. To create a link you first place the link text within square brackets. Immediately following the closing square bracket you then add a pair of regular brackets that contain the link.

```
[CodeCarrot Team](http://codecarrot.net)
```

The Markdown above will create a simple link to the CodeCarrot home page.

```
<a href="http://codecarrot.net">CodeCarrot Team</a>
```

You can also add a `title` attribute to your link by adding the title text after the URL but within the brackets (as shown below). Make sure that you add a space between the URL and the title text.

```
[CodeCarrot Team](http://codecarrot.net "Agile team with excellent track record & great communication skills. We love Web and mobile application development!")
```

This example would produce the following HTML link, complete with `title` attribute.

```
<a href="http://codecarrot.net" title="Agile team with excellent track record & great communication skills. We love Web and mobile application development!">CodeCarrot Team</a>
```

## Images

Images use a similar syntax to links. This time the text you place within the square brackets will form the `alt` text for the image and the URL in the regular brackets will be used as the path to the image file. The whole syntax is prefixed with a bang (!) which indicates that an image should be created not a link.

```
![The image alt text goes here](http://example.com/icon.png)
```

The example above will be converted to the following HTML.

```
<img src="http://example.com/icon.png" alt="The image alt text goes here">
```

## Code

It’s quite common for us programmers to write blog posts that contain code that needs to be displayed in plain text. HTML provides the `<pre>` and `<code>` elements to help us accomplish this.

Markdown supports both inline code snippets and code blocks.

## Inline Code Snippets

In HTML we would use the `<code>` element to markup occurrences of variable or file names when they appear inline. When using Markdown we just need to wrap the inline code snippet in backticks ```(`)```.

```
The `index.html` file contains the homepage for your website.
```

The example above uses backticks to indicate that `index.html` should be wrapped in a `<code>` element.

```
<p>The <code>index.html</code> file contains the homepage for your website.</p>
```

## Code Blocks

For occasions when you have a larger body of code to markup you need a slightly different approach. In HTML we would use `<pre>` and `<code>` elements to markup a body of code and preserve the layout of the text.

With Markdown you just need to indent the whole code block by 4 spaces (or one tab). Just like you do with nested lists.

```
  function solveForX(y) {
    return solve(y);
  }
```

The code in the example above has been indented by 4 spaces, indicating that it should be wrapped in `<pre>` and `<code>` elements.


```
  <pre><code>function solveForX(y) {
    return solve(y);
  }
  </code></pre>
```

Notice that the indents within the original block of code are unaffected in the HTML output.

## Horizontal Rules

To add horizontal rules in your markdown simply use three or more asterisks, minus signs, or underscores in a row. These must be on a single line with no other content for the converter to create a horizontal rule.

```
***
---
___
```

All three of the examples above will produce a `<hr>` element.

## Inline HTML

Markdown is really useful for taking care of simple markup but it falls down when it comes to more complex structures like tables. Luckily you can mix HTML and Markdown together. The Markdown converter will preserve any HTML that it encounters within your Markdown files.

```
This is a standard paragraph of **text**.

<table>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Yashu</td>
            <td>Mittal</td>
        </tr>
    </tbody>
</table>

Here is some more text that the _Markdown_ converter will put into a new paragraph.
```

In the example above the Markdown converter will leave the <table> untouched but will create HTML elements for the remaining content.

```
<p>This is a standard paragraph of <strong>text</strong>.</p>
<table>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Yashu</td>
            <td>Mittal</td>
        </tr>
    </tbody>
</table>
<p>Here is some more text that the <em>Markdown</em> converter will put into a new paragraph.</p>
```

It is worth mentioning that the converter does not process Markdown syntax within block-level HTML elements (`<div>`, `<p>`, etc.) that have been manually coded. For example the converter would not create a `<strong>` element around the word ‘Hello’ in this example.

```
<div>**Hello** CodeCarrot!</div>
```

## Escaping Markdown Syntax

You may run into instances when the converter is interpreting your use of the syntax characters as a signal to create HTML elements when you don’t really want it too. This can be frustrating at first, but don’t fear there is a solution!

If you want the converter to ignore a character you simply prefix it with a backslash (\).

For example, the asterisks in the example below are escaped with a backslash so the converter would not create an unordered list.

```
\* Item One  
\* Item Two  
\* Item Three
```

I’ve listed all of the characters used in Markdown syntax below for your reference.

```
\ ` * _ { } [ ] ( ) # + - . !
```

## Summary

Markdown is a fantastic language for quickly putting together a blog post or some content for a website. Personally I use it a lot. In fact, I used it to write this article.

The main drawback of Markdown is that you are confined to a fairly limited subset of what is available in HTML. Most notably, you cannot define the majority of element attributes in Markdown alone. That said, Markdown wasn’t designed to be a replacement for HTML. It aims to make it simpler for web writers to create content. A goal that I think it achieves very well. The ability to mix-in HTML also allows you to circumvent the issue of being occasionally limited by the native Markdown syntax.

If you haven’t tried using Markdown before I encourage you to check it out. If you regularly write content for the web you could find that it makes your writing experience much more enjoyable.

Image taken from [dribbble](https://dribbble.com/shots/2558289-Markoff-Icon)
