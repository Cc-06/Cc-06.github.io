---
layout: page
title: 文章分类
permalink: /categories/
---

{% for category in site.categories %}
<h2>{{ category[0] | escape }}</h2>
<ul>
  {% for post in category[1] %}
  <li>
    <a href="{{ post.url | relative_url }}">
      {{ post.title | escape }}
    </a>
  </li>
  {% endfor %}
</ul>
{% endfor %}
