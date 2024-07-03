const checkbox = document.getElementById('checkbox');
const button = document.getElementById('buttonChek')

function init() {
  checkbox.checked = false;
  button.disabled = true;
}


window.addEventListener('pageshow', init);  //evento quando la pagina si ricarica

function cambiaPagina() {      // Cambia l'URL della pagina
    window.location.href = 'questions.html';
  }


  checkbox.addEventListener('change', function() {   //per attivare il bottone e disabilitare
    if (checkbox.checked) {
      button.disabled = false;
    } else {
       button.disabled = true;
    }
  });
 
  