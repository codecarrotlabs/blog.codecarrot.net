---
layout: post
author: yashumittal
title: Passing Data Between React Components
date: 2018-02-30 21:29:00 +0530
categories: code
tags: coding react facebook framework react component
description: React is popular in writing reusable and modular UI components, and one-way data flow. One-way data binding can make React more performant than Angular.
image: https://i.imgur.com/JGMaIAf.jpg
---

React is popular in writing reusable and modular UI components, and one-way data flow. One-way data binding can make React more performant than Angular.

But the tricky part is to pass the data from one component to another. Data sometimes needs to be passed from children to parent, parent to children, or between the siblings.

Here is an **tree structure** of an React Navigation components:

```js
	App
	 |
	 |__ Navigation
	 |
	 |__ Navitem
		   |
		   |__ Navlinks
```

One of the easiest way to pass the data is from Parent to it's childern.

## Parent to Child — Use Prop

If you have access to data your childern componet need from the parent component, all you need is to pass it as a prop to the child.

**Passing data** from the App to the Navigation:

```js
class App extends React.Component {
	render() {	
		return (
			<div>
				<Navigation itemNameFromParent={itemName}/>
			</div>
		);
	}
}
```

Using `this.props.itemNameFromParent` will give access to that data, inside Navigation component.

## Child to Parent — Use a callback and states

### Option 1

Here's the best part. Having some data that the parents need access to:

1. Define a callback in parent which takes the data as a parameter.
2. Pass that callback as a prop to the child _(see above)_.
3. Call the callback using `this.props.[callback]` in the child, and pass in the data as the argument.

**Passing data** from the `Navlinks` to the `Navitem`:

```js
class Navitem extends React.Component {
	Callback = (dataFromChildern) => {
		// Using the dataFromChildern
	},
	render() {
		return (
			<div>
				<Navlinks callbackFromParent={this.Callback}/>
			</div>
		);
	}
}
```

Passing something to `callbackFromParent` within `Navitem`:

```js
class Navitem extends React.Component{
	function = () => {
		// Define a variable NavitemInfo, containg useful data
		this.props.callbackFromParent(NavitemInfo);
	},
	render() {
		// ...
	}
};
```

### Option 2

Use `NavitemInfo` in a different function within `Navitem`.

```js
class Navitem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listDataFromChildern: null
		};    
	},
	Callback = (dataFromChildern) => {
		this.setState({ listDataFromChildern: dataFromChildern });
	},
	function = () => {
		// You have access to this.state.listDataFromChildern
	}
	render() {
		return (
			<div>
				<Navlinks callbackFromParent={this.Callback}/>
				// Pass this.state.listDataFromChildern as a prop to any other child component
			</div>
		);
	}
});
```

**Note:** By using the arrow function in the definition of `Callback`. Allows you to avoid using `.bind` when invoking, as it will retain the context of where it is called.

## Between Siblings

To pass data between siblings, you have to use the parent as an intermediary. First pass the data from the child to the parent, as an argument into a callback from the parent.

Set this incoming parameter as a state on the parent component, then pass it as a prop to the other child. The sibling can then use the data as a prop.

```js
class Navitem extends React.Component {
	getInitialState() {
  	return {
			initialState: "init"
		};
  },
  updateShared(action) {
  	this.setState({
			initialState: action
		})
  },
  render() {
    return (
			// ...
		);
  }
};

var Navlinks1 = React.createClass({
	updateShared() {
  	this.props.updateShared('clicked');
  },
	render() {
    return (
			<button onClick={this.updateShared} style={this.props.initialState == 'clicked' ? {color: "green"} : null} >
				// ...
			</button>
		);
  }
});

var Navlinks2 = React.createClass({
	updateShared() {
  	this.props.updateShared('touch');
  },
	render: function() {
    return (<button onClick={this.updateShared} style={this.props.initialState == 'touch' ? {color: "orange"} : null}>
    	// ...
    </button>);
  }
});
```

Passing data between React components can be a little tricky for new commers, but once you practice these techniques it will like second hand for you.