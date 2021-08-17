let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  let hideInstruct = document.getElementById("instruct");
  hideInstruct.classList.add("hide");
  let questionsShow = document.getElementById("flex-container");
  questionsShow.classList.remove("hide");
}

function NextQuestion() {}

function CheckAnswers() {}

function CheckScore() {}

// Instructions Bar //

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
