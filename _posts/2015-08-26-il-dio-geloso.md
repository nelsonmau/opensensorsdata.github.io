---
layout: post
title: Il dio geloso dell'opensource
date: 2015-08-26
ref: diogeloso
author: luca
lang: it
tags:
- opensource
- community management
- project management
---

*[<i class="fa fa-medium" aria-hidden="true"></i> pubblicato in **osd review** su Medium](https://medium.com/opensensorsdata-review/il-dio-geloso-dell-opensource-b86a0884e8b9)*

## premessa
ieri, 25 agosto 2015, vado con una collega di biblioteca alla Fondazione Cini nell’ambito del progetto WikiManuzio. Nella biblioteca della Fondazione hanno provveduto a fotografare e digitalizzare una loro copia di un’Aldina e siamo andati ad aiutarli a caricarla su “wikipedia”. La sequenza di azioni ormai mi sembra assodata e l’ho scritta pure nella pagina di progetto, ma — ovviamente — ognuno ha il suo sovraccarico di attività ed è normale che, anche se si leggono le istruzioni, il senso e il valore dei passaggi sfugga.

Quindi ho iniziato a spiegare:

- prendi il tuo account su wiki e scrivi che lavori presso l’ente che rilascia il materiale
- poi carichi la cartella zippata con le immagini dell’Aldina con l’estensione _images.zip su Archive.org
- attendi un po’ che te la converta in formato .djvu
- poi la carichi su Commons
- da Commons la passi su Wikisource creandone la voce dal titolo dell’Aldina e da lì i volontari e chiunque ne vorrà, inizierà a trascriverla per avere il testo in digitale

## tutto ok? no.
Perché la cartella non era stata resa pubblica attraverso il sito web e quindi mancava “la fonte” con relativa licenza. Inoltre Archive aveva bellamente ignorato dopo più di un’ora e mezza qualsiasi conversione di formato.

Inoltre, quando ho cercato di mostrare come consultare le statistiche di modifiche nella cronologia di una voce su Wikipedia, mi sono accorto che l’xtools non pesca i dati…

Risultato: frustrazione enorme (per la collega), incazzatura (per me) mentre la bibliotecaria della Cini era comunque ottimista e contenta di aver appreso meglio le dinamiche di condivisione.

Da questi indizi io, che sono fatto sbagliato, mi sono posto alcune domande che ho la necessità di condividere perché sento di sbagliare qualcosa ma mi manca il punto di partenza.

## Provo a esporre per punti così spero di essere più chiaro:

1. dalla modifica dell’xtools mi sono accorto che la velocità e la labilità dello sviluppo opensource non attendono; ovvero ogni gruppo o singolo sviluppatore ha la necessità di applicare subito lo sviluppo, perché le versioni devono avanzare e la verifica dei bug si fa solo con l’uso
2. il punto #1 comporta però dei problemi nella gestione strategica degli strumenti e delle piattaforme: **un ente che rilascia materiali su Wikipedia, su Open Street Map, come può essere in grado di stare al passo dello sviluppo entrando nella comunità, mantenendo il suo ruolo nella comunità d’origine?** Mi spiego: una Biblioteca Nazionale fa parte della comunità delle biblioteche, e per condividere materiale e conoscenza su Wikipedia senza esserne avulsa e semplicemente “ospite”, dovrebbe compiere lo sforzo di entrare dentro la comunità wikipediana, ma questo obbligherebbe la Biblioteca Nazionale a “sdoppiarsi” rischiando di diventare atipica sia per la comunità d’origine (quella delle biblioteche), sia per quella wikipediana
3. ho l’impressione che **nel mondo open e dello sviluppo software in generale, ci sia una sorta di schizofrenia tra il metodo di sviluppo e la definizione delle strategie di sviluppo**. Nel [modello incrementale](https://it.wikipedia.org/wiki/Modello_incrementale) che sta alla base dell’agile, la ciclicità veloce dei rilasci ripetuti di una versione è una sorta di “dogma”: ogni versione viene riaggiornata secondo le attività che vengono concordate con gli obiettivi del cliente. Quindi tanti rilasci, costanti implementazioni e correzioni per soddisfare subito il committente in un’ottica di sviluppo per tante piccole fasi, ma che impongono un medio termine.
4. *che impongono un medio termine* è la chiave del modello incrementale: **non posso supporre di modificare la produzione da un modello a cascata da quello incrementale temporaneamente. La scelta deve essere ponderata ma determinata**. Quindi a fronte di uno sviluppo per tanti piccoli passi veloci, ci deve essere una strategia a medio e lungo termine. Non posso impostare le attività di domani senza sapere dove arriverò fra sei mesi. Poi magari aggiusto il tracciato, sposto la meta ma la strada rimane unica.
5. nell’opensource, come in wikipedia e in qualsiasi altro progetto che prevede una conoscenza condivisa e uno sviluppo comunitario (quello che mi resta sempre nel cuore è e sarà per sempre Debian), **c’è come l’impressione che il medio termine sia talmente labile o incerto che a volte si fatica a trovare i ponti, l’aiuto ad attraversare il guado di un nuovo sviluppo**. La comunità, giustamente dal suo punto di vista e missione, dice “entra, è aperto! e contribuisci”, ma come fa un soggetto a contribuire — portando la sua specificità che deriva dal suo ambiente d’origine — senza perdere le proprie caratteristiche?
6. È l’evoluzione! nel momento in cui entro in contatto con nuovi ambienti e condivido compio un’ibridazione che nella sua interazione porta ad una vicendevole crescita. Vicendevole? **A volte dubito che le comunità open siano interessate a comprendere le esigenze e le specificità di altre comunità e ad accoglierne alcuni aspetti**.


> Su Ex Machina, ad un certo punto Nathan chiede a Caleb: può esistere consapevolezza senza interazione? ed aggiungo: può esistere consapevolezza senza interesse ad interagire?

ovvero: con la sfida dell’OpenGLAM, dell’Open Access e di tutto quello che comporta in genere l’open knowledge, quali sono i reali interessi ad interagire per condividere conoscenza? Si potrebbe innanzitutto dire lo scambio di competenze che consentono il raggiungimento di risultati che altrimenti sarebbero stati o irraggiungibili o troppo onerosi.

## Il costo sta nello sforzo di interazione
Per un ente, un’azienda, per ogni singola persona, interagire con le comunità di condivisione della conoscenza ha innanzitutto un altissimo costo relazionale. Che diventa poi di ricerca e sviluppo, se lo si associa a delle attività che devono sostenersi. **Molte di queste comunità sono incardinate nel volontariato in cui ognuno porta il proprio capitale di conoscenza e di tempo**. Pretendere da queste persone un inquadramento strategico sarebbe oltre che ingiusto pure rischioso perché minerebbe la natura libera della comunità stessa. Come bilanciare?

Io comprendo benissimo la necessità di frammentazione ma ho l’impressione che lo sviluppo segua… lo sviluppo.

## Il dio geloso dell’open
Nel Deuteronomio 5,9 (versione Nuova Diodati) si legge:

> Non ti prostrerai davanti a loro e non le servirai, perché io, l’Eterno, il tuo DIO, sono un Dio geloso che punisco l’iniquità dei padri sui figli fino alla terza e alla quarta generazione di quelli che mi odiano,

e molte volte ho l’impressione che le persone che aderiscono alle comunità si immergano come in uno stato dogmatico in cui la gelosia dell’open li prenda e non li faccia “imbastardire” con influssi esterni. È molto naturale questo comportamento, perché se manca un impianto centrale che controlla (quasi a livello dittatoriale) è normale che ogni parte del branco presti estrema attenzione a tutto ciò che accade ai bordi. Ma questo però potrebbe comportare delle preclusioni e/o delle involuzioni alle comunità stesse.

Aziende, Istituti di scienza, di cultura e di ricerca in genere: in che cosa potranno contribuire alle comunità di condivisione?

> Senza limitarsi a portare passivamente il loro “pacchetto conoscitivo”, quanto le comunità di Wikipedia, di Open Street Map e altri sono disposte a lasciarsi influenzare dai soggetti contributori che sono essi stessi dei gruppi dotati di dinamiche e di regole?

La mia speranza è trovare un modo per far sì che ci sia un’evoluzione da entrambe le parti in cui il patto di fiducia risieda nell’esplicitazione degli interessi e nel poter definire dei modelli di sviluppo che siano solidali.

Un esempio sarebbe proprio partire dalle biblioteche e dagli archivi chiedendosi, soprattutto dal punto di vista tecnico: come ridurre i passaggi per ottenere una condivisione massiccia in cui l’intermediazione è ridotta al minimo?

Come conciliare la necessità di pianificare a medio e lungo termine (imposta dal modello di condivisione della conoscenza) con la necessità di rilascio costante delle comunità?

A chiunque mi avrà letto fin qui, rivolgo la mia gratitudine e mi scuso per le probabili stupidaggini.
