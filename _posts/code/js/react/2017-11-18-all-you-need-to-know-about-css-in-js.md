---
layout: post
author: yashumittal
title: All You Need To Know About CSS-in-JS
date: 2017-11-18 18:43:00
categories: code
tags: coding react facebook native-apps react-native css js javascript
description:
image: 1_OH0dDfJAGv6aEGFk2zLAxw.jpeg
---

TL;DR: **Thinking in components** — No longer do you have to maintain bunch of style-sheets. CSS-in-JS abstracts the CSS model to the component level, rather than the document level (modularity).

## Styled React Component Example

![1_DFwkvCRyz9K0Mbl59r2hMg.png](//blog.codecarrot.net/images/1_DFwkvCRyz9K0Mbl59r2hMg.png)

***

You probably heard terms like **[CSS-in-JS](//cssinjs.org/?v=v9.1.0)**, **[Styled Components](//www.styled-components.com/)**, **[Radium](//github.com/FormidableLabs/radium)**, **[Aphrodite](//github.com/Khan/aphrodite)** and you’re left there hanging **“why is this a thing?** — I’m perfectly happy with **CSS-in-CSS (CSS in .css).”**

I’m here to shine some light on why this is a thing and hopefully we will least understand the concept and understand why it’s a thing. With that said — please feel free to use CSS-in-CSS — on no terms are you obligated to use CSS-in-JS. **Whatever works best for you and makes you happy is hands down the best solution, always-always!**

CSS-in-JS is a delicate and controversial topic — I’m advocating having an open mind and weighing if this makes sense to you — ask yourself **“will it improve my workflow?” — in the end — that’s the only thing that matters — use tools that make you happier and more productive!**

I’ve always felt awkward having to maintain a huge folder of stylesheets. I would like to try different approaches. I’ve seen many people asking if there are new styling ideas. CSS-in-JS is so far the best concept.

Let’s give CSS-in-JS a shot.

![Small-To-Medium size project CSS](//blog.codecarrot.net/images/1_bsbmmLcGl2kSJSuKW-JFqw.png)

*Small-To-Medium size project CSS*

***

## What is CSS-in-JS?

<blockquote>
JSS is a more powerful abstraction over CSS. It uses JavaScript as a language to describe styles in a declarative and maintainable way. It is a high performance JS to CSS compiler which works at runtime and server-side. This core library is low level and framework agnostic. It is about 6KB (minified and gzipped) and is extensible via plugins API.
</blockquote>

Keep in mind Inline styles and CSS-in-JS are not the same! They’re different — Quick demonstration time!

## [How Inline Styles Works](//developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

```js
const textStyles = {
  color: white,
  backgroundColor: black
}

<p style={textStyles}>inline style!</p>
```

*inline styles*

In the browser this will get attached to the DOM node like so:

```html
<p style="color: white; backgrond-color: black;">inline style!</p>
```

## How CSS-in-JS works

```js
import styled from 'styled-components';

const Text = styled.div`
  color: white,
  background: black
`

<Text>Hello CSS-in-JS</Text>
```

In the browser this will gets attached to the DOM like so:

```html
<style>
.hash136s21 {
  background-color: black;
  color: white;
}
</style>

<p class="hash136s21">Hello CSS-in-JS</p>
```

## Difference

See the slight difference? CSS-in-JS attached a `<style>` tag on top of the DOM while inline styles just attached the properties to the DOM node.

**Why does this matter?**

**Not all CSS features can be aliased with JavaScript event handlers**, many pseudo selectors (like `:disabled`, `:before`, `:nth-child`) aren’t possible, styling the `html` and `body` tags isn’t supported etc.

**With CSS-in-JS**, you have all the power of CSS at your fingertips. Since actual CSS is generated, you can use every media query and pseudo selector you can think of. Some libraries (like `jss`, `styled-components`) even add support for neat, non-CSS-native features like nesting!

[Brilliant article going in depth on how they’re different](/writing-your-styles-in-js-vs-writing-inline-styles).

*“Just write the darn CSS in CSS and be done with it.”*

Yes — while that’s the case for how it’s been done for a long-long time — **the challenge is modern web is written in components not pages.**

**CSS was never actually made for component based approaches**. CSS-in-JS solves exactly this problem. Shout-out to [Vue](//vuejs.org/) for solving this problem beautifully even tho Vues styles have no access to components state.

![Here’s Bob Ross painting rocks to cool down the tension](//blog.codecarrot.net/images/1_jk3SeXoIgOfymKO-8JO23A.gif)

*Here’s Bob Ross painting rocks to cool down the tension 😄*

## What are the benefits of using CSS-in-JS?

* **Thinking in components** — No longer do you have to maintain bunch of style-sheets. CSS-in-JS abstracts the CSS model to the component level, rather than the document level (modularity).
* CSS-in-JS **leverages the full power of the JavaScript ecosystem** to enhance CSS.
* **“True rules isolation”** — Scoped selectors are not enough. CSS has properties which are inherited automatically from the parent element, if not explicitly defined. Thanks to [jss-isolate](//cssinjs.org/jss-isolate) plugin, JSS rules will not inherit properties.
* **Scoped selectors** — CSS has just one global namespace. It is impossible to avoid selector collisions in non-trivial applications. Naming conventions like BEM might help within one project, but will not when integrating third-party code. JSS generates unique class names by default when it compiles JSON representation to CSS.
* **Vendor Prefixing** — The CSS rules are automatically vendor prefixed, so you don’t have to think about it.
* **Code sharing** — Easily share constants and functions between JS and CSS.
* **Only the styles which are currently** in use on your screen are also in the DOM ([react-jss](//github.com/cssinjs/react-jss)).
* **[Dead code elimination](//en.wikipedia.org/wiki/Dead_code_elimination)**
* **Unit tests** for CSS!

## What are the drawbacks of using CSS-in-JS?

* **Learning curve.**
* **New dependencies.**
* **Harder for newer teammates to adapt to the code-base.** People who are new to front-end have to learn “more” things.
* **Challenging** the status quo. (not necessarily a con)

The pros out-weight the cons heavily — let’s give CSS-in-JS a shot! **Nothing to lose!**

***

## Most popular CSS-in-JS libaries

*Will provide a quick hello world example for all the popular CSS-in-JS libraries— help yourself to choose which one you like the most based on the syntax.*

![NPM trends](//blog.codecarrot.net/images/1_xXIXJeI3l6_k-rXg6cqNjw.png)

*NPM trends*

## [Styled Components](//www.styled-components.com/)

![1_QvSrt0RgwuOKYlLHLjkDQw.png](//blog.codecarrot.net/images/1_QvSrt0RgwuOKYlLHLjkDQw.png)
JSS-React

```js
import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: white;
`;

const Wrapper = styled.div`
    background: black
`

class App extends Component {
  render() {
    return (
        <Wrapper>
            <Title>Hello World!</Title>
        </Wrapper>
    );
  }
}

export default App;
```

## [JSS-React](//github.com/cssinjs/react-jss)

![1_z7kPKLW6meQuC5sznIYnkQ.png](//blog.codecarrot.net/images/1_z7kPKLW6meQuC5sznIYnkQ.png)

```js
import React from 'react'
import injectSheet from 'react-jss'

const styles = {
    wrapper: {
        background: 'black'
    },
    title: {
        color: 'white'
    }
}


const App = ({classes}) => (
    <div className={classes.wrapper}>
        <h1 className={classes.title}>
            Hello JSS-React!
        </h1>
    </div>
)

export default injectSheet(styles)(App)
```

## [Glamorous](//glamorous.rocks/)

![1_tWuxJKAhaod4WNsm3MkMgQ.png](//blog.codecarrot.net/images/1_tWuxJKAhaod4WNsm3MkMgQ.png)

```js
import React from 'react'
import glamorous from 'glamorous'

const Wrapper = glamorous.div({
    backgroundColor: 'black'
})

const Title = glamorous.h1({
    color: 'white'
})

const App = () => (
    <Wrapper>
        <Title> Hello JSS-React!</Title>
    </Wrapper>
)

export default App;
```

## [Radium](//formidable.com/open-source/radium/) (caveat: uses inline styles)

![1_UsS6OxCfH6r7JLWx-wNeIQ.png](//blog.codecarrot.net/images/1_UsS6OxCfH6r7JLWx-wNeIQ.png)

```js
import React, { Component } from 'react';
import Radium from 'radium';

@Radium // decorator
class App extends Component {
	render() {

        const styles = {
            wrapper: {
                background: 'blue',
            }
            title: {
                color: 'white'
            }
        };

		return (
            <div style={styles.wrapper}>
                <h1 style={styles.title}>Hello Radium!</h1>
            </div>
		);
	}
}

export default Radium(App);
```

**Note:** Radium uses [decorators](/exploring-es7-decorators)!

## [Aphrodite](//github.com/Khan/aphrodite)

```js
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'red'
    },
    title: {
        backgroundColor: 'blue'
    }
});

class App extends Component {
    render() {
        return (
            <div className={css(styles.wrapper)}>
                <h1 className={css(styles.title)}>Hello Aphrodite!<h1>
            </div>;
        )
    }
}
```

## [Stylotron](//github.com/rtsao/styletron)

![1_a0c0iulx7pZFScn0fsAn0w.png](//blog.codecarrot.net/images/1_a0c0iulx7pZFScn0fsAn0w.png)

```js
import React, { Component } from 'react';
import { styled } from 'styletron-react';

const Wrapper = styled('div', {
    backgroundColor: 'black'
})

const Title = styled('h1', {
    color: 'white'
})

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Title>Hello Styletron!<Titleh1>
            </Wrapper>;
        )
    }
}
```

These are really simple examples which demonstrate the core functionality. All of the libraries have much more functionality included — for example, **theming, dynamic props, server side rendering** and much more!