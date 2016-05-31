---
layout: post
title: Il rendering iconologico dei dati (preferibilmente aperti)
date: 2015-12-03
update: 2016-03-30
author: luca
ref: rendericonologico
lang: it
tags:
- opendata
- datastickers
- bot
---

*[<i class="fa fa-medium" aria-hidden="true"></i> pubblicato in **osd review** su Medium ](https://medium.com/opensensorsdata-review/il-rendering-iconologico-dei-dati-preferibilmente-aperti-f06c6788443a#.jx8k8amn4)*

<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> *UPDATE* dal 2016-03-30 il server è stato chiuso e verrà riattivato ma non è ancora definita la data. Nel frattempo **tutto il codice è disponibile di [Github](https://github.com/opensensorsdata/PorcellinoBot)**

![porcellinobot]({{ site.url }}{{ site.baseurl }}assets/img/posts/porcellino.png)

## PorcellinoBot e i Datastickers che verranno
Il 2 dicembre 2015 abbiamo tenuto un [panel al BTO dal titolo “Da Winckelmann agli Squallor: liberare, dissacrare, riusare, ricontestualizzare la cultura, i luoghi e le opere”](http://www.buytourismonline.com/eventi/liberare-cultura/). Qui ci sono le [slide dell’incontro]({{ site.url }}{{ site.baseurl }}keynote/20151202-BTO-Winckelmann-Squallor/#/).

## Antefatto
Un anno e mezzo fa il mio fratello intellettuale Alfonso (molto più sapiente di me) mi coinvolse in un progetto che si chiamava “[Ardomino](http://www.slideshare.net/ValentinaGrasso/ardomino-geneva-okcon)”. Venni coinvolto dopo l’[esperienza](http://www.zdnet.com/article/open-data-vs-the-flood-how-high-tech-is-helping-venice-deal-with-high-tides/) #[acqualta](http://www.wired.it/economia/start-up/2014/01/17/venezia-open-data-acqua-alta/) ora conclusa con successo: [i dati ci sono e scorrono](http://dati.venezia.it/?q=content/icpsm-dati-meteomarini-laguna-e-litorale-veneziano).

Poi, a settembre 2014, nel DIGIT14 con Valentina Grasso e Mirko Mancin parlammo di [sensors journalism](http://sensorjournalism.it/2014/09/22/un-giornalista-tra-dati-e-sensori-a-digit14/). Ci divertimmo a prendere in giro i giornalisti presenti, facendogli credere che i tweet sul meteo venivano scritti da una persona, quando invece

> era un sensore a comunicare con loro attraverso un palinsesto che interpretava le variabili dei dati

Quello che volevamo dimostrare è che le macchine sono tra noi già da un bel pezzo e costruiscono elementi informativi in linguaggio umano (*[se volete una conferma guardate cosa fa il New York Times](http://www.niemanlab.org/2015/07/the-new-york-times-built-a-robot-to-help-making-article-tagging-easier/)*).

L’innovazione non sta — ovviamente — in questo, ma nel fatto che ora è possibile creare questi elementi di traduzione comunicativa con costi bassissimi e infrastrutture tecnologiche molto leggere e semplici.

## Premessa: le tecniche del messaggio
[Ardomino](http://valenitna.github.io/ardominodoc/) verbalizzava variabili di dati attraverso degli schemi di interazione (qui il [preziosissimo codice di Alfonso](https://github.com/alfcrisci/RArdomino)). Si basava su Twitter e da lì trasmetteva: era un broadcast.

<blockquote class="twitter-tweet" data-lang="it"><p lang="it" dir="ltr">Se c&#39;e&#39; neve per natale, molto sole a carnevale. <a href="https://twitter.com/hashtag/ardOmino?src=hash">#ardOmino</a> <a href="http://t.co/ipQ2SyqFyH">pic.twitter.com/ipQ2SyqFyH</a></p>&mdash; Sensor Journalist (@sensjournalist) <a href="https://twitter.com/sensjournalist/status/513409780040622080">20 settembre 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

In quanto broadcast trasmetteva uno a molti e la sua interazione era solo nel coinvolgimento. Quando al Festival del Giornalismo di Perugia [Gilda35](https://twitter.com/Gilda35) ha fatto una sintesi del loro enorme lavoro con [Latte senza Bufale](http://www.festivaldelgiornalismo.com/programme/0/bufale-senza-latte-2), ho visto la luce

<iframe width="560" height="315" src="https://www.youtube.com/embed/lX5tfRdkoY0" frameborder="0" allowfullscreen></iframe>

e ho collegato i concetti base della [cybercultura](https://it.wikipedia.org/wiki/Cybercultura) e cyberdadaismo.

In quei crogiuli di shock culturale, si sono prodotti le dinamiche di meme e di uso sistematico di gif, l’evoluzione del tormentone, che oggi ci inondano di tecniche di antimarketing — sviluppate negli anni da [Adbusters](https://www.adbusters.org/) — facendo a tutti gli effetti marketing aggressivo che agisce a livello inconscio.

## Contesto: la società dello spettacolo
[Guy Debord](https://it.wikipedia.org/wiki/Guy_Debord) nel fondamentale “[La Società dello Spettacolo](http://www.ritirifilosofici.it/?page_id=422)” dice, proprio all’inizio, che:

> Lo spettacolo non è un insieme di immagini, ma un rapporto sociale fra persone, mediato da immagini

e di seguito — relativamente al modello produttivo-economico — sintetizza così:

> La prima fase del dominio dell’economia sulla vita sociale aveva comportato nella definizione di ogni realizzazione umana un’evidente degradazione dell’essere in avere. La fase presente dell’occupazione totale della vita sociale da parte dei risultati accumulati dell’economia, conduce a uno slittamento generalizzato dell’avere al sembrare, da cui ogni “avere” effettivo deve trarre il suo prestigio immediato e la sua funzione ultima

che potrebbe essere l’esplicitazione dello spostamento dall’[essere](https://it.wikipedia.org/wiki/Essere) all’[esser-ci](https://it.wikipedia.org/wiki/Dasein) di [Heidegger](https://it.wikipedia.org/wiki/Martin_Heidegger).

## Il modello d'interpretazione: archeostickers
Quando abbiamo creato **[archeostickers](http://www.archeostickers.com/)** avevamo in mente proprio il contesto descritto sopra: le persone non percepiscono le loro attività nel momento in cui queste non sono “viste”. Gli stessi studiosi non vedono applicazione visibile delle loro ricerche perché, confinati in una bolla di studio e ricerca, non alzano lo sguardo e **si autoindicano**.

Se siamo la società dello spettacolo è vero anche che **questo spettacolo è sempre più autoprodotto**.
La soglia di attenzione ai contenuti si è abbassata tragicamente (per info rivolgersi ai giornalisti) e quindi si è verificato uno slittamento progressivo dal contenuto (faticoso, strutturato) al trasmittente. Nell’epoca del (dannato) storytelling si punta sul *come*, mentre il cosa scivola: è il come che rende protagonista il narratore.

Con [archeostickers](http://www.archeostickers.com/pages/about/#3) abbiamo (io e Antonia, Astrid, Domenica e Paola) voluto innestare **i dati come degli agenti cognitivi di base** (professionale, tematica, culturale ecc ecc) nella traduzione di un messaggio.

A tutti gli effetti,

> un rendering iconologico dei dati.

[![Venere Callipigia](http://www.archeostickers.com/public/images/stickers/44_Venere_Callipigia.png)](http://www.archeostickers.com/2015/10/06/44_venere-callipigia/)

Che questi dati fossero **[aperti](http://www.archeostickers.com/pages/about/#4)** è un processo naturale: proprio perché lo spettacolo ha bisogno della ciclicità dei modelli per essere riconosciuto — e quindi confortevole — solo la facilità di riuso dei dati aperti può essere espressa attraverso meme e messaggi virali.

Quindi, in estrema sintesi:

- abbiamo a disposizione e produciamo una quantità di dati enorme
- attraverso archeostickers stiamo dimostrando come tradurli in messaggi coinvolgenti
- sfruttando i principi dello spettacolo, poniamo al centro i dati tradotti per far emergere **le persone che sono in grado di tradurre quei dati**

## I dati, i luoghi, gli oggetti e le persone
Con [archeostickers](http://www.archeostickers.com/pages/istruzioni/) abbiamo creato un rendering iconologico di dati portandoli ad essere pattern di relazioni tra persone (abilitandole anche al riuso dei pattern stessi).

Ora è tempo di PorcellinoBot, il primo esempio di [Datastickers]({{ site.url }}{{ site.baseurl }}datastickers).

PorcellinoBot sfrutta la webchat di Telegram per renderizzare dati climatici attraverso un simbolo di Firenze come il Porcellino nella Loggia del Mercato Nuovo.

È stato realizzato assieme a [CNR-Ibimet](http://www.ibimet.cnr.it/) per iniziare un progetto di collaborazione nel quale si vorrà dimostrare che le aziende hanno vantaggi sia intellettuali che tecnologici a lavorare con il CNR e la ricerca in genere.

A chi lamenta la distanza della ricerca dal “mercato”, io (noi) posso dire che giustamente la ricerca ha i suoi tempi ma se si lavora per condividere con i ricercatori, si creano sinergie vantaggiose per tutti.

Le stesse imprese non devono vedere gli istituti come erogatori di fondi, ma come serbatoi di conoscenza a cui attingere assieme a chi li riesce a far vivere (nonostante tutto), ovvero i ricercatori stessi. Attingere per condividere elementi di produzione per consolidare il percorso: ricerca di base -> ricerca applicata -> prototipo -> produzione.

Un po’ come si è fatto con le (potentissime) Archeologhe per archeostickers.

## Datastickers: dalla teoria al prodotto
Lo scopo di Datastickers è superare la difficoltà relazionale tra uomo e macchina e dati, sfruttando le dinamiche relazionali della cybercultura contemporanea come meme e gif.

Oramai la produzione di bot (soprattutto su Telegram) è abbastanza diffusa, ma non si riesce a trovare un modello associabile ad un piano produttivo e/o economico. Le esperienze viste finora arrivano all’automazione di modelli informativi esponendo le risposte fornite dai dati collegati al bot.

Datastickers – e il Porcellino ne è l’esempio – agisce potenziando dei modelli di business:

* permettendo di integrare le competenze come parte della promozione delle attività di una struttura.
* consentendo la riduzione dei costi delle attività di disseminazione.

Il punto nodale è l’integrazione delle competenze che si risolve nel combinato immagine/messaggio che sono la forza intellettuale derivata dalle persone che stanno dietro ai dati usati (e non più solo esposti) dal bot.

> Datastickers è l’espansione del concetto di Archeostickers, consentendo la renderizzazione in icona di tutti quei dati, collegati a luoghi e oggetti, che altrimenti sarebbero confinati ad ambiti per esperti.

## Datastickers è Open Business Model
Il vantaggio tecnologico raggiunto non richiede più investimenti tecnologici enormi e non è soggetto a vendor lock-in, consentendo l’abbattimento di costi legati alle piattaforme comunicative per investire sui contenuti che sono il vero valore. Quindi, più facile è la condivisione e il riuso dei dati trasmessi da Datastickers, più efficace è la messa a valore della conoscenza interna — e implicita — del cliente.

Se non ci fossero i ricercatori dell’Ibimet ad interpretare e analizzare i dati esposti dal Porcellino, esso sarebbe solo una simpatica immaginetta con degli slogan in dialetto fiorentino; ma nel momento in cui si aggiungono le funzioni analitiche della climatologia, i messaggi si dotano di senso che si renderizzano in un’informazione.

## Ora la smetto
Tutto questo per dire che il modello che abbiamo in mente non vuole essere esclusivo. ANZI!
Speriamo che altre aziende, altri Enti, altri professionisti inizino a considerare che questi modelli produttivi funzionano e che danno un senso diverso del termine competizione.
Con il modello che proponiamo la lotta non è più una ricerca ossessiva del vantaggio sulle persone, ma sulla capacità di aumentare i margini di valore nelle relazioni tra competenze.

Del resto… a noi piace il Bene (e sfuggire dalla catena di montaggio)!

<iframe width="420" height="315" src="https://www.youtube.com/embed/tbDnr6PuCrg" frameborder="0" allowfullscreen></iframe>
