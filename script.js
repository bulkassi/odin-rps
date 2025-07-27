function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return null;
  }
}

function getHumanChoice() {
  return prompt(
    "Rock-Paper-Scissors! Your Move! (enter 'Rock', 'Paper' or 'Scissors')"
  );
}

let humanScore = 0;
let computerScore = 0;

function humanWin() {
  console.log("Victory! You've beaten the computer!");
  humanScore++;
}

function computerWin() {
  console.log("Oops... You lost!");
  computerScore++;
}

function playRound(humanChoice, computerChoice) {
  let humanChoiceLC = humanChoice.toLowerCase();
  // Computer choice is already lowercased in getComputerChoice function

  if (humanChoiceLC === computerChoice) {
    console.log("It's a tie!");
  }

  switch (humanChoiceLC) {
    case "rock":
      // The computer choosing rock is covered in a tie section, so ternary operator is used
      computerChoice === "scissors" ? humanWin() : computerWin();
      break;
    case "paper":
      computerChoice === "rock" ? humanWin() : computerWin();
      break;
    case "scissors":
      computerChoice === "paper" ? humanWin() : computerWin();
      break;
    default:
      console.log("Hm... your choice wasn't recognized.");
  }
}
