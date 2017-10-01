---
layout: post
author: yashumittal
title:  Numbers in JavaScript
date: 2017-10-01 16:39:00
categories: code
tags: coding javascript js numbers
description: Computer’s and data, these two words have an awesome relationship with each other. Inside the computer’s world, there is only data.
image: http://blog.codecarrot.net/images/bundle-of-numbers6.jpg
---

Computer’s and data, these two words have an awesome relationship with each other. Inside the computer’s world, there is only data. Read the data, modify the data, create a new data — simply put, data is everything according to me when it comes to Programming.

Data is stored as long sequences of bits. Bits are those two-valued things, which are described as zeros and ones. Yes those binary numbers, whatever you write in JavaScript, the JavaScript engines like Google’s V8 (Chrome) and Mozilla’s SpiderMonkey(Firefox) internally compile them to zeroes and ones aka Binary Numbers. Computer’s only understand binary, we write in JavaScript, that code get’s compiled in regular binary. “Write JavaScript, Compile it in Binary, Repeat.”

A typical modern computer has more than 30 billion bits in its volatile data storage. If you want to work with such quantities of bits without getting lost in it, you can separate them into chunks that represent pieces of information. In a JavaScript environment, those chunks are called values. Although all values are made of bits, they play different roles to each other.

Every value has a type that determines its role. There were six basic types of values in JavaScript: numbers, strings, Booleans, objects, functions, and undefined values. With ES6, a new type was born, called Symbol. In this article we will cover **Numbers** in JavaScript.

## Numbers

Values of the number type are, unsurprisingly those numeric values. In JavaScript, we write them like this:

```
var number = 12;
console.log(number); //=> 12
```

As I said before no magic here, this will cause the bit pattern for the number 12 to come into existence inside the computer’s memory. Unlike other programming languages. JavaScript uses a fixed number of bits, 64 of them to be precise. Here’s what MDN says:

According to the ECMAScript standard, there is only one number type: the [double-precision 64-bit binary format IEEE 754 value](http://en.wikipedia.org/wiki/Double_precision_floating-point_format)(number between -(253 -1) and 253 -1). There is no specific type for integers. In addition to being able to represent floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and [NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) (not-a-number).

In JavaScript, numbers are represented as 64-bit floating point, the same as Java’s double. There is no separate integer type, so please remember that 1 and 1.0 are the same value. A number literal can be an integer, floating point, or (integer) hexadecimal. Please note that JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

```
let x = 3.14;     // Integer, a number with decimals
let y = 34;       // Floating point, A number without decimals
let z = = 0xFF;   // HexaDecimal, `z` will be 255
// Let's print/log them
console.log(x);
console.log(y);
console.log(z);
```

Extra large or extra small numbers can also be written with scientific (exponent) notation:

```
let a = 2.998e8;    // 2.998 × 10^8 = 299,800,000
let b = 123e-5;   // 123 x 10^-5 = 0.00123
// Let's print/log them
console.log(a);
console.log(b);
```

The main thing to do with numbers is arithmetic. Arithmetic operations such as addition or multiplication take two number values and produce a new number from them. Here is what they look like in JavaScript:

```
let c = 100 + 4 * 11;
console.log(c); //=> 144
```

Does that example mean “add 4 and 100, and multiply the result by 11”, or is the multiplication done before the adding? As you might have guessed, the multiplication happens first. But as in mathematics, you can change this by wrapping the addition in parentheses.

```
let d = (100 + 4) * 11;
console.log(d); //=> 1144
```

Here are how will you do mathematical operations for addition, subtraction, multiplication, division, and remainder in JavaScript respectively.

| Operator | Description |
| ----- | ----- |
| + | addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Remainder |

**Special Numbers:** There are three special values in JavaScript that are considered as numbers but don’t behave like normal numbers. The first two are Infinity and -Infinity, which represents the positive and negative infinities.

**Note:** Infinity — 1 is still Infinity, and so on. The value Infinity represents all values greater than `1.79769313486231570e+308`.

I would urge you that you should not have trust in infinity-based computation as this isn’t mathematically solid, and it will quickly lead to our next special number: NaN.

NaN would stand for “not a number”. For example, when you are trying to calculate 0 / 0 (zero divided by zero), Infinity — Infinity, or any number of other numeric operations that don’t return an explicit, and meaningful result.

**Testing against NAN:** NaN would compare unequal values (via ==, !=, ===, and !==… Don’t worry we will talk about these logical operators soon) to any other value — including to another NaN value. Use `Number.isNaN()` or `isNaN()` to explicitly determine whether value is NaN or not. You can also perform a self-comparison: NaN and only NaN will compare unequal to itself.

```
console.log(NaN === NaN);        // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true
function valueIsNaN(v) {
return v !== v;
}
console.log(valueIsNaN(1));          // false
console.log(valueIsNaN(NaN));        // true
console.log(valueIsNaN(Number.NaN)); // true
```
