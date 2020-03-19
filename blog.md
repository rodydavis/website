---
layout: page
title: Blog
permalink: /blog/
---

<p class="rss-subscribe">subscribe <a href="/feed.xml">via RSS</a></p>
 
 {% for post in site.posts %}
  <article>
    <h2>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    {{ post.content }}
  </article>
{% endfor %}
