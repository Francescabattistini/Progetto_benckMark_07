const checkbox = document.getElementById('checkbox');
const button = document.getElementById('buttonChek')


function cambiaPagina() {
    // Cambia l'URL della pagina
    window.location.href = 'https://www.google.com/';
  }


  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      button.disabled = false;
    } else {
       button.disabled = true;
    }
  });
 
  