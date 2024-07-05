let nome = localStorage.getItem("name");
let cognome = localStorage.getItem("surname");
let today = new Date();  //prende la data odierna

const hName = document.getElementById("nome")
const hCognome = document.getElementById("cognome")
const currentDate = document.getElementById("currentDate")



// Estrai il giorno, il mese e l'anno
let day = today.getDate();
let month = today.getMonth() + 1; // I mesi sono indicizzati da 0 a 11
let year = today.getFullYear();

// Aggiungi uno zero davanti ai giorni e mesi che sono minori di 10 per avere un formato coerente
if (day < 10) {
  day = '0' + day;
}
if (month < 10) {
  month = '0' + month;
}

// Componi la data in formato "dd/mm/yyyy"
let formattedDate = day + '/' + month + '/' + year;

hName.innerText = nome;
hCognome.innerText = cognome;
currentDate.innerText = formattedDate;


       // Funzione per generare e scaricare il PDF
       function generateAndDownloadPDF() {
        // Seleziona il contenuto della pagina
        const element = document.getElementById('bodyCertificato');
        
        // Utilizza html2canvas per catturare l'elemento con il background image
        html2canvas(element).then(canvas => {
            // Converti il canvas in immagine
            const imgData = canvas.toDataURL('image/jpeg');

            // Dimensioni desiderate per il PDF
            const pdfWidth = canvas.width * 0.75; // Scala il canvas a 75% della larghezza
            const pdfHeight = canvas.height * 0.75; // Scala il canvas a 75% dell'altezza

            // Crea un nuovo documento jsPDF in formato orizzontale
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'landscape', // Orientamento orizzontale
                unit: 'pt', // Unità di misura: punti
                format: [pdfWidth, pdfHeight] // Dimensioni del PDF
            });

            // Aggiungi l'immagine al PDF
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

            // Salva il PDF dopo 2 secondi
            setTimeout(function() {
                pdf.save('certificato.pdf');
                setTimeout(function() {
                  window.close;
                }, 2500)
            }, 2000); // 2000 millisecondi = 2 secondi
        });
    }

    // Chiamata alla funzione per generare e scaricare il PDF dopo 2 secondi
    setTimeout(generateAndDownloadPDF, 1000); // 1000 millisecondi = 1 secondi