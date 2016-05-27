---
layout: page
title: What we deliver
permalink: /consegna-en/
date: 2016-04-18 11:05:51 +0100
ref: consegna
lang: en
---

**[osd]({{ site.url }}{{ site.baserurl }}/index.html)** is a company that delivers strategies and test models to help institutions, firms and charities build and bolster **open data projects**.

[Opendata](http://opendatahandbook.org/) is increasingly becoming a transformational element inside and between organisations. This affects how these internally respond to changes. Our challenge is to implement transformational projects by addressing the hard factors involved in organisational change, these that are critical for success. Our goal is to make project of data sharing and reuse a sustainable and valuable transformational element in organization.

- We arrange workshop and training to help third parties’ executive and teams to successfully model, develop and test transformational projects.

- We help bolster bold [intrapreneurship](https://en.wikipedia.org/wiki/Intrapreneurship) programs inside government agency and institute.

- We work on open business solutions to open firms and companies’ data and systemically capture their value.

<pre>If you want to know more about our company read our <a href="{{ site.url }}{{ site.baseurl }}manifesto[page.lang]">Manifesto</a></pre>

<hr>

<h2 id="products">Products</h2>

{% for product in site.data.settings.product %}
  <div class="product-col-wrapper">
    <div class="product-col product-col-1">
      <ul class="product-list">
        <li >
          <a href="{{ product.link-en }}" style="font-weight:700;text-transform:uppercase">{{ product.name }}</a>
        </li>
        <li>
          <table class="desc">
            <tr>
              <td>
                <a href="{{ product.link }}"><span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="{{ product.fa }} fa-stack-1x fa-inverse"></i>
                </span></a>
              </td>
              <td>{{ product.keywords }}</td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
    <div class="product-col product-col-2">
      {{ product.description-en | markdownify }}
    </div>
    <div class="product-col product-col-3">
      <a href="{{ product.direct-link-en }}"><img class="product-photo" src="/assets/img/products/{{ product.folder }}/{{ product.img }}" alt="product img"></a>
    </div>
  </div>
{% endfor %}
