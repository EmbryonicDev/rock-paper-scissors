// *** ↓ Game Code ↓ ***
const gameOptions = ["Rock", "Paper", "Scissors"]
const roundsToWin = 3;
let userScore = 0;
let computerScore = 0;

function computerPlay() {
  return(gameOptions[Math.floor(Math.random() * gameOptions.length)]);
}

const mainDispl = document.querySelector('#mainDispl');
const mainOutput = document.createElement('p');

function selectionmainOutput(playerSelection, computerSelection) {
  mainOutput.innerText = 'Player selected: ' + playerSelection;
  mainOutput.innerText += '\nComputer selected: ' + computerSelection;
  mainDispl.append(mainOutput);
  console.log('Player selected: ' + playerSelection);
  console.log('Computer selected: ' + computerSelection);
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
  if(userScore == roundsToWin || computerScore == roundsToWin) {
    mainOutput.innerText = "Game Over!";
    if(userScore > computerScore) {
      mainOutput.innerText += "\nYou Won the Game!";
    } else {
      mainOutput.innerText += "\nYou Lost the Game!";
    }
    userScore = 0;
    computerScore = 0;
    mainOutput.innerText += "\n\nChoose your weapon to start a new game...";
  }
}

function playRound(playerSelection, computerSelection) {
  if((playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Rock" && computerSelection == "Scissors")) {
    userScore += 1;
    mainOutput.innerText += (`\nYou Win this Round! \n${playerSelection} Beats ${computerSelection}...`);
    mainOutput.innerText += (`\nYour Score = ${userScore} \nComputer Score = ${computerScore}`);
    mainOutput.innerText += ("\n");
  } else if((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
    computerScore += 1;
    mainOutput.innerText += (`\nYou Lose this Round! \n${computerSelection} Beats ${playerSelection}...`);
    mainOutput.innerText += (`\nYour Score = ${userScore} \nComputer Score = ${computerScore}`);
    mainOutput.innerText += ("\n");
  } else if(computerSelection == playerSelection) {
    mainOutput.innerText += ("\nIt's a Tie! Let's Try Again...");
    mainOutput.innerText += ("\n");
  } else {
      mainOutput.innerText += ("\nYou did not Choose a Valid Option! \nConcentrate, & Try Again!");
      mainOutput.innerText += ("\n");
  }
}
