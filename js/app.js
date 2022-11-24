//Computer choice

function getComputerChoice() {
  let options = ["rock", "paper", "scissor"];
  choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    return options[0];
  } else if (choice == 1) {
    return options[1];
  } else if (choice == 2) {
    return options[2];
  } else {
    return "Error! try again";
  }
}

//player selection
function playerSelection() {
  let selection = "rock";
  return selection.toLowerCase();
}

//Game function
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" || computerSelection == "paper") {
    return "";
  }
}

const playerSelection = playerSelection();
const computerSelection = getComputerChoice();
