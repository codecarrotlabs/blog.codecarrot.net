---
layout: post
author: yashumittal
title: ECMAScript 5 Strict Mode, JSON, and More
date: 2017-10-11 19:22:00
categories: code
tags: coding javascript js json
description: Learn all about Functions in JavaScript — invocation, return, parameters, declarations, and expressions.
image: http://blog.codecarrot.net/images/strictness1.jpg
---

ECMAScript 5’s Object and Property system is a huge new aspect of the language and deserved its special consideration.

There are a number of other new features and APIs that need attention, as well. The largest of which are **Strict Mode** and native **JSON** support.

## Strict Mode

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This strict context prevents certain actions from being taken and throws more exceptions (generally providing the user with more information and a tapered-down coding experience).

Since ECMAScript 5 is backwards-compatible with ECMAScript 3, all of the “features” that were in ECMAScript 3 that were “deprecated” are just disabled (or throw errors) in strict mode, instead.

Strict mode helps out in a couple ways:

* It catches some common coding bloopers, throwing exceptions.
* It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
* It disables features that are confusing or poorly thought out.

It should be noted that ECMAScript 5’s strict mode is different from the strict mode available in Firefox (which can be turned on by going to `about:config` and enabled `javascript.options.strict)`. ES5’s strict mode complains about a completely different set of potential errors (whereas Firefox’s existing strict mode tries to enforce some good practices, only).

### How do you enable strict mode?

Simple. Toss this at the top of a program to enable it for the whole script:

```js
"use strict";
```

Or place it within a function to turn on strict mode only within that context.

```js
function imStrict(){
  "use strict";
  // ... your code ...
}
```

Note the syntax that’s used to enable strict mode (I love this!). It’s simply a string in a single statement that happens to contain the contents “use strict”. No new syntax is introduced in order to enable strict mode. This is huge. This means that you can turn strict mode on in your scripts – today – and it’ll have, at worst, no side effect in old browsers.

You can write your ES5 scripts in a manner that will be able to gracefully degrade for older useragents – something that wasn’t possible with ECMAScript 4. The way in which strict mode is enabled is a great illustration of that point in practice.

A neat aspect of being able to define strict mode within a function is that you can now define complete JavaScript libraries in a strict manner without affecting outside code.

```js
// Non-strict code...

(function(){
  "use strict";

  // Define your library strictly...
})();

// Non-strict code...
```

A number of libraries already use the above technique (wrapping the whole library with an anonymous self-executing function) and they will be able to take advantage of strict mode very easily.

So what changes when you put a script into strict mode? A number of things.

## Variables and Properties

An attempt to assign `foo = "bar";` where ‘foo’ hasn’t been defined will fail. Previously it would assign the value to the foo property of the global object `(e.g.  window.foo)`, now it just throws an exception. This is definitely going to catch some annoying bugs.

Any attempts to write to a property whose writable attribute is set to false, delete a property whose configurable attribute is set to false, or add a property to an object whose extensible attribute is set to false will result in an error. Traditionally no error will be thrown when any of these actions are attempted, it will just fail silently.

Deleting a variable, a function, or an argument will result in an error.

```js
var foo = "test";
function test(){}

delete foo; // Error
delete test; // Error

function test2(arg) {
    delete arg; // Error
}
```

Defining a property more than once in an object literal will cause an exception to be thrown

```js
// Error
{ foo: true, foo: false }
```

### eval

Virtually any attempt to use the name ‘eval’ is prohibited – as is the ability to assign the eval function to a variable or a property of an object.

```js
// All generate errors...
obj.eval = ...
obj.foo = eval;
var eval = ...;
for ( var eval in ... ) {}
function eval(){}
function test(eval){}
function(eval){}
new Function("eval")
```

Additionally, attempts to introduce new variables through an eval will be blocked.

```js
eval("var a = false;");
print( typeof a ); // undefined
```

### Functions

Attempting to overwrite the arguments object will result in an error:
`arguments = [...]; // not allowed`

Defining identically-named arguments will result in an error `function( foo, foo ) {}`.

Access to `arguments.caller` and `arguments.callee` now throw an exception. Thus any anonymous functions that you want to reference will need to be named, like so:

```js
setTimeout(function later(){
  // do stuff...
  setTimeout( later, 1000 );
}, 1000 );
```

The arguments and caller properties of other functions no longer exist – and the ability to define them is prohibited.

```js
function test(){
  function inner(){
    // Don't exist, either
    test.arguments = ...; // Error
    inner.caller = ...; // Error
  }
}
```
Finally, a long-standing (and very annoying) bug has been resolved: Cases where null or undefined is coerced into becoming the global object. Strict mode now prevents this from happening and throws an exception instead.

```js
(function(){ ... }).call( null ); // Exception
with(){}
```

`with(){}` statements are dead when strict mode is enabled – in fact it even appears as a syntax error. While the feature was certainly mis-understood and possibly mis-used I’m not convinced that it’s enough to be stricken from the record.

The changes made in ECMAScript 5 strict mode are certainly varied (ranging from imposing stylistic preferences, like removing with statements, to fixing legitimately bad language bugs, like the ability to redefine properties in object literals). It’ll be interesting to see how people begin to adopt these points and how it’ll change JavaScript development.

<blockquote>
All that being said, I’m fairly certain that jQuery is ES5-Strict compatible right now. Once an implementation of the language is made available (so that that premise may be tested) I’ll happily switch jQuery over to working exclusively in strict mode.
</blockquote>

## JSON
The second major feature of the language is the addition of native JSON support to the language.

I’ve been championing this move for a long time and I’m glad to see it finally arrive in a specification.

In the meantime PLEASE start migrating your JSON-using applications over to Crockford’s [json2.js](http://json.org/json2.js). It is fully compatible with the ECMAScript 5 specification and gracefully degrades if a native (faster!) implementation exists.

<blockquote>
In fact, I [just landed](http://dev.jquery.com/changeset/6361) a change in jQuery yesterday that utilizes the  JSON.parse method if it exists, now that it has been completely specified.
</blockquote>

There are two primary methods for handling `JSON: JSON.parse` (which converts a JSON string into a JavaScript object) and `JSON.stringify` (which convert a JavaScript object into a serialized string).

```js
JSON.parse( text )
```

Converts a serialized JSON string into a JavaScript object.

```js
var obj = JSON.parse('{"name":"John"}');
// Prints 'John'
print( obj.name );
JSON.parse( text, translate )
```

Use a translation function to convert values or remove them entirely.

```js
function translate(key, value) {
  if ( key === "name" ) {
    return value + " Resig";
  }
}

var obj = JSON.parse('{"name":"John","last":"Resig"}', translate);
// Prints 'John Resig'
print( obj.name );

// Undefined
print( obj.last );
JSON.stringify( obj )
```

Convert an object into a serialized JSON string.

```js
var str = JSON.stringify({ name: "John" });
// Prints {"name":"John"}
print( str );
JSON.stringify( obj, ["white", "list"])
```

Serialize only a specific white list of properties.

```js
var list = ["name"];
var str = JSON.stringify({name: "John", last: "Resig"}, list);
// Prints {"name":"John"}
print( str );
JSON.stringify( obj, translate )
```

Serializes the object using a translation function.

```js
function translate(key, value) {
  if ( key === "name" ) {
    return value + " Resig";
  }
}

var str = JSON.stringify({"name":"John","last":"Resig"}, translate);
// Prints {"name":"John Resig"}
print( str );
JSON.stringify( obj, null, 2 )
```

Adds the specified number of spaces to the output, printing it evenly.

```js
var str = JSON.stringify({ name: "John" }, null, 2);
// Prints:
// {
//   "name": "John"
// }
print( str );
JSON.stringify( obj, null, "\t" )
```

Uses the specified string to do the spacing.

```js
var str = JSON.stringify({ name: "John" }, null, "\t");
// Prints:
// {\n\t"name": "John"\n}
print( str );
```

Additionally, a few new generic methods have been added to some of the base objects but, frankly, they aren’t that interesting. The results from String, Boolean, and Number are just equivalent to calling .valueOf() and the result from Date is equivalent to calling `.toISOString()`

```
// Yawn...
String.prototype.toJSON
Boolean.prototype.toJSON
Number.prototype.toJSON
Date.prototype.toJSON
```

## .bind()

A welcomed addition to the language is a built-in .bind() method for enforcing the context of a function (virtually identical to [Prototype’s .bind implementation](http://www.prototypejs.org/api/function/bind)).

```js
Function.prototype.bind(thisArg, arg1, arg2....)
```

Enforces the ‘this’ of the specified function to a specific object – and passing in any specified arguments.

```js
var obj = {
  method: function(name){
    this.name = name;
  }
};

setTimeout( obj.method.bind(obj, "John"), 100 );
```

Considering how long this function (and its equivalents) have been around it’s a welcome addition to the language.

## Date

Dates are now capable of both parsing and outputting ISO-formatted dates. Thank goodness, about time. `rimshot`

The Date constructor now attempts to parse the date as if it was ISO-formatted, first, then moves on to the other inputs that it accepts.

Additionally, date objects now have a new `.toISOString()` method that outputs the date in an ISO format.

```js
var date = new Date("2009-05-21T16:06:05.000Z");

// Prints 2009-05-21T16:06:05.000Z
print( date.toISOString() );
```

## .trim()

A native, built-in, .trim() is now included for strings. Works identically to all the other trim methods out there – with the potential to possibly work faster.

## Array

The JavaScript Array Extras that’ve been around for, what seems like, forever are finally formally specified. This includes the following methods: indexOf, lastIndexOf, every, some, forEach, map, filter, reduce, and reduceRight.

Additionally a new Array.isArray method is included, providing functionality very similar to the following:

```js
Array.isArray = function( array ) {
  return Object.prototype.toString.call( array ) === "[object Array]";
};
```

Altogether I think ECMAScript 5 makes for an interesting package. It isn’t the massive leap that ECMAScript 4 promised but it is a series of respectable improvements that reduces the number of obvious bugs while making the language safer and faster.
