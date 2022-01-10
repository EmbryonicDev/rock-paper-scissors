// *** ↓ Game Code ↓ ***
const gameOptions = ["Rock", "Paper", "Scissors"]
const roundsToWin = 2;
let userScore = 0;
let compScore = 0;

function computerPlay() {
  return(gameOptions[Math.floor(Math.random() * gameOptions.length)]);
}

const mainDispl = document.querySelector('#mainDispl');
const mainOutput = document.createElement('p');
const userDispl = document.querySelector('#userDispl');
const userOutput = document.createElement('p');
const compDispl = document.querySelector('#compDispl');
const compOutput = document.createElement('p');

function selectionmainOutput(playerSelection, computerSelection) {
  userOutput.innerText = 'Player Selected: ' + playerSelection;
  compOutput.innerText = 'Computer Selected: ' + computerSelection;
  compDispl.append(compOutput);
  userDispl.append(userOutput);
}

const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', () => {
  let playerSelection = gameOptions[0];
  let computerSelection = computerPlay();
  selectionmainOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  scoreCheck();
});

const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', () => {
  let playerSelection = gameOptions[1];
  let computerSelection = computerPlay();
  selectionmainOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  scoreCheck();
});

const btnScissors = document.querySelector('.btnScissors');
btnScissors.addEventListener('click', () => {
  let playerSelection = gameOptions[2];
  let computerSelection = computerPlay();
  selectionmainOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  scoreCheck();
});

function scoreCheck() {
  mainDispl.append(mainOutput);
  userOutput.innerText += `\nScore: ${userScore}`;
  compOutput.innerText += `\nScore: ${compScore}`;
  if(userScore == roundsToWin || compScore == roundsToWin) {
    mainOutput.innerText = "Game Over!";
    if(userScore > compScore) {
      mainOutput.innerText += `\nYou Won the Game! \n\nFinal Score: \n Player Score: ${userScore} \nComputer Score: ${compScore}`;
    } else {
      mainOutput.innerText += `\nYou Lost the Game! \n\nFinal Score: \n Player Score: ${userScore} \nComputer Score: ${compScore}`;
    }
    userScore = 0;
    compScore = 0;
    mainOutput.innerText += "\n\nChoose your weapon to start a new game...";
  }
}

function playRound(playerSelection, computerSelection) {
  if((playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Rock" && computerSelection == "Scissors")) {
    userScore += 1;
    mainOutput.innerText = (`You Win this Round!\n ${playerSelection} Beats ${computerSelection}...`);
  } else if((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
    compScore += 1;
    mainOutput.innerText = (`You Lose this Round! \n${computerSelection} Beats ${playerSelection}...`);
  } else if(computerSelection == playerSelection) {
    mainOutput.innerText = ("\n\nIt's a Tie! Let's Try Again...");
  } else {
      mainOutput.innerText += ("\nYou did not Choose a Valid Option! \nConcentrate, & Try Again!");

  }
}
