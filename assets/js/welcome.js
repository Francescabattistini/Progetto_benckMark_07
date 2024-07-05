const checkbox = document.getElementById('checkbox');
const button = document.getElementById('buttonChek');
const inpNome = document.getElementById('inpNome');
const inpCognome = document.getElementById('inpCognome');


function init() {
  checkbox.checked = false;
  button.disabled = true;
}

window.addEventListener('pageshow', init); 


function cambiaPagina() {
  localStorage.setItem("name", inpNome.value);
  localStorage.setItem("surmane", inpCognome.value)
  window.location.href = 'questions.html';
}

// Funzione per abilitare/disabilitare il bottone
function validateForm() {
  const nome = inpNome.value.trim();
  const cognome = inpCognome.value.trim();

  if (checkbox.checked && nome !== "" && cognome !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

// Aggiungi eventi di ascolto per gli input e la checkbox
inpNome.addEventListener('input', validateForm);
inpCognome.addEventListener('input', validateForm);
checkbox.addEventListener('change', validateForm);

// Gestisci il click del bottone
button.addEventListener('click', function () {
  if (!button.disabled) {
    cambiaPagina();
  }
});


