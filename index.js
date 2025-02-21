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
                alert(`The player win !`);
                humanScore = 0;
                computerScore = 0;
            } else {
                alert(`The computer win !`);
                humanScore = 0;
                computerScore = 0;
            }
}

function playGame() {
    function playRound (humanChoice, computerChoice) {
        playerSelectionDisplay.textContent = (`Player : ` + humanChoice);

        if (humanChoice === computerChoice) {                                           
            roundResult.textContent = (`"It's a draw"`);
            score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
        } else  {
            if (computerChoice === `rock` && humanChoice === `scissors`) {               
                computerScore++;                                                       
                roundResult.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`);
                score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
                totalScore = Math.max(humanScore, computerScore);
                console.log(totalScore);
                if (totalScore === 5) {winner()};
            } else if (computerChoice === `scissors` && humanChoice === `paper`) {       
                computerScore++;                                                       
                roundResult.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`);
                score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
                totalScore = Math.max(humanScore, computerScore);
                console.log(totalScore);
                if (totalScore === 5) {winner()};
            } else if (computerChoice === `paper` && humanChoice === `rock`) {
                computerScore++;                                                       
                roundResult.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`);
                score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
                totalScore = Math.max(humanScore, computerScore);
                console.log(totalScore);
                if (totalScore === 5) {winner()};
            } else {
                humanScore++;                                                          
                roundResult.textContent = (`You win! ${humanChoice} beats ${computerChoice}.`);
                score.textContent = (`The score is Computer : ` + computerScore + `  player : ` + humanScore);
                totalScore = Math.max(humanScore, computerScore);
                console.log(totalScore);
                if (totalScore === 5) {winner()};
            }
        }
    }
    playRound(humanSelection, computerSelection);
}

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
