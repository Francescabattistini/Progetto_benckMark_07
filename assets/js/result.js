var options = {
  //opzioni per il chart
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: "70%",
  responsive: true,
  maintainAspectRatio: false,
};

const jsonString = localStorage.getItem("request");
let request;
if (jsonString) {
  // Convertire la stringa JSON in un array di oggetti
  request = JSON.parse(jsonString);
  console.log(request);
} else {
  console.log("No data found in local storage.");
}

// Recupera il punteggio dell'utente dal localStorage
const userScore = localStorage.getItem("userScore")
  ? localStorage.getItem("userScore")
  : 0;
console.log(userScore);

// Calcola il numero totale di domande
const totalQuestions = localStorage.getItem("totalQuestions")
  ? parseInt(localStorage.getItem("totalQuestions"))
  : 0;
console.log(totalQuestions);

// Calcola il numero di risposte corrette e scorrette
const correctAnswers = userScore;
const incorrectAnswers = totalQuestions - correctAnswers;

// Calcola le percentuali di risposte corrette e scorrette
const correctPercent = (correctAnswers / totalQuestions) * 100;
const incorrectPercent = 100 - correctPercent;
// inizio evento per non tornare indietro
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

if (history.length >= 0) history.forward(); //funzione per bloccare il tasto per tornare indietro
//anticit per evitare che gli utenti barino
if (userScore === "false") {
  const par = document.getElementById("cheater");
  par.innerText = "GOTCHA";

  document.getElementById("divIframe").innerHTML = `
            <video width="350" autoplay loop muted>
                <source src="https://external-preview.redd.it/uafMLScOUutOCmzRcIu2h4lgTa6o2tiHAjgP_p8aUuI.gif?width=245&format=mp4&s=7c11aed17fb663ddbd4cb491264137a6723f773d" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;

  const innerChart = document.getElementById("inner-chart"); //questi
  innerChart.remove();

  const canvas = document.querySelector("canvas");
  canvas.remove();
} else {
  // Aggiorna il contenuto del div delle risposte corrette
  document.querySelector("#correctDiv .correct-content").innerHTML = `
	  <h2>Correct</h2>
	  <strong><span class="percent">${correctPercent}%</span></strong>
	  <h6 class="result-questions"><span>${correctAnswers}</span> / ${totalQuestions} questions</h6>
	`;

  // Aggiorna il contenuto del div delle risposte scorrette
  document.querySelector("#wrongDiv .wrong-content").innerHTML = `
	  <h2>Wrong</h2>
	  <strong><span class="percent">${incorrectPercent}%</span></strong>
	  <h6 class="result-questions"><span>${incorrectAnswers}</span> / ${totalQuestions} questions</h6>
	`;

  // Configura e crea il grafico a ciambella utilizzando Chart.js
  const ctx = document.getElementById("my-chart").getContext("2d");
  const chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["incorrect", "correct"],
      datasets: [
        {
          data: [incorrectAnswers, correctAnswers],
          backgroundColor: ["#C2128D", "#00FFFF"],
          borderWidth: 0,
        },
      ],
    },
    options: options,
  });

  // Determina se l'utente ha passato o fallito l'esame
  const passFailText = correctAnswers >= 6 ? "Pass" : "Fail";

  // Aggiorna il contenuto interno del grafico a ciambella
  document.getElementById("inner-chart").innerHTML = `
	  <p class="title-chart">${
      passFailText === "Pass" ? "Congratulations!" : "Try Again!"
    }</p>
	  <p class="${passFailText === "Pass" ? "blue" : "red"}">${
    passFailText === "Pass"
      ? "You passed the exam"
      : "You did not pass the exam"
  }</p>
	  ${
      passFailText === "Pass"
        ? `<br><p class="description-result">We\'ll send you the certificate in a few minutes. Check your email (including promotions / spam folder).</p>
          <a href="certificato.html" target="_blank">Download Certificate</a>
        `
        : '<p style="font-size: 100px;">😢</p>'
    }
	`;

  //*********************************************************************************+ */
  const divRequest = document.getElementById("divRequest");

  for (let i = 0; i < request.length; i++) {
    // Creare un nuovo div per la domanda e le risposte
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("questionContainer");

    questionDiv.innerHTML += `
        <h2><span class="indexRequest">${i + 1}. </span><b>${
      request[i].question
    }</b></h2>
    `;

    request[i].answers.forEach((answer) => {
      if (answer === request[i].correctAnswer) {
        questionDiv.innerHTML += `
                <p class="correctAnswer"><b>✅ ${answer}</b></p>
            `;
      } else if (answer === request[i].selectAnswer) {
        questionDiv.innerHTML += `
                <p class="selectedAnswers">❌ ${answer}</p>
            `;
      } else {
        questionDiv.innerHTML += `
                <p>⭕ ${answer}</p>
            `;
      }
    });

    if (request[i].selectAnswer === request[i].correctAnswer) {
      //se la risposta è corretta
      questionDiv.style.backgroundColor = "rgba(0, 128, 0, 0.3)"; //colore verde
    } else {
      questionDiv.style.backgroundColor = "rgba(255, 0, 0, 0.2)"; //colore rosso
    }

    // Aggiungere il div della domanda al div principale
    divRequest.appendChild(questionDiv);
    const hrQuestion = document.createElement("hr"); //aggiunge un hr
    hrQuestion.classList.add("hrQuestion");
    divRequest.appendChild(hrQuestion);
  }
}

// Aggiunge un event listener per il pulsante "RATE US" per reindirizzare alla pagina di feedback
document.querySelector(".bottoneResult").addEventListener("click", function () {
  window.location.href = "feedback.html";
});

////////////////////////////////////////

function launchConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;
  const colors = ["#00ffff", "#d20094"];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function checkAnswers(correctPercent) {
  if (correctPercent >= 60) {
    launchConfetti();
  } else {
    console.log("Meno di 60 risposte corrette");
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  checkAnswers(correctPercent);
});
