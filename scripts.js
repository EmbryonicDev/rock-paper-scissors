// *** ↓ Game Code ↓ ***
const gameOptions = ["Rock", "Paper", "Scissors"]
const roundsToWin = 3;
let userScore = 0;
let computerScore = 0;

function computerPlay() {
  return(gameOptions[Math.floor(Math.random() * gameOptions.length)]);
}

const mainDispl = document.querySelector('#mainDispl');
const output = document.createElement('p');
output.classList.add('output');

function selectionOutput(playerSelection, computerSelection) {
  output.innerText = 'Player selected: ' + playerSelection;
  output.innerText += '\nComputer selected: ' + computerSelection;
  mainDispl.append(output);
  console.log('Player selected: ' + playerSelection);
  console.log('Computer selected: ' + computerSelection);
}

const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', () => {
  let playerSelection = gameOptions[0];
  let computerSelection = computerPlay();
  selectionOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  scoreCheck();
});

const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', () => {
  let playerSelection = gameOptions[1];
  let computerSelection = computerPlay();
  selectionOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  scoreCheck();
});

const btnScissors = document.querySelector('.btnScissors');
btnScissors.addEventListener('click', () => {
  let playerSelection = gameOptions[2];
  let computerSelection = computerPlay();
  selectionOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  scoreCheck();
});

function scoreCheck() {
  if(userScore == roundsToWin || computerScore == roundsToWin) {
    console.log("Game Over!");
    if(userScore > computerScore) {
      console.log("You Won the Game!");
    } else {
      console.log("You Lost the Game!");
    }
    userScore = 0;
    computerScore = 0;
    console.log("Choose your weapon to start a new game...");
  }
}

function playRound(playerSelection, computerSelection) {
  if((playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Rock" && computerSelection == "Scissors")) {
    userScore += 1;
    console.log(`You Win this Round! ${playerSelection} Beats ${computerSelection}...`);
    console.log(`Your Score = ${userScore}, Computer Score = ${computerScore}`);
    console.log("");
  } else if((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
    computerScore += 1;
    console.log(`You Lose this Round! ${computerSelection} Beats ${playerSelection}...`);
    console.log(`Your Score = ${userScore}, Computer Score = ${computerScore}`);
    console.log("");
  } else if(computerSelection == playerSelection) {
    console.log("It's a Tie! Let's Try Again...");
    console.log("");
  } else {
      console.log("You did not Choose a Valid Option! Concentrate, & Try Again!");
      console.log("");
  }
}
