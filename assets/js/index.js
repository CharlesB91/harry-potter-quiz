let quizquestions = [
  {
    question: "What Is Hermione's Cat Called?",
    a: "Scabbers",
    b: "Hedwig",
    c: "Crookshanks",
    d: "Snape",
    correct: "c",
  },
  {
    question: "What Is Voldemort's Real Name",
    a: "Tom Riddle",
    b: "Albus Dumbledore",
    c: "Bellatrix Lestrange",
    d: "Ron Weasley",
    correct: "a",
  },
  {
    question: "What Was The Last Horcrux",
    a: "Harry Potter",
    b: "Nagini",
    c: "The Cup",
    d: "Tom Riddle's Diary",
    correct: "b",
  },
  {
    question: "Who Killed Dumbledore",
    a: "Voldermort",
    b: "Hagrid",
    c: "Severus Snape",
    d: "Draco Malfoy",
    correct: "c",
  },
  {
    question: "What Was Harry Potter's Mums Name",
    a: "Lilly",
    b: "Margaret",
    c: "Karen",
    d: "Sandra",
    correct: "a",
  },
];

let questionSelect = document.getElementById("question-placeholder");
let buttonsSelect = document.getElementById("answer-buttons-container");
let answerButtons = Array.from(document.getElementsByClassName("btn"));

let currentQuestion = {};
let acceptingAnswers = true;
let avaliableQuestions = [];

let startClick = document.getElementById("start-btn");
startClick.addEventListener("click", start);

function start() {
  startClick.classList.add("hide");
  let hideInstruct = document.getElementById("instruct");
  hideInstruct.classList.add("hide");
  let questionsShow = document.getElementById("flex-container");
  questionsShow.classList.remove("hide");
  displayQuestions();
}

function displayQuestions() {
  let index = Math.floor(Math.random() * quizquestions.length);
  currentQuestion = quizquestions[index];
  questionSelect.innerText = currentQuestion.question;
}

function checkAnswer() {}

function checkScore() {}

// questions

// Instructions Bar //

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
