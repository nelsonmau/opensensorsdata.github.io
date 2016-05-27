---
layout: page
title: About
permalink: /about/
date: 2016-04-18 11:05:51 +0100
ref: about
lang: en
---

<div class="about-tags">
  <ul class="tags">
    <li><a href="/search/#change-management-ref" class="tag">project management</a></li>
    <li><a href="/#change-management-ref" class="tag">change management</a></li>
    <li><a href="/search/#community-management-ref" class="tag">community management</a></li>
    <li><a href="/search/#service-design-ref" class="tag">service design</a></li>
    <li><a href="search/#philosophical-counseling-ref" class="tag">philosophical counseling</a></li>
    <li><a href="/search/#opendata-ref" class="tag">opendata</a></li>
  </ul>
</div>



  <h2 class="about-heading">
    {{ site.description[page.lang] }}
  </h2>

<h1 style="font-weight:100; text-transform:lowercase">contact@osd.tools</h1>


<ul class="about-links">
  <li><a href="/manifest">manifesto</a></li>
  <li><a href="/2015/03/30/statuto-osd.html">statuto</a></li>
  <li><a href="/consegna-en/">What we deliver</a></li>
  <li><a href="/services/#policies">polices</a></li>
</ul>


{% for about in site.data.settings.about %}
  <div class="about-col-wrapper">
    <div class="about-col about-col-1">
      <ul class="about-list">
        <li style="font-size:1rem;">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="{{ about.fa }} fa-stack-1x fa-inverse"></i>
          </span>
        </li>
        <li style="font-weight:400">
          {{ about.name }}
        </li>
          <li style="font-style:italic; font-size:1rem">
            {{ about.role }}
          </li>

      </ul>
    </div>
    <div class="about-col about-col-2">
      <ul class="about-social-media-list">
        <li>
          <a href="mailto:{{ about.mail }}"><span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i style="color:#002fa7" class="fa fa-envelope-o fa-stack-1x"></i>
          </span></a>
        </li>
        <li>
          <a href="https://telegram.me/{{ about.telegram }}"><span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i style="color:#002fa7" class="fa fa-paper-plane-o fa-stack-1x"></i>
          </span></a>
        </li>
        <li>
          <a href="https://twitter.com/{{ about.twitter }}"><span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i style="color:#002fa7" class="fa fa-twitter fa-stack-1x"></i>
          </span></a>
        </li>
        <li>
          <a href="https://github.com/{{ about.github }}"><span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i style="color:#002fa7" class="fa fa-github-alt fa-stack-1x"></i>
          </span></a>
        </li>
        <li>
          <a href="http://{{ about.site }}"><span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i style="color:#002fa7" class="fa fa-link fa-stack-1x"></i>
          </span></a>
        </li>
      </ul>
    </div>
    <div class="about-col about-col-3">
      <a href="/assets/img/faces/{{ about.face }}"><img class="about-photo" src="/assets/img/faces/{{ about.face }}" alt="about face"></a>
    </div>
  </div>
{% endfor %}

<hr>

<h1 id="credits" style="font-weight:100; text-transform:lowercase">Credits</h1>

We like to reuse open contents and opensource code and we think is right (in some cases we must) to credit the authors for their work.

Therefore... here's the list:

* [Jekyll](https://jekyllrb.com/)
* [SlabText js](https://github.com/freqdec/slabText)
* [feed.xml](https://github.com/dottorblaster/dottorblaster.github.io)
* [Discourse plugin]()
* [For the licenses](http://choosealicense.com/)
* [Jekyll multilanguage](https://www.sylvaindurand.org/making-jekyll-multilingual/)

## Artwork

the logo osd and the [tangram](https://en.wikipedia.org/wiki/Tangram)'s figures is by luca and is licensed under [CC-BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
