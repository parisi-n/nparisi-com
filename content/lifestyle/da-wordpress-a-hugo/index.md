---
title: "Perchè son migrato da Wordpress a Hugo: sentimenti di base"
date: "2020-05-16"
image: "images/copertina-wordpress-hugo.jpg"

categories : [ "Lifestyle" ]
tags : [ "blog", "lifestyle" ]

summary : "Dopo 14 giorni di lavoro semi-intenso son riuscito a cambiare la struttura alla base del blog da Wordpress a Hugo. Ma cos'è Hugo e perchè ho deciso di cambiare content manager? Qui alcune motivazioni."

showToc : true
type: "article"
---
{{< capital_letter_open >}}
Da un po' di tempo stavo ponderando la scelta: Wordpress non andava più bene per le mie esigenze, che non sono più quelle di _scrivere & postare_, ma quelle di fornire uno spazio diverso, comodo, funzionale, a misura di utente e **non standardizzato**.
{{< capital_letter_close >}}

## Cosa mi ha spinto

L'esperienza utente da Wordpress sul mio hosting non era delle migliori. Il sito era lento, pesante. Navigarci all'interno era faticoso per l'esperienza che forniva, ovvero abbastanza standard e _piatta_.

{{< image src="wordpress.png" alt="Punteggio del blog su wordpress" caption="Punteggio LightHouse del vecchio blog su wordpress" parent-class="no-box-shadow" >}}

Google PageSpeed Insights riprotava una _Performance_ di **44** (in realtà in vari test il risultato è stato di circa 22) per il mobile e **94** per la **versione mobile**.

{{< image src="netlify.png" alt="Punteggio del blog su wordpress" caption="Punteggio LightHouse del vecchio blog su wordpress" parent-class="no-box-shadow" >}}

Tutto è iniziato quando mi son reso conto che la lentezza del blog non era correlata alla mia connessione ma _al sito stesso_. Il paradosso che ne segue è solo una conseguenza: per velocizzare una cosa lenta devo installare un plugin che lo velocizza; per poi installare un alto plugin che velocizza il precedente.

Secondo {{< external_link "https://wp-rocket.me/blog/wordpress-plugins-many/ " "un post del famoso plugin WP Rocket" >}} per un hosting condiviso (come quello di _nparisi.com_) il numero di plugin consigliato è tra 0 – 5 .

**Io ne avevo 22**.

Tra plugin scritti bene, scritti male, ognugno con i suoi cookie, son i suoi bug, con i suoi javascript era essenzialmente _un macello_.

## Quindi?

Nel momento poi in cui ho cercato un pizzico di customizzazione in più – mi son messo le mani in testa. E non c'è _plugin-child_ o _theme-child_ che tenga. Basta una modifica un po' più sostanziosa dell'elemento _parent_ al successivo aggiornamento ed è tutto di nuovo da modificare.

Non conoscendo alternative, son rimasto su Wordpress.

## Hugo, Gatsby, Jekyll

Finchè non sono incappato in questi nomi.

Ho passato in rassegna prima **Hugo**. Poi Gatsby.

E ho capito che quel che cercavo era proprio Hugo, sia per velocità che per linguaggio necessario allo sviluppo.

Gatsby – basato su React.js – è più indicato allo sviluppo di PWA – _Progressive Web App_ – siti web che offrono un'esperienza d'uso simile a quella di un'app nativa per dispositivi mobili.

Non è ciò che cercavo.

### Hugo

Link: {{< external_link "https://gohugo.io/ " "home" >}}

Si definisce **il più veloce framework per costruire siti statici al mondo**. E forse lo è davvero. Scritto in Golang, all'inizio vi farà dannare per la sintassi che usa e per come è strutturato.

Quel che c'è da sapere però è – in caso vogliate fare solo poche modifiche ad un tema tra quelli disponibili gratuitamente – non avrete bisogno di grande studio.

