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
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
            "Pointers were not used in the original C programming language; they were added later on in C++.",
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
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
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

const textQuestion = document.getElementById('titleBoxQuestion');
const footerNumber = document.getElementById('footerNumber');
let displayIndex = 0;
let correctAnswer = 0;
let numberOfQuestions = 10;


window.onload = () => {
    init()
};

function init() {
    randomize(questions);
    displayQuestions(displayIndex);
};


function randomize(array) {

    let currentIndex = array.length - 1; //----- Mettiamo qui il (- 1) per far si che non vad ad intaccare il random 
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

function displayQuestions(index) {

    textQuestion.innerText = questions[index].question;
    footerNumber.innerHTML = (index + 1) + '<span> / 10 </span>';
    const allAnswers = [];

    allAnswers.push(...questions[index].incorrect_answers, questions[index].correct_answer)
    randomize(allAnswers);

    const bodyBoxRow = document.getElementById('bodyBoxRow');
    bodyBoxRow.innerHTML = '';
    for (i = 0; i < allAnswers.length; i++) {
        const btn = document.createElement('button');
        btn.classList.add('button-answer');
        btn.innerText = allAnswers[i];
        bodyBoxRow.appendChild(btn);
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (allAnswers[i] === questions[index].correct_answer) {
                correctAnswer++;
            }
            displayIndex++;
            if (displayIndex < numberOfQuestions) {
                displayQuestions(displayIndex);
            } else {
                localStorage.setItem('userScore', correctAnswer);
                localStorage.setItem('totalQuestions', numberOfQuestions);
                window.location.href = '../Results.html';
            }
        })
    }
}
