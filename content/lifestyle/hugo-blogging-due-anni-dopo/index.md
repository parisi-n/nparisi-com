---
title: "Blogging e Hugo: sposalizio non perfetto (e con tanti MA)"
date: "2022-11-14"
image: "images/hugo_cover.jpg"

summary : "Da più di due anni la gestione del sito non è più affidata ad un gestore dinamico di contenuti (Wordpress) ma ad Hugo, un gestore di siti statico. Il suo uso ha dei _pro_ ma anche e soprattutto dei _contro_. In questo post cercherò di raccontare la mia esperienza dopo due anni di uso."
categories : [ "lifestyle" ]
tags : [ "travel", "hugo" ]

showToc : true
type: "article"
---

{{< capital_letter_open >}}
Più di due anni fa ho deciso di "traslocare" il blog (che amichevolmente spesso chiamo _blogghe_) dalla piattaforma WordPress ― installata su hosting linux e database mySQL ― ad Hugo, _builder_ di siti statici ― il cui sorgente si trova su *GitHub* ― mentre le varie pagine statiche (compilate automaticamente e in modo trasparente per l'utente) vengono create al momento della "compilazione" del sito ― da fare ogni qualvolta vengano apportate modifiche. 
{{< capital_letter_close >}}

Avevo parlato dell'evento [in questo post del 2020]({{< ref "lifestyle/da-wordpress-a-hugo/index.md" >}}).

## Cos'è WordPress

Wordpress è decisamente il punto di riferimento nel panorama dei siti che desiderano offrire **contenuti dinamici** e **rapidamente modificabili** con una **soglia d'ingresso**, in quanto a competenze, abbastanza bassa.
Superato lo scoglio dell'installazione ― che potrebbe suscitare qulche dubbio negli utenti _naive_ ― si è proiettati nel mondo del _blogging_ e dei _contenuti dinamici_ e si viene **presi per mano** in tutti gli step necessari a mettere su in pochi passi il vostro sito web forgiato sulle vostre necessità e desideri.

Un unico contro: l'essere vincolato a mille plugin, le mille personalizzazioni forzate che sparivano ad ogni aggiornamento di questo o quel plugin, la lentezza nella creazione delle pagine ― mi hanno fatto desistere.

Descritto in questo modo ― Wordpress appare la panacea e la soluzione a tutto.

Ma allora ― perchè nel 2020 (in piena pandemia ― ndr) ― ho deciso di passare da WordPress ad Hugo ― non senza un certo impegno e tempo?

{{< image src="pc_1.jpg" alt="Workstation con Surface Go 3 (angolazione frontale)" caption="" >}}

## Cos'è Hugo

Se lavorare con WordPress equivale a lavorare per _pattern_ ed in modo del tutto grafico ― lavorare con Hugo equivale **a scrivere codice e a programmare**. Con un vantaggio: per ogni modifica che vorrete fare potrete facilmente applicarla.

Sarete più liberi e padroni del vostro sito e della sua organizzazione.

Tutto ciò ammesso siate già pratici e smanettoni di HTML, JavaScript, e CSS e...GoLang.

*Go Lang* è un linguaggio di programmazione con cui vi troverete ad avere a che fare nel momento in cui dovrete lavorare direttamente con i template e personalizzarne la forma ed il contenuto.

Direi una bugia se dicessi che implementare modifiche in Go Lang è semplice; tuttavia ricerche seriate (e serrate 😄) su Google possono rendere il lavoro molto più semplice e lineare ― merito anche grazie alle risposte fornite dagli utenti {{< external_link "https://discourse.gohugo.io/" "della community di Hugo" >}}.

Molti temi {{< external_link "https://themes.gohugo.io/" "disponibili per Hugo" >}} sono mutuati ed adattati da WordPress ― nonostante quest'ultimo per via del suo carattere _enterprise-oriented_ ― abbia a disposizione un numero molto maggiore di temi (anche a pagamento).

## La migrazione

Come già raccontato nel post in cui parlavo del "trasloco" ― la migrazione non è stata rapida: è stato necessario scrivere parecchio codice per adattare il tema (che comunque è lo stesso che usavo su Wordpress) alle mie esigenze e personalizzare i CSS per renderlo cromaticamente simile al vecchio tema usato su WordPress.

Poi è stata *la volta dei post*: ogni singolo post è stato trascritto su un file individuale e riformattato secondo il formato *markdown*; ogni foto è stata esportata e collocata insieme al testo del post in una cartella apposita.

## Il confronto

Stanti le cose così ― a chiunque sano di mente verrebbe da porsi la domanda: come mai, al di là delle performance, hai deciso di imbarcarti in un'opera del genere?

Perchè *mi sento più libero*.

{{< image src="pc_2.jpg" alt="Workstation con Surface Go 3 (angolazione da sinistra)" caption="" >}}

*Più libero* di forgiare il _blogghe_ sulla base delle mie esigenze. Personalizzarlo è molto più semplice ed immediato ― non solo perchè so dove mettere le mani ma anche per la sua struttura.

Implementare una nuova funzione ― una volta capito il meccanismo ― è molto più immediato.

Esempio: recentemente ho deciso di implementare le foto panoramiche all'interno dei post.

Con Wordpress avrei dovuti *cercare il plugin, sperare ci fosse e sicuramente anche adattarlo alle mie esigenze* ― senza contare che ogni plugin ha un suo stile ed unire vari plugin sarebbe risultato comunque disomogeneo dal punto di vista stilistico.

Con Hugo: ho cercato la libreria JavaScript (un file) da implementare, ho creato uno shortcode da richiamare all'interno dei _file markdown_, ho leggermente modificato il CSS sulla base delle classi richiamate dallo shortcode *e nel giro di mezz'ora avevo il mio plugin ben implementato e funzionante*.

## L'unico (grande) svantaggio

Personalmente ho incontrato solo vantaggi da quando son passato all'uso di Hugo: passare dal dover gestire un'accozzaglia disomogenea di codice (talvolta complesso e poco comprensibile per gli ignoranti del settore *come me*) a __pochi file__ --- in cui **codice e template** coesistono rendendo la lettura più semplice --- è stato un decisivo miglioramento.

C'è però *un unico, grande svantaggio*.

*Non è possibile scrivere _on the go_, da qualunque computer, collegandosi alla admin page* come invece avveniva con Wordpress.

Non è quindi possibile _programmare la data di pubblicazione, modificare o caricare immagini nei post_ da un interfaccia ma è necessario di fatto aprire l'IDE di programmazione con la struttura del progetto, collocare le immagini dove necessario, e fare *un commit su GIT*.

## Come ho risolto

Ho risolto in un modo che *non è una soluzione*.

{{< image src="pc_3.jpg" alt="Workstation con Surface Go 3 (angolazione da destra)" caption="" >}}

Avrei potuto installare un CMS tra quelli disponibili per Hugo (come {{< external_link "https://www.netlifycms.org/" "CMS Netlify" >}}) ― ma non volevo complicarmi troppo l'esistenza aggiungendo codice che poi non sarei stato in grado di manutenere e gestire.

Ho quindi optato per una seconda modalità: ho creato sul mio cloud personale una cartella in cui ho caricato {{< external_link "https://wereturtle.github.io/ghostwriter/" "la versione portable di GhostWriter" >}}, che non è altro che un editor di _markdown_ con qualche caratteristica in più (counter di caratteri, suddivisione delle sezioni, sintassi in evidenza...).

In questo modo accedo a Ghostwriter da qualunque dispositivo mi trovi (e le configurazioni rimangono salvate con lui) ― e modifico i file contenuti nel cloud (nel mio caso: {{< external_link "REF LINK DROPBOX???" "Dropbox" >}}).

Che quindi sia dal tablet oppure dall'ultrabook o dal telefono potrò accedere ai post su cui sto lavorando, modificarli, e ― in modo del tutto trasparente ― salvarli aggiornati.

Per caricarli online sarà invece comunque necessario passare *dal vostro IDE scelto da cui mantenete il sito* ― il che rende potenziali aggiornamenti _on the road_ difficili da fare.

## Hugo starter-pack

Per far partire il vostro sito _Hugo-based_ avrete bisogno di:
* **un account su GitHub**: qui si troveranno fisicamente le vostre pagine sorgenti e in cui uploaderete le modifiche tramite l'IDE (dovrete fare un _Commit_ e a seguire un _Push_);
* **un account su Netlify**: si occupa di _compilare_ il sorgente non appena capterà qualche modifica su GitHub e lo renderà disponibile su uno spazio web del tipo **vostronome.netlify.app**;
* **un dominio** con estensione a vostro piacimento (nel caso di questo blog: **nparisi.com**) ― con i cui dettagli andrete a configurare il DNS di Netlify per permettere l'accesso a _nostronome.netlify.app_ direttamente dal vostro indirizzo.

Ognuno di questi step necessita di un minimo di sbattimento e tempo per capire come funzionano e risolvere i problemi di funzionamento **che sicuramente incontrerete**.

Consiglierei l'uso di **Hugo** a chi è alle prime armi nella programmazione? *No, a meno che non voglia sbattersi un po' per capirne la logica*.

Decisamente meglio iniziare quindi con Wordpress.

Arriverete però ad un punto in cui capirete che Wordpress non fa più al caso vostro ed avrete **bisogno** di **qualcosa in più**.

*Hugo* sarà solo lo step successivo del vostro percorso.

_Happy blogging, Happy Hugo_.