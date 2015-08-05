---
author: Matthew Taylor
category: blog
image: /assets/img/blog/2013-11-11/image.png
layout: item
org: Open Source Manager
title: CLA Quiz Office Hour
---

Tomorrow at 4PM Pacific, we're holding an
[Office Hour](https://plus.google.com/b/100642636108337517466/events/crmrf6k58s77hlgk4v30bll8hp8)
for anyone interested to join in and talk about
[Hierarchical Temporal Memory]({{ site.data.url.ext.htmpaper }}), as implemented
by Numenta within [NuPIC]({{ site.baseurl }}{{ site.data.url.index }}). Jeff
Hawkins and Numenta VP of Engineering Subutai Ahmad will be at this event to go
through the _CLA Quiz_, a serious of challenging questions about how NuPIC
algorithms work. These questions were originally created for new employees and
interns to research in order to better understand the CLA. Tomorrow, we're
going to be asking you!

![{{ page.title }} Image]({{ site.baseurl }}{{ page.image }})

If you're interested in taking part, or just joining in to listen, please use
your Google account and request an RSVP to our
[Office Hour](https://plus.google.com/b/100642636108337517466/events/crmrf6k58s77hlgk4v30bll8hp8).
We'll be happy to invite you. If you can't make it, the video will be
[posted on YouTube](http://www.youtube.com/watch?v=rSpYyUN4iP0).


### The CLA Quiz

1. Is an untrained CLA spatial pooler just a “random hash” (random mapping from
  input to output vector)?  Why or why not? What happens to the output of the
  spatial pooler if you randomly change one bit in the input.
1. Can you do spatial pooling with small numbers?  For example, is it reasonable
  to have an SP with 20 columns? If not, why are large numbers important in
  SDR's?
  * <i></i> What's the difference between picking "5 columns out of 50" vs
    "50 out of 500"?  Both have 10% sparsity.
  * <i></i> What's the difference between picking "50 out of 100" vs
    "50 out of 1000"? Both will output 50 1's.
1. Suppose the input vector (input to the SP) is 10,000 bits long, with 5%
  sparsity. What is the right value of coincInputPoolPct? How do you figure
  this out?
1. How does the SDR representation of input A in isolation, and input B in
  isolation, compare with the SDR representation of input A overlapped with B?
  Alternatively, how does the representation of a horizontal line and the
  representation of a vertical line compare with the representation of a cross?
1. Suppose we have an input vector that is 10,000 bits long.  Suppose the
  spatial pooler has 500 columns, of which 50 are active at any time.
  * <i></i> Can we distinguish many patterns, or a small number? Which patterns
    are likely to be confused?
  * <i></i> What happens to the SDR representation if we add noise to the
    patterns?
  * <i></i> What happens if we add occlusions?
1. What are disadvantages of SDR's?
1. How does online learning happen in the SP?


#### Whoa! that's deep

These questions a bit over your head? Looking for a primer on these technologies
before you attend? Here are some resources:

* <i></i> [HTM White Paper]({{ site.data.url.ext.htmpaper }})
* <i></i> [Tutorial: CLA Basics](http://www.youtube.com/watch?v=z6r3ekreRzY)
* <i></i> [CLA Deep Dive](http://www.youtube.com/watch?v=QBs-2_wl_JM)


> Matt Taylor <br/>
> Open Source Community Flag-Bearer <br/>
> Numenta, Inc.

[Comments on Reddit](http://www.reddit.com/r/MachineLearning/comments/1qdu8i/cla_quiz_office_hour/)
