---
layout: post
author: yashumittal
title: How do Python and Ruby compare?
date: 2017-10-11 14:39:00
categories: code
tags: dev coding python ruby ruby-on-rails
description: They're both fast. They're both powerful. They're both loved by programmers. But what sets the Ruby and Python scripting languages apart? Why are developers loyal to one or the other? And which is best for which type of application?
image: python_vs_ruby.gif
---

**[Fabio Akita Answer](//www.quora.com/profile/Fabio-Akita)**

Technically they "feel" similar, but in practice they are worlds apart. Both previous answers have flaws. For example, Python does compile from .py to .pyc. But because there is no .rbc it doesn't mean any disadvantages.

Internally, since Ruby 1.9, every .rb source code is converted to byte-codes and then executed in runtime. It's just that Ruby doesn't cache it down in files. When we say "interpreted" it feels like every time we need something from a source file, it's constantly reopened and reinterpreted, which is not true for both. Once loaded it's executed within the virtual machines. ([Ruby vs Python vs Java bytecode concept](//www.ruby-forum.com/topic/4403013))

In terms of garbage collection, Python uses Reference Counting backed by a 3-stage generational collector (which helps finding circular references, among other things). Ruby uses a Bitmap Marking with Lazy Sweep and a 2-stage generational collector (which will become 3-stages in Ruby 2.2). Both are not nearly in the same league of something like Java's G1GC, but Ruby's not so far behind after Ruby 2.1. (Generational GC in Python and Ruby)

Ruby indeed has its roots in Perl (that's the reason we have "perlisms" such as =~ for regex matching), but we don't use most of them nowadays. It also has inspirations in Python's terseness. On the other hand it's heavily influenced by Smalltalk (which is why objects feel really first class, including protocol based object compatibility and message passing). Finally Ruby also borrowed a few aspects of Lisp in its function-like approach and heavy usage of blocks (for stuff such as lazy enumerators, in which I can enumerate a collection with an infinite number of items without blocking, and yes, we can have Infinite, it's even a class in Ruby ;-).

In terms of package management, Pythonists will disagree but I have to say that the mature combination of Rubygems and Bundler gives it a larger edge. Dependency management is a solved problem in the Ruby community nowadays and with a very slick design to it. PIP is evolving and coming strong (even though NPM is evolving much faster, although lacking a mature library community like Python's), but it lacks some of the nicer features of Bundler.

Speaking of which, it's good that Python has virtualenv to solve having multiple versions of Python in the same environment. It's akin to what Rbenv does for Ruby. On the other hand, there's an edge for Ruby. RVM is still more feature complete.

In terms of evolution of the language, Ruby was really the true underdog. It was buggy, incomplete, very very slow. But starting from 1.8.6 it picked up speed really fast. We are in Ruby 2.1.2 and the entire community is there already. We never had anything like the Python 2 vs Python 3 situation.

Also because Rails was truly awful around version 1.0 with very sloppy support in terms of system administration and deployment, we came a long way. With web servers such as Puma, Unicorn, Thin, Passenger, Rainbows, we can have normal blocking web applications and web sockets or asynchronous applications with Thin, Puma and Rainbows. Rails 4 (which still unmatched features such as the Asset Pipeline) is truly state of the art in this category right now. In terms of async, we do have Eventmachine and Goliath but neither approached the maturity of Tornado or Twisted in Python, and both lagged behind Node.js nowadays.

Ruby had Capistrano. Python came with Fabric. Ruby went all the way to Chef and Puppet. Python came up with Ansible. This arena represents a very good fight. Rubysts use Ansible as well, we don't shy away from tools that didn't start in our own ecosystem.

Rails was really the catalyst and it represents the unity of the community. In 10 years we never had a fragmented community. Tools and libraries are usually cross-compatible between Rails, Sinatra, and other frameworks. Even though Python started with the WSGI initiative, Rubysts steered faster towards it's equivalent, Rack. And it's now a default standard.

In terms of practice, we adopted tools such as RSpec for tests (even though we use a lot of minitest as well). Task management with Rake (even though we also have Thor). By the way, we really paved the way for what proper testing tools should be. Unit all the way to acceptance. We inherited that from the cutting-edge side of the Java community.

Never mind syntax differences. There are many, they are not alike at all. You can't code Ruby the same way you code Python. There are different conventions, there are different ways to organize code, there are different tricks of the trade that only practice will show you. Those differences do not represent advantages or disadvantages, it's the same thing to say that motorcycle mechanics are different from car mechanics. More important: the ecosystems work very differently.

Python has more roots amidst academics, engineers, system administrators. Ruby had to start with entrepreneurship, as it wasn't accepted anywhere else. And now it's permeating other areas. Which is why you will find Github as one of the most successful developer-based startups ever and the largest repository of open source code in the world, where you will find many things, including Python tools. We do have to remember Mercurial and Bazaar, Git alternatives in Python, but neither achieved it's popularity. (Update: just because someone complained, let me clarify that Git was created by Linus Torvalds and it is all C, never I have intended to feel like Git is made in Ruby. I did say however, that Rubyists are fast to pick up best of breed).

As you may have realized, I'm a rubyst and of course my point of view is very biased towards Ruby. The difference is that I am not trying to mask it away. Python 2 is still faster than Ruby 2.1. Python 3, I'm not so sure, but it's still faster. The ecosystems are very different. When you choose Python or Ruby, it's not a simple syntax difference (oh, indentation), it goes much deeper than that.

***

**[Luciano Ramalho Answer](//www.quora.com/profile/Luciano-Ramalho)**

Fabio Akita's answer is excellent, and I will not try to emulate it in depth or breadth. But I will add a couple things from the point of view of a Python user since 1998, who also loves Ruby.

Semantically the languages are very similar, there is no other mainstream language that is closer to Python than Ruby and vice-versa, although their respective communities prefer to avoid this reality and love to stress the differences.

The syntax of Python is much simpler -- you may even say "poorer". But this makes it more suitable for beginners who will see less variation across real life code bases, and perhaps will find it a little harder to write obfuscated code by accident. On the other hand, Ruby's richer syntax makes is suitable to host DSLs -- Domain Specific Languages -- language subsets specialized in some niche kind or programming.

Talking about niches and mainstream languages, I believe the biggest advantage of Python over Ruby in 2014 is its much wider deployment. When I mentioned "beginners" before, that includes not only beginning software developers but also all kinds of professionals from other areas who need to program. Being friendly to beginners allowed Python to spread and in some cases dominate several areas where the presence of Ruby is much smaller.

Python is the de-facto standard scripting language in computer graphics, used everywhere from production pipelines to tool automation in the largest CGI companies like ILM, Disney Animation, Pixar, Weta Digital and embedded in professional software such as Autodesk Maya and NUKE.

Python is now essential for professional system administration, as a replacement for shell scripting in more complex tasks and as the basis of huge projects like OpenStack and OpenShift. Every important GNU/Linux comes with Python pre-installed, since many admin tools and end-user apps are written in Python. The best jobs for system administration now require Python skills.

Python is now mainstream in science and engineering, thanks to [SciPy.org](//www.scipy.org/) (which makes a huge collection of code in C, C++ and FORTRAN easily accessible to Python scripts) and the [IPython Notebook](//ipython.org/notebook.html) project (which you must see!). Note that Python established itself as a programming language for advanced research before this happened: Python is Now the Most Popular Introductory Teaching Language at Top U.S. Universities (Communications of the ACM). So it is likely the importance of Python in academia will grow even more.

By the way, the same toolset that makes Python popular in science and engineering also makes it increasingly employed in finance, with the growth of quantitative analysis. See this Stack Exchange question where Python is mentioned by several respondents: [What programming languages are most commonly used in quantitative finance?](//quant.stackexchange.com/questions/306/what-programming-languages-are-most-commonly-used-in-quantitative-finance). There are also several books about Python in finances available.

The only major area where Ruby and Python compete in equal footing is server-side web development, where they have similar penetration.

***

**[Ben Neely Answer](//www.quora.com/profile/Ben-Neely-3)**

Ruby and Python are both programming languages that are popular for being easy to learn, powerful, and open-source with many great features in common.

![Python and ruby has same algorithms](//blog.codecarrot.net/images/main-qimg-24067acdc9023a72fb4dc92140c717d4-c.jpg)

Ruby was created in 1999, in fact because the author didn’t like Python. The *[Ruby Language FAQ](//ruby-doc.org/docs/ruby-doc-bundle/FAQ/FAQ.html)* describes his thinking:

I knew Python then. But I didn't like it, because I didn't think it was a true object-oriented language---OO features appeared to be add-on to the language. As a language manic and OO fan for 15 years, I really wanted a genuine object-oriented, easy-to-use scripting language. I looked for, but couldn't find one.

So, I decided to make it. It took several months to make the interpreter run. I put it the features I love to have in my language, such as iterators, exception handling, garbage collection.

Like Ruby, Python has come a long way. Python now boasts many of the same features as Ruby. The Python Software Foundation FAQ describes Python:

Python is an interpreted, interactive, object-oriented programming language. It incorporates modules, exceptions, dynamic typing, very high level dynamic data types, and classes. Python combines remarkable power with very clear syntax.

Both languages are popular and easy to learn when compared to other languages. They look and function very similar. Here’s some sample code from:

**Ruby**

```ruby
letters = ['a', 's', 'd', 'f'].sort!
# letters is ['a', 'd', 'f', 's']
```

**Python**

```python
letters = ['a', 's', 'd', 'f']
letters.sort()
# letters is ['a', 'd', 'f', 's']
```

Both languages are open source, object-oriented, interpreted, and statically typed with almost identical features:

![features of python and ruby language](//blog.codecarrot.net/images/main-qimg-ebde4be01b518c463f42d48569b552a4-c.jpg)

Both also have strong communities of teachers and open-source developers. Ruby has one clear advantage: its community focuses on efficient developer tools that save time by implementing smart defaults and hiding complexity. The Python community is more focused on providing customizable and concise tools that give developers full control over their tools, but come with a steeper learning curve. Ruby’s tools make it simpler for beginners to build complete web applications, while providing the power to customize application functionality. For these reasons, we think that Ruby is the better language to learn with, and that's what we chose to teach as part of our  Full Stack Web Development Track  at Bloc, where I write curriculum

Ultimately, these two languages are similar semantically, but have communities with different philosophies and long-term goals. Ruby is focused on create the most developer friendly programming language with many handy ways for users to accomplish their goals. Python focuses on providing one “pythonic” way to do things and is more widely used for data science applications, and Python frameworks have more advanced statistical analysis and data rendering tools.

***

These are the answers from [quora](//www.quora.com/profile/Yashu-Mittal-7).
