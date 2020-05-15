---
title: "Perchè ho scelto R invece di Python o SAS"
date: "2020-01-23"
image: "images/20200123_094155.jpg"

categories : [ "Libri", "Med & Tech" ]
tags : [ "blog", "lifestyle" ]

summary : "Perchè ho scelto di approfondire R invece di Python e SAS nell'analisi dei dati e su quali libri e siti studiare."

showToc : true
type: "article"
---
{{<font "gray">}}
Questa pagina verrà aggiornata mano a mano che troverò altre risorse interessanti utili allo studio di R in campo medico e sanitario.  
  
**Ultimo aggiornamento:** 27/01/2020
{{< /font >}}

* * *

## Perchè R?

{{< capital_letter_open >}}
I due grandi contendenti nel campo dell'analisi dei dati e del _machine learning_ sono due: R e Python. La tentazione di cimentarmi con Python, _molto più flessibile e general-purpose,_ era tanta. Sarebbe stato forse anche più semplice creare moduli di analisi e processazione di dati da implementare lato server per affiancare e potenziare l'ecosistema [Journal in Cloud](https://journ.cloud).
R però mi ha intrigato fin da subito con la sua interfaccia di R Studio, che ti obbliga ad imparare un nuovo paradigma, ti insegna ad imparare un nuovo modo di concepire e programmare.
{{< capital_letter_close >}}

In passato avevo lavorato con _MedCalc_, software statistico semplice da usare ma allo stesso tempo "giusto" per quel che mi serviva, senza troppi fronzoli o funzioni aggiuntive. **Non c'era da programmare.**

Avrei potuto provare [SAS](https://it.wikipedia.org/wiki/SAS_(software)) (è disponibile davvero una grande quantità di materiale, commerciale e non!) ma gli alti costi di licenza mi hanno fatto desistere.

Da ex utente Linux, non potevo che scegliere R. L'idea di poter lavorare sia da ambiente Windows sia da ambiente Linux, il fatto che fosse meno comune e più "alternativo" (che poi, alternativo nemmeno tanto visto che si trova sempre più materiale sull'argomento e sempre più persone ne parlano) ha fatto il resto.

## Cos'è R?

Alcuni rispondono ironicamente: la lettera tra la Q e la S. Ma non solo.

{{< image src="R_logo.svg_.png" alt="Logo di R" style="width: 50%" parent-style="text-align: center" >}}

> **R** è un linguaggio di programmazione e un ambiente di sviluppo specifico per l'analisi statistica dei dati.  
> È un software libero in quanto viene distribuito con la licenza GNU GPL, ed è disponibile per diversi sistemi operativi (ad esempio Unix, GNU/Linux, macOS, Microsoft Windows).
> 
> _via [Wikipedia](https://it.wikipedia.org/wiki/R_(software))_

Tra i proposito del nuovo anno c'era quello finalmente di mettermi sotto in un campo - quello dell'analisi dei dati - in forte ascesa rispetto al passato, ma contemporaneamente complesso ed poco documentato per quel che riguarda l'applicazione in campo sanitario. Già ci avevo provato in passato, ma con scarsa applicazione e con scarsi risultati.

## Risorse per lo studio

Carico e deciso, quindi, ho di nuovo settacciato il web alla ricerca di risorse che potessero essere utili lungo il percorso di apprendimento. Ho volutamente tralasciato i videocorsi che millantano rapidi e facili successi sia perchè non avrei materialmente il tempo di seguire un videocorso sia perchè trovo la didattica cartacea molto più facilmente fruibile nelle varie situazioni e nei ritagli di tempo.

Online sono disponibili numerosissimi siti (ufficiali e non) a cui rimando per una più completa comprensione dell'argomento ma che - dal mio punto di vista - hanno più funzione di "prontuario" piuttosto che didattica ed esplicativa.

Per questo ho stilato un elenco dei testi che sto trovando utili per lo studio.

### Statistical analysis with R for dummies

Immancabile il libro della famosissima saga "for Dummies" - a malincuore devo ammettere che due [eccetto uno]({{< ref "perche-non-prendere-kobo.md" >}})/) non sono mai riuscito a finire un loro libro. Trovo la prima metà del libro estremamente entusiasmante, quasi avvincente. L'autore vi spiegherà prima la statistica che c'è alla base, poi la applicherà su R con esempi pratici.

{{< image src="20200123_094524.jpg" alt="Statistical Analysis with R" >}}

La seconda metà del libro invece è più pedante, complice anche la maggiore difficoltà degli argomenti associata ad una scarsa utilità percepita degli argomenti per quelli che sono i miei obiettivi.

Va ben per iniziare e capire un po' di R, ma offre scarsi spunti ed esempi in campo sanitario ed epidemiologico.

**Lingua:** 🇬🇧  
**Costo:** paid  
**Maggiori informazioni:** {{< affiliate_link "statistical-analysis" "qui" >}}.

### Ricerca sociale in R

Il blog della Prof.ssa Vardanega è sicuramente un ottimo punto di partenza per approfondire certi argomenti ed approcciarli da un diverso punto di vista.

Annualmente viene tenuto il corso di Laboratorio di Analisi dei Dati con R presso l'Università di Teramo, tra Febbraio e Maggio.

E' disponibile anche il libro omonimo - Ricerca sociale in R - di cui però non è disponibile un estratto online (è disponibile a Gennaio 2020 solo _l'indice_ ed il _capitolo introduttivo_). Rimane da chiarire dunque se anche il libro sia organizzato come il sito - a mo' di wiki in italiano delle funzioni R - o ci siano affiancate anche nozioni di statistica.

