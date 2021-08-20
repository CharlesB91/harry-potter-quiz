let quizquestions = [
  {
    question: "What Is Hermione's Cat Called?",
    choice1: "Scabbers",
    choice2: "Hedwig",
    choice3: "Crookshanks",
    choice4: "Snape",
    correct: 3,
  },
  {
    question: "What Is Voldemort's Real Name?",
    choice1: "Tom Riddle",
    choice2: "Albus Dumbledore",
    choice3: "Bellatrix Lestrange",
    choice4: "Ron Weasley",
    correct: 1,
  },
  {
    question: "What Was The Last Horcrux?",
    choice1: "Harry Potter",
    choice2: "Nagini",
    choice3: "The Cup",
    choice4: "Tom Riddle's Diary",
    correct: 2,
  },
  {
    question: "Who Killed Dumbledore?",
    choice1: "Voldermort",
    choice2: "Hagrid",
    choice3: "Severus Snape",
    choice4: "Draco Malfoy",
    correct: 3,
  },
  {
    question: "Who is Dracos dad?",
    choice1: "McGonagall",
    choice2: "Lucius Malfoy",
    choice3: "Barty Crouch",
    choice4: "Gaspar Avery",
    correct: 2,
  },
  {
    question: "What Was Harry Potter's Mums Name",
    choice1: "Lilly",
    choice2: "Margaret",
    choice3: "Karen",
    choice4: "Sandra",
    correct: 1,
  },
  {
    question: "Who did Ron Weasley's pet rat used to belong to?",
    choice1: "Lilly Potter",
    choice2: "Voldemort",
    choice3: "Percy Weasley",
    choice4: "Hagrid",
    correct: 3,
  },
  {
    question: "What was Hagrid's pet dog called?",
    choice1: "Fang",
    choice2: "Scabbers",
    choice3: "Hegwig",
    choice4: "Buckbeak ",
    correct: 1,
  },
  {
    question: "Who killed Dobby by throwing a knife at him?",
    choice1: "Voldemort",
    choice2: "Griphook",
    choice3: "Bellatrix Lestrange",
    choice4: "Lucius Malfoy",
    correct: 3,
  },
  {
    question: "What was Harry’s Patronus?",
    choice1: "Cat",
    choice2: "Stag",
    choice3: "Fox",
    choice4: "Dove",
    correct: 2,
  },
];

let questionSelect = document.getElementById("question-placeholder");
let buttonsSelect = document.getElementById("answer-buttons-container");
let answers = Array.from(document.getElementsByClassName("choice-text"));
let playAgain = document.getElementById("play-again");
let image = document.getElementById("hp-logo");
let scoreBoard = document.getElementById("score-board");
let hideInstruct = document.getElementById("instruct");
let questionsShow = document.getElementById("flex-container");

let currentQuestion = {};
let avaliableQuestions = [];
let questionCounter = 0;

let startClick = document.getElementById("start-btn");
startClick.addEventListener("click", start);

function start() {
  image.classList.add("hide");
  startClick.classList.add("hide");
  hideInstruct.classList.add("hide");
  questionsShow.classList.remove("hide");
  scoreBoard.classList.remove("hide");
  questionCounter = 0;
  avaliableQuestions = [...quizquestions];
  displayQuestions();
}

function displayQuestions() {
  if (questionCounter == 5) {
    return window.location.assign("gameover.html");
  }
  questionCounter++;
  let index = Math.floor(Math.random() * avaliableQuestions.length);
  currentQuestion = avaliableQuestions[index];
  questionSelect.innerText = currentQuestion.question;

  answers.forEach((answer) => {
    const number = answer.dataset["number"];
    answer.innerText = currentQuestion["choice" + number];
  });

  avaliableQuestions.splice(index, 1);
}

answers.forEach((answer) => {
  answer.addEventListener("click", (e) => {
    selectedChoice = e.target;
    selectedAnswer = selectedChoice.dataset["number"];
    checkAnswer();
  });
});

function checkAnswer() {
  if (selectedAnswer == currentQuestion.correct) {
    selectedChoice.classList.add("correct");
    CorrectAnswer();
  } else {
    selectedChoice.classList.add("incorrect");
    WrongAnswer();
  }
  setTimeout(function () {
    selectedChoice.classList.remove("correct");
    selectedChoice.classList.remove("incorrect");
    displayQuestions();
  }, 1000);
}

function CorrectAnswer() {
  let correctScore = parseInt(document.getElementById("correct").innerText);
  document.getElementById("correct").innerText = ++correctScore;
  localStorage.setItem("most-recent-score", correctScore);
}

function WrongAnswer() {
  let incorrectScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++incorrectScore;
}

// Instructions Bar //

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
