---
layout: post
author: yashumittal
title: DevTools Tips For Sublime Text Users
date: 2017-10-18 01:29:00 +0530
categories: tips
tags: devtools sublime sublime-text chrome google google-chrome tips
description: Your existing knowledge of features in Sublime Text and apply them to another powerful tool in your arsenal — the Chrome DevTools.
image: 1-RXuLuUJs_JxzA7U_vZgNqQ.png
---

## Introduction

In this quick write-up, we’ll cover how to take advantage of your existing knowledge of features in **Sublime Text** and apply them to another powerful tool in your arsenal — the Chrome DevTools.

Thanks to several modern tools including DevTools, JSBin and Codepen relying on the excellent CodeMirror editor, keyboard bindings like those in Sublime Text are more readily available elsewhere than they have been.

*Let’s assume for the rest of this write-up that we’ll primarily be working inside the DevTools Sources panel — a feature which, when paired with [Workspaces](//developer.chrome.com/devtools/docs/workspaces) gives you a powerful in-browser editor.*

![The Sources panel in Chrome DevTools can be used as a powerful editor and companion during debugging](//cdn.codecarrot.net/images/1-RXuLuUJs_JxzA7U_vZgNqQ.png)

*The Sources panel in Chrome DevTools can be used as a powerful editor and companion during debugging*

## Keyboard Shortcuts

### Goto Anything

Very similar to Sublime, DevTools has a Goto “Anything” dialog. This can take you to a specific file, a line number or a method definition. You can bring up the Goto “Anything” search using Ctrl/Cmd + P. This lets you search/filter through files just by starting to type in the files name. To search for a method — such as a JavaScript **method or a CSS selector**, use Ctrl/Cmd + Shift + P and start typing in the method name.

![Goto Anything](//cdn.codecarrot.net/images/1-v595nTQXCOB_FOzmaYWtrg.gif)

### Goto Line in file

`Ctrl` + `G` will toggle a dialog allowing you to jump to a specific line in a file. If you wish to go to a line in the current file, bring up the dialog and type in a colon followed by the line number you are interested in. For example, :25 will take you to line 25. If you wish to go to a line in a different file, type in the file name, a colon and then the line number (e.g app.js:25).


![Goto Line in file](//cdn.codecarrot.net/images/1-PBHOVst6HsDfLdfFU7QwDA.gif)

### Go to the start or end of a line

**Go to end of a line:** `Alt` + `Right` or `Cmd` + `Right`
**Go to the start of a line:** `Alt` + `Left` or `Cmd` + `Left`

### Go to start or end of a file

**Go to the start of a file:** `Alt` + `Up` or `Cmd` + `Up`
**Go to the end of a file:** `Alt` + `Down` or `Cmd` + `Down`

### Go one word left or right

**Go one word left:** `Ctrl`+ `Left` or `Alt` + `Left`
**Go one word right:** `Ctrl` + `Right` or `Alt` + `Right`

### Go up or down a line

**Go up a line:** `Up`
**Go down a line:** `Down`

## Using Carets / Multiple Cursors

A caret is that blinking line that indicates where you’re typing at the moment. Similar to Sublime Text, DevTools can have as many carets as you want.

### Adding multiple Carets

You can start playing with carets by opening any supported file in Sources, then selecting each line by holding down `Cmd`/`Alt` and clicking wherever you would like to add a new caret.

![Adding multiple Caret](//cdn.codecarrot.net/images/1-4svsSOFNREo3PYlqAIHMcw.gif)

For example, if you have multi-line JavaScript that needs to be prefixed, edited or wrapped in quotes, multiple carets can make this a breeze.
The following steps will quickly get every line selected:

1. Click on the first line
2. While holding down `⌘` and `Option`
3. Drag your mouse through the rest of the lines

You should now have a cursor somewhere on each line.

**Use multiple carets from the front of a line**

Use `Cmd` + `←` ( `Alt` + `←` for Windows/Linux) to bring all cursors to the front of the line, and then hold down `Option` while using the arrow keys to jump by word. When in front of the file name, simply type in your prefix and you’re done!

![Adding multiple Carets](//cdn.codecarrot.net/images/1-zWyHDztwW8K6h6ocgo4RBQ.gif)

**Wrap with Quotes or Brackets**

Highlight the words with `Cmd` + `Shift` + `←` ( `Ctrl` + `Shift` + `←` for Windows/Linux) and type an opening quote or bracket. Dev tools will wrap each word in the selected quote or bracket.

![Wrap with Quotes or Brackets](//cdn.codecarrot.net/images/1-uFxPo9AInxze4-VAOQZ23w.gif)

**Column selection**

Carets can similarly be used for selecting custom columns of text. Hold down `Alt` and then click and drag over the region of text you would like to select. DevTools will highlight the area and you can now copy or edit it as needed.

**Carets and matching words**

Carets can also be used for highlighting specific words. Select a word in your editor (it can be a variable, method, or anything really). DevTools will highlight other instances of this word with a border around them.

Now use `Cmd` + `D` (or `Alt` + `D`) and DevTools will highlight and place multiple cursors on the matching words. This is particularly useful during batch rename operations. Hitting D a few more time while still holding ⌘ selects the next instance of the selection found. By hitting ⌘, then D three times, you can select three iterations of the text.

![Carets and matching words](//cdn.codecarrot.net/images/1-zsYjnj7I6Mi1WF1oy_lyYQ.gif)

**Jump to matching brackets**

When working with non-complex pieces of code, you might find it tricky to find corresponding opening and closing brackets with your naked eye. `Ctrl` + `M` allows you to instantly move your cursor there. Using it twice will jump to its opening or closing counterpart.

![Jump to matching brackets](//cdn.codecarrot.net/images/1-QdrkPBShYAHrDhr5UElG1A.gif)

**Indentation**

We know the importance of indentation. It helps keep our code readable and easy to understand. To increase or decrease the current line’s indent, use the shortcuts below:

Indent text: `Tab`
Unindent text: `Shift` + `Tab`

![Indentation](//cdn.codecarrot.net/images/1-_QkNVE12OJjcAs3ejnlVqw.gif)

### Quickly comment your code

If you need to comment/uncomment a piece of code, the same shortcuts you would use for this in Sublime Text also apply:

**Comment text:** `Cmd`/`Ctrl` + `/`
**Uncomment text:** `Cmd`/`Ctrl` + `/` on the same section of text.

This works across all languages and works pretty well with lines or whole selections.

![Quickly comment your code](//cdn.codecarrot.net/images/1-zeNecjKCY0sSTVZ1ZFHaPw.gif)

### Toggle Autocompletion

When typing values in the DevTools Sources panel, you’re presented with autocompletions as you type. If however you dismiss these and would like to manually toggle autocompletion, you can do so with:

`Ctrl` + `Space`

![Toggle Autocompletion](//cdn.codecarrot.net/images/1-LMoNl681Off06TxYdZcWiA.gif)

### Cut/Copy/Paste/Undo/Redo

You can cut, copy and paste text using the same shortcuts you’re used to in other editors:

**Cut:** `Cmd` + `X`
**Copy:** `Cmd` + `C`
**Paste:** `Cmd` + `V`
**Undo:** `Cmd` + `Z`
**Soft undo:** `Cmd` + `U`
**Redo:** `Cmd` + `Y`

### Increment and Decrement values

Note: ⇞ and ⇟ are page up and page down. On an Apple keyboard, you can page up/down by holding fn + ↑/↓

In the Sources pane, you can select a numeric value and easily increment or decrement the value using your keyboard. Highlight the value and then:

**Increment CSS unit by 1:** `Option` + `↑`
**Decrement CSS unit by 1:** `Option` + `↓`
**Increment CSS unit by 10:** `Option` + `⇟`
**Decrement CSS unit by 10:** `Option` + `⇟`

![Increment and Decrement values](//cdn.codecarrot.net/images/1-el4vmdu2MAwwZw5o9pyG0w.gif)

The Styles pane also supports shortcuts for incrementing/decrementing values.

**Increment value:** ↑
**Decrement value:** ↓
**Increment by 10:** ⇞ or ⇧↑
**Decrement by 10:** ⇟ or ⇧↓
**Increment by 100:** ⇧⇞
**Decrement by 100:** ⇧⇟
**Increment by 0.1:** ⌥↑
**Decrement by 0.1:** ⌥↓

![Increase and Decrease values](//cdn.codecarrot.net/images/1-1UHsuMbrljOwdCrgQ84g6w.gif)

## Cycle through editing locations

DevTools can now also preserve your position cursor history in Sources. This lets you cycle through your previous editing locations using **Alt- and Alt+**:

![Cycle through editing locations](//cdn.codecarrot.net/images/1-ccH3zKqBHkwq445ijzSXsw.gif)

## Shortcuts page

If you’ve found the above shortcuts helpful, you can pull most of them up via the DevTools [settings menu](//developer.chrome.com/devtools/docs/settings). It looks a little like this:

![Shortcuts page](//cdn.codecarrot.net/images/1-ruU4iOfl63bDdOcHf0t6Hg.png)

## Source Settings

The Settings page also allows you to configure how the editor behaves. This includes customizing the default **indendation**, toggling bracket matching, autocompletion and the display of whitespace characters.

![Source Settings](//cdn.codecarrot.net/images/1-kNSTfEe7h8FJUgJ8eFd6bA.png)

## Themes
Similar to your editor, the DevTools UI can also be customized (the theming for the syntax highlighting, the colors across each of the panels, the look of UI elements like tabs). Some of these themes make intelligent use of color to highlight the key pieces of UI in DevTools without taking your focus away from the code.
Some of our choice picks for DevTools themes are the following:

* [//github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme](//github.com/mauricecruz/chrome-devtools-zerodarkmatrix-theme)
* [//github.com/xero/greybeard-devtools](//github.com/xero/greybeard-devtools)

![The ZeroDarkMatrix theme](//cdn.codecarrot.net/images/1-0v6KQTbisUbn_kF9MFWRxw.png)

*The ZeroDarkMatrix theme*

## To install a theme:

* Install it from the [Chrome Web Store](//chrome.google.com/webstore/search/devtools?_category=extensions).
* Open chrome://flags ▶ Enable Developer Tools experiments and click “Relaunch Now” at the bottom.
* Open developer tools settings ▶ Experiments ▶ [✔] Allow custom UI themes.
* Boom. You should be good to go. Themes can be found in a number of places, including the Web Store, [DevThemez.com](//DevThemez.com) and GitHub.

## Quick bonus tip

DevTools also supports a few nice debugging helpers that can further augment your daily editing & debugging workflow. For instance, while debugging you can preview the inline values of JavaScript variables at the current point in time. Super powerful.

![Display values inline while you’re debugging (see the blocks highlighted in orange). Enabled via Settings > Sources > Display variable values inline while debugging](//cdn.codecarrot.net/images/1-8eBfaiXNPUu8NK2qKspaLA.png)

Display values inline while you’re debugging (see the blocks highlighted in orange). Enabled via Settings > Sources > Display variable values inline while debugging

## Wrapping up

We hope you’ve found these DevTools tips helpful!.

Many of the SublimeText equivalents we’ve covered here work equally as well in other editors and we encourage you to spend time learning about the shortcuts in apps you use regularly.
They’re powerful stuff and can make a HUUUGE difference to your workflow.

If you’re hungry for more and want to continue improving your workflow, grab Wes’ [Sublime Text Book + Videos ](//sublimetextbook.com/)— use the code **DEVTOOLS** for $11 off. You can also check-out the first episode of [Totally Tooling Tips](//www.youtube.com/watch?v=2eu23_if6Lw&index=11&list=PLOU2XLYxmsILKwwASNS0xgfcmakbK_8JZ) for a look at Sublime Text plugins.

This blog is published at medium by [Addy Osmani](//twitter.com/addyosmani).
