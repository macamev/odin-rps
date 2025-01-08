let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", () => playRound(0));
document.getElementById("paper").addEventListener("click", () => playRound(1));
document.getElementById("scissors").addEventListener("click", () => playRound(2));

document.getElementById("resetButton").addEventListener("click", () => reset());
document.getElementById("resetButton").disabled = true;

function playRound(playerChoice) {
    const computerPick = computerChoice();
    const resultMessage = calcWin(playerChoice, computerPick);

    updateResults(resultMessage);

    if (playerScore === 5 || computerScore === 5) {
        announceWinner();
    }
}

function computerChoice() {
    return Math.floor(Math.random() * 3); // 0, 1, or 2
}

function calcWin(playerChoice, computerPick) {
    const choices = ["Rock", "Paper", "Scissors"];
    let result;

    if (playerChoice === computerPick) 
    {
        result = "It's a tie!";
    } 
    else if 
    (
        (playerChoice === 0 && computerPick === 2) || // Rock beats Scissors
        (playerChoice === 1 && computerPick === 0) || // Paper beats Rock
        (playerChoice === 2 && computerPick === 1)    // Scissors beats Paper
    ) 
    {
        playerScore++;
        result = `You win! ${choices[playerChoice]} beats ${choices[computerPick]}.`;
    } 
    else 
    {
        computerScore++;
        result = `You lose! ${choices[computerPick]} beats ${choices[playerChoice]}.`;
    }

    return result;
}

function updateResults(message) {
    document.getElementById("message").textContent = message;
    document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function announceWinner() {
    const finalMessage = playerScore === 5 ? "You are the champion!" : "Computer wins! Better luck next time!";
    document.getElementById("message").textContent = finalMessage;

    // Disable all buttons except the reset button
    document.querySelectorAll("button").forEach(button => button.disabled = true);
    document.getElementById("resetButton").disabled = false;
    
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById("message").textContent = "Make your move!";
    document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    document.querySelectorAll("button").forEach(button => button.disabled = false);
    document.getElementById("resetButton").disabled = true;
}
