// *** ↓ Game Code ↓ ***
const gameOptions = ["Rock", "Paper", "Scissors"]
let roundsToWin = "";
let userGamesWon = 0;
let compGamesWon = 0;
let userScore = 0;
let compScore = 0;
let userName = ""

// Main display
const mainDispl = document.querySelector('#mainDispl');
const mainPargrph = document.createElement('p');
mainPargrph.classList.add('paraDispl');

// User / comp display
const userDispl = document.querySelector('#userDispl');
const userPargrph = document.createElement('p');
userPargrph.classList.add('paraDispl');
const compDispl = document.querySelector('#compDispl');
const compPargrph = document.createElement('p');
compPargrph.classList.add('paraDispl');

// User / comp total score 
const userTotalDispl = document.querySelector('#userTotal');
const userTotalPargrph = document.createElement('p');
userTotalPargrph.classList.add('paraDispl');
const compTotalDispl = document.querySelector('#compTotal');
const compTotalPargrph = document.createElement('p');
compTotalPargrph.classList.add('paraDispl');

// User name prompt
userName = window.prompt("Choose Your Battle Name to Begin");
if(userName == null || userName.trim() == "") userName = "Player";
while(userName.length > 20) {
    userName = window.prompt("Choose a Name With 20 Characters or Less if You Want to Play");
  }

  // Rounds to win prompt
roundsToWin = window.prompt("How many Rounds Won will Determine the Winner?\nChoose a Number Between 3 & 10 to Start the Game.");
while(roundsToWin == null || roundsToWin.trim() == "" || roundsToWin > 10 || roundsToWin < 3) {
  roundsToWin = window.prompt("How many Rounds Won will Determine the Winner?\nChoose a Number Between 3 & 10 to Start the Game.");
}

// Main display welcome message
mainPargrph.innerText = `Welcome to the Galactic Battle Ground ${userName}!\n\nThe First Player to Score ${roundsToWin} Wins the Game.\n\n\nChoose  Your Weapon to Begin the Game\n ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ "`;
mainPargrph.style.cssText = "font-size: 28px; text-align: center";
userTotalPargrph.innerText = ` * * * * * `;
compTotalPargrph.innerText = ` * * * * * `;
mainDispl.append(mainPargrph);
userTotalDispl.append(userTotalPargrph);
compTotalDispl.append(compTotalPargrph);

function compPlay() {
  return(gameOptions[Math.floor(Math.random() * gameOptions.length)]);
}

function playersText(userSelect, compSelect) {
  userPargrph.innerText = userName;
  compPargrph.innerText = 'Computer';
  userPargrph.innerText += `\nWeapon: ${userSelect}`;
  compPargrph.innerText += `\nWeapon: ${compSelect}`;
  compDispl.append(compPargrph);
  userDispl.append(userPargrph);
}

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
  let userSelect = gameOptions[0];
  let compSelect = compPlay();
  playersText(userSelect, compSelect);
  playRound(userSelect, compSelect);
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
  let userSelect = gameOptions[1];
  let compSelect = compPlay();
  playersText(userSelect, compSelect);
  playRound(userSelect, compSelect);
});

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', () => {
  let userSelect = gameOptions[2];
  let compSelect = compPlay();
  playersText(userSelect, compSelect);
  playRound(userSelect, compSelect);
});

function playRound(userSelect, compSelect) {
  userPargrph.style.cssText = "font-weight: normal";
  compPargrph.style.cssText = "font-weight: normal";
  userTotalPargrph.innerText = `Games Won: ${userGamesWon}`;
  compTotalPargrph.innerText = `Games Won: ${compGamesWon}`;
  if((userSelect == "Paper" && compSelect == "Rock") || (userSelect == "Scissors" && compSelect == "Paper") || (userSelect == "Rock" && compSelect == "Scissors")) {
    userScore += 1;
    mainPargrph.innerText = (`You Win this Round!\n ${userSelect} Beats ${compSelect}...`);
  } else if((userSelect == "Rock" && compSelect == "Paper") || (userSelect == "Paper" && compSelect == "Scissors") || (userSelect == "Scissors" && compSelect == "Rock")) {
    compScore += 1;
    mainPargrph.innerText = (`You Lose this Round! \n${compSelect} Beats ${userSelect}...`);
  } else {
    mainPargrph.innerText = ("It's a Tie! Let's Try Again...");
  }
  userPargrph.innerText += `\nRounds Won: ${userScore}`
  compPargrph.innerText += `\nRounds Won: ${compScore}`
  if(userScore == roundsToWin || compScore == roundsToWin) {
    mainPargrph.innerText = "Game Over!";
    if(userScore > compScore) {
      mainPargrph.innerText += `\nYou Won the Game!\n${userSelect} Beats ${compSelect}...\nFinal Score: \n ${userName} Score: ${userScore} \nComputer Score: ${compScore}`;
      userPargrph.innerText = userName + " is the Winner!!!"
      userPargrph.style.cssText = "font-weight: bolder";
      compPargrph.innerText = "Computer is the Loser!!!"
      compPargrph.style.cssText = "font-weight: bolder";
      userGamesWon += 1;
    } else {
      mainPargrph.innerText += `\nYou Lost the Game!\n${compSelect} Beats ${userSelect}...\nFinal Score: \n ${userName} Score: ${userScore} \nComputer Score: ${compScore}`;
      userPargrph.innerText = userName + " is the Loser!!!"
      userPargrph.style.cssText = "font-weight: bolder";
      compPargrph.innerText = "Computer is the Winner!!!"
      compPargrph.style.cssText = "font-weight: bolder";
      compGamesWon += 1;
    }
    userScore = 0;
    compScore = 0;
    mainPargrph.innerText += "\n\nChoose Your Weapon to Start a New Game...";

    userTotalPargrph.innerText = `Games Won: ${userGamesWon}`;
    compTotalPargrph.innerText = `Games Won: ${compGamesWon}`;
    if(userGamesWon > compGamesWon) {
      userTotalPargrph.style.cssText = "font-weight: bolder";
      compTotalPargrph.style.cssText = "font-weight: normal";
    } else if(userGamesWon < compGamesWon) {
      userTotalPargrph.style.cssText = "font-weight: normal";
      compTotalPargrph.style.cssText = "font-weight: bolder";
    } else  {
      userTotalPargrph.style.cssText = "font-weight: normal";
      compTotalPargrph.style.cssText = "font-weight: normal";
    }
  }
}

mainDispl.append(mainPargrph);
userTotalDispl.append(userTotalPargrph);
compTotalDispl.append(compTotalPargrph);
