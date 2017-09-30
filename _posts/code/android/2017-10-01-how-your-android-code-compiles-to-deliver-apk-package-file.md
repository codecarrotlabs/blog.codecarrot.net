---
layout: post
author: yashumittal
title: How Your Android Code Compiles To Deliver .APK Package File?
date: 2017-10-01 04:02:00
categories: code
tags: android coding mobile-app-development SDK package APK code-compiling
description: Programmer plays a vital role in setting up computers with necessary tools, together decode the entire process of writing a code and getting the finished APK.
image: http://blog.codecarrot.net/images/code-to-android-file1600.png
---

New age programmers rely heavily on API, SDK’s , Smart Editors to write codes, but there is a lot of process which goes behind to bring forth the finished product. Technically there are following stakeholders involved to make development happen

1. Laptop
2. Software/Editor/SDK/Frameworks/Libraries
3. [Programmers](http://codecarrot.net/)

Programmer plays a vital role in setting up computers with necessary tools and software's before they start developing any project using the editor. How your code which you write compiles and becomes an executable file is what we seldom give a thought. Today we will together decode the entire process of writing a code and getting the finished APK.

## Journey From Writing Raw Code To A Finished APK :

### Step 1: Configuration of required software's

It includes Installing Android Studio and Configuring android **SDK** and **JVM**

### Step 2: Coding

We import necessary libraries and configure necessary permissions and dependencies based on project requirement and start coding as per the wireframe of the product.

### Step 3: Compiling

This is where we will dig deeper. When we run our code from the editor following process takes place

### A. Java Compilation & Packaging

1. Android java code files compiles to .class files via **javac** command
2. `.class` files gets converted to `.dex`:

`.class` files is also known as Java byte-code this byte code further get converted to dalvik byte-codes which is the format which **android OS** understands here all `.class` files and any `.jar` library files compiles to single **classes.dex using dx command. DEX is called as Dalvik executable files**.

DEX files is memory efficient and loads very swiftly compared to JVM based .class files and is lightweight too .

### B. Packaging `(.APK file)`:

Packaging is done using android **apkbuilder** tool **(APPT)**. It generate a `.apk` file from a **DEX file + non-Java libraries + zipped resources**. The `classes.dex` file, resource files are compressed by **aapt (Android Asset Packaging Tool)**. This `.apk` file is what you run on android device and is distributed to all the major app stores after being signed for release. User gets to download this files from **Google Play Store** and other app stores on their android powered device.

![Explaining the build process of an apk package file](http://blog.codecarrot.net/images/1-ASSbFftzD0WZ77jlkgQEHg.png)

## Step 4: Running the .apk files on android device

When apk runs following steps takes place

1. When user clicks the app icon after installing the `.apk` file **Zygote** process is called to launch the app, it contains core libraries that are needed by an application, so basically it is an incomplete android process which runs, zygote create a duplicate copy of itself using a system call called fork. **Zygote** then load into new App process using main system files as shown below:

![Zygote process to app process](http://blog.codecarrot.net/images/0-AjTy1nZWIY5rZsjB.png)

2. The new app process generated by fork call loads the app code stored in **classes.dex** file, which comes packaged with the `.apk` file, it filters the classes.dex file from .apk and stores it into a separate directory. Android do not copy classes.dex files directly instead it converts Dalivik byte-code in **classes.dex** into native **machine code** which android OS hardware understand.

All **classes.dex** gets converted into an ELF shared object, this library format is called as OAT and the tool that converts the **classes.dex** file is called **dex2oat**.

![classes.dex to OAT version](http://blog.codecarrot.net/images/0-6Va-tD_HxV3Nj4Qo.png)

The native OAT library version is mapped into the process as shown below and from there the android app is launched running initial android activity.

![App Process OAT](http://blog.codecarrot.net/images/0-zedmqQWrucsw0bqF.png)

### The Detailed Android Building Process Workflow:

![The Detailed Android Building Process Workflow](http://blog.codecarrot.net/images/1-LbKGyabN6vr-9iR-rvnzPg.png)

## Summary

Mobility has been possible due to Mobile app ecosystem which works together to deliver a solution which has made end users life easy and fast going. Developer is just one part of the ecosystem there are other facilitator like open source community, phone manufacturers, network operators, internet community and agile governance which has lead to this digital revolution where mobile and it’s app has played the vital role to uplift humanity at large.