---
layout: post
author: yashumittal
title: What is Difference Between Unstaged and Untracked File in Git?
date: 2017-10-21 02:04:30 +0530
categories: code
tags: coding github git
description: Whenever you initialize a new repository with git init, Git creates a directory called Git Directory, which store information about branch, tag, remote, etc. Git's object data. Generally it is .git in the current repository.
image: detective-tracking.png
---

Whenever you initialize a new repository with `git init`, Git creates a directory called **Git Directory**, which store information about *branch, tag, remote, etc*. **Git's object data**. Generally it is `.git` **(hidden directory)** in the current repository.

**Pro Tip:** Untracked changes are not in Git. Unstaged changes are in Git but not marked for commit. Staged changes are in Git and marked for commit.

But this is not what we are looking for, there is one thing more called **working directory**. It is a checkout repository or *simply file structure covering all of your repository's data at a particular time*.

So when you initialize a new repository, our working directory is our current directory and everything you have in directory right now even the directory is empty.

If you cloning a different remote repository then, our working directory is everything that is in any branch *(in which, you are right now)* of the cloned remote repository.

Now whenever you create a new file in your repository, it is going in the *working directory*.

Using the command `git status`, it will shows status of the current position in the repository. In simple terms, it includes what you have done so far, what you should do next, comparison results of your repository to its remote *(like local repository have more commits then your remote it or less)* etc.

When you will check git status in the repository, it will tell you the status about the files that are in untracked state.

What this means is that these changes in the untracked files are not yet able to get converted to a **Git commit**. For this, you have to send these changes to Git's staging section(area).

**Now what is this staging area?**

In simple terms, it stores all the information about what will go with the next commit. It’s also called index.

![Local Operations in Git Repository](//blog.codecarrot.net/images/main-qimg-ef1ac9925df956225785f65119ed6ddc.png)

So, to commit something, all of the commit's changes pass these areas one by one.

working directory is where you do the modifications in your files, then you stage the changes using `git add.`

Now your changes are in staging area. You can now commit these changes using `git commit` or you can choose to modify even more.

On each git status, it will show you that there are some files that haven't been added to staging area but contains some recent changes. It will also tell you that there are some changes that haven't been added to staging area, even a single time. This will fall in the category of untracked files.

**untracked file** is each file that was not there in previous snapshot of the repository *(file that is newly introduced)*.

Here’s an example where we created untracked_file in the working directory without adding it:

```
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	untracked_file

nothing added to commit but untracked files present (use "git add" to track)
```

But unstaged state sounds fine for changes more than files. For example some changes in tracked file that are not yet in staging area.

You can start tracking using git add, a file directly goes to staging area when you use git add, now that file is both tracked and staged.

You can unstage any staged file using `git reset -- filename`.

An untracked file is in unstaged state also.
