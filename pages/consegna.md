---
layout: page
title: 'Cosa offriamo'
permalink: /consegna/
date: 2016-04-18 11:05:51 +0100
ref: consegna
lang: it
---

**[osd]({{ site.url }}{{ site.baserurl }}/index.html)** è una società che consegna strategie e modelli per aiutare istituzioni, imprese ed associazioni a costruire progetti **opendata**.

L’[opendata](http://opendatahandbook.org/) sta diventando sempre più un elemento trasformativo sia dentro che tra le organizzazioni. Questo influisce su come queste gestiscono e reagiscono internamente. La nostra sfida è affrontare i fattori complessi legati al cambiamento organizzativo, quelli fondamentali per il successo dei progetti opendata. Questi progetti sono importanti elementi di cambiamento organizzativo, il nostro obiettivo è di renderli sostenibili e produttivi.

- Organizziamo workshop e formazione per aiutare i team e il loro esecutivo a modellare, testare e implementare con successo questi progetti trasformativi.

- Ci piace contribuire allo sviluppo di programmi di [intrapreneurship](https://en.wikipedia.org/wiki/Intrapreneurship) all’interno delle istituzioni e associazioni.

- Lavoriamo su modelli di business aperti per aiutare le imprese ad aprire i proprio dati catturandone il valore.

<pre>Se vuoi conoscere meglio la nostra impresa leggi il nostro <a href="{{ site.url }}{{ site.baseurl }}manifesto[page.lang]">Manifesto</a></pre>

<hr>

<p id="prodotti"></p>
<br>
{% for product in site.data.settings.product %}
  <div class="product-col-wrapper">
    <div class="product-col product-col-1">
      <ul class="product-list">
        <li >
          <a href="{{ product.link-it }}" style="font-weight:700;text-transform:uppercase">{{ product.name }}</a>
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
              <td>{{ product.parolechiave }}</td>
            </tr>
          </table>
        </li>
      </ul>
    </div>
    <div class="product-col product-col-2">
      {{ product.description-it | markdownify }}
    </div>
    <div class="product-col product-col-3">
      <a href="{{ product.direct-link-it }}"><img class="product-photo" src="/assets/img/products/{{ product.folder }}/{{ product.img }}" alt="product img"></a>
    </div>
  </div>
{% endfor %}

<hr>

<h1 id="policies">Linee di condotta</h1>

1. garantiamo la riservatezza dei clienti per (almeno) 5 anni a meno che non sia il cliente a volerne dare pubblicità
2. rilasciamo il codice che sviluppiamo per gli Enti Pubblici
3. usiamo [projectopendata](http://www.projectopendata.com) come project management con cui ci coordiniamo con i collaboratori interni ed esterni. I dati e le informazioni contenute e immesse nel sistema non verranno **mai** divulgate o applicati ad usi diversi da quelli concordati con il cliente.
4. usiamo [hi.osd.tools](https://hi.osd.tools) come chat/forum per fornire assistenza anche in forma riservata. Tutte le informazioni e le statistiche dei dati inseriti nel sistema non verranno **MAI** usati per usi diversi dal funzionamento minimo del sistema stesso.
5. tutti i nostri siti sono riusabili su github (licenza MIT?)
6. tutto il materiale è rilasciato con licenza CC-BY-SA (tranne nomi e loghi _tutti i diritti riservati_)
