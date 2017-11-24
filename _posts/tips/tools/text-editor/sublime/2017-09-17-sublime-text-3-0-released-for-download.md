---
layout: post
author: yashumittal
title: Sublime text 3.0 Released for Download
date: 2017-09-17 17:50:30 +0530
categories: tips
tags: tips text-editor developing programing sublime sublime-text coding
description: There is some good news for lovers of the popular code editor, Sublime Text, as it has released the new final version of Sublime
image: 1582459dribbble_shot.png
---

There is some good news for lovers of the popular code editor, Sublime Text, as it has released the new final version of Sublime Text 3.0 Build 3143, which is now available for download on Windows, Linux and MacOS. In comparison to the previous release, the program is supposed to be better in every way, which makes it easy for everyday people to work with code.

For those unaware, Sublime Text is a proprietary cross-platform source code editor with a Python application programming interface (API). It natively supports many programming languages and markup languages, and its functionality can be extended by users with plugins, typically community-built and maintained under free-software licenses. Sublime Text is available for Mac OS, Windows and Linux.

There are a lot of changes in Build 3143 that practically affect every aspect of the application, such as appearance, functionality and performance. For instance, Sublime Text 3.0 will now consume much less resources and run much faster than version 2 in every aspect, such as launching a program, opening files, swapping words into a document, or scrolling through content.

The new Sublime Text also has some interesting visual changes, which can be seen in the form of new icons, interface color scheme, adaptive theme and publisher fonts.

Don't forget to take a look at the new Sublime icon.

![New sublime text logo](//blog.codecarrot.net/images/sublime-text-new-logo-preview.png)

In addition, compared to the last beta, 3.0 brings a completely new UI theme, a new syntax highlighting engine, Touch Bar for MacOS, touch input for Windows.

Sublime Text 3.0 also includes better spell check, more efficient automatic indentation, GoTo Definition, and better customization of the interface to high resolution screens. Further, in order to make Sublime Text 3.0 one of the best programming IDEs for both amateurs and professionals alike, a number of problems and bugs have also been fixed.

You can check the complete list of changes of Sublime Text 3.0 by [clicking here](//www.sublimetext.com/2to3).

It is worth noting that the full version of Sublime Text 3.0 is applicable not only to new customers but also to those who have purchased a license for Sublime Text 2 from February 2013 onwards. For those who have license key for Sublime Text 1 or 2 can [purchase upgrades](//www.sublimetext.com/upgrade).

## Here is the full changelog:

* Refreshed UI theme, including full high DPI support
* New icon
* Added alternate theme, Adaptive, that inherits colors from the color scheme
* Added new color schemes Breakers, Mariana and Sixteen, derived from the excellent work of Chris Kempson and Dmitri Voronianski
* Added color scheme and theme switchers with live preview via the command palette
* Windows: Added touch input
* Linux: Added [repositories](//www.sublimetext.com/docs/3/linux_repositories.html) for apt, yum and pacman
* Mac: Added Touch Bar support
* Mac: Support for custom color window title bars on OS X 10.10+
* Many additions and bug fixes to the theme engine, plus [full documentation](//www.sublimetext.com/docs/3/themes.html)
* Significant improvements to Markdown syntax highlighting, with thanks to [keith-hall](//github.com/keith-hall)
* Significant improvements to C# syntax highlighting, with thanks to [gwenzek](//github.com/gwenzek)
* Significant improvements to Java syntax highlighting, with thanks to [djspiewak](//github.com/djspiewak)
* Significant improvements to Python syntax highlighting, with thanks to [FichteFoll](//github.com/FichteFoll)
* Significant improvements for R syntax highlighting, with thanks to [randy3k](//github.com/randy3k)
* Markdown: Improved symbol handling
* C#: Improved symbol handling
* Many other syntax highlighting improvements
* Various bugs with the syntax highlighting engine have been resolved
* Fixed several crash issues
* Improved responsiveness when the system is under high CPU load
* High DPI textures are used on Windows and Linux when the DPI scale is greater than 1.0
* Improved font selection on all platforms, allowing selection of different weights by name
* Added setting `theme_font_options` to control font rendering of UI elements
* Improved auto indent rules for HTML and PHP
* Font geometry issues that prevent bold or italics are now printed in the console
* Fixed flash-of-white that could occur when the auto complete window is closed
* Disable scroll animation when `animation_enabled` is false in settings
* Files can now be renamed when only the case has changed
* New windows start with an empty find history
* Find in Files panel now responds to `find_all` and `replace_all` commands
* Various regex handling improvements in the Find panel
* Fixed text widgets cutting off the bottom pixel of their selection border
* Fixed an issue with `close_windows_when_empty` in empty session
* Fixed empty panes on startup when `hot_exit` was set to false
* Fix Open Containing Folder on Windows with a folder containing a comma
* Fix multi-cursor pasting when clipboard contains one or more full lines
* Prevent UNC paths from being mangled by `edit_settings`
* Prevent a crash when a malformed regex is used in indentation settings
* Improved rendering performance with a large number of gutter icons
* Gutter icons are now sized properly on Windows and Linux high DPI screens
* Improved sidebar performance when folders contain many thousands of files
* Improved inline error message style
* Fixed an issue where multiple indexing status windows could be shown
* Windows: Font rendering defaults to DirectWrite unless using Consolas or Courier New
* Windows: Added support for `no_antialias` font option when using DirectWrite
* Windows: Improved touch pad scrolling
* Windows: Improved file change detection robustness
* Windows: Improved font selection logic
* Windows: ``` Fix ctrl+` ``` shortcut for UK (ISO) keyboards
* Windows: Improved fallback font handling in UI elements
* Windows: The subl executable on OS X and plugin_host.exe on Windows are now signed
* Windows: sublime_text.exe now has CompanyName set in VERSIONINFO
* Mac: Handle layout changes due to macOS Sierra tabs
* Mac: Improved default web browser detection
* Mac: OS X 10.11 and macOS 10.12+ default to using San Francisco for the UI font
* Mac: Fixed file change notifications from freezing UI on macOS Sierra
* Mac: the user's default shell is executed and environmental variables are set in the plugin Python environment
* Linux: Update X11 selection on clipboard every time selection changes
* Linux: Improved `MOD3` modifier key handling
* minihtml: Added support for borders
* minihtml: Respects `font_options` from the settings
* minihtml: Fixed layout of html popups on Windows and Linux under High DPI
* minihtml: Fixed crash when doctype is present
* minihtml: Fixed a crash from non-existent CSS vars
* minihtml: Fixed a crash triggered by bad image paths
* API: Add `View.text_to_window()` and `View.layout_to_window()`
* API: All API functions now accept and return device-independent-pixels
* API: Fixed input panel not running on_cancel when re-showing the input panel
* API: Fixed selector scoring with the & operator
* API: Fixed a bug causing incorrect phantom contents
* API: Fixed crash in `Window.set_view_index()`
* API: Updated OpenSSL to 1.0.2k, SQLite to 3.16.02
