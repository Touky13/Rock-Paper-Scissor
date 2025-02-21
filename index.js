//console.log(`Hello World`);                             //html link test

//Computer
function getComputerChoice(computer) {                  
    computer = Math.floor(Math.random() * 3);           // Create a random number between 0 and 2
    //console.log(computer);

    if (computer === 0) {                               // Assign Rock, Paper or Scissors to random Number
        computer = `rock`;
    } else if (computer === 1) {
        computer = `paper`;
    } else {
        computer =`scissors`;
    }
    console.log(`Computer : ` + computer);
    return computer;
}
//  -----

//Human
/*function getHumanChoice() {                                                                     //Get player choice
    let answer = prompt(`Please choose between Rock, Paper and Scissors.`).toLowerCase();        //Let user choose his play
        if (answer === `rock` || answer === `paper` || answer === `scissors`) {
            return answer
        }
        else {
            alert(`Incorrect choice. Please choose a valid input`);
            return getHumanChoice();
        }
}*/
//  -----

//Score tracker
let humanScore = 0;
let computerScore = 0;
//  -----

//Round script
function playGame() {
    function playRound (humanChoice, computerChoice) {
        //humanChoice = humanChoice.toLowerCase();                                        //Convert in lower case                  
        console.log(`Player : ` + humanChoice);
    
        if (humanChoice === computerChoice) {                                           // I'm going to hell for this
            console.log(`"It's a draw".\nThe score is Computer : ` + computerScore + `  human : ` + humanScore);
            //console.log("It's a draw");                                                 // Draw if strings are equals
        } else  {
            if (computerChoice === `rock` && humanChoice === `scissors`) {               
                computerScore ++;                                                       //Increment score
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.\nThe score is Computer : ` + computerScore + `  human : ` + humanScore);
                //console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);       //rock > scissors
            } else if (computerChoice === `scissors` && humanChoice === `paper`) {       
                computerScore ++;                                                       //Increment score
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.\nThe score is Computer : ` + computerScore + `  human : ` + humanScore);
                //console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);       //scissors > paper
            } else if (computerChoice === `paper` && humanChoice === `rock`) {
                computerScore ++;                                                       //Increment score
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.\nThe score is Computer : ` + computerScore + `  human : ` + humanScore);
                //console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);       //paper > rock
            } else {
                humanScore ++;                                                          //Increment player score
                console.log(`You win! ${humanChoice} beats ${computerChoice}.\nThe score is Computer : ` + computerScore + `  human : ` + humanScore);
                //console.log(`You win! ${humanChoice} beats ${computerChoice}.`);        //player win
            }
        }
    }
    //alert(`The final score is\n Computer : ` + computerScore + `  human : ` + humanScore )
    playRound(humanSelection, computerSelection);
}


//let humanSelection = getHumanChoice();



const rockBtn = document.querySelector ("#rockBtn");
const paperBtn = document.querySelector ("#paperBtn");
const scissorsBtn = document.querySelector ("#scissorsBtn");

function rockClicked () {
    humanSelection = "rock";
    computerSelection = getComputerChoice();
    playGame ();
}
function paperClicked () {
    humanSelection = "paper";
    computerSelection = getComputerChoice();
    playGame ();
}
function scissorsClicked () {
    humanSelection = "scissors";
    computerSelection = getComputerChoice();
    playGame ();
}


rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);



/*humanSelection = getHumanChoice();                                                      //Straying further and further from the light
computerSelection = getComputerChoice();
playGame ();
console.log(`Computer score : ` + computerScore, `human score : ` + humanScore);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playGame ();
console.log(`Computer score : ` + computerScore, `human score : ` + humanScore);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playGame ();
console.log(`Computer score : ` + computerScore, `human score : ` + humanScore);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playGame ();
console.log(`Computer score : ` + computerScore, `human score : ` + humanScore);
*/


