---
layout: post
author: yashumittal
title: Adding Motion into Web Design with Animate.css
date: 2017-09-05 00:50:00
categories: code css
description: Lots of frontend web developers have been getting interested in dynamic interfaces using motion effects. This is all too common with many advancements within popular JavaScript libraries. But there has also been a lot of interest in CSS3 animated effects....
image: http://blog.codecarrot.net/images/frank-mckenna-132749.jpg
---

Lots of frontend web developers have been getting interested in dynamic interfaces using motion effects. This is all too common with many advancements within popular JavaScript libraries. But there has also been a lot of interest in CSS3 animated effects.

One such library is called [Animate.css](http://daneden.me/animate/) which was created by Dan Eden. You can find a lot of great information on the website and usage is very well documented. In this article I want to present a few miscellaneous UI effects which may be applied into typical website layouts. Keep in mind that although Animate.css can make CSS3 animations, it cannot handle binding to specific effects such as clicks or keystrokes. Because of this limitation I will be coupling a bit of jQuery code along with the CSS classes and demonstrating how this comes together in an organized fashion.

## Generating the Animate Library

First you should download a copy of Animate.css from the [Github repo page](https://github.com/daneden/animate.css). If there is a specific number of animations you wish to use it may be easier to create your own custom build. This can be done from the [build page](http://daneden.me/animate/build/) on Dan’s website. The full library is only about 60kb so it’s not overly enormous to keep it all together.

Aside from the Animate CSS library I will also be including a copy of my own stylesheet and a custom Google Web font. Plus the latest [jQuery library](http://blog.codecarrot.net/js/jquery-3.2.1.min.js) and the [HTML5shiv script](http://html5shiv.googlecode.com/svn/trunk/html5.js) both hosted by Google are some additional assets. We can take a peek at my heading code below:

```
<!doctype html>
<html lang="en-US">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <title>Animate.css Basic Webpage Demos</title>
  <meta name="author" content="Jake Rocheleau">
  <link rel="shortcut icon" href="http://blog.codecarrot.net/images/favicon.png">
  <link rel="icon" href="http://blog.codecarrot.net/images/favicon.png">
  <link rel="stylesheet" type="text/css" media="all" href="css/styles.css">
  <link rel="stylesheet" type="text/css" media="all" href="css/animate.css">
  <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Oxygen:400,700">
  <script type="text/javascript" src="http://blog.codecarrot.net/js/jquery-3.2.1.min.js"></script>
<!--[if lt IE 9]>
  <script type="text/javascript" src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>
```

With all of this in place we should look at each of the different elements of the page from top to bottom. We can start out with the title text which animates as you hover along the header area.

## Basic Animation Styles

The demo webpage is made up of some different sections which contain various animated content blocks. If we applied all the animation classes onto each element they would animate immediately once the page loads. It completely defeats the purpose of being able to control the animation.

```
<header id="heading">
  <div class="wrapper">
    <h1>Custom Animate.css</h1>
  </div>
</header>
```

I want to start here because this example does not require any JavaScript code. The CSS pseudo target `:hover` selector will detect whenever the user hovers into the header block. Then we add all the animate styles onto the h1 text using the specific animation named “tada”.

```
#heading {
  display: block;
  width: 100%;
  height: 175px;
  background-color: #2f2f2f;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#5b5b5b), to(#2f2f2f));
  background-image: -webkit-linear-gradient(top, #5b5b5b, #2f2f2f);
  background-image: -moz-linear-gradient(top, #5b5b5b, #2f2f2f);
  background-image: -ms-linear-gradient(top, #5b5b5b, #2f2f2f);
  background-image: -o-linear-gradient(top, #5b5b5b, #2f2f2f);
  background-image: linear-gradient(top, #5b5b5b, #2f2f2f);
  -webkit-box-shadow: 0px 4px 3px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 4px 3px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 4px 3px 1px rgba(0,0,0,0.75);
}

#heading h1 {
  font-family: 'Oxygen', 'Trebuchet MS', Arial, sans-serif;
  font-size: 4.2em;
  line-height: 175px;
  font-weight: bold;
  text-align: right;
  color: #8d8d8d;
  cursor: default;
  text-shadow: 2px 2px 1px #000;
}
#heading:hover h1 {
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  -webkit-animation-name: tada;
  -moz-animation-duration: 1s;
  -moz-animation-timing-function: ease;
  -moz-animation-fill-mode: both;
  -moz-animation-name: tada;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  animation-name: tada;
}
```

You will notice each of the animation codes are broken down into individual properties. Most obviously we can see the `animation-name` which defines what type of animation we need. The duration says how long we animate and the `animation-timing-function` is an easing value. Now the `animation-fill-mode` is a bit confusing but relates to adding delays into your effect. We haven’t used any delays so this value is set to both. You can read a bit more about fill mode properties on [this helpful CSS3 article](http://css-infos.net/property/-webkit-animation-fill-mode).

## Animated Error Messages

Directly underneath the heading area you will notice a message box. Keep in mind that the styles and IDs do not matter so much, and you could apply this effect onto any similar info/warning/error message in your own layout. The animation doesn’t get added until after the user clicks our link to hide the box.

```
<section id="content">
  <div class="wrapper">
    <div id="error" class="animate">
      <p>This is a simple error message. <a href="#" data-anim="bounceOutRight">Click to Hide!</a></p>
    </div>
```

I am using a different method for animation this time around by adding the class `.animate` as a default. This sets up all our timing and easing but does not specify which type of animation we are using. By separating these different properties it is now possible to create a new class for any of the animations you want to try out. Then whenever the user clicks we can add this animated class onto the element via jQuery and watch it fly offscreen.

```
  $('#error a').on('click', function(e){
    e.preventDefault();

    var timer;
    var animateStyle = $(this).attr('data-anim');

    $('#error').addClass(animateStyle);

    // reset timer and after 800ms remove the error div
    clearTimeout(timer);
    timer = setTimeout(function() { $('#error').remove(); }, 800);  
  });
```

This is the JS code which handles our click event. The first block prevents the default HREF value from loading into the browser. Notice this anchor link is also using the HTML5 custom attributes property for `data-anim` which I just made up for this tutorial. You can change this value to any of the [pre-defined animations](http://daneden.me/animate/build/) and it will be pulled via JavaScript.

You may have also noticed the small timer function at the bottom. This will pause for 800 milliseconds before running a bit of code to remove this error div from the page. Most web developers would want to do something like this so the message blocks are not constantly taking up space after being appended into the DOM.

## Dynamic Picture Frames

The next block on the demo page contains two [Dribbble shots](https://dribbble.com/codecarrot) which are using a custom CSS frame class. Note this is yet another example when we do not need to apply JavaScript, although it is certainly a fallback solution.

```
<ul id="imggrid" class="clearfix">
  <li><a href="http://dribbble.com/shots/945432-SS-Bank" target="_blank"><img src="images/dribbble-shot-01.png" class="imgframe" width="320" height="320" class="animate" /></a></li>
  <li><a href="http://dribbble.com/shots/945657-The-3-Little-Witches" target="_blank"><img src="images/dribbble-shot-02.png" class="imgframe" width="320" height="320" class="animate" /></a></li>
</ul>
```

All of the images are using the same animate class. But since we have the container element’s ID name it is possible to rewrite the properties for these images. I have included my demo CSS codes so you can see what I am doing.

```
/* webpage animations */
.animate {
  -webkit-animation-duration: 1.5s;
  -webkit-animation-timing-function: ease-out;
  -webkit-animation-fill-mode: both;
  -moz-animation-duration: 1.5s;
  -moz-animation-timing-function: ease-out;
  -moz-animation-fill-mode: both;
  -ms-animation-duration: 1.5s;
  -ms-animation-timing-function: ease-out;
  -ms-animation-fill-mode: both;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
}


#imggrid img:hover {
  -webkit-animation-duration: 0.6s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  -webkit-animation-name: swing;
  -moz-animation-duration: 0.6s;
  -moz-animation-timing-function: ease;
  -moz-animation-fill-mode: both;
  -moz-animation-name: swing;
  animation-duration: 0.6s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  animation-name: swing;
}
```

By using a more specific selector we can target all the images which are located directly inside the unordered list. Then I have added a custom animation name while also reducing the total duration. This effect should run properly every time you mouse on/off the image.

## Handling Input Field Entry

I specifically enjoy this last example because it is an effect which isn’t often seen in many websites. Yet it is a brilliant use of the animation library while applying JavaScript for checking against user data.

```
  <h2>Handling Form Data</h2>
  <form id="passwords" name="passwords" method="post" action="#">
    <input type="text" name="name" id="name" placeholder="Name..." class="texty">
    <button class="pill">Click for Bad Data</button>
  </form>
```

The input field is using a class `.texty` for adding the basic CSS components. However in jQuery I am targeting the ID name – it doesn’t matter too much on your own pages as long as the effects still work. When the user clicks on our submit button we want to pretend this information is wrong or invalid, and let the user know so they can update the text.

```
  $('form').submit(function(e){
    e.preventDefault();
    var timer;

    $('#name').addClass('shakenform wrongdata');

    clearTimeout(timer);
    timer = setTimeout(function() { $('#name').removeClass('shakenform') }, 800);
  });
```

Notice this time we are adding two different classes onto the form. The first class `.shakenform` will make the animation happen while `.wrongdata` will add the red border and background, also updating the text styles. We are using CSS3 transition effects so the animation and new properties blend together nicely.

```
/* form inputs */
form .texty {
  width: 320px;
  outline: none;
  padding: 7px 8px;
  font-size: 1.5em;
  border: 1px solid #bbb;
  margin-right: 16px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #434343;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
  -webkit-transition: all linear 0.2s;
  -moz-transition: all linear 0.2s;
  -o-transition: all linear 0.2s;
  transition: all linear 0.2s;
}

form .texty:focus {
  border-color: rgba(128, 148, 232, 0.8);
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 7px rgba(82, 168, 236, 0.7);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 7px rgba(82, 168, 236, 0.7);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 7px rgba(82, 168, 236, 0.7);
}

input.wrongdata::-webkit-input-placeholder { color: #535353; }
input.wrongdata:-moz-placeholder { color: #535353; }
input.wrongdata::-moz-placeholder { color: #535353; }
input.wrongdata:-ms-input-placeholder {  color: #535353; }

input.wrongdata {
  color: #864f4f;
  background: #eab8b8;
  border-color: rgba(220, 90, 95, 0.8);
}

.shakenform {
  -webkit-animation-duration: 0.75s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  -webkit-animation-name: shake;
  -moz-animation-duration: 0.75s;
  -moz-animation-timing-function: ease;
  -moz-animation-fill-mode: both;
  -moz-animation-name: shake;
  animation-duration: 0.75s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  animation-name: shake;
}
```

You can also find a lot of other great styles inside my custom CSS document. Developers have been pleasantly surprised over the improvements added into CSS3. And as more browsers jump on board the bandwagon we can expect simple animations to become commonplace over the years to come.

## Final Thoughts

I do hope these smaller website UI examples can amount to some progress for inspired developers. Animate.css is often not enough to use on its own. However if the only animations you need can be triggered via focus or hover events, then CSS3 really is a full package solution! But keep in mind that jQuery will offer so much more control and you will find very different animations in this CSS library compared with jQuery UI.

See what you can build and get a feel for using the Animate library in your own projects. It is very easy to get going and once you understand the syntax it almost becomes like second nature.
