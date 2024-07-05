let nome = localStorage.getItem("name");
let cognome = localStorage.getItem("surname");

let today = new Date();  //prende la data odierna

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

console.log(formattedDate)

