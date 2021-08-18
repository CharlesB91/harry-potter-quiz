let quizquestions = [
  {
    question: "What Is Hermione's Cat Called?",
    choice1: "Scabbers",
    choice2: "Hedwig",
    choice3: "Crookshanks",
    choice4: "Snape",
    correct: "",
  },
  {
    question: "What Is Voldemort's Real Name?",
    choice1: "Tom Riddle",
    choice2: "Albus Dumbledore",
    choice3: "Bellatrix Lestrange",
    choice4: "Ron Weasley",
    correct: "",
  },
  {
    question: "What Was The Last Horcrux?",
    choice1: "Harry Potter",
    choice2: "Nagini",
    choice3: "The Cup",
    choice4: "Tom Riddle's Diary",
    correct: "",
  },
  {
    question: "Who Killed Dumbledore?",
    choice1: "Voldermort",
    choice2: "Hagrid",
    choice3: "Severus Snape",
    choice4: "Draco Malfoy",
    correct: "",
  },
  {
    question: "Who is Dracos dad?",
    choice1: "Professor McGonagall",
    choice2: "Lucius Malfoy",
    choice3: "Barty Crouch",
    choice4: "Gaspar Avery",
    correct: "",
  },
  {
    question: "What Was Harry Potter's Mums Name",
    choice1: "Lilly",
    choice2: "Margaret",
    choice3: "Karen",
    choice4: "Sandra",
    correct: "",
  },
  {
    question: "Who did Ron Weasley's pet rat used to belong to?",
    choice1: "Lilly Potter",
    choice2: "Voldemort",
    choice3: "Percy Weasley",
    choice4: "Hagrid",
    correct: "",
  },
  {
    question: "What was Hagrid's pet dog called?",
    choice1: "Fang",
    choice2: "Scabbers",
    choice3: "Hegwig",
    choice4: "Buckbeak ",
    correct: "",
  },
  {
    question: "Who killed Dobby by throwing a knife at him?",
    choice1: "Voldemort",
    choice2: "Griphook",
    choice3: "Bellatrix Lestrange",
    choice4: "Lucius Malfoy",
    correct: "",
  },
  {
    question: "What position did Harry Potter play at Quidditch?",
    choice1: "Cat",
    choice2: "Stag",
    choice3: "Fox",
    choice4: "Dove",
    correct: "",
  },
];

let questionSelect = document.getElementById("question-placeholder");
let buttonsSelect = document.getElementById("answer-buttons-container");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
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
  avaliableQuestions.splice(quizquestions, 1);

  acceptingAnswers = true;
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    let selectedChoice = e.target;
    let selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    displayQuestions();
  });
});

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
