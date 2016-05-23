---
layout: tags
title: Cerca
permalink: /search/
ref: tags
lang: it
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tag_words = site_tags | split:',' | sort %}




{% if site.tags != empty %}
  <ul class="tags">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
      <li class="tags"><i class="fa fa-tag"></i> <a href="{{ '-ref' | prepend: this_word | replace: ' ','-' | prepend: 'search/#' | prepend: site.baseurl }}">
        <span class="badge">{{ this_word }} <sup>{{ site.tags[this_word].size }}</sup></span>
      </a></li>
  {% endunless %}{% endfor %}
  </ul>
{% endif %}
