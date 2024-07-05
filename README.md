# Introduzione:

L’obiettivo della build week è creare una copia dell’app Benchmark di Epicode.
Si tratta di una QuizApp che genera 10 domande casuali con risposte multiple.

## Funzionalità:

- Generazione casuale delle domande.
- Risposte multiple.
- Interfaccia intuitiva.
- Risultato immediato – saprai subito la percentuale delle domande corrette e sbagliate.
- Feedback - potrai lasciare una valutazione e una recensione e aiutarci a migliorare.

### Strumenti utilizzati:

HTML – per la creazione e l’impaginazione delle pagine.
CSS - per lo style personalizzato.
JavaScript - per l’interattività con gli oggetti del DOM.

#### Descrizione:

La nostra app è composta da 5 pagine:

1. **Welcome_Page** - il punto di ingresso predefinito per le nostre pagine con le istruzioni da seguire e il consenso per procedere al quiz.
2. **Question_Page** – la pagina delle domande con le risposte multiple.
3. **Result_Page**- la pagina dei risultati del quiz con un grafico a ciambella che ci permette di visualizzare la percentuale delle risposte corrette e sbagliate. Se la percentuale delle rispose corrette risulta uguale o superiore a 60%, il quiz è superato.
4. **Certificato_Page**- La pagina che genera sia il certificato virtuale che quello PDF.
5. **Feedback_Page** – rappresenta l’ultima pagina ed è stata progettata per raccogliere le valutazioni e i commenti dagli utenti sul quiz realizzato.

##### La struttura della repository:

I file html - rappresentano il file principale di tutte le pagine e definiscono la struttura includendo elementi blocco (&lt;h1&gt;,&lt;p&gt;, &lt;div&gt;), elementi inline come &lt;span&gt;,&lt;img&gt;,&lt;button&gt; elementi lista &lt;ul&gt; e i percorsi per collegare le pagine tra di loro, il percorso CSS (uno per tutte le pagine) e quelli di JavaScript.
Cartella assets – contiene le immagini, il file CSS e i vari JavaScript:
• **img** : immagini utilizzate come il logo Epicode e l’immagine di background.
• **CSS/main-style.css** : stili personalizzati per il layout della pagina: classe, selettori, colori, font e dimensioni.
• **JS/_file_.js**: gli script di Java con tutte le funzioni per gestire l’interattività della pagina ad esempio:

-_Welcome page_ – abbiamo i due campi di input per il nome e il cognome dell'utente, la checkbox e la funzionalità del bottone per procedere alla pagina successiva, una volta accettati i termini.

-_questions page_ – la funzione per il timer, il metodo random per generare le domande in modo casuale e creare i bottoni con le risposte.

-_result page_ – la funzionalità per calcolare e visualizzare il punteggio dell’utente, aggiornare dinamicamente il grafico a ciambella, implementato tramite la libreria _Chart.js_, aggiungere un event listener per il pulsante "RATE US" ed reindirizzare l’utente verso la pagina di feedback.

-_feedback page_ – ha la funzionalità di valutare con delle stelle che si attivano con il click del mouse, per poi attivare la parte testuale che ci permetterà di sapere un eventuale parere del utente.

###### Extra:
Gli extra della nostra app sono:
• Tutte le risposte sono randomizzate TRANNE il Vero o Falso.
• Visualizzazione di tutte le domande e risposte giuste e sbagliate.
• Timer differente in maniera dinamica a seconda della difficoltà e tipologia della domanda.
• Favicon di Epicode perr tutte le pagine.
• CORIANDOLI al superamento del test.
• Pagina dell certificato e la stampa PDF.
