---
title: "RavPower FileHub 2019: filehub portatile per viaggiatori 2.0"
date: "2019-07-09"
image: "images/IMG_1259.jpg"

summary : "Perchè ho apprezzato (e perchè no) il nuovo FileHub di RavPower versione 2019, con particolare attenzione all'uso in mobilità in cui mostra le proprie potenzialità."
categories : [ "accessori" ]
tags : [ "" ]

showToc : true
type: "article"
---

Di recente ho acquistato un articolo apparentemente inutile: {{< affiliate_link "ravpower-filehub-2019" "RavPower FileHub 2019" >}}. Apparentemente inutile perché – al momento dell’acquisto – non ero ben cosciente delle funzioni che avesse. Diciamo che l’ho preso più per sfizio che per reale (in questi giorni) utilità…che non ho tardato a trovare.

{{< image src="IMG_1252.jpg" alt="" >}}

Acquistato solo ed esclusivamente per la funzione di backup **SD >USB** per mettere al sicuro foto e video realizzati in viaggi, son riuscito a trovarne impiego anche nella vita di tutti i giorni.

## Funzionalità

Il device ha due tasti: uno per l’accensione (va tenuto premuto alcuni secondi) ed uno per il backup SD > HDD nel momento in cui si colleghi sia un HDD/SSD sia una SD Card e si desideri fare il backup dell’SD nel secondo supporto.

{{< image src="IMG_1255.jpg" alt="" caption="Tasto di accensione">}}

In uno dei lati minori presenta invece **tre porte**: una **RJ45**, una **USB 3.0** Type A ed una **Micro usb** per la ricarica della batteria interna da **6700mAh** (funziona anche da powerbank per quanto non sia la sua funzione principale).

{{< image src="IMG_1256.jpg" alt="" caption="Sportello per accedere alle porte" >}}

La sua funzione è semplice quanto banale: crea una rete wireless all’interno della quale mette a disposizione i file contenuti sia nell’SD sia in eventuale HDD/SSD, permettendo di accedervi e trasferire file dal telefono, tal laptop, dal pc fisso, **senza l’uso di fili.**

## Uso quotidiano

E già l’uso domestico quotidiano potrebbe finire qui: si collega l'hard disk, una pennina, quello che è; si accende; ci si collega alla rete che il RavPower FileHub crea. Se poi non si vuole rinunciare ad usare la propria rete Wireless domestica durante l’uso del File Hub, basta configurare il dispositivo per il bridging della rete tramite le funzionalità offerte di **Access Point.**

Per farlo basta collegarsi all’indirizzo [http://10.10.10.254](http://10.10.10.254) , fare il login come **Admin** e password vuota e da lì configurare la funzionalità di bridging.

In contesto domestico capiterà poco di usarlo come powebank, anzi più spesso capiterà la necessità di doverlo caricare (collegato ad un HDD meccanico WD MyPassport 4TB ha una durata di circa 3 ore).

Ha la possibilità di ripetere/creare una rete in 5G che allo stato attuale non mi interessa particolarmente.

## Windows 10 e Samba

Windows 10 non dispone più del supporto a Samba v1 per questioni di sicurezza.

E’ necessario attivarlo da _Start_ > _Turn windows features on or off_ > _SMB 1.0/CIFS File sharing support_ > _SMB 1.0/CIFS client_

{{< image src="Samba-screen.png" alt="" >}}

**Attivare Samba**  

Successivamente ho creato un link di accesso rapido da Explorer, basta seguire i seguenti passi:

{{< image src="screen_1.png" alt="Add media" caption="Passo 1" >}}

{{< image src="screen_2.png" alt="Choose a custom network location" caption="Passo 2" >}}

{{< image src="screen_3.png" alt="Specify the location of your website" caption="Passo 3" >}}

{{< image src="screen_4.png" alt="PC" caption="Passo 4" >}}

## Android e...tablet

Per Android è disponibile l’app sul market che permette di accedere ai vari file anche se - attraverso il browser - è possibile accedervi e gestire ugualmente i files.  
Se poi disponete di un Tablet Blackberry Playbook come il sottoscritto, e desiderate accedere ai file dell’usb o dell’sd basterà comunque collegarsi all’indirizzo IP di sopra tramite un file manager adeguato (**ES File Explorer**, per esempio)

{{< appbox img="https://lh3.googleusercontent.com/EaS26k-F0Ud_lgm69YBnEGoApMKg-OyyEeCuP64Un-THPP49FnWdqyvss4ma8Zq8Pzk=s180-rw" name="RAV FileHub" package="ravpower.wd.activities" >}}

A differenza dell'accesso tramite browser - l'app permette la visualizzazione diretta in streaming dei file senza necessità di scaricarli prima nel telefono.

Non male se si è alla ricerca di una precisa foto o video.

## In viaggio

Il motivo principale per cui ho fatto l’acquisto - come già detto - è per portarlo in viaggio e fare il backup delle foto scattate con la mirrorless e dei video realizzati con la Go Pro giorno dopo giorno. Per tale motivo ho acquistato contestualmente un SanDisk Extreme SSD Portable da 1TB, per avere tanto spazio e viaggiare leggero.

{{< image src="IMG_1250.jpg" alt="Switch tra 2.4G e 5G, slot per SD Card, tasto per Backup rapido" caption="SD ⮞ USB: backup rapido" >}}

Il pulsante **SD ⮞ USB si è rivelata la vera funzione killer** per il mio uso, permettendomi di salvare svariati GB di foto ogni giorno dentro l’SSD portatile senza dover passare per altri dispositivi, semplicemente, nel mentre che passeggio o sono impegnato in altro.

## Conclusioni

La versione 2019 sta spesso {{< affiliate_link "ravpower-filehub-2019" "in offerta a 48€ su Amazon.it" >}}(prezzo pieno: 59.90€), {{< affiliate_link "ravpower-filehub-2018" "la versione 2018 bianca" >}} (che mi ha fatto conoscere questa tipologia di device) l’ho vista per la prima volta un po’ di tempo fa a 19.90€; a 25€ si trovava la versione nera. Non sono sicuro che la differenza di prezzo sia giustificata per l’uso per cui l’ho acquistato, però leggendo in altri blog son venuto a consocenza del fatto che **le versioni precedenti non avessero la funzione diretta di copia SD ⮞ USB** ma avessero bisogno che i file dovessero passare attraverso l’app del telefono con surriscaldamento, usura e rallentamento dati dal passaggio intermedio.

{{< image src="IMG_1262.jpg" alt="" >}}

Il fatto di accedere alle foto dell’SD Card via wifi senza dover cercare l’adattatore ogni volta è comunque di una comodità unica.
