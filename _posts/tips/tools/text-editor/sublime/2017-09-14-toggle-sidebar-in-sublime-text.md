---
layout: post
author: yashumittal
title: Toggle Sidebar in Sublime Text
date: 2017-09-14 22:30:00 +0530
categories: tips
tags: tips sublime-text text-editor
description: The shortcut for toggle sidebar in Sublime Text wasn't working for me. Searching about it in the internets, I discovered that you've to press command
image: https://cdn.codecarrot.net/images/5933707352792e706e67.png
---

The shortcut for toggle sidebar in Sublime Text wasn't working for me. Searching about it in the internets, I discovered that you've to press `command+k` and then `command+b`, they call it a sequential shortcut.

For me that's crazy behavior, but it's quite simple to change it: go to `Preferences » Key Bindings - User` and paste the following in your file:

```
// Toggle the Sidebar
{ "keys": ["super+\\"], "command": "toggle_side_bar" },

// BONUS: Reveal current file on the sidebar tree
{ "keys": ["super+shift+r"], "command": "reveal_in_side_bar" },
```

That's it! Now when you press `command+\` it'll show or hide the sidebar. As a bonus, I also added the shortcut `command+shift+r` to reveal the current file in the tree.

**Note to Windows users:** you must change `super` to `ctrl`.
