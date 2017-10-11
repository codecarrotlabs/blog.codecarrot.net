---
layout: post
author: yashumittal
title: 9 security tips to protect your website from hackers
date: 2017-10-11 20:20:00
categories: tips
tags: tips security privacy tools hackers tricks tips protect
description: Pro advice for optimizing your website security and avoiding hacking disasters. You may not think your site has anything worth being hacked for, but websites are compromised all the time.
image: http://blog.codecarrot.net/images/siarhei-horbach-267470.jpg
---

You may not think your site has anything worth being hacked for, but websites are compromised all the time. The majority of website security breaches are not to steal your data or deface your website, but instead attempts to use your server as an email relay for spam, or to setup a temporary web server, normally to serve files of an illegal nature. Other very common ways to abuse compromised machines include using your servers as part of a botnet, or to mine for Bitcoins. You could even be hit by ransomware.

Hacking is regularly performed by automated scripts written to scour the Internet in an attempt to exploit known website security issues in software. Here are our top 10 tips to help keep you and your site safe online.

## 01. Keep software up to date

It may seem obvious, but ensuring you keep all software up to date is vital in keeping your site secure. This applies to both the server operating system and any software you may be running on your website such as a CMS or forum. When website security holes are found in software, hackers are quick to attempt to abuse them.

If you are using a managed hosting solution then you don't need to worry so much about applying security updates for the operating system as the hosting company should take care of this.

If you are using third-party software on your website such as a CMS or forum, you should ensure you are quick to apply any security patches. Most vendors have a mailing list or RSS feed detailing any website security issues. WordPress, Umbraco and many other CMSes notify you of available system updates when you log in.

Many developers use tools like Composer, npm, or RubyGems to manage their software dependencies, and security vulnerabilities appearing in a package you depend but aren't paying any attention to on is one of the easiest ways to get caught out. Ensure you keep your dependencies up to date, and use tools like Gemnasium to get automatic notifications when a vulnerability is announced in one of your components.

## 02. SQL injection

SQL injection attacks are when an attacker uses a web form field or URL parameter to gain access to or manipulate your database. When you use standard Transact SQL it is easy to unknowingly insert rogue code into your query that could be used to change tables, get information and delete data. You can easily prevent this by always using parameterised queries, most web languages have this feature and it is easy to implement.

Consider this query:

```sql
"SELECT * FROM table WHERE column = '" + parameter + "';"
```
If an attacker changed the URL parameter to pass in ' or '1'='1 this will cause the query to look like this:

```sql
"SELECT * FROM table WHERE column = '' OR '1'='1';"
```

Since '1' is equal to '1' this will allow the attacker to add an additional query to the end of the SQL statement which will also be executed.

You could fix this query by explicitly parameterising it. For example, if you're using MySQLi in PHP this should become:

```sql
$stmt = $pdo->prepare('SELECT * FROM table WHERE column = :value');
$stmt->execute(array('value' => $parameter));
```

## 03. XSS

Cross-site scripting (XSS) attacks inject malicious JavaScript into your pages, which then runs in the browsers of your users, and can change page content, or steal information to send back to the attacker. For example, if you show comments on a page without validation, then an attacker might submit comments containing script tags and JavaScript, which could run in every other user's browser and steal their login cookie, allowing the attack to take control of the account of every user who viewed the comment. You need to ensure that users cannot inject active JavaScript content into your pages.

This is a particular concern in modern web applications, where pages are now built primarily from user content, and which in many cases generate HTML that's then also interpreted by front-end frameworks like Angular and Ember. These frameworks provide many XSS protections, but mixing server and client rendering creates new and more complicated attack avenues too: not only is injecting JavaScript into the HTML effective, but you can also inject content that will run code by inserting Angular directives, or using Ember helpers.

The key here is to focus on how your user-generated content could escape the bounds you expect and be interpreted by the browser as something other that what you intended. This is similar to defending against SQL injection. When dynamically generating HTML, use functions which explicitly make the changes you're looking for (e.g. use element.setAttribute and element.textContent, which will be automatically escaped by the browser, rather than setting element.innerHTML by hand), or use functions in your templating tool that automatically do appropriate escaping, rather than concatenating strings or setting raw HTML content.

