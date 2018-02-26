---
layout: post
author: yashumittal
title: Upload To FTP Servers The Git Way
date: 2018-02-27 01:37:02 +0530
categories: code
tags: coding git ftp server
description: Are you using Git and want to upload your files to an FTP server, Git-ftp can save you some time and bandwidth by determining which local files to upload
image: https://i.imgur.com/fM8d703.png
---

If you are a person who love Git and don’t want to use FTP, becuase it doesn’t support Git, then this article is for you.

Are you using Git and want to upload your files to an FTP server, [Git-ftp](https://github.com/git-ftp/git-ftp) can save you some time and bandwidth by determining which local files to upload or which files to delete on the remote host and uploading only those files that changed since the last upload.

It saves the deployed state by uploading the SHA1 hash in the `.git-ftp.log` file. There is no need for Git to be installed on the remote host.

It keeps track of the uploaded files by storing the commit id in a log file on the server. It uses Git to determine which local files have changed.

Even if you play with different branches, git-ftp knows which files are different and handles only those files or go back in the Git history to upload an older version.

**For example:**

```ssh
# Setup
git config git-ftp.url "ftp://ftp.example.net:21/public_html"
git config git-ftp.user "ftp-user"
git config git-ftp.password "secr3t"

# Upload all files
git ftp init

# Or if the files are already there
git ftp catchup

# Work and deploy
echo "new content" >> index.txt
git commit index.txt -m "Add new content"
git ftp push
# 1 file to sync:
# [1 of 1] Buffered for upload 'index.txt'.
# Uploading ...
# Last deployment changed to ded01b27e5c785fb251150805308d3d0f8117387.
```

## Installation

There are lot of way you can install git-ftp:

1. Windows
2. Mac

## Windows

There are at least two ways to install git-ftp on Windows.

* Using Git for Windows, former msysgit (recommended)
* Using cygwin

**Git for Windows, former msysgit (recommended)**

Install [Git for Windows](https://git-for-windows.github.io/). It comes with curl installed, but it doesn't support SFTP by default. In order to use SFTP, [download curl](http://curl.haxx.se/download.html)for Windows with SFTP support. Win32 2000/XP MSI or Win64 2000/XP x86_64 MSI is recommended. If you installed curl, then remove `bin/curl.exe` from your Git for Windows installation directory. It will fall back to the newly installed version.

Finally, open the Git Bash which is located in `C:\Program Files (x86)\Git` by default.

```ssh
curl https://raw.githubusercontent.com/git-ftp/git-ftp/master/git-ftp > /bin/git-ftp
chmod 755 /bin/git-ftp
```

*Note: the* `*/bin*` *directory is an alias. By default this is the same as* `*C:\Program Files (x86)\Git\usr\bin*`*.*

**cygwin**

Install cygwin and install the package 'curl'. Then open the cygwin console and install Git-ftp with the following commands:

```ssh
curl https://raw.githubusercontent.com/git-ftp/git-ftp/master/git-ftp > /bin/git-ftp
chmod 755 /bin/git-ftp
```

**Git for Windows and cygwin both installed**

If you have both Git for Windows and cygwin installed on Windows and want to use Git for Windows for Git commands, you may get an error "No such file or directory" for a path starting with "/cygdrive/", for example:

```ssh
creating `/cygdrive/c/TEMP/git-ftp-m7GH/delete_tmp': No such file or directory
```

The problem is that Git-ftp use commands from both Git for Windows and cygwin directories. But by default, cygwin is configured to start paths with the prefix "/cygdrive" while Git for Windows starts paths with "/". To fix the problem, open file "\etc\fstab" (e.g. "c:\cygwin\etc\fstab") and change parameter "/cygwin/" to "/", for example:

```ssh
# This is default:
none /cygdrive/ cygdrive binary,posix=0,user 0 0
```

change to:

```ssh
# This is changed:
none / cygdrive binary,posix=0,user 0 0
```

After this, close all console windows and try again.

### MacOS

First, ensure you have installed Xcode and command line tools. Command line tools can be download at [https://developer.apple.com/download/more/](https://developer.apple.com/download/more/) or via command:

```ssh
xcode-select --install
```

Using homebrew:

```ssh
brew install git
brew install curl --with-ssl --with-libssh2
brew install git-ftp
```

## Limitations

* Windows and OS X: I am very limited in testing on Windows and OS X. Thanks for helping me out fixing bugs on these platforms.

* git-ftp as deployment tool: git-ftp was not designed as centralised deployment tool. While a commit is being pushed and uploaded to the FTP server, all files belonging to that revision must remain untouched until git-ftp has successfully finished the upload. Otherwise, the contents of the uploaded file will not match the contents of the file referenced in the commit.