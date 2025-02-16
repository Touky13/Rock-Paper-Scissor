console.log(`Hello World`);                             //html link test

//Computer
function getComputerChoice(computer) {                  
    computer = Math.floor(Math.random() * 3);           // Create a random number between 0 and 2
    console.log(computer);

    if (computer === 0) {                               // Assign Rock, Paper or Scissor to random Number
        computer = `rock`;
    } else if (computer === 1) {
        computer = `paper`;
    } else {
        computer =`scissor`;
    }
    console.log(computer);
    return computer;
}
//  -----

//Human
function getHumanChoice() {                                                 //Get player choice
    return prompt(`Please choose between Rock, Paper and Scissor.`);        //Let user choose his play
}
//  -----

//Score tracker
let humanScore = 0;
let computerScore = 0;
//  -----

//Round script
function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();                            //Convert in lower case                  
    console.log(humanChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a draw");
    } else  {
        if (computerChoice === `rock` && humanChoice === `scissor`) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        } else if (computerChoice === `scissor` && humanChoice === `paper`) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        } else if (computerChoice === `paper` && humanChoice === `rock`) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);