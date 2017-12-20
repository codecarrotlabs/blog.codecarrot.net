---
layout: post
author: yashumittal
title: How to force HTTPS using .htaccess file in cPanel
date: 2017-10-25 02:52:00 +0530
categories: tips
tags: tips https cpanel
description: How to force HTTPS using .htaccess file in cPanel - Once a SSL certificate is installed and a site can be reached via https
image: //cdn.codecarrot.net/images/https-lock.png
---

Once a SSL certificate is installed and a site can be reached via **https://** appropriately, visitors should be able to access the whole site or key pages via **https://** automatically. In other words, by typing domain.com in a web-browser, a user should be redirected to https://domain.com to access the site securely.

To accomplish this, a special set of directives called rewrite rules needs to be added to the web-site’s **.htaccess file**, which can be found in the root folder of a specific site in cPanel (e.g. “public_html”). If the file is not shown, please make sure to click on 'Settings' and tick the option 'Show hidden files'. Also, this file can be created if it cannot be located in any way.

## Types of redirects

When it comes to setting up a rewrite rule, it is useful to know that there is a permanent redirection type and a temporary one. Each type is processed by search engines and web-browsers differently and has its own status code, which can be specified in a rewrite rule explicitly:

### Status code 301 (permanent redirect)

**Status code 301 (permanent redirect)** implies that the requested resource has moved to a new location permanently, thus search engines should not take into account the references to a previous location and index a new one. Web-browsers, in turn, will store a new URL in cache, therefore, giving it priority over the initial URL.

![Status code 301](//cdn.codecarrot.net/images/force_https1.png)

### Status code 302 (temporary redirect)

**Status code 302 (temporary redirect)** means that the redirect has been set for a limited period of time. Search engines in this case should honor both locations as equal and the initial one would remain valid. Accordingly, browsers will not cache the new URL and the redirection will be executed every time the initial URL is requested.

![Status code 302](//cdn.codecarrot.net/images/force_https2.png)

**NOTE:** Enabling a 302 redirect for a long period of time can significantly decrease a website’s ranking in search results. In terms of HTTP-HTTPS redirect, all site requests are split between http://domain.com and https://domain.com, since both are indexed by search engines separately. Therefore, in most cases a 301 status code is preferable for HTTP-HTTPS redirects.

We will describe exactly where a status code needs to be specified in the next section.

**Setting a rewrite rule in .htaccess: use cases**

**NOTE:** The directives specified below work under their own syntax. Changing any symbol or character can lead to improper function or failure of the rewrite rule. To keep things clear, we have highlighted those parts, which can be modified, with bold weight (mostly where a certain domain name should be placed).

Let’s take an overview of the most common situations in which a redirection from HTTP to HTTPS can be configured.

**Enabling redirect for all sites in a cPanel account**

To redirect all sites within a cPanel account, one of the following blocks should be added to .htaccess:

```
a. RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
```

This block enables rewriting capabilities, verifies that the initial request does not already have https://, and rewrites the entire requested URL, replacing http:// with https:// (**e.g.**, http://domain.com/subfolder/index.php will be replaced with https://domain.com/subfolder/index.php).

```
b. RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]
```

This block works the same as the previous one, just with the help of a different syntax. It is possible to use either of the above mentioned rewrite rules in order to redirect all sites within a cPanel account.

**Forcing HTTPS for a specific site**

To enable a redirect for a single site, one can specify any of the blocks listed below in .htaccess:

![Enable https using code in .htaccess](//cdn.codecarrot.net/images/enable-https-using-code-in-htaccess.png)

Generally, all of the rule sets above do the same job: checking the port (80 for http, 443 for https), verifying whether a domain name in the initial request is with or without “www.” alias, and rewriting the URL with https://. You may choose which one to implement based on your individual preference.

**Disabling rewrite rule application for a specific site**

If you need to setup a redirect for all sites within Cpanel account except of one or a few, the block of code specified below can be added to .htaccess:

![Disabling rewrite rule application for a specific site](//cdn.codecarrot.net/images/disabling-rewrite-rule-application-for-a-specific-site.png)

The first condition in the block matches the requested URL against the domain name, included to conditional value (the one that should NOT be redirected), and stops rewriting if they match. It is possible to add domain names to the conditional directive, separating them with the `”|”` symbol, or to specify several conditional directives, (see examples in previous section).

**Enabling HTTPS for a specific subfolder**

Sometimes you may need to redirect a certain part of a website located in a specific subfolder, while leaving the rest of the site as-is. To do this, insert the following block to .htaccess:

![Enabling HTTPS for a specific subfolder](//cdn.codecarrot.net/images/enabling-https-for-a-specific-subfolder.png)

This rule is applied if only a specified subfolder is mentioned in the initial request.

**Forcing HTTPS for a specific page**

The rewrite rule for redirecting a specific page is similar to the previous one:

![Forcing HTTPS for a specific page](//cdn.codecarrot.net/images/forcing-https-for-a-specific-page.png)

Only the requested page will be redirected; other site content will remain unaffected.

If the page that needs to be redirected is located in a specific subfolder, the RewriteRule line should be modified as follows:

![Forcing HTTPS for a specific page 2](//cdn.codecarrot.net/images/forcing-https-for-a-specific-page2.png)

(in the above example, “test” is the subfolder in question)

**Setting up redirect for a specific file name, regardless of location**

If you have a number of pages with the same name, located in different subfolders (the example “index.html” is used below), you may enable HTTPS redirect for all of them at once. Do this by applying the ruleset as shown below:

![Setting up redirect for a specific file name, regardless of location](//cdn.codecarrot.net/images/setting-up-redirect-for-a-specific-file-name-regardless-of-location.png)

Only the pages with the file names that match the {REQUEST_FILENAME} parameter value will be redirected to HTTPS.

**How to specify a redirect status code in rewrite rule**

Each rewrite rule ends with so-called “rewrite flag”s (specified in square brackets, e.g. [R,L]). These flags help to control the rewriting process to be performed correctly. To set a redirect with a 301 status code (permanent), you will need to assign this code to the R-flag in brackets by adding “=301”.

![How to specify a redirect status code in rewrite rule](//cdn.codecarrot.net/images/force_https3.png)

**NOTE:** If there is no value specified for the R-flag, a redirection will be executed with a 302 status code by default.
