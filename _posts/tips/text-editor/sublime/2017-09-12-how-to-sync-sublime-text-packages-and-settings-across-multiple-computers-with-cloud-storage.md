---
layout: post
author: yashumittal
title: How to sync Sublime Text packages and settings across multiple computers with cloud storage
date: 2017-09-12 15:59:00
categories: tips
tags: text-editor coding developing programing workflow sublime sublime-text sublime-text-packages dropbox mac windows osx sync terminal package-control tips
description: Are you a coder with the multiple computers to work on, here is the way you can make your workflow more easier by sharing all of your sublime packages and settings synced across multiple computer with Dropbox.
image: //blog.codecarrot.net/images/sync-sublime-text-on-multiple-computers-with-cloud-storage.png
---

Are you a coder with the multiple computers to work on, here is the way you can make your workflow more easier by sharing all of your sublime packages and settings synced across multiple computer with Dropbox.

**Pro Tip:** You can follow the same method with any cloud storage system like: Google Drive or OneDrive. *(Only the names of the files/folders may vary.)*

The best way for syncing Sublime Text along with your installed packages, regardless of whether you choose to sync with Dropbox or by another method, is to only sync the `Packages/User/` directory. This folder contains the `Package Control.sublime-settings` file, which among other things, contains your list of installed packages. Once this file is synced with your other machines via the process outlined below, your other computers will automatically install the correct version of any missing/updated package the next time you start up Sublime Text.

There are other ways to sync your installed packages and settings across different machines without utilizing Dropbox, for example by using Git, however I have found that using other methods leads to added steps of constantly syncing files, updating repositories, and the list goes on. Dropbox sync allows for the cleanest, most “hands-off” approach.

**NOTE:** If not already installed, [Download](//www.sublimetext.com/3) a fresh copy of Sublime Text 3 to get up and running. Instructions may vary depending on your operating system.

## Getting Started

I recommend designating one of your computers as your “initial computer.” Once you configure your Sublime Text settings on this initial machine to your liking, we will be syncing these files with Dropbox.

## Install Package Control

If you have not yet installed Package Control, go ahead and open up Sublime Text. Once you have Sublime Text up-and-running, from its menu select View > Show Console. Alternatively, utilize the keyboard shortcut
```
ctrl+`
```
to show the console.

Once the console is open, simply paste the code found on the Package Control installation page and press return. This code creates the Installed Packages folder for you, then downloads the Package Control.sublime-package. After Package Control installation has completed, quit/exit Sublime Text.

## Setup Initial Machine

These instructions assume your Dropbox folder is installed in the default location `~/Dropbox`. If your Dropbox folder is located elsewhere, you should replace all mentions of `~/Dropbox` below with the correct path, such as `~/Path/to/Dropbox`. The initial setup instructions vary depending on whether your main (initial) computer is a Mac or a PC running Windows

### If initial machine is a Mac

For MAC users follow the instructions below:

1. Close down Sublime Text
2. Open Terminal and input the following commands
3. Navigate to the Sublime Text 3 Package directory
```
cd ~/Library/Application Support/Sublime Text 3/Packages/
```
4. Create a Sync Folder within your Dropbox, and then within the Sync folder, create a Sublime Text folder.
5. You may reuse the Sync folder for other purposes/applications
```
mkdir ~/Dropbox/SublimeText
```
6. Move the User folder from the Sublime Text 3 Package directory to your new Dropbox folder.
```
mv User ~/Dropbox/SublimeText/
```
7. Create a symlink within the Sublime Text 3 Package directory pointing to the User folder within Dropbox/Sync/Sublime Text/ directory.
```
ln -s ~/Dropbox/SublimeText/User
```

### If initial machine is a Windows

For MAC users follow the instructions below:

1. Close down Sublime Text
2. Open PowerShell or Command Prompt and selecting “Run as administrator” and then enter the following commands
3. Navigate to the Sublime Text 3 Package directory
```
cd C:\Users\YASHU\AppData\Roaming\Sublime Text 3\Packages
```
4. Create a Sync Folder within your Dropbox, and then within the Sync folder, create a Sublime Text folder.
5. You may reuse the Sync folder for other purposes/applications
```
mkdir C:\Users\YASHU\Dropbox\SublimeText
```
6. Move the User folder from the Sublime Text 3 Package directory to your new Dropbox folder.
```
mv Sublime Text 3 C:\Users\YASHU\Dropbox\SublimeText
```
7. Create a symlink within the Sublime Text 3 Package directory pointing to the User folder within Dropbox/SublimeText/ directory.
```
mklink /d User "C:\Users\YASHU\AppData\Roaming\Sublime Text 3\Packages\User"
```

***

## Configure Other Computers for Sync

After completing the instructions outlined above based on your initial machine’s OS, next follow the instructions below for ALL OTHER machines, depending on their operating system.

### If a secondary computer is running Mac

1. Close down Sublime Text
2. Open Terminal and input the following commands
3. Navigate to the Sublime Text 3 Package directory.
```
cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/
```
4. Delete the User folder within this directory.
```
rm -r User
```
5. Create a symlink within the Sublime Text 3 Package directory pointing to the User folder within `Dropbox/Sync/Sublime Text/` directory.
```
ln -s ~/Dropbox/Sync/Sublime\ Text/User
```

### If a secondary computer is running Windows

1. Close down Sublime Text
2. Open  PowerShell or Command Prompt by right-clicking and selecting “Run as administrator” and then enter the following commands
3. Navigate to the Sublime Text 3 Package directory.
```
cd C:\Users\YASHU\AppData\Roaming\Sublime Text 3\Packages
```
4. Delete the User folder within this directory.
```
rmdir -recurse User
```
5. Create a symlink within the Sublime Text 3 Package directory pointing to the User folder within `Dropbox/Sync/Sublime Text/` directory.
```
mklink /d User "C:\Users\YASHU\Dropbox\SublimeText\User"
```

Once you complete the secondary computer changes above, your instances of Sublime Text on each computer should automatically update whenever you make a change to your installed packages. Additionally, any changes made to your User Settings in the `Preferences.sublime-settings` file will also be updated. This method should allow for the perfect developer space regardless of which of your computers you’re working from.
