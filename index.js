console.log(`Hello World`);                             //html link test

//Computer
function getComputerChoice(computer) {                  
    computer = Math.floor(Math.random() * 3);           // Create a random number between 0 and 2
    console.log(computer);

    if (computer === 0) {                               // Assign Rock, Paper or Scissor to random Number
        computer = `Rock`;
    } else if (computer === 1) {
        computer = `Paper`;
    } else {
        computer =`Scissor`;
    }
    console.log(computer);
    return computer;
}
//  -----

//Human
function getHumanChoice() {                                                         //Get player choice
    return prompt(`Please choose between Rock, Paper and Scissor.`);                //Let user choose his play
}

//  -----

//Score tracker
let humanScore = 0;
let computerScore = 0;
//  -----

//Round script
function playRound (humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(playRound());