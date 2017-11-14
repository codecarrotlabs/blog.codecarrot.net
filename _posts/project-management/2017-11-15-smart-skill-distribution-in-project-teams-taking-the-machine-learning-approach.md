---
layout: post
author: yashumittal
title: Smart Skill Distribution in Project Teams – Taking the Machine Learning Approach
date: 2017-11-15 15:28:10
categories: project-management
tags: project-management coding project machine-learning skills tools
description: Take advantage of internal data, see that Machine Learning is not so hard, and learn about k-means clustering in this hands-on guide.
image: team-photo-generic-360777-edited.jpeg
---

At CodeCarrot, we’re continuously trying to optimise our internal processes. One of our processes consists in balancing the skills of individual employees when composing project teams, which ranks rather high on the headaches-per-hour scale.

As such, we needed to get smart about it. I conducted a little experiment, taking advantage of our internal People app. The app is essentially a directory of all CodeCarrot employees, containing information on the skills they have, how good they are at them and what projects they are currently working on. I am only playing with data and searching for the right solution. For now.My goal is to:

* Take advantage of the fact that our internal apps store interesting data that can easily be fetched and processed.
* See that Machine Learning is not so hard. It will become easy as pie when you look at my code :)
* Learn about k-means clustering and how to naively postprocess the results of clustering.

## Mission Statement

I will show you how to use the k-means algorithm to cluster all CodeCarrot's tech employees into data-driven teams based on their skills from the People app. We will try not only to use the algorithm, which is based on a gem, obviously, but also learn something from our data and better understand the results that machine learning algorithms produce.

## Dataset

I downloaded the People production database to my localhost and created a simple service object that fetched the users and their skills to save it to CSV.


```rb
require 'csv'

class SaveToCsv
  def initialize filename
    @filename = filename
  end

  def call
    save_to_file
  end

  private

  def save_to_file
    CSV.open(@filename, "wb") do |csv|
      csv << ["user_id", "user_name"] + write_skills
      User.all.technical.active.each do |user|
        puts "Processing #{user.first_name} #{user.last_name}..."
        columns = [user.id, "#{user.first_name} #{user.last_name}"]
        rates = skill_rates(user)

        skills.each do |skill|
          skill_rate = rates.select { |skill_rate| skill_rate[:skill_id] == skill.id }
                            .map { |skill_rate| skill_rate[:content] ? skill_rate[:content].rate : 0 }
          if skill_rate.length
            columns << (skill_rate.first == 1 ? 0 : skill_rate.first)
          else
            columns << "0"
          end
        end
        columns << '\n'
        csv << columns
      end
    end
  end

  def write_skills
    skills.map { |skill| skill.name }
  end

  def skill_rates(user)
    UserSkillRate.where(user: user).includes(:contents).map do |skill_rate|
      { skill_id: skill_rate.skill_id, content: skill_rate.contents.last }
    end
  end

  def skills
    @skills ||= Skill.where(rate_type: 'range').to_a
  end
end
```

Our dataset consists of rows that represent users and columns that represent skills:


| user_id | user_name | Ruby on Rails | Sinatra | Grape | Spree | ... |
| 138 | Yashu Mittal | 3 | 2 | 3 | 0 | ... |
| 90 | Yogesh Metha | 3 | 2 | 2 | 0 | ... |

Our dataset needs to have a digital representation of skill mastery across all columns. I intentionally skipped all boolean skills to avoid the problem of non-unified representation (integers vs. boolean).

## The k-means Algorithm

We are going to use the popular k-means clustering algorithm to cluster CodeCarrot’s employees. I won’t describe how the algorithm works in detail, but you can [read about it here](//en.wikipedia.org/wiki/K-means_clustering). Simply put, k-means works by randomly selecting k points (called centroids, where k is the number of our teams) in an n-dimensional space (where n stands for our skill mastery). After this, each iteration of the algorithm:

* Assigns each employee to the nearest centroid;
* Recalculates the position of each centroid to match the mean position of all employees assigned to this centroid.

At some point in this very simple two-step algorithm, there will be no more change between iterations, which will mean that the employees are clustered.We have to bear in mind that we should always analyse our dataset in terms of the characteristics of machine learning algorithms to understand the results we obtain. K-means has some key points to remember:

* When the number of dimensions is much bigger than the number of clusters, the clusters might be a little bit random (we have 15 teams and over 120 skills – not good);
* K-means clustering works heuristically, and it starts with a random number of centroids, which will yield fresults in each run;
* The algorithm clusters data points in non-equal clusters, which means that outliers will probably be clustered in individual single-datapoint groups; on the other hand, clustering into equally sized groups is NP-hard.

We will try to address these points in next steps.

## Postprocessing Data

To address the problem of having a much bigger number of skills than the number of teams, we can easily get rid of some of the skills we think are not so important for the clustering.

## Clustering

I performed the clustering with the [k-means-clusterer](//github.com/gbuesing/kmeans-clusterer) gem. It turns out that it’s much simpler than you’d think. Check it out in this code below.

```rb
require 'csv'

class ClusterUsers
  def initialize(filename)
    @filename = filename
  end

  def call
    cluster_users    
  end

  private

  attr_reader :data, :labels

  def cluster_users
    @data = []
    @labels = []
    CSV.foreach(@filename, headers: true) do |row|
      labels << row[1]
      data << row[2..(row.length - 1)].map { |rate| rate.to_f }
    end
    k = labels.size / 8
    kmeans = KMeansClusterer.run k, data, labels: labels, runs: 5
    kmeans.clusters
  end

  def render_clusters(clusters)
    clusters.each_with_index do |cluster, index|
      puts "Team #{index}: "
      cluster.sorted_points.map(&:label).each do |name|
        puts "\t#{name}"
      end
      puts "\n"
    end
  end
end
```

## Conclusions from Clustering

What can we learn from automated data-driven clustering of our employees’ skills? Well, there are multiple situations in which you might take advantage of the results. Think about using these clusters to make better matches when building teams for the upcoming projects. It could also be very interesting to apply labels based on an employee’s role in the company (e.g. junior, regular and senior developer) to check if there are some patterns, for example, all senior employees should be in one cluster. If you find some regular employees there, it might be a good time to promote them – data don’t lie!That said, we should also take a few things into consideration when trying to make decisions based on data. First of all, not everyone understands the skill representation in the same way. I am sure that a lot of people have some skills ranked too high, while others have them ranked too low. Also, if we represent skills on a scale from 0 to 4, going from 3 to 4 is much harder than going from 0 to 1. This makes the differences not equal in reality, but we must assume they are when we calculate distances in a Euclidean space.

Machine learning and data science are absolutely amazing and will definitely shape the future of every business in the world. We need to bear in mind, though, that to make smart decisions we need to understand the foundations and origins of our data, know its limits and take a step back when analysing the results. Curious about what it's like to be a developer at CodeCarrot and work on projects like this one? Find out [here](/recruitment-infopack-for-developers).