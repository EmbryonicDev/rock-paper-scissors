const gameOptions = ["Rock", "Paper", "Scissors"]

function computerPlay() {
  return(gameOptions[Math.floor(Math.random() * gameOptions.length)]);
}

const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', () => {
  playerSelection = "Rock";
  console.log('Player selected: ' + playerSelection);
});

const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', () => {
  playerSelection = "Paper";
  console.log('Player selected: ' + playerSelection);
});

const btnScissors = document.querySelector('.btnScissors');
btnScissors.addEventListener('click', () => {
  playerSelection = "Scissors";
  console.log('Player selected: ' + playerSelection);
});

// Temporarily comment out
// function userPlay() {
//   return(prompt("Choose: Rock, Paper, or Scissors to Play,"));
// }

let userScore = 0;
let computerScore = 0;

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
// Copy of playRound before editing
// function playRound(playerSelection, computerSelection) {
//   if((playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Rock" && computerSelection == "Scissors")) {
//     userScore += 1;
//     console.log(`You Win this Round! ${playerSelection} Beats ${computerSelection}...`);
//     console.log(`Your Score = ${userScore}, Computer Score = ${computerScore}`);
//     console.log("");
//   } else if((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
//     computerScore += 1;
//     console.log(`You Lose this Round! ${computerSelection} Beats ${playerSelection}...`);
//     console.log(`Your Score = ${userScore}, Computer Score = ${computerScore}`);
//     console.log("");
//   } else if(computerSelection == playerSelection) {
//     console.log("It's a Tie! Let's Try Again...");
//     console.log("");
//   } else {
//       console.log("You did not Choose a Valid Option! Concentrate, & Try Again!");
//       console.log("");
//   }
// }

// TEmporarily comment out
function game() {
  let playerSelection = userPlay();
  let computerSelection = computerPlay();
  console.log("Player Selection: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1,).toLowerCase());
  console.log("Computer Selection: " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1,).toLowerCase());
  playRound(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1,).toLowerCase(), computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1,).toLowerCase());
}

while(userScore  < 3 && computerScore < 3) {
  game();
}

if(userScore > computerScore) {
  console.log("Game Over!\nYou Won the Game!");
} else {
  console.log("Game Over!\nYou Lost the Game!");
}

