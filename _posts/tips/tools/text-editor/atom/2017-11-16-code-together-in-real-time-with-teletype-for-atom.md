---
layout: post
author: yashumittal
title: Code together in real time with Teletype for Atom
date: 2017-11-16 15:28:10 +0530
categories: tips
tags: tips atom text-editor tools
description: Writing code with another programmer is a great way to absorb knowledge, challenge yourself with new perspectives, and ultimately write better software. It can also be a fulfilling way to get to know the mind of another human being. Unfortunately, the logistics of writing code with another programmer can be such a hassle that many people don’t bother.
image: https://cdn.codecarrot.net/images/original-teletype.jpg
---

Writing code with another programmer is a great way to absorb knowledge, challenge yourself with new perspectives, and ultimately write better software. It can also be a fulfilling way to get to know the mind of another human being. Unfortunately, the logistics of writing code with another programmer can be such a hassle that many people don’t bother. Here are some of the common obstacles:

* Sharing the same physical machine is impossible for remote teams, and can be challenging to organize even when teammates share the same office.
* Cloud-based IDEs and remote `tmux` sessions ask you to move your entire workflow into a hosted environment, which isn’t always possible or desirable.
* The connection latency of screen sharing can lead to an awkward dynamic where only one collaborator can comfortably edit.

![32577928-477e444e-c490-11e7-9118-3c69e51bf097.png](https://cdn.codecarrot.net/images/32577928-477e444e-c490-11e7-9118-3c69e51bf097.png)

GitHub today announced a new feature for its Atom text editor that makes it easier for programmers to work with one another on shared code with [Teletype for Atom](//teletype.atom.io/) — a new way to dive right into code with remote collaborators. Work together in real time with your own configurations in your own programming environment on any file you can open in Atom.

It’s designed to let developers get the experience of in-person collaboration without huddling around the same terminal.

Developers can create a Teletype session from Atom and then share a link with their collaborators. At that point, the system will stream the contents of a user’s editor to their collaborators. At any time, another collaborator can start entering their own code, and it’s possible for multiple people to work in the same document at once.

Teletype came about in part because the Atom team itself is globally distributed. One of the engineers working on the product is based in Italy, and working on code with him was a challenge.

The feature doesn’t include a chat or voice conference system, so people who want to converse about the work that they’re doing will have to reach for an outside service, like Google Hangouts, Slack, or Skype.

Live collaboration in editing text is nothing new, but GitHub’s approach is designed to help deal with the limitations of existing systems. While Google Docs works well for collaboration on word processing files, it’s missing key features for coders. More tailor-made systems require storing code on a centralized server, which means people working close to one another but far away from the main repository would have to deal with a delay between when one user enters text and when it shows up on another screen.

![687474703a2f2f626c6f672e61746f6d2e696f2f696d672f706f7374732f74656c65747970652f636f64652d746f6765746865722e676966.gif](https://cdn.codecarrot.net/images/687474703a2f2f626c6f672e61746f6d2e696f2f696d672f706f7374732f74656c65747970652f636f64652d746f6765746865722e676966.gif)

Screen sharing was another workaround that people have tried, but that system doesn’t work well with multiple people trying to control the same computer at once. Plus, that brings up all sorts of issues around connection latency, as well as privacy, since users could end up having to share their entire screen.

Teletype could improve companies’ software development processes by allowing developers to more easily get immediate feedback on the code they’re writing. What’s more, the feature’s support for quick collaboration sessions could make the process more prevalent at companies that don’t want to set up dedicated pair programming workstations.

In addition, Teletype lets each user keep their preferred themes, key bindings, and plugins. That’s important, since many programmers set Atom up to work in a unique way, which can help them be more productive but also impede the productivity of people unfamiliar with a particular configuration.

Developers still have to look out for some important limitations when using Teletype. Key among them: The host computer is in charge of sharing its contents with the other connected developers. That means the number of connections is limited by both the host’s upstream bandwidth and the compute resources available on the computer.

However, Teletype was built so that the number of people that would be useful to have working on the same file is smaller than the total number of connections a machine can accommodate.

***

## Getting started with Teletype

Once you install Teletype via Atom’s settings view or `apm install teletype` on the command line, you can open a “portal” into your local workspace from the new collaboration menu on the status bar.

![teletype-share.gif](https://cdn.codecarrot.net/images/teletype-share.gif)

Then just share your portal’s secret ID with collaborators via your preferred chat service.

![Send the portal ID to a collaborator via a chat service](https://cdn.codecarrot.net/images/teletype-invite.gif)

Collaborators can enter your portal by clicking “Join” in the collaboration menu and entering the portal ID.

![Once someone has your portal ID, they can join](https://cdn.codecarrot.net/images/teletype-join.gif)

After joining your portal, collaborators see a new tab in their workspace that lets them view and edit the contents of your active editor. Everyone gets their own cursor, and everyone can type at the same time, but since sharing is at the keystroke-level rather than the pixel-level, participants all keep their own custom key bindings, packages, and themes.

![Everyone gets a cursor](https://cdn.codecarrot.net/images/teletype-code-together.gif)

When you share a portal, your code stays on your local disk. As you switch between files, the contents of your current active editor are transmitted to collaborators so they can follow along, but otherwise your workflow will be unchanged.

![Guests follow the host](https://cdn.codecarrot.net/images/teletype-follow.gif)

## Implementation details

### Conflict-free editing

Collaborative editing is a tricky theoretical problem. To ensure responsive editing, each collaborator maintains their own replica of each document, applying local edits immediately before transmitting them to other collaborators. In the face of concurrency, edits end up being applied in a different order on each replica, but when the dust settles, all replicas need to have the same contents.

After several late nights reading research papers, we ended up deciding to base Teletype on the theoretical framework of conflict-free replicated data types, or *CRDTs*. Basically, CRDTs are data structures that always converge on the same representation when updated with the same set of operations, even if those operations are applied in different orders. The CRDT for text editing we wrote for the heart of this system is available as a standalone library called [teletype-crdt](//github.com/atom/teletype-crdt).

### Connecting peers

To connect collaborators, we use [WebRTC](//developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) [data channels](//developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel). After an initial handshake that exchanges connection metadata via GitHub’s servers, all data flows over encrypted peer-to-peer connections. Our servers never see your files or edits, which maximizes your privacy and minimizes latency between you and your collaborators, regardless of your proximity to our data centers.

### Editor-agnostic client library

The [Teletype Atom package](//github.com/atom/teletype) implements UI components and Atom-specific integration code, but most of the logic lives in an editor-agnostic library called `teletype-client`. Our protocols and API may churn for a while as we develop the system, but it should be possible to integrate `teletype-client` into any web-based application or even package it in an Electron-based server to talk to it from native editors. Supporting inter-operation between different text editors is definitely part of our long term vision.

### Carriage return, line feed

For now, Teletype only transmits text, so it’s a good idea to combine it with an application for voice communication. Traditional screen sharing can also be helpful for sharing the state of applications outside of Atom. Ultimately, we want to incorporate these kinds of features directly into the package along with a long list of other improvements.

But rather than waiting for perfection, we are releasing a beta version of this package now, because we think it’s useful today. We’ve been using Teletype to build Teletype for a few months now, happily working together across two continents and three time zones. Daily teletyping has made us happier and more productive, and we hope it will do the same for you and your teammates.

Visit [teletype.atom.io](//teletype.atom.io/) to start coding together in Atom today.
