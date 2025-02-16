console.log(`Hello World`);                             //html link test

//Computer
function getComputerChoice(computer) {                  // Create a random number between 0 and 2
    return computer = Math.floor(Math.random() * 3);
}
console.log(getComputerChoice());

if (getComputerChoice() === 0) {                        // Assign Rock, Paper or Scissor to random Number
    computer = `Rock`;
} else if (getComputerChoice() === 1) {
    computer = `Paper`;
} else {
    computer =`Scissor`;
}
console.log(computer);
//  -----

//Human
function getHumanChoice() {                                                 //Get player choice
    let humanChoice = prompt(`Please choose between Rock, Paper and Scissor.`);   //Let user choose his play
console.log(humanChoice);

        humanChoice = humanChoice.toLowerCase();                                        //Convert to lower case for compatibility
console.log(humanChoice);
}

getHumanChoice();
//  -----

//Score logic
let humanScore = 0;
let computerScore = 0;
//  -----

//Round script

