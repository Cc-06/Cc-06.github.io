---
layout: default
title: 文章分类
permalink: /categories/
---

<header class="page-heading category-heading">
  <div><span class="eyebrow">EXPLORE BY TOPIC</span><h1>文章分类<span class="heading-dot">.</span></h1><p>从一篇论文，到一个知识点，留住每一次思考。</p></div>
  <span class="page-total"><strong>{{ site.posts | size }}</strong>篇文章</span>
</header>

<div class="topic-grid" aria-label="专题入口">
  <a class="topic-card paper-topic" href="#papers"><span class="topic-icon"><i data-lucide="book-open"></i></span><span class="topic-number">01</span><h2>论文阅读</h2><p>阅读、理解与思考</p><span class="topic-bottom"><span>{{ site.categories['论文阅读'] | size }} 篇文章</span><i data-lucide="arrow-up-right"></i></span></a>
  <a class="topic-card basic-topic" href="#basics"><span class="topic-icon"><i data-lucide="notebook-pen"></i></span><span class="topic-number">02</span><h2>基础知识</h2><p>概念、原理与实践</p><span class="topic-bottom"><span>{{ site.categories['基础知识'] | size }} 篇文章</span><i data-lucide="arrow-up-right"></i></span></a>
</div>

<section class="archive-section" aria-labelledby="archive-title">
  <div class="section-heading"><div><span class="eyebrow">ALL ENTRIES</span><h2 id="archive-title">文章目录</h2></div><span class="subtle-label">持续更新中</span></div>
  <div class="filter-bar"><div class="filter-tabs" role="group" aria-label="按分类筛选"><button type="button" class="filter-tab is-active" data-filter="all" aria-pressed="true">全部<span>{{ site.posts | size }}</span></button><button type="button" class="filter-tab" data-filter="论文阅读" aria-pressed="false">论文阅读</button><button type="button" class="filter-tab" data-filter="基础知识" aria-pressed="false">基础知识</button></div><button class="icon-button" type="button" data-open-search title="搜索文章" aria-label="搜索文章"><i data-lucide="search"></i></button></div>

  {% assign folders = '论文阅读,基础知识' | split: ',' %}
  {% for folder in folders %}
  <details class="category-group" data-category="{{ folder }}" id="{% if folder == '论文阅读' %}papers{% else %}basics{% endif %}" open>
    <summary><i data-lucide="folder-open"></i><span>{{ folder }}</span><span class="group-count">{{ site.categories[folder] | size }}</span><i data-lucide="chevron-down" class="group-chevron"></i></summary>
    <div class="group-content">
      {% for post in site.categories[folder] %}<a class="archive-entry" href="{{ post.url | relative_url }}"><i data-lucide="file-text"></i><span>{{ post.title | escape }}</span><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time><i data-lucide="arrow-up-right"></i></a>{% else %}<p class="empty-state">暂时没有文章，留给下一次探索。</p>{% endfor %}
    </div>
  </details>
  {% endfor %}

  {% for category in site.categories %}{% unless category[0] == '论文阅读' or category[0] == '基础知识' %}
  <details class="category-group" data-category="{{ category[0] | escape }}" open><summary><i data-lucide="folder-open"></i><span>{{ category[0] | escape }}</span><span class="group-count">{{ category[1] | size }}</span><i data-lucide="chevron-down" class="group-chevron"></i></summary><div class="group-content">{% for post in category[1] %}<a class="archive-entry" href="{{ post.url | relative_url }}"><i data-lucide="file-text"></i><span>{{ post.title | escape }}</span><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time><i data-lucide="arrow-up-right"></i></a>{% endfor %}</div></details>
  {% endunless %}{% endfor %}

  {% assign uncategorized = site.posts | where_exp: 'post', 'post.categories.size == 0' %}
  {% if uncategorized.size > 0 %}<details class="category-group" data-category="未分类" open><summary><i data-lucide="folder-open"></i><span>未分类</span><span class="group-count">{{ uncategorized | size }}</span><i data-lucide="chevron-down" class="group-chevron"></i></summary><div class="group-content">{% for post in uncategorized %}<a class="archive-entry" href="{{ post.url | relative_url }}"><i data-lucide="file-text"></i><span>{{ post.title | escape }}</span><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%Y.%m.%d' }}</time><i data-lucide="arrow-up-right"></i></a>{% endfor %}</div></details>{% endif %}
</section>
