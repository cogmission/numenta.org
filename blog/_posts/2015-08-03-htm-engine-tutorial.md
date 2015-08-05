---
author: Matthew Taylor
category: blog
image: /assets/img/blog/2015-08-03/image.png
layout: item
org: Open Source Manager
title: HTM Engine Tutorial
---

Numenta recently open-sourced a bunch of product code at <https://github.com/numenta/numenta-apps>. This includes the code for the products [Grok for IT](http://numenta.com/grok/) and [Grok for Stocks](http://numenta.com/grok-for-stocks/), and it also includes an extremely useful utility for running many anomaly detection models simultaneously called **[HTM Engine](https://github.com/numenta/numenta-apps/tree/master/htmengine)**.

The **HTM Engine** can be a bit tricky to get running by yourself, so I created [a tutorial screencast](https://youtu.be/lzJd_a6y6-E) that shows how you can build your own client program that uses the HTM Engine in any programming environment you like.

[![{{ page.title }} Image]({{ site.baseurl }}{{ page.image }})](https://youtu.be/lzJd_a6y6-E)

This screencast showcases a prototype JavaScript application I wrote that pulls live traffic speeds from [153 routes in and around New York City](http://data.numenta.org/nyc-traffic/keys.html) and feeds them into NuPIC models simultaneously.

I hope you find this screencast useful. Please let me know if you have any troubles getting it running by emailing at <matt@numenta.org>, or just send your message to the [nupic-discuss mailing list]({{baseurl}}/lists).
