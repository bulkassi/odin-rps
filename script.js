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
