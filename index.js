//Computer
function getComputerChoice(computer) {                  
    computer = Math.floor(Math.random() * 3);           // Create a random number between 0 and 2

    if (computer === 0) {                               // Assign Rock, Paper or Scissors to random Number
        computer = `rock`;
    } else if (computer === 1) {
        computer = `paper`;
    } else {
        computer =`scissors`;
    }
    computerSelectionDisplay.textContent = (`Computer : ` + computer);
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
let totalScore = humanScore + computerScore;
console.log(totalScore);
//  -----

//Round script
function playGame() {
    function playRound (humanChoice, computerChoice) {
        playerSelectionDisplay.textContent = (`Player : ` + humanChoice);
        let totalScore = humanScore + computerScore;
        console.log(totalScore);

        if (totalScore === 5) {
            let winner = Math.max(humanScore, computerScore);
            //let winnerName = Math.max(humanScore, computerChoice);
                if (winner === humanScore) {
                    alert(`The player win with ${winner} points !`);
                } else {
                    alert(`The computer win with ${winner} points !`);
                }

        } else if (humanChoice === computerChoice) {                                           // I'm going to hell for this
            roundResult.textContent = (`"It's a draw"`);
            score.textContent = (`The score is Computer : ` + computerScore + `  human : ` + humanScore);
        } else  {
            if (computerChoice === `rock` && humanChoice === `scissors`) {               
                computerScore ++;                                                       //Increment score
                roundResult.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`);
                score.textContent = (`The score is Computer : ` + computerScore + `  human : ` + humanScore);
            } else if (computerChoice === `scissors` && humanChoice === `paper`) {       
                computerScore ++;                                                       //Increment score
                roundResult.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`);
                score.textContent = (`The score is Computer : ` + computerScore + `  human : ` + humanScore);
            } else if (computerChoice === `paper` && humanChoice === `rock`) {
                computerScore ++;                                                       //Increment score
                roundResult.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`);
                score.textContent = (`The score is Computer : ` + computerScore + `  human : ` + humanScore);
            } else {
                humanScore ++;                                                          //Increment player score
                roundResult.textContent = (`You win! ${humanChoice} beats ${computerChoice}.`);
                score.textContent = (`The score is Computer : ` + computerScore + `  human : ` + humanScore);
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

const score = document.querySelector ("#score");
const computerSelectionDisplay = document.querySelector ("#computerSelection");
const playerSelectionDisplay = document.querySelector ("#playerSelection");
const roundResult = document.querySelector ("#roundResult");


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


