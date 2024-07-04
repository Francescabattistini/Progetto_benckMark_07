const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language, they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  // Domande di difficoltà media
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which company developed the video game Fortnite?",
    correct_answer: "Epic Games",
    incorrect_answers: ["Activision", "Blizzard", "Valve"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The first computer bug was an actual insect.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "What does the acronym HTTP stand for?",
    correct_answer: "HyperText Transfer Protocol",
    incorrect_answers: [
      "HyperText Transmission Protocol",
      "HighText Transfer Protocol",
      "HyperText Transfer Program",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "The Windows 7 operating system has six main editions.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language is designed for managing data in a relational database?",
    correct_answer: "SQL",
    incorrect_answers: ["Python", "Java", "C++"],
  },
  // Domande di difficoltà difficile
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question:
      "The Turing Award is often referred to as the 'Nobel Prize of Computing'.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Who is known as the 'father of theoretical computer science and artificial intelligence'?",
    correct_answer: "Alan Turing",
    incorrect_answers: [
      "Charles Babbage",
      "John von Neumann",
      "Claude Shannon",
    ],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "The IBM PC was first released in 1981.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the name of the first electronic general-purpose computer?",
    correct_answer: "ENIAC",
    incorrect_answers: ["UNIVAC", "EDSAC", "Colossus"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "The programming language 'Ruby' was developed in Japan.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
];

//---------- TO DO LIST ----------

// 1. Randomizziamo le domande (OK)
// 2. Creiamo il div dove si vedranno domande (OK)
// 3. Visualizziamo le domande + indice (OK)
// 4. Randomizziamo le risposte (OK)
// 5. Creiamo i bottoni con il loro testo interno (OK)
// 6. Gestione del click del bottone (OK)
// 7. Creazione di due counter (uno per le risposte correte e uno per le risposte a cui abbiamo risposto) (OK)
// 8. Creazione di due local storage per i counters (OK)
// 9. Timer da libreria

// Dichiarazione Variabili

const textQuestion = document.getElementById("titleBoxQuestion");
const footerNumber = document.getElementById("footerNumber");
const seconds = document.getElementById("seconds");
let displayIndex = 0;
let correctAnswer = 0;
let numberOfQuestions = 10;
let timer; //variabile per lo scorrere del tempo
let strike = 0;

window.addEventListener("blur", function () {
  strike++;
  if (strike >= 3) {
    localStorage.setItem("userScore", false);
    localStorage.setItem("totalQuestions", numberOfQuestions);
    window.location.href = "result.html";
  }
});

window.onload = () => {
  init();
};

if (history.length >= 0) history.forward(); //funzione per bloccare il tasto per tornare indietro

history.pushState(null, null, location.href); //funzione per bloccare il tasto per tornare indietro
window.onpopstate = function () {
  history.go(1);
};

function init() {
  randomize(questions);
  displayQuestions(displayIndex);
}

function randomize(array) {
  let currentIndex = array.length - 1; //----- Mettiamo qui il (- 1) per far si che non vad ad intaccare il random
  console.log(currentIndex);
  let temporaryValue;
  let randomIndex;
  for (let i = currentIndex; i >= 0; i--) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//***************************************************************************************************** */
function displayQuestions(index) {
  textQuestion.innerText = questions[index].question;
  footerNumber.innerHTML =
    '<span style="color:white">QUESTION </span>' +
    (index + 1) +
    "<span> / 10 </span>";
  const allAnswers = [];

  allAnswers.push(
    ...questions[index].incorrect_answers,
    questions[index].correct_answer
  );
  randomize(allAnswers);

  const bodyBoxRow = document.getElementById("bodyBoxRow");
  bodyBoxRow.innerHTML = "";
  for (let i = 0; i < allAnswers.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("button-answer");
    btn.innerText = allAnswers[i];
    bodyBoxRow.appendChild(btn);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      clearInterval(timer);
      if (allAnswers[i] === questions[index].correct_answer) {
        correctAnswer++;
      }
      displayIndex++;
      if (displayIndex < numberOfQuestions) {
        displayQuestions(displayIndex);
      } else {
        localStorage.setItem("userScore", correctAnswer);
        localStorage.setItem("totalQuestions", numberOfQuestions);
        window.location.href = "result.html";
      }
    });
  }
  circleProgress(differentTiming(questions[index]));
}

//***************************************************************************************************** */
function circleProgress(duration) {
  const totalTime = duration; // Tempo totale in secondi
  let remainingTime = totalTime; //è il tempo che va scendere, quindi che viene aggiornato

  const circle = document.querySelector(".progress-ring__circle");
  const radius = circle.r.baseVal.value; //per lo stile del cerchio
  const circumference = 2 * Math.PI * radius;
  const updateInterval = 100; // Aggiorna ogni 100 millisecondi
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference; // Inizia pieno

  // Funzione per aggiornare il timer e il cerchio di progresso con animazione
  function updateTimer() {
    remainingTime -= updateInterval / 1000;
    seconds.textContent = Math.ceil(remainingTime);

    // Applichiamo un'animazione fluida all'offset del cerchio di progresso
    const progress = circumference * (remainingTime / totalTime);
    circle.style.transition = "stroke-dashoffset 0.1s linear";
    circle.style.strokeDashoffset = circumference - progress; // Invertiamo l'offset

    // controllo
    if (remainingTime <= 0) {
      clearInterval(timer);
      displayIndex++;
      if (displayIndex < numberOfQuestions) {
        //controllo se è finito l'array di oggetti
        displayQuestions(displayIndex); //avvia la funzione di sopra show, quindi compare una nuova domanda
      } else {
        localStorage.setItem("userScore", correctAnswer);
        localStorage.setItem("totalQuestions", numberOfQuestions);
        window.location.href = "result.html";
      }
    }
  }
  // Chiamiamo la funzione ogni 100 millisecondi
  timer = setInterval(updateTimer, updateInterval);
}

function differentTiming(array) {
  if (array.difficulty === "easy" && array.type === "boolean") {
    return 20;
  } else if (array.difficulty === "easy" && array.type === "multiple") {
    return 30;
  } else if (array.difficulty === "medium" && array.type === "boolean") {
    return 30;
  } else if (array.difficulty === "medium" && array.type === "multiple") {
    return 60;
  } else if (array.difficulty === "hard" && array.type === "boolean") {
    return 40;
  } else if (array.difficulty === "hard" && array.type === "multiple") {
    return 120;
  } else {
    return 60;
  }
}
