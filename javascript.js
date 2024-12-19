let playerChoice = startGame()
let computerPick = computerChoice()
console.log(playerChoice)
console.log(computerPick)
calcWin(playerChoice,computerPick)


function startGame(){
    let choice = prompt("Welcome to RPS. Choose Rock, Paper, or Scissors");
    if (choice.toLowerCase() == "rock"){
        return 0;
    }
    else if (choice.toLowerCase() == "paper"){
        return 1;
    }
    else if (choice.toLowerCase() == "scissors"){
        return 2;
    }
    else{
        alert("Incorrect value of " + choice + " please choose Rock, Paper, or Scissors")
        startGame()
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerChoice(){
    let compChoice = getRandomInt(3);
    return compChoice;
}

function calcWin(playerChoice, computerPick) {
    if (playerChoice === computerPick) {
        alert("It's a TIE! Refresh page to play again.");
    } else if (
        (playerChoice === 0 && computerPick === 2) || // Rock beats Scissors
        (playerChoice === 1 && computerPick === 0) || // Paper beats Rock
        (playerChoice === 2 && computerPick === 1)    // Scissors beats Paper
    ) {
        alert("You WIN! Refresh page to play again.");
    } else {
        alert("You LOSE! Refresh page to play again.");
    }
}