Another powerful tool in the XSS defender's toolbox is Content Security Policy (CSP). CSP is a header your server can return which tells the browser to limit how and what JavaScript is executed in the page, for example to disallow running of any scripts not hosted on your domain, disallow inline JavaScript, or disable eval(). Mozilla have an excellent guide with some example configurations. This makes it harder for an attacker's scripts to work, even if they can get them into your page.

## 04. Error messages

Be careful with how much information you give away in your error messages. Provide only minimal errors to your users, to ensure they don't leak secrets present on your server (e.g. API keys or database passwords). Don't provide full exception details either, as these can make complex attacks like SQL injection far easier. Keep detailed errors in your server logs, and show users only the information they need.

## 05. Server side validation/form validation

Validation should always be done both on the browser and server side. The browser can catch simple failures like mandatory fields that are empty and when you enter text into a numbers only field. These can however be bypassed, and you should make sure you check for these validation and deeper validation server side as failing to do so could lead to malicious code or scripting code being inserted into the database or could cause undesirable results in your website.

## 06. Passwords

Everyone knows they should use complex passwords, but that doesn’t mean they always do. It is crucial to use strong passwords to your server and website admin area, but equally also important to insist on good password practices for your users to protect the security of their accounts.

As much as users may not like it, enforcing password requirements such as a minimum of around eight characters, including an uppercase letter and number will help to protect their information in the long run.

Passwords should always be stored as encrypted values, preferably using a one way hashing algorithm such as SHA. Using this method means when you are authenticating users you are only ever comparing encrypted values. For extra website security it is a good idea to salt the passwords, using a new salt per password.

In the event of someone hacking in and stealing your passwords, using hashed passwords could help damage limitation, as decrypting them is not possible. The best someone can do is a dictionary attack or brute force attack, essentially guessing every combination until it finds a match. When using salted passwords the process of cracking a large number of passwords is even slower as every guess has to be hashed separately for every salt + password which is computationally very expensive.

Thankfully, many CMSes provide user management out of the box with a lot of these website security features built in, although some configuration or extra modules might be required to use salted passwords (pre Drupal 7) or to set the minimum password strength. If you are using .NET then it's worth using membership providers as they are very configurable, provide inbuilt website security and include readymade controls for login and password reset.

## 07. File uploads

Allowing users to upload files to your website can be a big website security risk, even if it’s simply to change their avatar. The risk is that any file uploaded however innocent it may look, could contain a script that when executed on your server completely opens up your website.

If you have a file upload form then you need to treat all files with great suspicion. If you are allowing users to upload images, you cannot rely on the file extension or the mime type to verify that the file is an image as these can easily be faked. Even opening the file and reading the header, or using functions to check the image size are not full proof. Most images formats allow storing a comment section which could contain PHP code that could be executed by the server.

So what can you do to prevent this? Ultimately you want to stop users from being able to execute any file they upload. By default web servers won't attempt to execute files with image extensions, but it isn't recommended to rely solely on checking the file extension as a file with the name image.jpg.php has been known to get through.

Some options are to rename the file on upload to ensure the correct file extension, or to change the file permissions, for example, chmod 0666 so it can't be executed. If using `*nix` you could create a [.htaccess](/how-to-remove-php-html-htm-extensions-with-htaccess/) file (see below) that will only allow access to set files preventing the double extension attack mentioned earlier.

```sql
deny from all
    <Files ~ "^\w+\.(gif|jpe?g|png)$">
    order deny,allow
    allow from all
    </Files>
```

Ultimately, the recommended solution is to prevent direct access to uploaded files all together. This way, any files uploaded to your website are stored in a folder outside of the webroot or in the database as a blob. If your files are not directly accessible you will need to create a script to fetch the files from the private folder (or an HTTP handler in .NET) and deliver them to the browser. Image tags support an src attribute that is not a direct URL to an image, so your src attribute can point to your file delivery script providing you set the correct content type in the HTTP header. For example:

```php
<img src="/imageDelivery.php?id=1234" />

<?php
  // imageDelivery.php

  // Fetch image filename from database based on $_GET["id"]
  ...

  // Deliver image to browser
   Header('Content-Type: image/gif');
  readfile('images/'.$fileName);       
?>
```

Most hosting providers deal with the server configuration for you, but if you are hosting your website on your own server then there are few things you will want to check.

