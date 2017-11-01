---
layout: post
author: yashumittal
title: Hosting a Ruby on Rails App - DevOps Solutions Comparison - AWS, Google Cloud Platform, Microsoft Azure, Heroku and Digital Ocean
date: 2017-11-01 15:21:00
categories: code
tags: coding aws google-cloud microsoft-azure heroku digital-ocean devops
description: Choosing between dozens of excellent hosting providers for Ruby on Rails app might not be easy. With our comparison, it won’t seem so hard anymore.
image: //blog.codecarrot.net/images/pexels-photo-265152.jpeg
---

At some point, you will have to decide where to host your amazing RoR application. Choosing between dozens of excellent hosting providers might not be so easy. Choosing each provider will have its own trade-offs in terms of price, deployment and configuration flexibility, and scalability to name a few. To make your choice easier, we have compared eight major RoR hosting providers. Depending on your application requirements and budget, you can make the right choice using our description of key strengths and weaknesses of these hosting providers.

## 1. AWS Amazon

Amazon Web Services (AWS) support the automation of a RoR application deployment via Amazon Elastic Beanstalk, a service that manages and automatically handles capacity provisioning, load balancing, application dependencies, scaling, and health monitoring. The key prerequisites for launching your RoR application are running a virtual EC2 instance and having S3 disc storage. Amazon allows you to select the most affordable options (e.g. t2.micro with one CPU core and 0.5 GB of memory) and scale your application later. After you set up your cloud environment, you can automatically configure and deploy your RoR app using Amazon Elastic Beanstalk which comes for free. As an additional benefit, if you are a new user, you may be eligible for a one-year use of free-tier AWS services including instances, storage, elastic IPs, and more.

### Pros

* a very stable and scalable platform
* a one-year provision of free-tier services
* excellent support for RubyGems

### Cons

* requires a good knowledge of Linux/Windows administration and DevOps
* you should be cautious when relying on Amazon vendor standards and solutions such as S3 and Lambda, because it may lead to a vendor lock-in, and it might be difficult for you to move away to another hosting service.

## 2. Google Cloud Platform

Google offers three options for deploying and running your RoR applications on the Google Cloud Platform. If you want to have full control over the underlying virtual machines, you can opt for a Google App Engine, a Google cloud platform for the development and hosting of web applications. Google App Engine is accessible via free-tier and comes with pre-installed RubyGems, system libraries, custom Docker runtimes, and other useful tools for Rapid Application Development (RAD) with RoR. Using Google App Engine, you will be charged for network traffic, storage, and search queries.

The second alternative is deploying your RoR application with the standard Compute Engine similar to Amazon EC2 instances. It is essentially the same as using the IaaS (Infrastructure-as-a-service) model, in which you pay for computing power (CPUs) and storage and manually deploy your Ruby environment and application via standard development tools. This option has fewer automated features and requires deeper knowledge of the underlying Linux/Windows systems and tools for remote management of your RoR application (e.g. SSH).

Finally, Google Cloud Platform allows designing Ruby micro-services deployed via Google Container Service. This option is especially beneficial if you are looking to develop a complex application with a loosely coupled microservices architecture.

### Pros

* flexible pay-as-you-go model and easy scalability
* supports several RoR deployment options
* one-year provision of free-tier services

### Cons

* similarly to Amazon AWS, vendor lock-in might be a problem when using Google Cloud Platform
* once you leave the free tier, Google Cloud can get pretty expensive, especially if your application experiences traffic spikes.

## 3. Microsoft Azure

Microsoft Azure is Microsoft’s cloud platform that lets developers rapidly build, deploy, and administer web applications built with RoR. To deploy a RoR app on Microsoft Azure, you should launch a Windows or Linux virtual machine pretty much the same way you would do in Google Cloud Platform or Amazon AWS. Microsoft Azure supports multiple OS images and instance types among which you can find the ones that fit your application’s requirements. The platform is highly configurable and flexible: you can configure ports, DNS, and other network features via an easy-to-use interface. Once your VM is up and running, you can easily upload your RoR code via SSH or any FTP client and launch it on your Azure’s server.

### Pros

* Azura has an excellent free plan that supports up to 10 apps on your virtual servers, 1 GB of disc space, FTP, security scanning, and other features.
* It offers high availability (up to 99,9%) and easy scalability including the support for auto-scaling.

### Cons

* You can’t use Microsoft Azure as a PaaS for your RoR application. This implies that you have to manually configure the RoR environment and upload your application via SSH or FTP, which requires a good expertise in Linux/Window system administration.
* RoR deployments can be too slow, and it there’s no way to deploy your RoR application to an Azure cloud service from a Mac.

## 4. Heroku

Being a “full service” PaaS (Platform-as-a-Service) solution, Heroku is a great choice for teams who do not wish or need to administer their own infrastructure (e.g. virtual machines, servers, hard drives etc.). Unlike Amazon AWS or Google Cloud Platform, Heroku ships all computing services (vCPUs, hard drives, etc.) in bundles called ‘dynos’. This means you don’t have to separately launch hard drives and virtual instances – everything required for your RoR application is provided by default.

