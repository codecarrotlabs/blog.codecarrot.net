---
layout: post
author: yashumittal
title: Try Docker with One Command
date: 2017-10-09 00:01:00
categories: code
tags: coding docker container
description: Have you heard of Docker, but still don't know exactly what it is? Let's fix that. Docker is the world’s leading software container platform.
image: group_5622_0.png
---

## What is Docker?

Docker is the world’s leading software container platform. Developers use Docker to eliminate “works on my machine” problems when collaborating on code with co-workers. Operators use Docker to run and manage apps side-by-side in isolated containers to get better compute density. Enterprises use Docker to build agile software delivery pipelines to ship new features faster, more securely and with confidence for both Linux, Windows Server, and Linux-on-mainframe apps.

## What is a Container?

Containers are a way to package software in a format that can run isolated on a shared operating system. Unlike VMs, containers do not bundle a full operating system - only libraries and settings required to make the software work are needed. This makes for efficient, lightweight, self-contained systems and guarantees that software will always run the same, regardless of where it’s deployed.

Heard of [Docker](//www.docker.com/). Right? But still don’t know exactly what it is? I’ll fix that in one sentence:

<blockquote>
Docker lets developers bundle an app, together with services it depends on (like databases), into a runnable package called a container.
</blockquote>

Okay, maybe it needs a little more explanation than that. Let’s say I’ve been hearing about this cool web server called Nginx, and I’d like to try it out on my laptop. But I already have another web server installed, and I don’t want to interfere with that.

So I install Docker instead.

* [Windows version](//www.docker.com/docker-windows)
* [Mac version](//www.docker.com/docker-mac)

Then I run this command:

```
docker run -p 8080:80 nginx
```

I wait until I see the text `Status: Downloaded newer image for nginx:latest` in my terminal. Then I launch my browser, connect to `http://localhost:8080`, and am greeted by this response:

![Open the localhost port 8000 on browser](//blog.codecarrot.net/images/docker_nginx.png)

That’s coming from my new personal Nginx server, running on my laptop within a Docker container. If I press Ctrl-C in my terminal, the Docker container shuts down, and http://localhost:8080 no longer responds.

## What Just Happened?!

You’re probably wondering how Docker can accomplish all that with one command. Don’t worry, it’s a lot less mysterious once you know what’s going on. Here are the steps Docker goes through when you run `docker run -p 8080:80 nginx`:

* It connects to a Docker **registry**, which is kind of like a GitHub for Docker packages.
* It downloads an **image** named `nginx`. An image is a file that Docker can base new containers off of. The `nginx` image includes a compressed Linux file system, into which Nginx has been pre-installed by the creators of the image.
* It launches a container based on the image. The container runs Nginx, which listens for requests on port 80.
* Nginx is listening on port 80 of the container, though. I need to **publish** that port to a port on my laptop’s OS. That’s why I added `-p 8080:80` to the command: to publish port 80 of the container as port 8080 on my laptop.
* Typing `http://localhost:8080` in my browser makes a connection to localhost, that is, my own laptop. The `:8080` directs it to port 8080. Docker then forwards the request from port 8080 of my laptop to port 80 on the container.
* Nginx receives the request, and responds.

This one short command demonstrates three cool features of Docker:

* Registries, which let users easily download images containing whatever software they need and the OS it runs on.
* Containers, which let you run the software you want, without interfering with software running on the host.
* Networking, which lets you connect to software running in a container. Docker will also let you run multiple containers on a host, and make virtual network connections between the containers.

## Other Things to Try

Let’s try a few more commands:

```
$ docker run -it ubuntu
```

This one downloads and runs an image with a stripped-down Ubuntu Linux, then sets up an interactive terminal session on it (that’s the -it in the command). When it runs, you’ll be in an Ubuntu shell, working in a file system that’s totally separate from your actual computer’s.

![An Ubuntu shell, running within Docker](//blog.codecarrot.net/images/docker_ubuntu.png)

```
docker run ruby ruby -e 'puts RUBY_VERSION'
```

This one downloads an image that includes the Ruby programming language, and runs a small command-line script that prints the Ruby version. You don’t need Ruby installed on your system for this to work; Ruby runs from within the container. If Ruby’s not your thing, don’t worry, the link below has images for many other languages as well.

```
docker run -it patricknw/xaos
```

This one’s just for fun. It runs XaoS, an awesome fractal viewer, which just happens to have an ASCII-art mode so it can run in your terminal. There are many key controls available, described [here](//hub.docker.com/r/patricknw/xaos/), but the “a” key turns on autopilot for moving around, the “y” key cycles through colors, and the “q” key quits.

There are lots more cool images ready to go at [https://hub.docker.com/explore/](//hub.docker.com/explore/). If there’s a software package you’ve been wanting to try, but didn’t want the hassle of installing, see if it’s listed there!
