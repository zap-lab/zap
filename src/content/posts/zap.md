---
title: Zap - The fastest way to build a blog system
date: 2021-07-26
slug: zap
image:
  src: ./images/zap.svg
  alt: "zap"
---

The need for media to efficiently provide information is increasing day by day in line with the ever-growing developer network.

### New age of the blog system

As the developer level increased, blog systems began to appear that could provide information faster, more concisely, and more efficiently. And the developer's blog has the following differences from the general service type blog.

- Code snippet feature
- Dark theme preferred
- Information interlocking preferred
- Attach a schematic image rather than a photo
- Prefer markdown input

Naturally, static blogging systems exclusively for developer blogs begin to emerge.

### Static page generation

The idea is simple. With a few markdown skills, you could turn your markdown text into a web page through a tool called a **static web page generator**. See the example below.

```markdown
---
layout: post
title:  "This is the new paradigm"
date:   2021-11-07 21:11:29
categories: blog-system
---
It looks like text now, but you can easily turn it into a web page!
```

Taking [Jekyll](https://jekyllrb-ko.github.io/), an early static web page generator, for example, you can change the above markdown to a web page with just the following command.

```bash
jekyll build
```

> However, since the web page generator gives developers too much freedom, they have to pay attention to various fields such as SEO, design, readability, and performance, which means that it is difficult for developers to create high-quality content.

### The advent of Zap 

![Figure 1. Zap project logo](./images/zap_cover.png)

Zap supports the following four elements in the existing static web page generator to help developers easily create high-quality content.

1. SEO (Search Engine Optimization)
2. Design
3. Readability
4. Performance
