let questions = [
  [
    "What Is Hermione's Cat Called?",
    "Scabbers",
    "Hedwig",
    "Crookshanks",
    "Snape",
  ],
  [
    "What Is Voldemort's Real Name",
    "Tom Riddle",
    "Albus Dumbledore",
    "Bellatrix Lestrange",
    "Ron Weasley",
  ],
  [
    "What Was The Last Horcrux",
    "Harry Potter",
    "Nagini",
    "The Cup",
    "Tom Riddle's Diary",
  ],
  [
    "Who Killed Dumbledore",
    "Voldermort",
    "Hagrid",
    "Severus Snape",
    "Draco Malfoy",
    "answer3",
  ],
  [
    "What Was Harry Potter's Mums Name",
    "Lilly",
    "Margaret",
    "Karen",
    "Sandra",
    "answer1",
  ],
];

let startClick = document.getElementById("start-btn");
startClick.addEventListener("click", start);
let questionSelect = document.getElementById("question-placeholder");
let buttonsSelect = document.getElementById("answer-buttons-container");

function start() {
  startClick.classList.add("hide");
  let hideInstruct = document.getElementById("instruct");
  hideInstruct.classList.add("hide");
  let questionsShow = document.getElementById("flex-container");
  questionsShow.classList.remove("hide");
  displayFirstQuestion();
}

function displayFirstQuestion() {}

function NextQuestion() {}

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