In addition, Heroku has flexible pricing options. If you want your application running 24/7, you can opt for a “hobby” account priced at $7 per month. If your application is busy, you may want accounts with more “dynos” that are charged from $25 to $500 per dyno/month. After the account is launched, you can upload your RoR application from Git and deploy it in just 30 seconds. Since Heroku was purpose-built for deploying Rails apps, it’s not surprising how great the platform is optimized for Rails development.

### Pros

* Heroku is optimized for quick and efficient deployment of your RoR applications. Since Heroku is a PaaS system, you don’t have to deal with the underlying infrastructure and system configurations – everything you need to kick-start your RoR app is provided out-of-the-box.
* There are no bandwidth limitations with Heroku. Therefore, you can quickly scale your app if the traffic increases knowing that Heroku won’t shut down your server and overcharge.

### Cons

* With Heroku, you don’t have a full access to lower-level infrastructure (it’s a PaaS). This may be a problem for companies seeking to configure their virtual server environment, OS, firewalls, load balancing, network, and other deep-level system architectures.
* Service charges tend to rise dramatically once you decide to handle more traffic.

## 5. Digital Ocean

Digital Ocean is a provider of Virtual Private Servers (VPS) designed as Droplets that offer the right amount of RAM, CPU, and local storage resources in a single bundle. This means you don’t need to launch different services (hard drives, instances) separately. The most basic Droplet will cost you $5 per month and will include 512MB RAM, 1 vCPU, 1TB traffic, and 20 Gb SSD. Unlike Amazon AWS or Google Cloud Platform, Digital Ocean does not provide a free-tier option for its hosted RoR solutions. Also, earlier you had an option to deploy your RoR environment as a one-click installation. This feature was removed recently. Now, to install your RoR on the Droplet, you can use command-line tools like rbenv or RVM (Ruby Version Manager) on Ubuntu.

### Pros

* Digital Ocean is easier to manage than IaaS platforms, e.g. Amazon AWS. All the necessary services (e.g. storage, computing) are provided in one bundle at a fixed price.
* It is easier to migrate your RoR application from Digital Ocean because their model does not lock customers into their cloud services.

### Cons

* Does not support free tier.
* The platform imposes monthly bandwidth limits, so you’ll have to upgrade your system to a new plan if your app experiences sporadic traffic spikes.

## 6. Other Alternatives

Besides the large hosting companies mentioned above, there are a vast number of small VPS providers such as OVH, Aruba cloud, and Oktawave.

With OVH, you can launch your RoR application on a VPS (Virtual Private Server) or Dedicated Server depending on your application’s workload. In addition, you can manage your own private, public, or hybrid clouds, and have access to low-level system configurations and settings. OVH guarantees an excellent SLA and performance, since it’s one of the few companies that does not outsource its data center management to third parties.

If you want a cheap Cloud VPS solution for your RoR application, Aruba Cloud offers a  $1/month plan that includes SSD disks, one IP address, and up to 25 TB/month data transfer. This is an excellent option for hosting lightweight RoR applications which can be, however, easily scaled with Aruba’s Cloud Pro and Private Cloud Plans.

Finally, a Polish cloud provider Oktawave offers a great way to autoscale your RoR applications. Once your RoR application is up and running, Oktawave Autoscaler will track the traffic dynamics and automatically change the class of your instance. In conjunction will the load balancing, Oktawave will ensure the stable operation of your RoR application at any scale.

## How to choose the right hosting for RoR App?

So, what is the bottom line? If you want a fine-grained control over your RoR deployment, you should opt for IaaS providers such as Google Cloud Platform, Amazon AWS or Microsoft Azure which are all stable and scalable solutions. However, the trade-off is that using these hosting providers will require hiring a DevOps specialist for managing environment, containerization and deployment, and a team of professional Linux or Windows administrators to configure instances, storage, network, etc.

PaaS solutions, such as Heroku, are a better option if you want your RoR to go up and running as soon as possible. Being scalable and cheap, Heroku makes it easy to launch RoR applications by uploading them from your Git repository. The trade-off is that with such providers as Heroku you have less control over the underlying infrastructure.

Finally, Digital Ocean is excellent if you want to retain a higher level of control over your virtual servers, but do not want to separately manage different cloud services. Digital Ocean solves this problem for you by offering them all in bundles called Droplets.

When choosing between those hosting providers, you should also be thinking about potential traffic spikes in your application. For example, if you experience a traffic increase in the Digital Ocean, you will need to switch to a more costly Droplet, since Digital Ocean imposes traffic limitations in each plan. If you are using Amazon, Google, or Microsoft, you will be automatically billed monthly for additional traffic flow. However, in the case of IaaS providers, you should be in full control of the deployed services and their price to avoid unexpected charges. Fortunately, to adapt to rules and processes of IaaS hosting providers (Amazon AWS, Microsoft Azure, and Google Cloud Platform) you can opt for a one-year free tier to experiment with your RoR application. No matter which hosting option you select, your team should be extremely competent and experienced in the pricing of services and inner workings of underlying technologies to make your RoR application deployment efficient.