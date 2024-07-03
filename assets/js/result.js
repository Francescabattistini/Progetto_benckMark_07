	// Recupera il punteggio dell'utente dal localStorage
	const userScore = localStorage.getItem('userScore') ? localStorage.getItem('userScore') : 0;
  	console.log(userScore);
  
	// Calcola il numero totale di domande
	const totalQuestions = localStorage.getItem('totalQuestions') ? parseInt(localStorage.getItem('totalQuestions')) : 0;
	console.log(totalQuestions);
  
	// Calcola il numero di risposte corrette e scorrette
	const correctAnswers = userScore;
	const incorrectAnswers = totalQuestions - correctAnswers;
  
	// Calcola le percentuali di risposte corrette e scorrette
	const correctPercent =((correctAnswers / totalQuestions) * 100);
	const incorrectPercent = 100 - correctPercent;
  
	history.pushState(null, null, location.href);
	window.onpopstate = function () {
		history.go(1);
	};

	if(userScore === "false") {
		const par = document.getElementById('cheater')
		par.innerText = "ti ho fregato";
		const chartBox = document.getElementById("chart-box")
		chartBox.style.height = "0px";
		const myChart = document.getElementById("my-chart") //questi non vanno
		myChart.style.height = "0px";
		const canvas = document.querySelector('canvas')
		canvas.remove();

	} else {
	// Aggiorna il contenuto del div delle risposte corrette
	document.querySelector('#correctDiv .correct-content').innerHTML = `
	  <h1>Correct</h1>
	  <strong><span>${correctPercent}</span>%</strong>
	  <h6 class="result-questions"><span>${correctAnswers}</span> / ${totalQuestions} questions</h6>
	`;
  
	// Aggiorna il contenuto del div delle risposte scorrette
	document.querySelector('#wrongDiv .wrong-content').innerHTML = `
	  <h1>Wrong</h1>
	  <strong><span>${incorrectPercent}</span>%</strong>
	  <h6 class="result-questions"><span>${incorrectAnswers}</span> / ${totalQuestions} questions</h6>
	`;
  
	// Configura e crea il grafico a ciambella utilizzando Chart.js
	const ctx = document.getElementById('my-chart').getContext('2d');
	const chart = new Chart(ctx, {
	  type: 'doughnut',
	  data: {
		labels: ['incorrect', 'correct'],
		datasets: [{
			data: [incorrectAnswers,correctAnswers],
		  backgroundColor: ['#C2128D', '#00FFFF'],
		  borderWidth: 0,
		  
		}]
	  },
	  options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
		  legend: {
			display: false
		  }
		},
		cutout: '70%'
	  }
	});
  
	// Determina se l'utente ha passato o fallito l'esame
	const passFailText = correctAnswers >= 6 ? 'Pass' : 'Fail';
  
	// Aggiorna il contenuto interno del grafico a ciambella
	document.getElementById('inner-chart').innerHTML = `
	  <p class="title-chart">${passFailText === 'Pass' ? 'Congratulations!' : 'Try Again!'}</p>
	  <p class="${passFailText === 'Pass' ? 'blue' : 'red'}">${passFailText === 'Pass' ? 'You passed the exam' : 'You did not pass the exam'}</p>
	  ${passFailText === 'Pass' ? '<br><p class="description-result">We\'ll send you the certificate in a few minutes. Check your email (including promotions / spam folder)</p>' : ''}
	`;
}


	// Aggiunge un event listener per il pulsante "RATE US" per reindirizzare alla pagina di feedback
	document.querySelector('footer button').addEventListener('click', function() {
	  window.location.href = 'feedback.html';
	});

  