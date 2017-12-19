---
layout: post
author: yashumittal
title: How to Create a Google Drive Backup of Your WordPress Website
date: 2017-11-16 12:51:00 +0530
categories: tips
tags: tips
description: Keeping an updated backup is one of the most important things you can do for your website. Disaster can hit at any time and having that backup can make the difference of getting your site back to running quickly or not at all. Just as crucial is where you store your backups.
image: //cdn.codecarrot.net/images/shutterstock_234298681-960.jpg
---

Keeping an updated backup is one of the most important things you can do for your website. Disaster can hit at any time and having that backup can make the difference of getting your site back to running quickly or not at all. Just as crucial is where you store your backups. In this article we’ll step through how to perform a Google Drive backup.

Lots of backup solutions allow you to store your backups on your server. Many of them do this by default. Although it is possible to store your backups on your server it’s not a good idea. Servers can crash or get hacked. If your backup is only on your server then you won’t have a backup, which defeats the purpose of a backup in the first place.

A better solution is to store backups to a remote location that can be accessed easily from anywhere with an Internet connection. To be effective though, storing offline needs to be easy. Free doesn’t hurt either. Fortunately you can make and store backups easily, and for free, using Google Drive.

## What is Google Drive

![Google Drive Homepage website](//cdn.codecarrot.net/images/What-is-Google-Drive.png)

Google Drive is Google’s free online storage service where you can store any type of file, including WordPress backup files. The free plan gives you 15 GB of storage and upgrades start at $1.99 per month for 100 GB. 1 TB is $9.99 per month, and 10 TB is $99.99 per month. The free version provides plenty of storage space for most sites.

## Accessing Your Google Drive Account

![Accessing-Your-Google-Drive-Account.png](//cdn.codecarrot.net/images/Accessing-Your-Google-Drive-Account.png)

All that’s required to have access to Google Drive is to have a Google account. To see Google Drive, create or sign in to your Google account and select the square made up of dots in the upper right corner. It will open a window with lots of Google tools and services. *Click the Drive icon*.

![Accessing-Your-Google-Drive-Account-2.png](//cdn.codecarrot.net/images/Accessing-Your-Google-Drive-Account-2.png)

You’ll see the welcome screen. If you’re using a plugin like UpdraftPlus your backups will be stored in a folder in the *My Drive tab*.

In order to store your backups in your Google Drive you’ll need to connect your WordPress website to your Google Drive account. To do this you’ll need a plugin.

## UpdraftPlus

![UpdraftPlus.png](//cdn.codecarrot.net/images/UpdraftPlus.png)

There are several excellent plugins to connect WordPress to your Google Drive account. With over a million active installs, UpdraftPlus is by far the most popular and it’s the one I like the most because Google Drive is included in the free edition. The free edition also includes remote backup to several other storage services.

To install UpdraftPlus, go to Plugins, Add New in the dashboard and search for UpdraftPlus. Click Install and then Activate.

![UpdraftPlus-2.png](//cdn.codecarrot.net/images/UpdraftPlus-2.png)

Once UpdraftPlus is activated you’ll find it has been added to the dashboard under Settings and in the top bar. Click UpdraftPlus Backups and then select the Settings tab. Click Google Drive.

![UpdraftPlus-3.png](//cdn.codecarrot.net/images/UpdraftPlus-3.png)

Under the storage options you’ll see the Google Drive settings. You’ll need your Client ID and Client Secret. To create these, go to the [API Console](//code.google.com/apis/console/). The instructions are provided in the two links (“For longer help…” or “Follow this link…” and create the API. I followed the instructions from the first link.

## Creating Client ID and Client Secret

![Creating-Client-ID-and-Client-Secret.png](//cdn.codecarrot.net/images/Creating-Client-ID-and-Client-Secret.png)

The API Console provides a list of your API projects. At the top of the screen select Create Project.

![Creating-Client-ID-and-Client-Secret-2.png](//cdn.codecarrot.net/images/Creating-Client-ID-and-Client-Secret-2.png)

Enter a name for the project and select Create. Once the project is completed (the notification in the upper right will let you know), click the Google APIs logo to go to the API File Manager.

![Creating-Client-ID-and-Client-Secret-3.png](//cdn.codecarrot.net/images/Creating-Client-ID-and-Client-Secret-3.png)

Here, click on Drive API. Alternately you can search for it and click on it when it comes up.

![Creating-Client-ID-and-Client-Secret-4.png](//cdn.codecarrot.net/images/Creating-Client-ID-and-Client-Secret-4.png)

Click Enable at the top of the screen.

![Creating-Client-ID-and-Client-Secret-5.png](//cdn.codecarrot.net/images/Creating-Client-ID-and-Client-Secret-5.png)

Select Credentials and then choose OAuth content screen. Fill in the fields and click Save.

![Creating-Client-ID-and-Client-Secret-6.png](//cdn.codecarrot.net/images/Creating-Client-ID-and-Client-Secret-6.png)

Once you’ve completed the instructions you’ll be given your Client ID and Client Secret codes. Paste them into the fields. Choose which files to store, and save your settings.

![Creating-Client-ID-and-Client-Secret-7.png](//cdn.codecarrot.net/images/Creating-Client-ID-and-Client-Secret-7.png)

You’ll see a message to authorize access to your Google Drive account. Click on the link. If you’ve completed the steps you’ll get another screen that asked you to authorize the connection. If you get an error, you might have to add the URL that it gives you in the error to the link it provides.

## Backing Up to Google Drive

![Backing-Up-to-Google-Drive.png](//cdn.codecarrot.net/images/Backing-Up-to-Google-Drive.png)

Now it’s time to create the backup. In the UpdraftPlus settings, select the Current Status tab. Here’s where you can make backups manually. You can automate them in the Settings tab. The backup works the same. Click Backup Now.

![Backing-Up-to-Google-Drive-2.png](//cdn.codecarrot.net/images/Backing-Up-to-Google-Drive-2.png)

A modal with open where you can make a few selections. Make sure the option for backup storage is selected and click Backup Now.

![Backing-Up-to-Google-Drive-3.png](//cdn.codecarrot.net/images/Backing-Up-to-Google-Drive-3.png)

The backup will start and show the progress. If your website doesn’t get enough traffic UpdraftPlus won’t have the resources it needs to create the backup. To help get around this and create the example for my test site I only backed up my plugins. Normally I would backup uploads, the database, and other files.

![Backing-Up-to-Google-Drive-4.png](//cdn.codecarrot.net/images/Backing-Up-to-Google-Drive-4.png)

Once it’s completed you’ll see a message that says the backup apparently succeeded.

![Backing-Up-to-Google-Drive-5.png](//cdn.codecarrot.net/images/Backing-Up-to-Google-Drive-5.png)

Selecting Existing Backups shows the backups you’ve created. If it’s stored on the Google Drive you’ll see the Google Drive icon under the date. In this example I have an old backup that’s stored on the server and a new backup (just of plugins) that’s stored on my Google Drive.

![Backing-Up-to-Google-Drive-6.png](//cdn.codecarrot.net/images/Backing-Up-to-Google-Drive-6.png)

To see the see the backups in your Google Drive, go to your Google Drive account and select the UpdraftPlus folder.

![Backing-Up-to-Google-Drive-7.png](//cdn.codecarrot.net/images/Backing-Up-to-Google-Drive-7.png)

Within the folder you’ll see your backups. You’ll notice that I have three backups but I’ve only saved one backup to my Google Drive in the example above. Two of these are from different websites. Multiple sites and backups can be saved in the same folder.

## Restoring from Google Drive

![Restoring-from-Google-Drive.png](//cdn.codecarrot.net/images/Restoring-from-Google-Drive.png)

Restoring a backup from Google Drive is the same process as restoring from your server. Simply select Restore and UpdraftPlus works as normal. The types of files that are available will show in the list and you can choose specific files.

For example, I’ve only backed up my plugins, but I could also backup themes, the database, and uploads.

![Restoring-from-Google-Drive-2.png](//cdn.codecarrot.net/images/Restoring-from-Google-Drive-2.png)

Choose what you want to restore from the list. If I had backed up other files they would appear in this list. Click Restore.

![Restoring-from-Google-Drive-3.png](//cdn.codecarrot.net/images/Restoring-from-Google-Drive-3.png)

UpdraftPlus will retrieve the files. This might take a few seconds or a few minutes. Once the files are processed you’ll have to click Restore again.

![Restoring-from-Google-Drive-4.png](//cdn.codecarrot.net/images/Restoring-from-Google-Drive-4.png)

You’ll see another message that tells you the restore has started. Do not stop the restore or close your browser.

![Restoring-from-Google-Drive-5.png](//cdn.codecarrot.net/images/Restoring-from-Google-Drive-5.png)

When the restore is complete you’ll see a message that shows what was restored.

## Final Thoughts

Google Drive is an excellent choice to store your WordPress backups remotely and UpdraftPlus makes the task easy. As important as recent backups are, and considering that Google Drive and UpdraftPlus automates the task of storing them in a remote location for free, there’s no reason not to have a recent backup.

**We want to hear from you! Do you use Google Drive for your WordPress backups? Let us know about your experience in the comments.**
