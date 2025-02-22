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

let humanScore = 0;
let computerScore = 0;

function winner() {
        let winner = Math.max(humanScore, computerScore);
            if (winner === humanScore) {
                setTimeout (function() {
                if (confirm(`The player win !\nThe score is Computer : ` + computerScore + `  player : ` + humanScore) == true) { return resetClicked();}
                else {resetClicked()}}, 1)
            } else {
                setTimeout (function() {
                if (confirm(`The computer win !\nThe score is Computer : ` + computerScore + `  player : ` + humanScore) == true) {return resetClicked();}
                else {resetClicked()}}, 1)
            }
}

function playGame() {
    function playRound (humanSelection, computerSelection) {
        playerSelectionDisplay.textContent = (`Player : ` + humanSelection);

        if (humanSelection === computerSelection) {                                           
            roundResult.textContent = (`"It's a draw"`);
            score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
        } else  {
            if (computerSelection === `rock` && humanSelection === `scissors`) {               
                computerScore++;                                                       
                roundResult.textContent = (`You lose! ${computerSelection} beats ${humanSelection}.`);
                totalScore = Math.max(humanScore, computerScore);
                score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
                if (totalScore === 5) {winner()}
            } else if (computerSelection === `scissors` && humanSelection === `paper`) {       
                computerScore++;                                                       
                roundResult.textContent = (`You lose! ${computerSelection} beats ${humanSelection}.`);
                totalScore = Math.max(humanScore, computerScore);
                score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
                if (totalScore === 5) {winner()}
            } else if (computerSelection === `paper` && humanSelection === `rock`) {
                computerScore++;                                                       
                roundResult.textContent = (`You lose! ${computerSelection} beats ${humanSelection}.`);
                totalScore = Math.max(humanScore, computerScore);
                score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
                if (totalScore === 5) {winner()}
            } else {
                humanScore++;                                                          
                roundResult.textContent = (`You win! ${humanSelection} beats ${computerSelection}.`);
                totalScore = Math.max(humanScore, computerScore);
                score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
                if (totalScore === 5) {winner()}
            }
        }
    }
    return playRound(humanSelection, computerSelection);
}

const rockBtn = document.querySelector ("#rockBtn");
const paperBtn = document.querySelector ("#paperBtn");
const scissorsBtn = document.querySelector ("#scissorsBtn");
const resetBtn = document.querySelector ("#resetBtn");

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
function resetClicked () {
    humanScore = 0;
    computerScore = 0;
    totalScore = 0;
    computerSelectionDisplay.textContent = (`Computer : `);
    playerSelectionDisplay.textContent = (`Player : `);
    roundResult.textContent = (``);
    score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
}

rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);
resetBtn.addEventListener("click", resetClicked);

const computerSelectionDisplay = document.querySelector ("#computerSelection");
const playerSelectionDisplay = document.querySelector ("#playerSelection");
const roundResult = document.querySelector ("#roundResult");
const score = document.querySelector ("#score");