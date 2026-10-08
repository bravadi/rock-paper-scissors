`use strict`;

let getComputerChoice = function getComputerChoice() {
    let computerNum = Math.random();
    let computerChoice;
    if (computerNum <= 0.333) {
        computerChoice = `rock`;
    } else if (computerNum > 0.333 && computerNum <= 0.666) {
        computerChoice = `paper`;
    } else if (computerNum > 0.666) {
        computerChoice = `scissors`;
    }
    console.log(`computerNum = ` + computerNum);
    console.log(`computerChoice = ` + computerChoice);
}
getComputerChoice();

let getHumanChoice = function getHumanChoice() {
    let humanChoice = prompt(`rock/paper/scissors?`, ``);
    console.log(`humanChoice = ` + humanChoice);
}
getHumanChoice();

let computerScore = 0;
let humanScore = 0;
console.log(`computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`);
console.log(`humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);

