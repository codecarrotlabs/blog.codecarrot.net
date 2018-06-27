---
layout: post
author: yashumittal
title: Is GraphQL The End Of REST APIs?
date: 2018-02-15 23:45:45 +0530
categories: code
tags: coding api rest-api graphql
description: The world of APIs is one of innovation and constant iteration. The technologies that once drove the largest and best solutions across the web have been supplanted by new, more innovative solutions.
image: https://cdn.codecarrot.net/images/is-graphql-the-end-of-rest-style-apis.png
---

## Is GraphQL The End of REST Style APIs?

The world of APIs is one of innovation and constant iteration. The technologies that once drove the largest and best solutions across the web have been supplanted by new, more innovative solutions.

That is why it’s surprising, then, that many developers, have clung to what they consider the bastions of web API development. Such a bastion is the REST architecture. To some developers, REST is an ageing and incomplete proposition that does not meet many of the new development qualifications required by the unique challenges faced by modern development groups.

Today, we’re going to look at a technology that is poised to replace, or at the very least, drastically change the way APIs are designed and presented — **GraphQL**. We’ll discuss a little bit of history, what issues REST suffers from, and what GraphQL does differently.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lW_CK0B5OXM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Defining REST and its Limitations

REST or Representational State Transfer, is an API design architecture developed to extend and, in many cases, replace older architectural standards. Objects in REST are defined as addressable **URIs**, and are typically interacted with using the built-in verbs of **HTTP** — specifically, GET, PUT, DELETE, POST, etc. In REST, HATEOAS a.k.a (Hypermedia As The Engine Of Application State) is an architecture constraint in which the client interacts with hypermedia links, rather than through a specific interface.

With REST, the core concept is that everything is a **resource**. While REST was a great solution when it was first proposed, there are some pretty significant issues that the architecture suffers from. 


## Here are some issues Lundberg sees with REST:

### Round Trip and Repeat Trip Times

REST’s defining feature is the ability to reference **resources** — the problem is when those resources are complicated and **relational** in a more complex organization known as a *graph*. Fetching these complicated graphs requires round trips between the client and server, and in some cases, **repeated trips** for network conditions and application types.
What this ultimately results in is a system where **the more useful it is, the slower it is**. In other words, as more relational data is presented, the system chokes on itself.

### Over/Under Fetching

Due to the nature of REST and the systems which often use this architecture, REST APIs often result in over/under fetching. **Over fetching** is when more data is fetched than required, whereas **under fetching** is the opposite, when not enough data is delivered upon fetching.

When first crafting a resource URI, everything is fine — the data that is necessary for functionality is delivered, and all is well. As the API grows in complexity, and the resources thus grow in complexity as well, this becomes problematic.

Applications that don’t need every field or tag still receive it all as part of the URI. Solutions to fix this, such as versioning, result in duplicate code and “spaghettification” of the code base. Going further, specifically limiting data to a low-content URI that is then extensible results in more complexity and resultant under fetching in poorly formed queries.

### Weak Typing and Poor Metadata

REST APIs often unfortunately suffer from **poor typing**. While this issue is argued by many API providers and commentators (often with the caveat that HTTP itself contains a typing system), the fielding system solutions offered simply do not match the vast range and scope of data available to the API.

Specifically, this is an argument in favor of **strong typing** rather than weak typing. While there are solutions that offer typing, the delineation between weak and strong is the issue here, not an argument defused by simply stating “well there *is* typing”. The strength and quality of typing *does* matter.

This is more a matter of age and mobility rather than an intrinsic problem, of course, and can be rectified using several solutions (of which GraphQL is one).

### Improper Architecture Usage

REST suffers from the fact that it’s often used for something it wasn’t really designed for, and as a result, it often must be heavily modified. That’s not to say that REST doesn’t have its place — it’s only to say that it may not be the best solution for serving client applications. 

As Facebook says in its own [documentation](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html):

<blockquote>
“REST is intended for long-lived network-based applications that span multiple organizations” according to its inventor. This is not a requirement for APIs that serve a client app built within the same organization.
</blockquote>

All of this is to say that GraphQL is functionally the end of REST — but not in the way that terminology implies. Until now, REST has been seen as the foundational architecture of modern APIs, and in a way, the last bastion of classic API design.

The argument here is not made to fully sever REST from our architectural lexicon, but instead to acknowledge that there are several significant issues that are not properly and fully rectified by the solutions often proffered by its proponents.

