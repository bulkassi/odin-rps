let playButtons = document.querySelector("#play-buttons");

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

playButtons.addEventListener("click", (e) => {
  let targetButton = e.target;

  if (targetButton.parentNode.id === "play-buttons") {
    // Since all play buttons, and only them, are children of play-buttons div
    playRound(targetButton.id, getComputerChoice());
  }
});

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
    return;
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
