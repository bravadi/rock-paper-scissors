`use strict`;
//alert(`Test message.`);

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
    console.log(computerNum);
    console.log(computerChoice);
}

getComputerChoice();