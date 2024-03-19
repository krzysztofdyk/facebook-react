let cartQuantity = 0;
let computerMove = "";

function computerChoose() {
  const randomNumber = Math.random(0, 1);
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  console.log(`Computer move is: ${computerMove}`);
}

function paperMove() {
  console.clear();
  computerChoose();
  console.log(`User move is: paper`);
}
function rockMove() {
  console.clear();
  computerChoose();
  console.log(`User move is: rock`);
}
function scissorsMove() {
  console.clear();
  computerChoose();
  console.log(`User move is: scissors`);
}
