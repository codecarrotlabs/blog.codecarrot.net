---
layout: post
author: yashumittal
title: 14 Handy jQuery Code Snippets for Developers
date: 2017-09-14 22:50:00
categories: code
tags: jquery javascript
description: The jQuery dev team has been releasing code updates frequently since the project began. Here some of my go-to jQuery code snippets for developers.
image: jquerysnippets2-658x243.png
---

The jQuery dev team has been releasing code updates frequently since the project began. JavaScript developers have never had an easier framework to code on frontend interfaces. For anybody just getting started in web development you can be certain to run into some jQuery code on the web.

I have put together a series of 14 helpful jQuery code snippets you may save and copy to use at your own discretion. These are merely blank templates you can edit to change variables and parameters matching your own script. I’m sure even experienced developers may find some of these snippets beneficial and shaving off time during code sessions.

## 1. Hover On/Off

```js
$("a").hover(
  function () {
    // code on hover over
  },
  function () {
    // code on away from hover
  }
);
```

[Source](//api.jquery.com/hover/)

The jQuery hover method is a quick solution for handling these events. You can determine whether the user is just hovering over your element, or if the user is just leaving the hover state. This allows for two custom functions where you can run two distinct sets of code.

## 2. Prevent Anchor Links from Loading

```js
$("a").on("click", function(e){
  e.preventDefault();
});
```

[Source](//api.jquery.com/on/)

When you create JavaScript applications there are plenty of times where you need a link or button to just do nothing. This is often for triggering some type of dynamic effect, such as a hidden menu or Ajax call. By using the event object during any click, we can manipulate the data sent back to the browser URL. In this scenario I am stopping the whole href from loading anything at all!

## 3. Scroll to Top

```js
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
```

[Source](//stackoverflow.com/a/1145297/477958)

You have probably seen this functionality becoming popular on all the new social networking websites. I have definitely seen this technique appear on infinite-scrolling layouts such as Tumblr and Pinterest.

The code is very minimal but powerful in some layouts. You are offering a simple link or button display which behaves like a “back to home” link. By using the animate effect in jQuery users won’t notice the jump all at once, but instead over a brief period of milliseconds.

## 4. Ajax Template

```js
$.ajax({
  type: 'POST',
  url: 'backend.php',
  data: "q="+myform.serialize(),
  success: function(data){
    // on success use return data here
  },
  error: function(xhr, type, exception) {
    // if ajax fails display error alert
    alert("ajax error response type "+type);
  }
});
```

[Source](//api.jquery.com/jQuery.ajax/)

Passing form data via Ajax is one of the most common uses for jQuery. As a web developer myself I can’t think how many times I am using the ajax method in each project. The syntax can be awfully confusing to memorize, and checking the documentation gets old after a while. Consider copying this small template for usage in any future Ajax-powered webapps.

## 5. Animate Template

```js
$('p').animate({
    left: '+=90px',
    top: '+=150px',
    opacity: 0.25
  }, 900, 'linear', function() {
    // function code on animation complete
});
```

[Source](//api.jquery.com/animate/)

As we saw the animate method earlier, this is very powerful for creating dynamic movement on your page. CSS3 transitions are a whole lot easier in some circumstances. But with animate you can manipulate multiple objects or CSS properties all at once!

It’s a very powerful library to get into and start playing with. If you haven’t used any of the jQuery UI library I suggest spending an hour or two practicing with demo stuff. You can animate any object on the page into almost any position or updated style.

## 6. Toggle CSS Classes

```js
$('nav a').toggleClass('selected');
```

[Source](//api.jquery.com/toggleClass/)

Adding and removing CSS classes on HTML elements is another fairly common action. This is one technique you may consider with selected menu items, highlighted rows, or active input elements. This newer method is simply quicker than using `.addClass()` and `.removeClass()` where you can put all the code into one function call.

## 7. Toggle Visibility

```js
$("a.register").on("click", function(e){
  $("#signup").fadeToggle(750, "linear");
});
```

[Source](//api.jquery.com/fadeToggle/)

Fading objects out of the document is very common with modern user interfaces. You can always have small popup boxes or notifications which need to display and then hide after a few seconds. Using the fadeToggle function you can quickly hide and display any objects in your DOM. Keep this code handy if you will ever need such functionality in a website interface.

## 8. Loading External Content

```js
$("#content").load("somefile.html", function(response, status, xhr) {
  // error handling
  if(status == "error") {
    $("#content").html("An error occured: " + xhr.status + " " + xhr.statusText);
  }
});
```

[Source](//api.jquery.com/load/)

Believe it or not you can actually pull external HTML code from a file right into your webpage. This doesn’t technically require an Ajax call, but instead we’re parsing the external files for whatever content they have. Afterwards this new content may be loaded into the DOM anywhere in the page.

## 9. Keystroke Events

```js
$('input').keydown(function(e) {
  // variable e contains keystroke data
  // only accessible with .keydown()
  if(e.which == 11) {
     e.preventDefault();
  }
});

$('input').keyup(function(event) {
  // run other event codes here							  
});
```

[Source](//api.jquery.com/keydown/)

Dealing with user input is another grey area I have come across. The jQuery keydown and keyup event listeners are perfect for dealing with such experiences. Both of these methods are called at very different times during the keystroke event. So make sure you have the application planned out before deciding which one to use.

## 10. Equal Column Heights

```js
var maxheight = 0;
$("div.col").each(function(){
  if($(this).height() > maxheight) { maxheight = $(this).height(); }
});

$("div.col").height(maxheight);
```

[Source](//web.enavu.com/tutorials/top-10-jquery-snippets-including-jquery-1-4/)

This is a small jQuery snippet I ran into while surfing the web earlier in the year. While this is not the most recommended solution for your layout display, this code snippet may come in handy down the line. CSS column heights are not always matched and so this dynamic solution using JavaScript is worthy of some insight.

## 11. Append New HTML

```js
var sometext = "here is more HTML";
$("p#text1").append(sometext); // added after
$("p#text1").prepend(sometext); // added before
```

[Source](//api.jquery.com/append/)

Using the `.append()` method we can quickly place any HTML code directly into the DOM. This is similar to `.load()` we saw earlier, except these functions can take HTML from any source. You could setup a brand new variable of HTML text or even clone HTML right from your webpage. These properties are often used in conjunction with Ajax response data.

## 12. Setting & Getting Attributes

```js
var alink = $("a#user").attr("href"); // obtain href attribute value
$("a#user").attr("href", "//www.google.com/"); // set the href attribute to a new value
$("a#user").attr({
  alt: "the classiest search engine",
  href: "//www.google.com/"
}); // set more than one attribute to new values
```

[Source](//api.jquery.com/attr/)

This property is relatively straightforward but I always see these problems in StackOverflow. You can pull the `.attr()` method on any HTML element and pass in the attribute string value. This will return the value of that attribute, whether it’s ID or class or name or maxlength. All HTML attributes may be accessed through this syntax and so it’s a very powerful method to keep in mind.

## 13. Retrieve Content Values

```js
$("p").click(function () {
  var htmlstring = $(this).html(); // obtain html string from paragraph
  $(this).text(htmlstring); // overwrite paragraph text with new string value
});

var value1 = $('input#username').val(); // textfield input value
var value2 = $('input:checkbox:checked').val(); // get the value from a checked checkbox
var value3 = $('input:radio[name=bar]:checked').val(); // get the value from a set of radio buttons
```

[Source](//api.jquery.com/val/)

Instead of appending new HTML content into the document you may also pull out the current HTML content from any area in your webpage. This can be an entire list item block, or the contents of a paragraph tag. Also the `.val()` property is used on input fields and form elements where you cannot get inside the object to read anything further.

## 14. Traversing the DOM

```js
$("div#home").prev("div"); // find the div previous in relation to the current div
$("div#home").next("ul"); // find the next ul element after the current div
$("div#home").parent(); // returns the parent container element of the current div
$("div#home").children("p"); // returns only the paragraphs found inside the current div
```

[Source](//api.jquery.com/children/)

This idea of traversing through object nodes is deep enough to be an article within itself. But for any intermediate or advance jQuery developers who understand this topic, I’m sure these quick snippets will help in future problem solving.

The goal is often to pull data from another element related to the currently active element(clicked, hovered, etc). This could be the container(parent) element or another inner(child) element, too. There are lots of tools for pulling data from around the DOM so don’t be afraid of experimentation.

## Final Thoughts

This quick guide should be handy to any jQuery fans or even developers who have heard about jQuery but never studied the language. Feel free to copy these snippets or save this article to your own bookmarks as a reference.
