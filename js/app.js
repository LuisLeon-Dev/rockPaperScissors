//variables
let cpuScore = 0;
let playerScore = 0;
let playerChoice,
  cpuChoice,
  rounds = 0;

//DOM elements
const text = document.getElementById("text");
const playerChoiceImage = document.getElementById("playerChoice");
const score = document.getElementById("playerScore");
const cpuChoiceImage = document.getElementById("cpuChoice");
const computerScore = document.getElementById("cpuScore");

//buttons
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const restartButton = document.getElementById("restartButton");

restartButton.style.display = "none";
playerChoiceImage.style.display = "none";
cpuChoiceImage.style.display = "none";

const cpuSelection = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  cpuChoiceImage.src = `./img/${choices[randomChoice]}.png`;
  return choices[randomChoice];
};

const compareChoices = (player, cpu) => {
  if (player === cpu) {
    playerScore;
    cpuScore;
  } else if (
    (player === "rock" && cpu === "scissors") ||
    (player === "paper" && cpu === "rock") ||
    (player === "scissors" && cpu === "paper")
  ) {
    playerScore++;
    score.textContent = playerScore;
  } else {
    cpuScore++;
    computerScore.textContent = cpuScore;
  }

  rounds++;

  if (rounds === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    restartButton.style.display = "block";

    if (playerScore === cpuScore) {
      text.textContent = "It's a draw!";
    } else if (playerScore > cpuScore) {
      text.textContent = "You win!";
    } else {
      text.textContent = "CPU wins!";
    }
  }
};

const play = (choice) => {
  playerChoiceImage.style.display = "block";
  cpuChoiceImage.style.display = "block";
  playerChoiceImage.src = `./img/${choice}.png`;
  playerChoice = choice;
  cpuChoice = cpuSelection();
  compareChoices(playerChoice, cpuChoice);
};

rockButton.addEventListener("click", () => {
  play("rock");
});

paperButton.addEventListener("click", () => {
  play("paper");
});

scissorsButton.addEventListener("click", () => {
  play("scissors");
});

restartButton.addEventListener("click", () => {
  rounds = 0;
  playerScore = 0;
  cpuScore = 0;
  playerChoiceImage.style.display = "none";
  cpuChoiceImage.style.display = "none";
  computerScore.textContent = 0;
  score.textContent = 0;
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
  restartButton.style.display = "none";
  text.textContent = "";
});