Therefore, the answer to the question of this piece — is GraphQL The End of REST Style APIs? — is quite simple. Yes, using GraphQL is the end of REST style APIs as we know it — specifically through the extension of base functionality and a reconsideration of data relations and functions.

## 4 Things GraphQL Does Better than REST

Now that we’ve seen the issues with REST, how, exactly, does GraphQL solve them?

### REST Has Many Roundtrips – GraphQL Has Few

The biggest benefit of GraphQL over REST is the simple fact that GraphQL has **fewer roundtrips** than REST does, and more efficient ones at that. GraphQL unifies data that would otherwise exist in multiple endpoints (or even worse, ad hoc endpoints), and creates packages.

By packaging data, the data delivery is made more efficient, and decreases the amount of resources required for roundtrip calls. This also fundamentally restructures the relationship between client and server, placing more efficiency and control in the hands of GraphQL clients.

### REST Has Poor Type Systems – GraphQL Has a Sophisticated One

While REST can have a **type system** through implementations of HTTP, REST itself does not have a very sophisticated typing system. Even in good implementations, you often end up with variants of type settings — for example, *clientdatamobile* and *clientdatadesktop* — to fit REST standard calls.

GraphQL solves this with a very sophisticated typing system, allowing for more specific and powerful queries.

### REST Has Poor Discoverability – GraphQL Has Native Support

Discoverability is not native to REST, and requires specific and methodical implementations of HATEOAS, Swagger, and other such solutions in order to be fully discoverable. The key there is “fully discoverable” — yes, REST has HATEOAS as a “native” discovery system, but it lacks some important elements of effective **discoverability** — namely known document structure, server response constraint structures, and an independence from standard, restrictive error mechanisms in HTTP.

While this and many other points of negative consideration towards REST is often answered with “but you can add that functionality!”, the fact that it lacks it by default only adds to the complexity we’re trying to move away from.

Because GraphQL is based on **relational data** and, when operating on a properly formed schema, is self describing, GraphQL is by design natively discoverable. Discoverability is incredibly important, both in terms of allowing for extensible third-party functionality and interactions and for on-boarding developers and users with an easy to understand, easy to explore system of functions.

### REST Is Thin Client/Fat Server – GraphQL is Fat Client/Fat Server

In REST design, the relationship between client and server is well-defined, but **unbalanced**. REST uses a very **thin client**, depending on processing from the server and the endpoints that have been defined for it. Since the bulk of the processing and control is placed firmly on the **server**, this strips power from the client, and also stresses server side resources. Until now that has been fine, but as devices grow in processing power and ability, this client/server relationship may need rethinking.

GraphQL, however, is different. By offloading specification of expected data format to the client and structuring data around that call on the server side, we have a Fat Client/Fat Server (or even a Thin Client/Thin Server depending on approach) in which both power and control are level across the relationship.

This is very powerful when one considers that the data type being requested will be used for specific purposes as regulated and requested by the Client itself — it makes sense, then, that moving from a Thin/Fat relationship to a Fat/Fat or Thin/Thin relationship would improve this functionality on the Client side while freeing up Server resources. Of course, this assumes that the client is capable of handling this burden.

### The End Of The Status Quo

There’s a tendency in the tech space for providers and developers of new technologies to proclaim the end of an era with each solution. While it’s common to discussion in the field, the fact is that there are very few complete paradigm shifts that signal an irrevocable end to existing technologies.

Innovation depends on prior technologies to create new functionality. Therefore, when a new solution is designed, it’s not replacing the solution, but rather iterating. The same is true here. While GraphQL may not be the complete demise of REST, it is the end of the **status quo**. While there are a great many solutions to the issues raised here, they all depend on further integrations and modifications. GraphQL is essentially an overhaul, and one which improves the base level functionality of the API itself.

## Conclusion

What we have here is a basic value proposition. GraphQL does what it does well, but the question of integration lies directly on what kind of data you’re processing, and what issues your API is creating. For simple APIs, REST works just fine, but as data gets more complex and the needs of the data providers climbs, so too will the need for more complex and powerful systems.

Adopting GraphQL as an adjunct or extension of the REST ideology, while removing REST from the intellectual space of “too big to not use”, will directly result in more powerful APIs with easier discoverability and greater manageability of the data they handle.
