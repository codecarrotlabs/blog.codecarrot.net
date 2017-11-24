---
layout: post
author: yashumittal
title: Why Ruby is Awesome
date: 2017-11-16 02:40:35 +0530
categories: code
tags: ruby-on-rails ruby rails
description: I’ve been through a few programming languages over the years, and I can say without hesitation that Ruby is my favorite.
image: Ruby-1.jpg
---

I’ve been through a few programming languages over the years, and I can say without hesitation that Ruby is my favorite. Not the “best” (there is no “best” programming language), but my favorite.

Here’s why:

* You can get the same things done in less code
* It’s got lots of useful features built-in

## Write Less Code

Here’s the classic “Hello, world” example in Java:

```
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world");
    }
}
```

Now, here’s a single line of Ruby code that does the same thing:

```rb
puts "Hello, world"
```

Here’s a list of symbols you’d have to understand in order to write the Java sample: `public`, `class`, `{}`, `static`, `void`, `main`, `()`, `String[]`, `System.out`, `println`, `;`

Here’s what you have to understand in order to write the Ruby code: `puts` (it’s the name of a method that prints stuff to the terminal), and `"Hello, world"` (it’s a string, a snippet of text).

Much simpler, right? I don’t want to suggest that every Java program is 6 times as big as an equivalent Ruby program, but Ruby programs are generally less verbose.

## Useful Features

This code:

```rb
puts("delta alpha victor mike sierra".split.sort.map{|word| word.capitalize})
```

Produces this output:

```
Alpha
Delta
Mike
Sierra
Victor
```

Don’t worry if you don’t understand all that; it takes at least a few weeks of studying Ruby in order to learn how to write code like that. The main thing I want to show you is how much you can accomplish in a single line of code.

How can we make such a huge transformation using so little code? Because Ruby objects have lots of useful features built-in:

* Ruby strings (like `"delta bravo victor mike sierra"`) all have [a](//ruby-doc.org/core-2.4.0/String.html#method-i-split) `split` [method](//ruby-doc.org/core-2.4.0/String.html#method-i-split) that lets you split a string into an array (collection) of substrings. You can specify the character the split should happen on, but by default, it uses spaces, which is just what we need in this case. (Convenient, right?)
* Now we have an array (collection) of individual words. Arrays all have [a](//ruby-doc.org/core-2.4.0/Array.html#method-i-sort) `sort` [method](//ruby-doc.org/core-2.4.0/Array.html#method-i-sort) that lets you sort their members. You can sort strings in reverse order, or by length, or any other way you want, but by default it sorts in alphabetical order. (Again, convenient, right?)
* Now we have a sorted array of words. The last thing we do is call [the](//ruby-doc.org/core-2.4.0/Array.html#method-i-map) `map` [method](//ruby-doc.org/core-2.4.0/Array.html#method-i-map) (which, again, all arrays have) to apply some code to each word in the array and give us a new array with the results. That code is provided in a block (that’s the `{|word| word.capitalize}`). This particular block capitalizes each word.

And voila, we have a split, sorted, capitalized list of words, again using only one line of code!

That trick with the `{|word| word.capitalize}` block is particularly awesome, and is a unique feature of Ruby. You can do anything you want with the words in the array. For example, if I replaced `capitalize` with `reverse`, we’d get:

```
ahpla
atled
ekim
arreis
rotciv
```

If I replaced `capitalize` with `sub('e', '#')`, we’d get:

```
alpha
d#lta
mik#
si#rra
victor
```

That’s a lot of power for a single line of code!

## But Wait, There’s More! (Much, much more!)

What I’ve shown you here is just a tiny fraction of the useful methods on strings and arrays. And we haven’t even talked about hashes, or classes, and I’ve barely explained blocks… All of these features and more can be combined in any way you want. Ruby gives you expressive power that many other languages just don’t have.

No wonder Ruby is the language behind the massively powerful [Ruby on Rails framework](http://rubyonrails.org/)! Creating code to handle complex tasks (like running a website) is just easier when you’re using Ruby.
