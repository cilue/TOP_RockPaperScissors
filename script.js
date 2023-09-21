// Function to get the computer's choice
function getComputerChoice() {
    let computerChoice;
    let num = Math.floor(Math.random() * 3)
    if (num == 0)  {
        computerChoice = "rock"
    }
    else if (num == 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

// Function to play one round
function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection === computerSelection.toLowerCase()) {
        message = "It's a tie!"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        message = `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        message = `You lose! ${computerSelection} beats ${playerSelection}`
    }
    return message; 
}

// Function to play a game of 5 rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("Rock, Paper or Scissors?: ").toLowerCase();
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        console.log(`Round ${round}: ${result}`)

        if (result.includes("win")) {
            playerScore++;
        }
        else if (result.includes("lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win ${playerScore} - ${computerScore}`);
    }
    else if (playerScore < computerScore) {
        console.log(`You lose ${playerScore} - ${computerScore}`);
    }
    else {
        console.log(`It's a tie: ${playerScore} - ${computerScore}`)
    }
}

// Run the game
game();