const playerButtons = document.querySelectorAll("button");

const playerScoreContainer = document.getElementById("player-score-container");
const playerScoreTotal = document.createElement("div");
playerScoreTotal.classList.add("player-score-total");
playerScoreTotal.textContent = "0";
playerScoreContainer.appendChild(playerScoreTotal);

const computerScoreContainer = document.getElementById("computer-score-container");
const computerScoreTotal = document.createElement("div");
computerScoreTotal.classList.add("computer-score-total");
computerScoreTotal.textContent = "0";
computerScoreContainer.appendChild(computerScoreTotal);

const roundResult = document.querySelector(".round-result");

const gameResult = document.querySelector(".game-result");

function computerPlay(choices) {
  choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
  (playerSelection === "PAPER" && computerSelection === "ROCK") ||
  (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
    playerScoreTotal.textContent = ++playerScore;
    roundResult.textContent = `YOU WIN! ${playerSelection} BEATS ${computerSelection}.`;
  } else if ((playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
  (playerSelection === "ROCK" && computerSelection === "PAPER") ||
  (playerSelection === "PAPER" && computerSelection === "SCISSORS")) {
    computerScoreTotal.textContent = ++computerScore;
    roundResult.textContent = `YOU LOSE! ${computerSelection} BEATS ${playerSelection}.`;
  } else {
    roundResult.textContent = `YOU TIED! YOU BOTH CHOSE ${computerSelection}.`;
  }
  declareWinner();
}

function declareWinner() {
  if ((playerScore === 5) && (computerScore === 5)) {
    gameResult.textContent = `YOU TIED! THERE IS NO WINNER.`;
    disableButtons();
  } else if ((playerScore === 5) && (computerScore < 5)) {
    gameResult.textContent = `YOU WON THE GAME!`;
    disableButtons();
  } else if ((playerScore < 5) && (computerScore === 5)) {
    gameResult.textContent = `SORRY, YOU LOST TO THE COMPUTER!`;
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
};

function playGame() {
  playerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let computerSelection = computerPlay();
      playerSelection = button.id.toUpperCase();
      playRound(playerSelection, computerSelection);
    });
  });
}

playGame();
