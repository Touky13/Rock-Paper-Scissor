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
    console.log(`Computer : ` + computer);
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
function playGame() {
    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();                                        //Convert in lower case                  
        console.log(`Player : ` + humanChoice);
    
        if (humanChoice === computerChoice) {                                           // I'm going to hell for this
            console.log("It's a draw");                                                 // Draw if strings are equals
        } else  {
            if (computerChoice === `rock` && humanChoice === `scissor`) {               
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);       //rock > scissor
                computerScore ++;                                                       //Increment score
            } else if (computerChoice === `scissor` && humanChoice === `paper`) {       
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);       //scissor > paper
                computerScore ++;                                                       //Increment score
            } else if (computerChoice === `paper` && humanChoice === `rock`) {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);       //paper > rock
                computerScore ++;                                                       //Increment score
            } else {
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);        //player win
                humanScore ++;                                                          //Increment player score
            }
        }
    }
    playRound(humanSelection, computerSelection);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame ();
console.log(`Computer score : ` + computerScore, `human score : ` + humanScore);
//  -----

