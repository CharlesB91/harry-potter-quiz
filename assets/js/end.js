// Global DOM Selectors //

let mostRecentScore = parseInt(localStorage.getItem("most-recent-score"));
let scoreAlert = document.getElementById("sorting-hat-greeting");
let houseScore = document.getElementById("house-sort");
let gryff = document.getElementById("gryffindor");
let huffle = document.getElementById("hufflepuff");
let raven = document.getElementById("ravenclaw");
let slyth = document.getElementById("slytherin");

scoresOnDoors();

// Sorting Function
// Depending on Score Player Will Be Sorted Into The House
// Corresponding house badge will display depending on score

function scoresOnDoors() {
  if (isNaN(mostRecentScore)) {
    mostRecentScore = 0;
  }

  scoreAlert.innerText = `You Scored ${mostRecentScore} out of 5`;

  if (mostRecentScore == 5) {
    gryff.classList.remove("hide2");
    houseScore.innerText = "Welcome To gryffindor";
  } else if (mostRecentScore < 5 && mostRecentScore > 3) {
    huffle.classList.remove("hide3");
    houseScore.innerText = "Welcome To Hufflepuff";
  } else if (mostRecentScore < 4 && mostRecentScore > 2) {
    raven.classList.remove("hide4");
    houseScore.innerText = "Welcome To ravenclaw";
  } else {
    slyth.classList.remove("hide5");
    houseScore.innerText = "Down to the dungeons in slytherin";
  }
}

localStorage.clear();

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
