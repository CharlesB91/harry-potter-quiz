let quizquestions = [
  {
    question: "What Is Hermione's Cat Called?",
    choice1: "Scabbers",
    choice2: "Hedwig",
    choice3: "Crookshanks",
    choice4: "Snape",
    correct: "c",
  },
  {
    question: "What Is Voldemort's Real Name",
    choice1: "Tom Riddle",
    choice2: "Albus Dumbledore",
    choice3: "Bellatrix Lestrange",
    choice4: "Ron Weasley",
    correct: "a",
  },
  {
    question: "What Was The Last Horcrux",
    choice1: "Harry Potter",
    choice2: "Nagini",
    choice3: "The Cup",
    choice4: "Tom Riddle's Diary",
    correct: "b",
  },
  {
    question: "Who Killed Dumbledore",
    choice1: "Voldermort",
    choice2: "Hagrid",
    choice3: "Severus Snape",
    choice4: "Draco Malfoy",
    correct: "c",
  },
  {
    question: "What Was Harry Potter's Mums Name",
    choice1: "Lilly",
    choice2: "Margaret",
    choice3: "Karen",
    choice4: "Sandra",
    correct: "a",
  },
];

let questionSelect = document.getElementById("question-placeholder");
let buttonsSelect = document.getElementById("answer-buttons-container");
const choices = Array.from(document.getElementsByClassName("choice-text"));

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

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
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
