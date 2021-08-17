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

let startClick = document.getElementById("start-btn");
startClick.addEventListener("click", start);

let questionSelect = document.getElementById("question-placeholder");
let buttonsSelect = document.getElementById("answer-buttons-container");
let resetButton = document.getElementById("rest-btn");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

let currentQuiz = 0;
let score = 0;

function start() {
  startClick.classList.add("hide");
  let hideInstruct = document.getElementById("instruct");
  hideInstruct.classList.add("hide");
  let questionsShow = document.getElementById("flex-container");
  questionsShow.classList.remove("hide");
  displayQuestions();
}

function displayQuestions() {
  let quizData = quizquestions[currentQuiz];
  questionSelect.innerText = quizData.question;
  a.innerText = quizData.a;
  b.innerText = quizData.b;
  c.innerText = quizData.c;
  d.innerText = quizData.d;
}

function CheckAnswers() {}

function CheckScore() {}

// questions

// Instructions Bar //

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
