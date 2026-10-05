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





*/

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