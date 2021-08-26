// fade in home screen //

let splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 5000);
});

// Instruction Box //

let modal = document.getElementById("myModal");

let btn = document.getElementById("instruct");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Question Pool //

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

// Global Selectors - DOM //

let questionSelect = document.getElementById("question-placeholder");
let answers = Array.from(document.getElementsByClassName("choice-text"));
let homeScreen = document.getElementById("home");
let scoreBoard = document.getElementById("score-board");
let questionsShow = document.getElementById("flex-container");
let reset = document.getElementById("reset");
let counterBoard = document.getElementById("hud-item");
let counterText = document.getElementById("questionCounter");

let currentQuestion = {};
let avaliableQuestions = [];
let questionCounter = 0;

let startClick = document.getElementById("start-btn");
startClick.addEventListener("click", start);

// Start Function
// Removes HP image along with buttons
// Question & Answer Buttons Appear

function start() {
  homeScreen.classList.add("hide");
  startClick.classList.add("hide");
  questionsShow.classList.remove("hide");
  scoreBoard.classList.remove("hide");
  reset.classList.remove("hide");
  counterBoard.classList.remove("hide");
  questionCounter = 0;
  avaliableQuestions = [...quizquestions];
  displayQuestions();
}

// Display Questions Function
// Random Question Chosen from Pool &
// Questions & Answer Populated in DOM

function displayQuestions() {
  if (questionCounter == 5) {
    return window.location.assign("gameover.html");
  }
  questionCounter++;
  counterText.innerText = `${questionCounter}/5`;
  let index = Math.floor(Math.random() * avaliableQuestions.length);
  currentQuestion = avaliableQuestions[index];
  questionSelect.innerText = currentQuestion.question;

  answers.forEach((answer) => {
    const number = answer.dataset["number"];
    answer.innerText = currentQuestion["choice" + number];
  });

  avaliableQuestions.splice(index, 1);
}

// Check Answer Function
// Will check if selected Answer is correct.
// Button will change colour accordingly

answers.forEach((answer) => {
  answer.addEventListener("click", (e) => {
    let selectedChoice = e.target;
    let selectedAnswer = selectedChoice.dataset["number"];
    checkAnswer();
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
  });
});

// Score Board Function - If Question
// is answered correct this will increment by 1

function CorrectAnswer() {
  let correctScore = parseInt(document.getElementById("correct").innerText);
  document.getElementById("correct").innerText = ++correctScore;
  localStorage.setItem("most-recent-score", correctScore);
}

// Score Board Function - If Question
// is answered incorrect this will increment by 1

function WrongAnswer() {
  let incorrectScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++incorrectScore;
}