**Lingua:** 🇮🇹  
**Costo:** free/paid  
**Maggiori informazioni:** [qui](https://www.agnesevardanega.eu/metref/r).

### Analisi dei dati in R

Libro completissimo - quello del Prof. Bosselon: discorsivo, sembra di avere a che fare con un insegnante privato che da ripetizioni 1:1, tratta di un argomento ampio e a tratti complesso con semplicità - come una chiacchierata tra amici.

Va bene sia per iniziare e capire se R è quello che fa per voi sia per approfondire. I primi capitoli sono illustrativi e spiegano con una carrellate veloce ma puntuale le principali funzioni R che potranno tornare utili in fase di applicazione della teoria.

Altamente consigliato.

**Lingua:** 🇮🇹  
**Costo:** free  
**Maggiori informazioni:** [qui](https://www.agnesevardanega.eu/metref/r).

{{< image src="20200123_094212.jpg" alt="Workstation che uso per lavorare" >}}

## Statistica

Per chi come me ha bisogno di un ripasso di statistica, qui di seguito alcune fonti che possono essere utili.

### Quaderno di epidemiologia

Non proprio attinente ad R, ma questa risorsa curata dal Prof. Bottarelli non solo è utile ma anche orientata verso lo studio della statistica con taglio epidemiologico/sanitario. Una risorsa tutta italiana, unica nel suo genere, online dal 1998 e costantemente aggiornata.  
Il sito è in vecchio stile - ma quel che conta è il contenuto.

**Lingua:** 🇮🇹  
**Costo:** free  
**Maggiori informazioni:** [qui](https://www.quadernodiepidemiologia.it/epi/HomePage.html).

### Dispense di statistica per le professioni sanitarie

Appunti di statistica medica curati dal Prof. Ferretti dell'Università degli Studi di Siena. Risorsa da affiancare ai Quaderni di Epidemiologia. Presentano alcune imprecisioni ma li ho trovati abbastanza interessanti sia per un veloce ripasso sia per l'apprendimento ex-novo.

**Lingua:** 🇮🇹  
**Costo:** free  
**Maggiori informazioni:** [qui](http://www.csu.unisi.it/files/Dispensa-di-statistica-medica.pdf).

{{< image src="20200125_124433.jpg" alt="Appunti sparsi" caption="Appunti di Statistica">}}

* * *

L'obiettivo che mi propongo **all'inizio di questo 2020** è banale ma allo stesso tempo difficile: riuscire ad ottenere in modo programmatico gli stessi risultati statistici ottenuti durante la stesura della tesi di laurea riguardante **la qualità della terapia anticoagulante orale nei pazienti** **trattati con antagonisti della vitamina K** (per intenderci: **Coumadin e Sintrom)** partendo dai medesimi dati di base che ancora conservavo sul cloud.

La statistica mi affascina da parecchio seppur non sia mai riuscito ad entrare dentro le sue dinamiche interne e dunque a capirla e farla mia appieno.

Spero in un 2020 illuminante.
