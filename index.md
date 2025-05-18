---
layout: layout.njk
title: Home
---

Welcome to the website of **Dr. John Doe**, specialist in dermatology.

Read our latest articles:

<ul>
{% for post in collections.post reversed %}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