In caso vogliate invece _customizzare_ il tema, aggiungendo feature, modificandole, rendendo il sito _più vostro e più originale_, avrete leggermente da penare. Nessun problema che nel forum ufficiale però non sia mai stato trattato e risolto.

Potete esportare i vostri post potete usare {{< external_link "https://github.com/lonekorean/wordpress-export-to-markdown" "questo plugin" >}}

Una volta "_compilato_" il vostro sito non dovrete fare altro che caricarlo sul vostro hosting e sarà accessibile.

Oppure: fare un _commit_ su {{< external_link "https://github.com" "GitHub" >}} ed attendere che {{< external_link "https://netlify.com" "Netlify" >}} compia il _deploy_ del sito.

## Solo _pro_ o anche _contro_?

Di difetti ne ho trovati tanti; ma erano essenzialmente ciò che – provenendo da Wordpress – era inevitabile vedessi, **trascurando tutti i pro**.

### Contro
Dimenticate la comoda interfaccia admin di Wordpress. A meno di "accrocchi" particolari non potrete gestire il sito come eravate abituati a fare dal _pannello admin_ di Wordpress. Non potrete quindi scrivere post da qualunque postazione siate o lavorare al sito da una postazione diversa da quella solita. Esistono però dei pacchetti da _implementare_ come {{< external_link "netlify-cms" "https://www.netlifycms.org/" >}} o {{< external_link "https://forestry.io/" "forestry.io" >}}.

Se volete implementare una funzionalità non ci sono plugin da installare: dovrete andare in giro per il web alla ricerca di qualche pacchetto javascript/html/css ed implementarlo secondo i vostri gusti, sia di estetica sia di programmazione. Aggiungere il bannerino di avviso cookie può diventare un inferno.

Capire il funzionamento di _tag_, _categorie_ e _tassonomie_ può essere difficile all'inizio.

I post vanno scritti in {{< external_link "https://it.wikipedia.org/wiki/Markdown" "markdown" >}}: niente interfacce comode ed immediate. A tal proposito consiglio {{< external_link "https://typora.io/" "Typora.io" >}}.

Il SEO andrà fatto manualmente. Il che non è un male visto che vi obbliga a studiarne le basi. Il risultato finale a seconda dei casi sarà migliore che con wordpress (forse)

### Pro
Tutto il resto. I _contro_ sono derivati dall'errore di base di considerare Hugo con gli occhi di chi è abituato a lavorare con Wordpress. Per quanto essenzialmente portino ad un risultato estetico a seconda dei casi simile, il procedimento alla base è completamente opposto e mal si adatta ad un blogger poco smanettone.

In rete molti hanno fatto il salto opposto, ovvero da Hugo son passati a Wordpress per concentrarsi maggiormente sull'attività di _blogging_ pittusto che di _webmaster_.

Il sito prodotto è **rapidissimo**. E' ordinato. Tutto ha una logica ed una posizione. In caso di problemi in una determinata porzione di pagina saprete esattamente dove mettere le mani.

## Conclusioni

Hugo non è per tutti.
Nel mio caso son servite due settimane per organizzare la migrazione. Il che è corrisposto a convertire (e correggere) tutti i post (uno ad uno), fare un fix del collegamento delle immagini, riorganizzare la grafica per certi.

Non finirete mai di metterci le mani perchè troverete sempre qualcosa da aggiungere e le personalizzazioni non finiranno mai, ma forse non è una cosa negativa.

Faccio a meno del _remote working_ e torno a scrivere su un file di testo all'interno di una pennina USB (a proposito: vi consiglio {{< external_link "sandisk-usb-typea-typec" "questa" >}} oppure {{< external_link "hp-usb-typea-typec" "questa" >}} con doppia uscita type A – type C in caso vogliate correggere qualche _articolo_ dal telefono).
Anche la scrittura acquista una nuova dimensione, più essenziale, più chiara, più genuina, senza fronzoli dati dai _fogli di stile_.

Sono soddisfatto della scelta. Son soddisfatto dei risultati.

**Oggi inizia un nuovo ciclo per _nparisi.com_**