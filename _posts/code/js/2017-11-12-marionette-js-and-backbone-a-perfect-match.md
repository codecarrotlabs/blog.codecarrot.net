---
layout: post
author: yashumittal
title: Marionette.js and backbone, a perfect match?
date: 2017-11-12 14:30:00 +0530
categories: code
tags: coding backbone marionette js javascript
description: Despite its popularity, backbone.js has many drawbacks. With a steep learning curve, shortage of opinionated patterns, lots of boilerplate code, and poor memory management/cleanup strategies, backbone usage can be discouraging. In this article, I will focus on how to refactor a backbone application using marionette.js —a framework that can mitigate many of backbone’s shortcomings.
image: //cdn.codecarrot.net/images/harli-marten-135841.jpg
---

Despite its popularity, backbone.js has many drawbacks. With a steep learning curve, shortage of opinionated patterns, lots of boilerplate code, and poor memory management/cleanup strategies, backbone usage can be discouraging. In this article, I will focus on how to refactor a backbone application using marionette.js —a framework that can mitigate many of backbone’s shortcomings.

![1425999034-tumblr_inline_mr7fhuo3u61qz4rgp.png](//cdn.codecarrot.net/images/1425999034-tumblr_inline_mr7fhuo3u61qz4rgp.png)

Despite its popularity, [backbone.js](//backbonejs.org/) has many drawbacks. With a steep learning curve, shortage of opinionated patterns, lots of boilerplate code, and poor memory management/cleanup strategies, backbone usage can be discouraging. In this article, I will focus on how to refactor a backbone application using [marionette.js](//marionettejs.com/) — a framework that can mitigate many of backbone’s shortcomings.

## Refactoring

The best thing about marionette is that it builds on top of backbone. This means that many of its components extend backbone classes, which makes refactoring incredibly easy.

## Get better Views with marionette

Views are the most abused component of backbone apps, where the bulk of ugly/boilerplate code gets thrown in. While backbone only has the Backbone.View class, marionette extends this class with 4 types of specialized views: ItemView, CollectionView, CompositeView and Layout.

Let’s see how we can apply each of these to improve our code.

## ItemView

ItemView is typically initialized with a model and is shown in the DOM. Let’s compare it to backbone (using coffeescript in the following examples).

```js
# backbone
class PostView extends Backbone.View
  className: 'post'
  initialize: ->
    @model.on('change:rating', @ratingChanged)
  teardown: ->
    @model.off('change:rating')
    # custom plugin cleanup here
    @remove()
  render: ->
    @$el.empty()
    @$el.html(JST['post'](@model.asJSON()))
    # custom plugin initialization here
    @
  ratingChanged: ->
    console.log(“rating is now #{@model.get(‘rating’)}”)

# marionette
class PostView extends Marionette.ItemView
  className: 'post'
  template: JST['post']
  modelEvents:
    'change:rating': 'ratingChanged'
  ratingChanged: ->
    console.log(“rating is now #{@model.get(‘rating’)}”)
  onRender: ->
    # custom plugin initialization here
  onClose: ->
    # custom plugin cleanup here
```

You can see how marionette conventions improved our code:

* There’s no need to bind and unbind events from the model to avoid memory leaks: modelEvents does it for you.
* The render function is gone; marionette handles the rendering, provided you define a template.
* There are conventional hook methods to fire code to a specific point of the view lifecycle (onRender - after DOM is inserted into, onClose after DOM elements are removed)
* Our custom code (which is the most important thing here) is immediately visible; marionette handles all the common details.

The ItemView refactoring is the simplest one to perform, and you don’t even need to initialize marionette’s higher-level facilities to use it. You can then just go over your views one at the time.

Couple of things to watch out for are:

* conventional names of functions used for closing views (in my example it was ‘teardown’ while marionette uses ‘close’ by convention).
* if you were following a convention to return ‘this’ from ‘render’ methods, you should be good to mix the marionette ItemViews with the rest of your app. If you were lazy and return @$el instead, it can cause your marionette views to insert as blanks in the DOM.
```js
$('#region').html((new PostView(model: model)).render()) # => will render blank in marionette
$('#region').html((new PostView(model: model)).render().$el) # => OK
```

We’re going to look at better approach to view management later on.

## CollectionView / CompositeView

Another common view use-case is displaying a collection of similar sub-views. Marionette really shines here with CollectionView and CompositeView:

```js
# backbone
class PostsView extends Backbone.View
  initialize: ->
    @collection.on('reset add remove', @render)
    @collection.on('request', @startFetch)
  teardown: ->
    @collection.off('reset add remove', @render)
    @collection.off('request' @startFetch)
  render: ->
    $@el.empty()
    _.each @models, (model)->
      @$el.append((new PostView(model: model)).render().$el)
    if @models.length == 0
      @$el.append(new NoPostsView)
    @
  startFetch: ->
    # this function executes when request to server is initiated

# marionette
class PostsView extends Marionette.CollectionView
  itemView: PostView
  emptyView: NoPostsView
  collectionEvents:
    'request': 'startFetch'
  startFetch: ->
    # this function executes when request to server is initiated
```

Benefits of using CollectionView include:

* Boilerplate code handling all collection changes are gone.
* Closing of sub-views is taken care of behind the scenes. Say goodbye to zombie objects and memory leaks.
* with the emptyView option, you don’t have to put if-statements in order to display a message for empty content. A separate view will be rendered automatically when the collection is empty.
* collectionEvents works similarly to modelEvents on ItemView.

CompositeView extends CollectionView allowing for custom templates and adding elements besides sub-views (e.g. pagination or table headers.)

```js
class PostsWithPaginationView extends Marionette.CompositeView
  itemView: PostView
  emptyView: NoPostsView
  itemViewContainer: '.items'
  template: -> "<div class='items'></div><div class='pagination'>"
  onRender: ->
    # initialize pagination plugin
```

Finding locations suitable for CollectionView/CompositeView refactoring is easy—just grep your codebase for looping over the collection in render method.

Remember, these classes extend from Marionette.View which in turn extends from Backbone.View. If you need to leave backbone stuff, you can still do it.

## Layout / Regions

This is my personal favourite feature of marionette. Layout is a specialized view all about managing views in separate regions. It takes care of closing the previous view if the region was occupied, too. The process is better illustrated with a code sample:

```js
class PostDashboardView extends Marionette.Layout
  template: -> "<div id='posts-region'></div><div id='new-post-region'></div>"
  regions:
    postsRegion: '#posts-region'
    newPostRegion: '#new-post-region'

layout = new PostDashboardView
postsView = new PostsView(collection: new Posts)
newPostView = new NewPostView

layout.render()
layout.postsRegion.show(postsView) # backbone: @$('#posts-region').html(postsView.render().$el)
layout.newPostRegion.show(newPostView)
layout.postsRegion.close() # backbone: postsView.remove()
layout.newPostRegion.show(new SomeOtherView) # closes newPostView and renders SomeOtherView
```

You might see how view management with Layout is more about showing views in regions rather than inserting HTML into the DOM.

For refactoring, I’d first add a MainLayout class with one mainRegion, render it to a page

after initialization, and then insert specific views (which should be marionette classes by now) into the mainRegion, when needed (typically in backbone router).

```js
class MainLayout extends Marionette.Layout
  template: -> "<div id='main-region'></div>"
  regions:
    mainRegion: '#main-region'

# application startup
App.mainLayout = new MainLayout
$("body").html(@mainLayout.render().$el)

# somewhere in a router
App.mainLayout.mainRegion.show(new OtherView) # renders OtherView in html body, closing previous view if exists
```

Then, I’d recommend to look for large ItemViews which initialize multiple other views and render it into the DOM, and convert them into Layouts (yes, Layout extends ItemView too). A typical example would be a Layout with 3 regions: header, content and footer. Because layout acts as a view, you can even show Layouts inside a region of another Layout, creating nested structures if needed.

## Adding higher-level components

So far so good; We greatly improved our views without changing the app’s global architecture. The next steps are a little more complicated, as they involve adding controllers and routers.

In backbone, it’s a bit weird to place setup code for entities (e.g. models, collections), or invoke higher-level operations in router events or a view. Marionette provides a controller object to solve this.

The first step of refactoring involves adding a global marionette Application object.
Application = new Marionette.Application

```js
# this will replace your mainLayout
Application.addRegions
  mainRegion: 'body'

Application.on 'initialize:after', ->
  Backbone.history.start()

# OtherView definition
Application.module 'Views.Submodule', (Submodule, Application, Backbone, Marionete, $, _) ->
  class Submodule.OtherView extends Marionette.ItemView

Application.start()

# somewhere in a router
Application.mainRegion.show(new Application.Submodule.OtherView)
```

Notice marionette’s pattern for initializing components, the module name, which can include sub-modules which are automatically created, and a function that takes 6 arguments: the module object, application object, backbone, marionette, jQuery and underscore.

It’s a good idea to change the definition of all the other components to the new way now.

When our Application object is defined, further refactoring would break up existing routers into controller/router tuples, living in their modules:

```js
Application.module 'Posts', (Posts, Application, Backbone, Marionete, $, _) ->
  Posts.Router = Marionette.AppRouter.extend
    appRoutes:
      'post/:id': 'show'

  class Posts.Controller
    show: (id)->
      post = new Post(id: id)
      view = new Posts.Views.Post(model: post)
      Application.mainRegion.show(view)
      post.fetch()

  Game.addInitializer ->
    new Game.Router
      controller: new Game.Controller
```

The Router defines a map of route-functions which a Controller implements. A good indication of a potential controller is a backbone route-function which initializes a large view (especially a Layout).

## Inter-component communication

So, we have all these controllers and views, but how do they communicate with each other? Marionette solves this with patterns which help clean up the application, resulting in clean, modular code.

## Request-Response

We can define a request-response handler to abstract some of the common initialization code (e.g. getting view instances or model instances). In this case, the caller cares about the return value.

```js
# define responses

Application.reqres.setHandler "post:new", ->
  new Post

Application.reqres.setHandler "post:get", (id) ->
  post = new Post(id: id)
  post.fetch()
  post

# request a response

Application.request("post:get", 10)
```

## Commands

The command pattern differs from request-response in that we don’t care about the return value. The component just invokes the command and lets the application handle it. While sometimes useful, I’d recommend having as little of them as possible. This is because commands tend to become bags of code that don’t really belong anywhere else. An example of a command would be ‘logout’ or ‘navigate’ event.

```js
Application.commands.setHandler 'logout', ->
  Application.currentUser = null
  Application.mainRegion.show(new HomepageView)
  Application.execute('navigate' '/')

Application.commands.setHandler 'navigate', (path) ->
  Backbone.history.navigate(path)

Application.execute('logout')
```

Marionette provides a global messaging bus (called a vent) where components can subscribe to or publish events. This is useful because it separates the event source from the reaction to it. One component can trigger an event, and multiple other components can react in different ways.

```js
# defined in component 1

@listenTo Application.vent, "someevent", (argument)->
  # do something with argument

# defined in component 2

@listenTo Application.vent, "someevent", (argument)->
  # do something else with argument

# defined in component 3

Application.vent.trigger("someevent", "foo")
```

## Conclusion

As I’ve hopefully demonstrated, the process of refactoring backbone applications to marionette is a continuous one. It can be nicely broken into phases, so even a large application can be converted with ease. You can also decide to not take full advantage of marionette’s power and stop at the VIew step, where the codebase will still be greatly improved.

Comparing the two applications reveals obvious benefits, like greater conventions in the code and reduced boilerplate (deleting unneeded code always feels great!). Non-visible benefits include better memory management.

Notice that I didn’t touch upon models or collections; Marionette does not improve upon on them, meaning you can use your existing backbone plugins and extensions, which is great!
