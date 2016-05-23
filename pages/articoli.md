---
layout: page
title: 'Post & Slide'
permalink: /articoli/
date: 2016-05-18 11:05:51 +0100
ref: articles
lang: it
---

{% for post in site.posts | where:"lang", page.lang %}
  <ul>
    <li><a href="{{ post.link }}"></a> {{ post.date | date_to_string }} &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
	  <li class="home">
	    <p class="home-tags">
	      {% if post.tags != empty %}<br/><i class="fa fa-tags"></i>
	        {% for tag in post.tags %}
	          <a href="{{ '-ref' | prepend: tag | replace: ' ','-' | prepend: 'search/#' | prepend: site.baseurl }}">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
	        {% endfor %}
	      {% endif %}
	    </p>
	  </li>
  </ul>
  {% endfor %}
