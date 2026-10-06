console.log("Hello World!");

/* Rock Paper Scissors

Both parties play between 3 values at the same time, rock paper or scissors

Opponent has random choice between 3 values, rock paper or scissors

Player has a random value gotten by input, assuming the correct input is entered everytime for this project

both the values are compared and goes through conditional checks, which compare the values and declare a winner

        rock beats scissors, scissor beat paper, paper beats rock

The game is repeated for n number of rounds, and the winner is declared based on the max no. of wins


PSUEDOCODE


Generate a random value between 1 & 3 
Assign rock paper and scissors to each of the values
Get an input from the user for either rock paper and scissor
compare the input from the random value generated
compare the inputs with the conditonal statements to check which wins
save the win in a winning variable, increment for each win.
repeat the rounds
calculate the wins
declare winner based on max wins

/*
possible combinations 

rock paper
rock scissor
rock rock

paper rock
paper scissor
paper paper

scissor rock
scissor paper
scissor scissor
*/

//0 - rock 1- paper 2-scissor
// generate a random number between 1 & 3
// return string

/* var humanScore = 0;
var computerScore = 0; declaring inside play game function, this will remove the need to reset it.
*/

// 1.Computer choice generator
function getComputerChoice() {
    
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) return "rock";
    else if (compChoice == 1) return "paper";
    return "scissors"
}

// 2. Human choice prompt
function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    // if user clicks cancels or empty, default to rock
    if (!choice) return "rock";
    return choice.toLowerCase();
}

// 3. Main game controller
function playGame() {
// the score variables have to declared on top before being called
    let humanScore = 0;
    let computerScore = 0;

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
        console.log(`You win this round! ${humanChoice.toUpperCase} beats ${computerChoice.toUpperCase()}.`);
    }
    // If it is not a tie and human didn't win, the computer has won and those conditions can be ignored
    else {
        computerScore++;
        console.log(`You lose this round! ${computerChoice.toUpperCase} beats ${humanChoice.toUpperCase()}.`);
    }
    // Print current score after the round
    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
}
    /* The logic can be shortened, writing above
    
        // common choice for all cases
        if(humanChoice == computerChoice){
            console.log(`The Player choice is ${humanChoice} & Computer choice is ${computerChoice}`);
            console.log(`Its a draw`);
            console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);
        }
   // possible combinations
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log(`The Player choice is ${humanChoice} & Computer choice is ${computerChoice}`);
            console.log("Rock beats Scissor");
            console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log(`The Player choice is ${humanChoice} & Computer choice is ${computerChoice}`);
            console.log("Paper beats Rock");
            console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);
        }

        else if (humanChoice == "paper" && computerChoice == "rock") {
        
            humanScore++;
            console.log(`The Player choice is ${humanChoice} & Computer choice is ${computerChoice}`);
            console.log("Paper beats Rock");
            console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);

        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log(`The Player choice is ${humanChoice} & Computer choice is ${computerChoice}`);
            console.log("Scissors beat Paper");
            console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);

        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log(`The Player choice is ${humanChoice} & Computer choice is ${computerChoice}`);
            console.log("Rock beats Scissors");
            console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);

        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log(`The Player choice is ${humanChoice} & Computer choice is ${computerChoice}`);
            console.log("Scissor beats Paper");
            console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`);
        }
     }

*/


// Play % rounds using a loop
for ( let i=0; i < 5; i++) {
    // call choice functions to get the human & computer inputs & store the values
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
 
}
// Final game declaration
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

// Start the game
playGame();
/* function resetCounter() {
    humanScore = 0;
    computerScore = 0;
} */
// resetCounter(); not needed anymore
}
