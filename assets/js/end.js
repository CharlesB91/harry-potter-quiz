// Global DOM Selectors //

let mostRecentScore = localStorage.getItem("most-recent-score");
let scoreAlert = document.getElementById("sorting-hat-greeting");
let houseScore = document.getElementById("house-sort");
scoresOnDoors();

// Sorting Function. Depending on
// score player will be sorted into the house
// according to their score

function scoresOnDoors() {
  scoreAlert.innerText = `You Scored ${mostRecentScore} out of 5`;

  if (mostRecentScore == 5) {
    houseScore.innerText = "Better Be gryffindor";
  } else if (mostRecentScore < 5 && mostRecentScore > 3) {
    houseScore.innerText = "Welcome To Hufflepuff";
  } else if (mostRecentScore < 4 && mostRecentScore > 2) {
    houseScore.innerText = "Welcome To ravenclaw";
  } else if (mostRecentScore < 3 && mostRecentScore > 1) {
    houseScore.innerText = "Welcome To ravenclaw";
  } else {
    houseScore.innerText = "Down to the dungeons in slytherin";
  }
}

localStorage.clear();
