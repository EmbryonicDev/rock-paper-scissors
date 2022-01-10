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
    output.innerText = "Game Over!";
    if(userScore > computerScore) {
      output.innerText += "\nYou Won the Game!";
    } else {
      output.innerText += "\nYou Lost the Game!";
    }
    userScore = 0;
    computerScore = 0;
    output.innerText += "\n\nChoose your weapon to start a new game...";
  }
}

function playRound(playerSelection, computerSelection) {
  if((playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Rock" && computerSelection == "Scissors")) {
    userScore += 1;
    output.innerText += (`\nYou Win this Round! \n${playerSelection} Beats ${computerSelection}...`);
    output.innerText += (`\nYour Score = ${userScore} \nComputer Score = ${computerScore}`);
    output.innerText += ("\n");
  } else if((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
    computerScore += 1;
    output.innerText += (`\nYou Lose this Round! \n${computerSelection} Beats ${playerSelection}...`);
    output.innerText += (`\nYour Score = ${userScore} \nComputer Score = ${computerScore}`);
    output.innerText += ("\n");
  } else if(computerSelection == playerSelection) {
    output.innerText += ("\nIt's a Tie! Let's Try Again...");
    output.innerText += ("\n");
  } else {
      output.innerText += ("\nYou did not Choose a Valid Option! \nConcentrate, & Try Again!");
      output.innerText += ("\n");
  }
}
