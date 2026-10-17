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

// Plays one round of game
    function playRound(humanChoice, computerChoice) {
        
       if (humanChoice === computerChoice) {
        let text = `It's a draw! Both chose ${humanChoice}`;
        appendText(text);
    }     
    // Check all combinations where the human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        text = `You win this round! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
        appendText(text);

    }
    // If it is not a tie and human didn't win, the computer has won and those conditions can be ignored
    else {
        computerScore++;
        text = `You lose this round! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`;
        appendText(text);
    }
    // Print current score after the round
    let score =`Score -> You: ${humanScore} | Computer: ${computerScore}`;

}
//Event listener
let count =0;
const buttons= document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            let target = event.target;
            switch(target.className) {
                case 'rock' :
                    humanChoice = 'rock';
                    computerChoice = getComputerChoice();
                    playRound(humanChoice, computerChoice);
                    break;
                case 'paper' :
                    humanChoice = 'paper';
                    computerChoice = getComputerChoice();
                    playRound(humanChoice, computerChoice);
                    break;
                case 'scissors' :
                    humanChoice = 'scissors';
                    computerChoice = getComputerChoice();
                    playRound(humanChoice, computerChoice);
                    break;
                case 'new-game' :
                    resetStats();
                    clearDiv();
                    break;

            }
            count++;
            console.log(count);
                if (count === 5){ 
                declareResult();
                resetStats();
                }   
        });
    });

// Final game declaration

function declareResult(){

  if (humanScore > computerScore) {
    let result =`\nFinal Score -> Human: ${humanScore} | Computer: ${computerScore}\nCongratulations! You won the match!`;
    appendResult(result);
    
} else if (humanScore < computerScore) {
    let result = `\nFinal Score -> Human: ${humanScore} | Computer: ${computerScore}\nGame Over! The Computer wins the match.`;
    appendResult(result);
} else {
    let result = `\n Final Score -> Human: ${humanScore} | Computer: ${computerScore}\nThe match is a tie!`;
    appendResult(result);
}        
}

function appendText(text) {
    const div = document.querySelector(".results");
    const para = document.createElement("p");
    para.textContent = text;
    div.appendChild(para);
    }

function appendResult(result) {
    const div = document.querySelector(".results");
    const resultText = document.createElement("p");
    const heading = document.createElement("h3")
    heading.textContent = "FINAL RESULT";
    resultText.textContent = result;
    div.appendChild(heading);
    div.appendChild(resultText);
}

function resetStats() {
humanScore = 0;
computerScore = 0;
count = 0;
}

function clearDiv() {
    document.querySelectorAll("p").forEach( p => p.parentNode.removeChild(p));
    const header = document.querySelector("h3");
    header.remove();
}