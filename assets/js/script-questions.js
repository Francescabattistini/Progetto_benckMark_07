// let timer = document.getElementById('seconds')

// let timeLeft = 10;
// function countdown() {
//     if (timeLeft === 0) {
//         console.log("Tempo scaduto!");
//     } else {
//         timer.innerText = `${timeLeft}`;
//         timeLeft--;
//         setTimeout(countdown, 1000);
//     }
// }

// countdown();

// Variabili //

let counterCorrect = 0;
let counterWrong = 0;
let randomQuestion;
let selectedAnswer;

window.onload = function () {
    init();
}

function init() {
    pickRandomQuestion();
    displayRandomQuestion();
    let answerContainer = document.querySelectorAll('.button-answer');
    answerContainer.forEach((button) => { button.addEventListener('click', () => handleAnswer(selectedAnswer, randomQuestion)) });

}


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

let shownQuestionIndex = [];
let availableIndex = [];


function pickRandomQuestion() {
    if (availableIndex.length === 0) {
        for (i = 0; i < questions.length; i++) {
            if (!shownQuestionIndex.includes(i)) {
                availableIndex.push(i);
            }
        };
    };

    const randomIndex = availableIndex[Math.floor(Math.random() * questions.length)];
    shownQuestionIndex.push(randomIndex);
    availableIndex = availableIndex.filter(index => index !== randomIndex);
    return questions[randomIndex];
};


function displayRandomQuestion() {
    const randomQuestion = pickRandomQuestion();
    let questionContainer = document.getElementById('titleBoxQuestion')
    let answerContainer = document.querySelectorAll('.button-answer')

    questionContainer.innerText = `${randomQuestion.question}`;

    const allAnswers = [...randomQuestion.incorrect_answers];
    const correctIndex = Math.floor(Math.random() * (allAnswers.length) + 1);
    allAnswers.splice(correctIndex, 0, randomQuestion.correct_answer);

    for (i = 0; i < allAnswers.length; i++) {
        answerContainer[i].innerText = `${allAnswers[i]}`;
    }
}

function handleAnswer(selectedAnswer, randomQuestion) {
    if (selectedAnswer === randomQuestion.correct_answer) {
        counterCorrect++;
    } else {
        counterWrong++;
    }
    console.log(`Risposte corrette: ${counterCorrect}, Risposte sbagliate: ${counterWrong}`);
};
