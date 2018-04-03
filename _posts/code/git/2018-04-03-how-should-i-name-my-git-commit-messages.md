---
layout: post
author: yashumittal
title: How should I name my Git commit messages?
date: 2018-04-03 20:27:49 +0530
categories: code
tags: coding git messages
description: what makes a "good" commit message? That's a great question and has been written about a number of times.
image: https://i.imgur.com/bS9ItsV.png
---

These are *fantastic* questions! I can't stress enough how important it is to spend some time writing a *good* commit message.

Now, what makes a "good" commit message? That's a great question and has been written about a number of times. Here are some important things to think about when crafting a good commit message:

**Do**

- do keep the message short (less than 60-ish characters)
- do explain *what* the commit does (not *how* or *why*!)
- do use **present time** in your messages
- do remove unnecessary **punctuation marks**
- do use **small case**
- do make a **single commit** for single change (even really small)
- do point out the **path to the file**, if it's not obvious which one has been changed by the commit.

**Do not**

- do not explain *why* the changes are made (more on this below)
- do not explain *how* the changes are made (that's what `git log -p` is for!)
- do not use the word "and"if you have to use "and", your commit message is probably doing too many changes - break the changes into separate commitse.g. "make the background color pink *and* increase the size of the sidebar"
- do not use dates, name and other **inappropriate marks**

The best way that I've found to come up with a commit message is to finish this phrase, *"This commit will..."*. However, you finish that phrase, use *that* as your commit message.

If you need to explain *why a change is being made* or *how does it address the issue?*

You can add a **blank line**, separating the commit message from description.

When you're writing the commit message, the first line is the message itself. After the message, leave a blank line, and then type out the body or explanation including details about why the commit is needed (e.g. URL links).

<blockquote>
Git is smart enough to distinguish the first line of your commit message as your summary. In fact, if you try *git shortlog*, instead of *git log*, you will see a long list of commit messages, consisting of the id of the commit, and the summary only.
</blockquote>

Further paragraphs come after blank lines.

- Bullet points are okay, too.
- Typically a hyphen or asterisk is used for the bullet, followed by a single space. Use a hanging indent.

Here's what a commit message edit screen might look like:

![Git Commit Message Example](https://i.imgur.com/bS9ItsV.png)