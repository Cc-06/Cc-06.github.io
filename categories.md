---
layout: page
title: 文章分类
permalink: /categories/
---

{% assign folders = "论文阅读,基础知识" | split: "," %}

{% for folder in folders %}
<details style="padding: 16px 0; border-bottom: 1px solid #ddd;">
  <summary style="cursor: pointer; font-size: 20px; font-weight: bold;">
    {{ folder }}
  </summary>

  <ul>
    {% for post in site.categories[folder] %}
    <li>
      <a href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
      </a>
    </li>
    {% else %}
    <li>暂无文章</li>
    {% endfor %}
  </ul>
</details>
{% endfor %}
