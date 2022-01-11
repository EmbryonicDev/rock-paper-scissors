// *** ↓ Game Code ↓ ***
const gameOptions = ["Rock", "Paper", "Scissors"]
let roundsToWin = "";
let userGamesWon = 0;
let compGamesWon = 0;
let userScore = 0;
let compScore = 0;
let userName = ""

const mainDispl = document.querySelector('#mainDispl');
const mainOutput = document.createElement('p');
mainOutput.classList.add('paraDispl');

const userDispl = document.querySelector('#userDispl');
const userOutput = document.createElement('p');
userOutput.classList.add('paraDispl');
const userTotal = document.querySelector('#userTotal');
const userTotalText = document.createElement('p');
userTotalText.classList.add('paraDispl');

const compDispl = document.querySelector('#compDispl');
const compOutput = document.createElement('p');
compOutput.classList.add('paraDispl');
const compTotal = document.querySelector('#compTotal');
const compTotalText = document.createElement('p');
compTotalText.classList.add('paraDispl');

userName = window.prompt("Choose Your Battle Name to Begin");
if(userName == null || userName.trim() == "") userName = "Player";
while(userName.length > 20) {
    userName = window.prompt("Choose a Name With 20 Characters or Less if You Want to Play");
  }

roundsToWin = window.prompt("How many Rounds Won will Determine the Winner?\nChoose a Number Between 3 & 10 to Start the Game.");
while(roundsToWin == null || roundsToWin.trim() == "" || roundsToWin > 10 || roundsToWin < 3) {
  roundsToWin = window.prompt("How many Rounds Won will Determine the Winner?\nChoose a Number Between 3 & 10 to Start the Game.");
}

mainOutput.innerText = `Welcome to the Galactic Battle Ground ${userName}!\n\nThe First Player to Score ${roundsToWin} Wins the Game.\n\n\nChoose  Your Weapon to Begin the Game\n ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ "`;
mainOutput.style.cssText = "font-size: 28px; text-align: center";
mainDispl.append(mainOutput);

function computerPlay() {
  return(gameOptions[Math.floor(Math.random() * gameOptions.length)]);
}

function selectionmainOutput(playerSelection, computerSelection) {
  userOutput.innerText = userName;
  compOutput.innerText = 'Computer';
  userOutput.innerText += `\nWeapon: ${playerSelection}`;
  compOutput.innerText += `\nWeapon: ${computerSelection}`;
  compDispl.append(compOutput);
  userDispl.append(userOutput);
}

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
  let playerSelection = gameOptions[0];
  let computerSelection = computerPlay();
  selectionmainOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
  let playerSelection = gameOptions[1];
  let computerSelection = computerPlay();
  selectionmainOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
});

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () => {
  let playerSelection = gameOptions[2];
  let computerSelection = computerPlay();
  selectionmainOutput(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
});

function playRound(playerSelection, computerSelection) {
  userOutput.style.cssText = "font-weight: normal";
  compOutput.style.cssText = "font-weight: normal";
  if((playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Rock" && computerSelection == "Scissors")) {
    userScore += 1;
    mainOutput.innerText = (`You Win this Round!\n ${playerSelection} Beats ${computerSelection}...`);
  } else if((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
    compScore += 1;
    mainOutput.innerText = (`You Lose this Round! \n${computerSelection} Beats ${playerSelection}...`);
  } else {
    mainOutput.innerText = ("It's a Tie! Let's Try Again...");
  }
  userOutput.innerText += `\nRounds Won: ${userScore}`
  compOutput.innerText += `\nRounds Won: ${compScore}`
  if(userScore == roundsToWin || compScore == roundsToWin) {
    mainOutput.innerText = "Game Over!";
    if(userScore > compScore) {
      mainOutput.innerText += `\nYou Won the Game!\n${playerSelection} Beats ${computerSelection}...\nFinal Score: \n ${userName} Score: ${userScore} \nComputer Score: ${compScore}`;
      userOutput.innerText = userName + " is the Winner!!!"
      userOutput.style.cssText = "font-weight: bolder";
      compOutput.innerText = "Computer is the Loser!!!"
      compOutput.style.cssText = "font-weight: bolder";
      userGamesWon += 1;
    } else {
      mainOutput.innerText += `\nYou Lost the Game!\n${computerSelection} Beats ${playerSelection}...\nFinal Score: \n ${userName} Score: ${userScore} \nComputer Score: ${compScore}`;
      userOutput.innerText = userName + " is the Loser!!!"
      userOutput.style.cssText = "font-weight: bolder";
      compOutput.innerText = "Computer is the Winner!!!"
      compOutput.style.cssText = "font-weight: bolder";
      compGamesWon += 1;
    }
    userScore = 0;
    compScore = 0;
    mainOutput.innerText += "\n\nChoose Your Weapon to Start a New Game...";

    userTotalText.innerText = `\nGames Won: ${userGamesWon}`;
    compTotalText.innerText = `\nGames Won: ${compGamesWon}`;
    if(userGamesWon == compGamesWon) compTotalText.style.cssText = "font-weight: normal" && userTotalText.style.cssText == "font-weight: normal";
    if(userGamesWon > compGamesWon) userTotalText.style.cssText = "font-weight: bolder";
    if(userGamesWon < compGamesWon) compTotalText.style.cssText = "font-weight: bolder";
  }
}

mainDispl.append(mainOutput);
userTotal.append(userTotalText);
compTotal.append(compTotalText);
