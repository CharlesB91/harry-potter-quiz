let start = document.getElementById("start-btn");
start.addEventListener("click", start);

function start() {
  startButton.classList.add("hide");
  let hideInstruct = document.getElementById("instruct");
  hideInstruct.classList.add("hide");
  let questionsShow = document.getElementById("flex-container");
  questionsShow.classList.remove("hide");
  displayFirstQuestion();
}

function displayFirstQuestion() {
  let first = document.getElementById("question-placeholder");
}

function NextQuestion() {}

function CheckAnswers() {}

function CheckScore() {}

// questions

const questions = [
  {
    question1: "What Is Hermione's Cat Called",
    answer1: "Scabbers",
    answer2: "Hedwig",
    answer3: "Crookshanks",
    answer4: "Snape",
  },
  {
    question2: "What Is Voldemort's Real Name",
    answer1: "Tom Riddle",
    answer2: "Albus Dumbledore",
    answer3: "Bellatrix Lestrange",
    answer4: "Ron Weasley",
  },
  {
    question3: "What Was The Last Horcrux",
    answer1: "Harry Potter",
    answer2: "Nagini",
    answer3: "The Cup",
    answer4: "Tom Riddle's Diary",
  },
  {
    question4: "Who Killed Dumbledore",
    answer1: "Voldermort",
    answer2: "Hagrid",
    answer3: "Severus Snape",
    answer4: "Draco Malfoy",
  },
  {
    question5: "What Was Harry Potter's Mums Name",
    answer1: "Lilly",
    answer2: "Margaret",
    answer3: "Karen",
    answer4: "Sandra",
  },
];

// Instructions Bar //

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
