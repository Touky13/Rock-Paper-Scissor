console.log(`Hello World`);

function getComputerChoice(computer) {
    return computer = Math.floor(Math.random() * 3);
}
console.log(getComputerChoice());

if (getComputerChoice() === 0) {
    computer = `Rock`;
} else if (getComputerChoice() === 1) {
    computer = `Paper`;
} else {
    computer =`Scissor`;
}

console.log(computer);