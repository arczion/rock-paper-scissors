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


0 - rock 1- paper 2-scissor

*/
// generate a random number between 1 & 3
// return string

var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice == 0) {
        return "Rock"
    }
    else if (compChoice == 1) {
        return "Paper"
    }
    else
        return "Scissor"
}


// get user input

function getHumanChoice() {
    
    let choice = prompt("Enter your choice");
    return choice;
}

console.log(getHumanChoice());

// function to play the game that calls playRound

function playGame() {

// Function call to playRound 5 times

for (i=0; i < 5; i++) {
    // call choice functions to get the human & computer inputs & store the values
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
 
}

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

    function playRound(humanChoice, computerChoice) {
   
        // common choice for all cases
        if(humanChoice == computerChoice){
            console.log(`Its a draw`)
            console.log(`The Player choice is ${humanChoice} & Computer Score is ${computerChoice}`);
        }
   // possible combinations
        else if (humanChoice == "Rock" && computerChoice == "Scissor") {
            humanScore += 1;
            console.log("Rock beats Scissor");
            console.log(`The Player choice is ${humanChoice} & Computer Score is ${computerChoice}`);
        }
        else if (humanChoice == "Rock" && computerChoice == "Paper") {
            computerScore += 1;
            console.log("Paper beats Rock");
            console.log(`The Player choice is ${humanChoice} & Computer Score is ${computerChoice}`);
        }
        else if (humanChoice == "Paper" && computerChoice == "Rock") {
        
            humanScore += 1;
            console.log("Paper beats Rock");
            console.log(`The Player choice is ${humanChoice} & Computer Score is ${computerChoice}`);
        }
        else if (humanChoice == "Paper" && computerChoice == "Scissor") {
            computerScore += 1;
            console.log("Scissor beat Paper");
            console.log(`The Player choice is ${humanChoice} & Computer Score is ${computerChoice}`);
        }
        else if (humanChoice == "Scissor" && computerChoice == "Rock") {
            computerScore += 1;
            console.log("Rock beats Scissor");
            console.log(`The Player choice is ${humanChoice} & Computer Score is ${computerChoice}`);
        }
        else if (humanChoice == "Scissor" && computerChoice == "Paper") {
            humanScore += 1;
            console.log("Scissor beats Paper");
            console.log(`The Player choice is ${humanChoice} & Computer Score is ${computerChoice}`);
        }
     }



function score() {
               
        if (humanScore > computerScore) {
            console.log(`The Player Score is ${humanScore} & Computer Score is ${computerScore}`);
            console.log("You win the game!");
            }
            else {
                console.log(`The Player Score is ${humanScore} & Computer Score is ${computerScore}`);
                console.log("Computer wins the game")
            }
        }

score();
}