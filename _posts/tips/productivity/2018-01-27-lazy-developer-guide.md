---
layout: post
author: yashumittal
title: The Lazy Developer's Guide to Life Without the Mouse, Cursor and Useless Keys
date: 2018-01-26 20:31:45 +0530
categories: tips
tags: tips productivity
description: Let me take a stand in the perpetual Vim vs Emacs holy war - Vim stole my heart and, in doing so, turned my life into hell. Suddenly, I hate typing with any application that doesn’t use the HJKL keys to move the cursor, and I find myself becoming frustrated whenever I need to use the mouse! So what changes can I implement to ease my pain and make my life easier, you ask? Here's your answer!
image: https://cdn.codecarrot.net/images/1447935893-lazy.jpg
---

Dare I broach the topic of the Vim vs Emacs holy war? I’ve tried both editors, but ultimately Vim stole my heart and, in doing so, turned my life into hell. It’s such a pleasure to use; nothing else compares to it. Suddenly, I hate typing with any application that doesn’t use the HJKL keys to move the cursor, and I find myself becoming frustrated whenever I need to use the mouse! So what changes can I implement to ease my pain and make my life easier, you ask?

## Code editor

**If you use Vim**

The Vim editor was designed for lazy people like myself. No unnecessary movement, everything right under my fingertips. It has quite a steep learning curve, but there are many resources that can help. I recommend going through vimtutor (just type `vimtutor` in your terminal) and [getting yourself one of these printable cheatsheets](//www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html). The cheatsheets are divided into separate weeks, so the amount of information won’t overwhelm you.

**If you don’t use Vim**

If you don’t want to dive head-first into Vim, or you simply don’t want to lose your current plugins, you can install a plugin for your favorite text editor. I’ve used Vintageous for Sublime Text and vim-mode for Atom and they both work reasonably well (although with some minor differences). There’s also EVIL (Extensible VI Layer) Mode for Emacs.

## Terminal

**Tmux**

Tmux is definitely one of my favorite tools. Although it has pretty advanced capabilities, I just use it as a kind of window manager for the terminal. It lets you create multiple panes, and then to split them up however you want. Basic Tmux shortcuts are (C is the prefix key - by default it’s Ctrl):

* `C-b c` - create a new pane
* `C-b number` - go to pane with a given number
* `C-b “` - split pane horizontally
* `C-b %` - split pane vertically
* `C-b [` - enter copy mode (like visual mode in Vim)

For comfort, I’ve rebound some shortcuts to mimic Vim’s behaviour:
 
This allows you to navigate split panes using `C-h/j/k/l` keys and to toggle between them with `C-\`.

**Shell, IRB and other prompts**

I was surprised how easy it is to use Vim key bindings in all terminal apps. Just put `set editing-mode vi` in ~/.inputrc and `bindkey -v` in ~/.zshrc if you’re using Zsh, and you’re good to go!

## Desktop

**Window management**

I guess we all have cmd+tab etched into our muscle memory. On most operating systems, cmd+tab will bring up the most recently used application, cmd+tab+tab will bring up the second most recently used application and so on. This is fine when I’m just switching from editor to browser and back, but if I have a quick message to reply to - the order gets changed and I can either remember that I’m out of my usual flow and press cmd+tab twice the next two times I want to switch windows OR I can accidentally change the order again, perhaps a couple of times, until I get it right. The latter being more likely, and a lot messier.
There’s also a way to switch between desktops, but I can never be sure what application I’ll end up in if I have more than one on a single screen. Using one app per desktop is not a viable solution for me since I’m so in love with autoreloading the app when my code changes. When I switched from Ubuntu to OSX I really missed the ability to move between applications with a single shortcut. Here’s how it worked: you have multiple apps in your “dock”, you press the windows key with a number and the graphical environment brings you to the corresponding app. A similar thing can be achieved in OSX by using BetterTouchTool:

| Shortcut | Assiged Action | Enabled |
| --- | --- |
| Command + 1 | Launch Google Chrome.app | :white_check_mark: |
| Command + 2 | Launch Terminal.app | :white_check_mark: |
| Command + 3 | Launch Slack.app | :white_check_mark: |
| Command + 4 | Launch iTunes.app | :white_check_mark: |
| Command + 5 | Launch Mail.app | :white_check_mark: |

## Web Browser

**Tabs and pages**

Discovering the [Vimium](//chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en) plugin for Chrome was another lifesaver. It allows tab and page navigation using only the keyboard. My favorite feature is highlighting all links on a page with a convenient shortcut. Just press the F key and the screen turns into this:

![Google homepage shortcuts keys appering on the screen](https://cdn.codecarrot.net/images/1447933857-1447933855-image01.png)
 
For a better Firefox experience - try [Pentadactyl](//5digits.org/pentadactyl/). If you’re a Safari user there’s [Vimari](//github.com/guyht/vimari).

## Web apps

Many of the best web applications come with their own shortcuts. Just press `?` in GMail, Toggl, Facebook or Twitter. Although not all of them are Vim-like, I think the developers still deserve a huge round of applause for taking good care of us and our tired wrists.

## Conclusion

Figuring out your perfect setup is a long journey, but it’s a fun one and I recommend you start right away. I can’t wait to see what new helpful tools I’ll discover this week! How about you? Let me know about your favorite keyboard-fu techniques. Oh, and don’t forget to stretch your hands before you type!

