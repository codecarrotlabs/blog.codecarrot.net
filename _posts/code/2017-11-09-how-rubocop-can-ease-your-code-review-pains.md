---
layout: post
author: yashumittal
title: How RuboCop can ease your code review pains
date: 2017-11-09 23:19:40 +0530
categories: code
tags: coding rubocop
description: If you are a coder trying to adhere to the style of your colleagues’ code, or if you occasionally find yourself overlooking an obvious syntactic error, Rubocop —a static code analysis tool—is here to help.
image: 66385f42-smush-1412165757-robo.jpg
---

If you are a coder trying to adhere to the style of your colleagues’ code, or if you occasionally find yourself overlooking an obvious syntactic error, Rubocop —a static code analysis tool—is here to help.

Among the skills that constitute a decent Ruby coder, there is one key understanding that all coders share: **your code is not only interpreted by a machine, but by fellow programmers as well.** From this understanding, style guides were born to make interpreting subsequent lines of code easier (for humans).

Style guides are a bit like accents in spoken languages—everyone understands each other better if each person understands the small nuances and styles within their team.

If you are a coder trying to adhere to the style of your colleagues’ code, or if you occasionally find yourself overlooking an obvious syntactic error, [Rubocop](//github.com/bbatsov/rubocop) —a static code analysis tool—is here to help.

## Benefits:

There are at least **two advantages that RuboCop offers** when writing code:

* you can **track silly errors quickly** without burrowing through many lines of the error stack
* you can **aid your review process by smashing all the errors and style deficiencies before they get pushed to a remote branch**. This helps to avoid warnings and complaints from [Hound](//github.com/thoughtbot/hound), or a colleague with an eye for detail.

## Installation & configuration:

Rubocop can be added to specific project gemfiles, but assuming you want to have it at your service anytime with your standard gemset, let’s just go for:

`gem install rubocop`

Now, if you can see something in your destination directory like **rubocop (0.26.1)** in your gem list, you can get RuboCop to run with:

`rubocop`

The program will look down the directory tree and for specific file formats. Then, using a list of rules known as ‘cops’ it’ll point out any inconsistencies or unwelcomed practices present in your code. A typical ‘offense’ might look like:

```
<code> booksellers/spec/models/story_spec.rb:10:24: C: Avoid using {...} for multi-line blocks. Story.stub(:all) {[ ^ </code>
```

You can also **look at specific files or subdirectories** with:

`rubocop [file/direcotory name]`

RuboCop offers some **additional options to run in the command line**. Those who use Rails may opt for additional cops to be run with:

`rubocop --rails`

There is also **an experimental feature which corrects some errors automatically**. However, use it with caution. RuboCop judgement may not always be 100% accurate and the corrected code might be contrary to what is desired:

`rubocop --auto-correct`

Unless otherwise specified, RuboCop uses a default list of rules based on [this style guide](//github.com/bbatsov/rails-style-guide). Of course, if you or your team has its own prerogatives, these are usually held in `.rubocop.yml` file. If you want your own rules to be used throughout all the apps just place the correctly formatted .rubocop.yml file into your home directory.

By having a rules file (with a line like the one below), it will overwrite the default setting of maximum 80 characters per line, and limit it to 99 instead:

`Style/LineLength: Max: 99`

As you work with different developers on different projects, the rules to adhere to may vary, and it’s possible to add application-specific rules inside the application root directory or in the ‘app/config’ directory. Therefore, you can set layers of different rules to apply starting from the defaults, to machine-wide, and ultimately project-specific rules.

## Integration with text editors

Undoubtedly, one cool feature of RuboCop is that it allows integration with the most popular text editors such as [Vim](//github.com/ngmy/vim-rubocop) or [Sublime Text](//github.com/pderichs/sublime_rubocop).

After **adding the plugin in Sublime Text** and restarting the editor, subsequent requests to save the file will automatically start RuboCop. If there are any code offenders, you’ll see it nicely highlighted with the description provided at the bottom bar of the editor.

Be aware that although these might turn out to be helpful features, RuboCop running in the background will significantly slow your editor down when saving changes. However, if this becomes a nuisance and you still want to keep the process automated, you might choose integrating RuboCop with [Guard as a healthy alternative](//github.com/yujinakayama/guard-rubocop).

![sublime text 3 robocop](//blog.codecarrot.net/images/1425999553-1412162922-rubocop-blogpost-obrazek.png)

Thats it! With RuboCop you can nip these silly errors and style issues in the bud before any bad habits can sink in. RuboCop is here to enforce your code and style rules, so that you don’t have a second thought to your code review.