Ensure you have a firewall setup, and are blocking all non essential ports. If possible setting up a DMZ (Demilitarised Zone) only allowing access to port 80 and 443 from the outside world. Although this might not be possible if you don't have access to your server from an internal network as you would need to open up ports to allow uploading files and to remotely log in to your server over SSH or RDP.

If you are allowing files to be uploaded from the Internet only use secure transport methods to your server such as SFTP or SSH.

If possible have your database running on a different server to that of your web server. Doing this means the database server cannot be accessed directly from the outside world, only your web server can access it, minimising the risk of your data being exposed.

Finally, don't forget about restricting physical access to your server.

## 08. HTTPS

HTTPS is a protocol used to provide security over the Internet. HTTPS guarantees to users that they're talking to the server they expect, and that nobody else can intercept or change the content they're seeing in transit.

If you have anything that your users might want private, it's highly advisable to use only HTTPS to deliver it. That of course means credit card and login pages (and the URLs they submit to) but typically far more of your site too. A login form will often set a cookie for example, which is sent with every other request to your site that a logged in user makes, and is used to authenticate those requests. An attacker stealing this would be able to perfectly imitate a user and take over their login session. To defeat these kind of attacks, you almost always want to use HTTPS for your entire site.

That's no longer as tricky or expensive as it once was though. Let's Encrypt provides totally free and automated certificates, which you'll need to enable HTTPS, and there are existing community tools available for a wide range of common platforms and frameworks to automatically set this up for you.

Notably Google have announced that they will boost you up in the search rankings if you use HTTPS, giving this an SEO benefit too. There's a stick to go with that carrot though: Chrome and other browsers are planning to put bigger and bigger warnings on every site that doesn't do this, starting from January 2017. Insecure HTTP is on its way out, and now's the time to upgrade.

Already using HTTPS everywhere? Go further and look at setting up HTTP Strict Transport Security (HSTS), an easy header you can add to your server responses to disallow insecure HTTP for your entire domain.

## 09. Website security tools

Once you think you have done all you can then it's time to test your website security. The most effective way of doing this is via the use of some website security tools, often referred to as penetration testing or pen testing for short.

There are many commercial and free products to assist you with this. They work on a similar basis to scripts hackers will use in that they test all know exploits and attempt to compromise your site using some of the previous mentioned methods such as SQL injection.

Some free tools that are worth looking at:

* Netsparker (Free community edition and trial version available). Good for testing SQL injection and XSS
* OpenVAS. Claims to be the most advanced open source security scanner. Good for testing known vulnerabilities, currently scans over 25,000. But it can be difficult to setup and requires a * OpenVAS server to be installed which only runs on `*nix`. OpenVAS is fork of a Nessus before it became a closed-source commercial product.
* SecurityHeaders.io (free online check). A tool to quickly report which security headers mentioned above (such as CSP and HSTS) a domain has enabled and correctly configured.
* Xenotix XSS Exploit Framework A tool from OWASP (Open Web Application Security Project) that includes a huge selection of XSS attack examples, which you can run to quickly confirm whether your site's inputs are vulnerable in Chrome, Firefox and IE.

The results from automated tests can be daunting, as they present a wealth of potential issues. The important thing is to focus on the critical issues first. Each issue reported normally comes with a good explanation of the potential vulnerability. You will probably find that some of the medium/low issues aren't a concern for your site.

If you wish to take things a step further then there are some further steps you can take to manually try to compromise your site by altering POST/GET values. A debugging proxy can assist you here as it allows you to intercept the values of an HTTP request between your browser and the server. A popular freeware application called Fiddler is a good starting point.

So what should you be trying to alter on the request? If you have pages which should only be visible to a logged in user then I would try changing URL parameters such as user id, or cookie values in an attempt to view details of another user. Another area worth testing are forms, changing the POST values to attempt to submit code to perform XSS or to upload a server side script.

Hopefully these tips will help keep your site and information safe. Thankfully most CMSes have a lot of inbuilt website security features, but it is a still a good idea to have knowledge of the most common security exploits so you can ensure you are covered.

There are also some helpful modules available for CMSes to check your installation for common security flaws such as Security Review for Drupal and WP Security Scan for WordPress.
