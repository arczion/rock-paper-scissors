// generates computer choice, returns string

function getComputerChoice() {
    
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) return "rock";
    else if (compChoice == 1) return "paper";
    return "scissors"
}

// stores scores
let humanScore = 0;
let computerScore = 0;

// Playes one round of game
    function playRound(humanChoice, computerChoice) {
        
       if (humanChoice === computerChoice) {
        console.log(`It's a draw! Both chose ${humanChoice}`);
    }     
    // Check all combinations where the human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win this round! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
    }
    // If it is not a tie and human didn't win, the computer has won and those conditions can be ignored
    else {
        computerScore++;
        console.log(`You lose this round! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`);
    }
    // Print current score after the round
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
}
//Event listener

const buttons= document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            let target = event.target;

            switch(target.className) {
                case 'rock' :
                    humanChoice = 'rock';
                    computerChoice = getComputerChoice();
                    console.log(computerChoice);
                    playRound(humanChoice, computerChoice);
                    break;
                case 'paper' :
                    humanChoice = 'paper';
                    computerChoice = getComputerChoice();
                    playRound(humanChoice, computerChoice);
                    break;
                case 'scissors' :
                    console.log('Scissors');
                    humanChoice = 'scissors';
                    computerChoice = getComputerChoice();
                    playRound(humanChoice, computerChoice);
                    break;
            }
        });
    });

// Final game declaration
function declareResult(){

console.log("FINAL RESULT");
if (humanScore > computerScore) {
    console.log(`\nFinal Score -> Human: ${humanScore} | Computer: ${computerScore}`);
    console.log("Congratulations! You won the match!");
} else if (humanScore < computerScore) {
    console.log(`\nFinal Score -> Human: ${humanScore} | Computer: ${computerScore}`);
    console.log("Game Over! The Computer wins the match. ");
} else {
    console.log(`\n Final Score -> Human: ${humanScore} | Computer: ${computerScore}`);
    console.log("The match is a tie!");
}        
}

const div = document.querySelector(".results");

