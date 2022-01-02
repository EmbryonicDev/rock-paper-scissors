const gameOptions = ["Rock", "Paper", "Scissors"]

function computerPlay() {
  return(gameOptions[Math.floor(Math.random() * gameOptions.length)]);
}