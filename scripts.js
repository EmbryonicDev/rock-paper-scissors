// *** ↓ Game Code ↓ ***
const gameOptions = ["Rock", "Paper", "Scissors"]
let roundsToWin = 2;
let userScore = 0;
let compScore = 0;
let userName = ""

const mainDispl = document.querySelector('#mainDispl');
const mainOutput = document.createElement('p');
mainOutput.classList.add('paraDispl');
const userDispl = document.querySelector('#userDispl');
const userOutput = document.createElement('p');
userOutput.classList.add('paraDispl');
const compDispl = document.querySelector('#compDispl');
const compOutput = document.createElement('p');
compOutput.classList.add('paraDispl');

userName = window.prompt("Choose Your Battle Name to Begin");
if(userName == null || userName.trim() == "") userName = "Player";

roundsToWin = window.prompt("How many Games will Declare the Winner?/nChoose Between 3 & 10");
while(roundsToWin == null || roundsToWin.trim() == "" || roundsToWin > 10 || roundsToWin < 3) {
  roundsToWin = window.prompt("How many Games will Declare the Winner?/nChoose Between 3 & 10");
}

mainOutput.innerText = `Welcome to the Galactic Battle Ground ${userName}!\n\nThe First Player to Score ${roundsToWin} Wins the Game.\n\n\nChoose  Your Weapon to Begin the Game\n ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ "`;
mainOutput.style.cssText = "font-size: 28px; text-align: center";
mainDispl.append(mainOutput);

function computerPlay() {
  return(gameOptions[Math.floor(Math.random() * gameOptions.length)]);
}

function selectionmainOutput(playerSelection, computerSelection) {
  userOutput.innerText = userName + '\'s Weapon: ' + playerSelection;
  compOutput.innerText = 'Computer\'s Weapon: ' + computerSelection;
  compDispl.append(compOutput);
  userDispl.append(userOutput);
}

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
  let playerSelection = gameOptions[0];
  let computerSelection = computerPlay();
  selectionmainOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  scoreCheck();
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
  let playerSelection = gameOptions[1];
  let computerSelection = computerPlay();
  selectionmainOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  scoreCheck();
});

const btnScissors = document.querySelector('#btnScissors');
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
      mainOutput.innerText += `\nYou Won the Game! \n\nFinal Score: \n ${userName} Score: ${userScore} \nComputer Score: ${compScore}`;
    } else {
      mainOutput.innerText += `\nYou Lost the Game! \n\nFinal Score: \n ${userName} Score: ${userScore} \nComputer Score: ${compScore}`;
    }
    userScore = 0;
    compScore = 0;
    mainOutput.innerText += "\n\nChoose Your Weapon to Start a New Game...";
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
    mainOutput.innerText = ("It's a Tie! Let's Try Again...");
  } else {
      mainOutput.innerText += ("\nYou did not Choose a Valid Option! \nConcentrate, & Try Again!");

  }
}
