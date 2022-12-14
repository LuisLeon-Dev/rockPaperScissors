//player selection
function playerSelection() {
  let selection = prompt("Choice your weapon: rock, paper or scissors");
  console.log(`Player: ${selection}`);
  return selection;
}

//Computer choice

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  choice = Math.floor(Math.random() * 3);

  if (choice == 0) {
    console.log(`Computer: ${options[0]}`);
    return options[choice];
  } else if (choice == 1) {
    console.log(`Computer: ${options[1]}`);
    return options[choice];
  } else if (choice == 2) {
    console.log(`Computer: ${options[2]}`);
    return options[choice];
  } else {
    console.log("Error! try again");
  }
}

//Game function
function playRound(player, computer) {
  if (player == computer) {
    console.log("It's a draw");
  } else if (player == "rock" && computer == "scissors") {
    console.log("Player Wins!");
  } else if (player == "rock" && computer == "paper") {
    console.log("Computer Wins!");
  } else if (player == "paper" && computer == "rock") {
    console.log("Player Wins!");
  } else if (player == "paper" && computer == "scissors") {
    console.log("Computer Wins!");
  } else if (player == "scissors" && computer == "paper") {
    console.log("Player Wins!");
  } else if (player == "scissors" && computer == "rock") {
    console.log("Computer Wins!");
  } else {
    console.log("Something went wrong!");
  }
}

playRound(playerSelection(), getComputerChoice());
