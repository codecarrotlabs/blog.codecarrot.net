---
layout: post
author: yashumittal
title: What are the main differences between ReactJS and React-Native?
date: 2018-01-04 04:08:09 +0530
categories: code
tags: coding react facebook native-apps react-native js javascript
description: React-Native has been around for about 2 years, and became a really interesting framework since it can be used for Android and let us build cross-platform mobile apps.
image: https://cdn.codecarrot.net/images/1_bUtWGJQv8QFXTkLF_WBINA.png
---

React-Native has been around for about 2 years, and became a really interesting framework since it can be used for Android and let us build cross-platform mobile apps. A few contributors also customized the framework to build desktop apps for Mac and Windows, which is quite cool.

React-Native is very similar to ReactJS in a way, but there are differences you need to know before you start your first native app. In this article, I’m going through the main differences I have encountered as a ReactJS web developer who learned to use React-Native and built a few native apps with this technology.

## Setup and bundling

React-Native is a framework, where ReactJS is a javascript library you can use for your website. When you start a new project with ReactJS, you probably will choose a bundler like Webpack and try to figure out which bundling modules you need for your project. React-Native comes with everything you need and you most likely wouldn’t need more. When you start a new project you will notice how easy is it to set up: it’s very fast and only takes you one command line to run in the terminal and you will be ready to go. You can start coding your first native app immediately using [ES6, some ES7 features and even a few polyfills](//facebook.github.io/react-native/docs/javascript-environment.html).

To run your app, you will need to have Xcode (for iOS, on Mac only) or Android Studio (for Android) installed on your computer. You can either decide to run it on a simulator/emulator of the platform you want to use or directly on your own devices.

## DOM and Styling

React-Native doesn’t use HTML to render the app, but provides alternative components that work in a similar way. Those React-Native components map the actual real native iOS or Android UI components that get rendered on the app.

Most components provided can be translated to something similar in HTML, where for example a `View` component is similar to a `div` tag, and a `Text` component is similar to a `p` tag.

```js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>Hello world!</Text>
      </View>
    );
  }
}
```

Because your code doesn’t get rendered in an HTML page, this also means you won’t be able to reuse any libraries you previously used with ReactJS that renders any kind of HTML, SVG or Canvas. Although you might find alternative libraries for React-Native, [react.parts](//react.parts/) has a Native category for you to find what you need.

To style your React-Native components, you will have to create stylesheets in Javascript. It looks similar to CSS, but it’s not exactly the same. This can be quite confusing at first, and you might reach a point where you wonder how you can create mixins like you would do with SASS, or how you can override the style of a component you want to reuse. Then you understand React-Native is not made from web elements and can’t be styled in the same way. Fortunately, you will most likely find alternative solutions available in order to accomplish what you need.

```js
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		backgroundColor: '#fff',
		padding: 30,
	},
	button: {
		alignSelf: 'center',
		marginTop: 20,
		width: 100,
	},
});
```

*Example of stylesheet with React-Native*

I don’t know about you, but even though Flexbox has been around for quite some time already, I’ve never been completely immersed into its use, mostly because the projects I was involved with required backward compatibility with older browsers. With React-Native, you have no better way to build a nicely responsive app than using Flexbox. It can be tricky at first as it doesn’t always behave like it would do with CSS, but you will become quickly good at it once you got the basic understanding. I would recommend you to read this article to learn more about it: [Understanding React Native flexbox layout](/understanding-react-native-flexbox-layout).

## Animations and Gestures

Goodbye CSS animations! With React-Native, you’ll have to learn a completely new way to animate the different components of your app with Javascript. The recommended way to animate a component is to use the [Animated](//facebook.github.io/react-native/docs/animated.html) API provided by React-Native. You can compare it to the famous Javascript library [Velocity.js](//velocityjs.org/). It allows to create different kind of animations, timed or based on a velocity associated to a gesture, and can be used with different types of [Easing](//facebook.github.io/react-native/docs/easing.html). Overall you can do pretty much any kind of animation you would do on the web. React-Native also provides [LayoutAnimation](//facebook.github.io/react-native/docs/layoutanimation.html) which is actually very cool and simple to use for transitions but only works for iOS at this point, as Android doesn’t support it very well.

To interact with user gestures, React-Native provides something similar to the Javascript touch events web API called the [PanResponder](//facebook.github.io/react-native/docs/panresponder.html). Getting it up and running can feel discouraging, but you will see it’s finally not that complicated. The PanResponder needs to be applied to a View (or Text or Image) of your component to enable the touch handler on this View. From there, the PanResponder provides a list of functions you can use to catch the different touch events, such as `onPanResponderGrant` (touchstart), `onPanResponderMove` (touchmove) or `onPanResponderRelease` (touchend). Those functions will give you access to the native event and the gesture state with information like all the touches and their locations as well as accumulated distance, velocity and the touch origin.

![react-native-swipeout component using PanResponder](https://cdn.codecarrot.net/images/1_zZ7-crRaRTaLbz2Myvsu2w.gif)

In my opinion, the main difficulty with the PanResponder comes when you have nested views/components with their own PanResponder, and you need to decide which one must be granted the control of the gesture.

## Navigation

When I started to build my first mobile app with React-Native, I was wondering how to navigate between 2 scenes. The first thing that I’ve done was to search for an alternative to [react-router](//github.com/ReactTraining/react-router), this famous library that most React web apps uses to transition between pages. I found a few libraries that do similar jobs, but there was always something I didn’t like about the ones I tried: either it was quite complicated to use, I wasn’t satisfied with the animations, wasn’t customizable the way I wanted it to be, or wasn’t behaving or working properly on both Android and iOS devices. Then I started wondering how navigation actually works, and I found the [Navigator](//facebook.github.io/react-native/docs/navigator.html) component provided by React-Native. I should have started from there, looking for an alternative of react-router was in my opinion not the best idea.

![Transitions between scenes with Navigator](https://cdn.codecarrot.net/images/1_pVbpZsAcopk9c_8UMsxlNw.gif)

Most mobile apps don’t have plenty of scenes going in every direction like would do a web app, the Navigator component even though it might seem a bit complicated to use at first [will provide you everything you need](//facebook.github.io/react-native/docs/using-navigators.html) to manage the transition between scenes. Unless you build a very large scale mobile app that requires lots of different scenes and you are afraid to get lost at some point, I think you should stick with Navigator. You can also have a look to [NavigatorExperimental](//facebook.github.io/react-native/docs/navigation.html#navigationexperimental), but in my opinion, it’s not ready yet to be used for production.

## Platform specific code

Designing an app for multiple platforms with the same set of code can sometimes be a bit overwhelming and your code will start soon to look ugly. I’m sure you’ve been involved in similar issues while coding for modern browsers and the need to make things look “not too bad” on older browsers, adding a few sets of conditional code here and there in your CSS or even in Javascript.

When you build a Native app, it’s important to know the user interface and experience for iOS and Android might need to be different.

On the assumption you have the control over how your app will look like and behave, you have two choices:

* You can define a universal design for your app to look exactly the same for both platforms as long as it stays intuitive and doesn’t confuse either platform users.
* You can define sets of code for each platform, meaning you will have a different DOM, stylesheets and even maybe different logic and animations in order to follow the UI and UX guideline of the platform.

If you decide to go with the second point, [React-Native can detect which platform you are running the code from](//facebook.github.io/react-native/releases/0.39/docs/platform-specific-code.html) and load the right code for the right platform. I would recommend you to have the main logic of your components defined in one file called index.js, then you’ll have the presentational components defined with individual files. For iOS and Android, you will have respectively index.ios.js and index.android.js files.

If you [organize your folder structure following my recommendation](/how-to-better-organize-your-react-applications), it will look like this:

```
/src
  /components
    /Button
      /components
        /Icon
          /index.android.js
          /index.ios.js      
        /Content
          /index.android.js
          /index.ios.js
      /index.js
```

If you feel like having 2 different files is too much overhead for very minimal changes you can use the [Platform module](//facebook.github.io/react-native/releases/0.39/docs/platform-specific-code.html#platform-module) with a conditional statement.

## Developer tools

When you start a new native project, you get a few developer tools out of the box from React without the need of installing anything, and that’s pretty awesome in my opinion. Hot Reloading is available and is great to use when you need to make small changes to the styles of your app. For bigger changes impacting the logic of the app, I usually prefer to use Live Reload which reloads your app entirely as you make a change in the code.

![React-Native debug tools](https://cdn.codecarrot.net/images/1_SbcR3aSpp6CPfoTuRgNq5w.jpeg)

The beauty of working with React-Native is also the ability to use most developer tools you use with ReactJS. Chrome Dev Tools works beautifully to inspect the network requests, display the console logs and stop the code on `debugger` statements. You can even use the great [Redux DevTools](https://github.com/gaearon/redux-devtools) to inspect the state of your Redux store. One feature that I miss the most though is the ability to inspect the DOM like you would do on the web, the native Inspector is definitely not as good.

## Publishing

If you develop an app for both iOS and Android, you will need to learn how Xcode and Android Studio work in order to make sure everything is set up properly before the first deployment of your app on the App Store or the Google Play. For iOS, it works just like you will deploy a regular native app, although for Android, you will need to [follow the React recommendation](//facebook.github.io/react-native/docs/signed-apk-android.html) to sign your APK before uploading it to the Google Play.

If you miss the ability to simply type a single command line to publish an update of your native app like you would do it with a web app and a VCS properly setup, you can use the awesome Code Push to deploy code directly to the user, without the need of archiving, sending your app to the store and waiting for it to be ready. Code Push is great if you want to make a few improvements or bug fixes but is not recommended if you want to add entirely new features.

## Wrapping up

I really enjoy using React-Native today. I’ve been using it for a bit less than a year now and it’s damn fast to get an app up and ready! You can build complex UI as quick as you would do with ReactJS and usually works pretty well for both iOS and Android. The learning curve from ReactJS to React-Native is I think quite easy, especially if you like to learn new Javascript frameworks ; it’s just a different way to use React.

The community around React-Native gets very big and keeps growing, the technology is not going away any time soon and I would definitely recommend any web developer who wants to create a mobile app to forget about Cordova and give it a try.
