`use strict`;

// Computer Choice
let computerNum = Math.random();
let computerChoice;
if (computerNum <= 0.333) {
    computerChoice = `rock`;
} else if (computerNum > 0.333 && computerNum <= 0.666) {
    computerChoice = `paper`;
} else if (computerNum > 0.666) {
    computerChoice = `scissors`;
}
let getComputerChoice = function getComputerChoice() {
    return computerChoice;
}
getComputerChoice();


// Human Choice
let humanChoice = prompt(`rock/paper/scissors?`, ``).toLowerCase();
let getHumanChoice = function getHumanChoice() {
    return humanChoice;
}
getHumanChoice();


// Initiate Scores
let computerScore = 0;
let humanScore = 0;


// Play Round
let playRound = function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`It's a tie!`);
    } else if (humanChoice == `rock` && computerChoice == `paper`) {
        console.log(`You lose! Paper beats rock.`);
        computerScore++;
    } else if (humanChoice == `paper` && computerChoice == `scissors`) {
        console.log(`You lose! Scissors beat paper.`);
        computerScore++;
    } else if (humanChoice == `scissors` && computerChoice == `rock`) {
        console.log(`You lose! Rock beats scissors!`);
        computerScore++;
    } else if (computerChoice  == `rock` && humanChoice == `paper`) {
        console.log(`You win! Paper beats rock.`);
        humanScore++;
    } else if (computerChoice  == `paper` && humanChoice == `scissors`) {
        console.log(`You win! Scissors beat paper.`);
        humanScore++;
    } else if (computerChoice  == `scissors` && humanChoice == `rock`) {
        console.log(`You win! Rock beats scissors!`);
        humanScore++;
    } else {
        console.log(`idk what that is`);
    }
}
playRound(humanChoice, computerChoice);


// Console Logs (Global)
console.log(`computerNum = ` + computerNum);
console.log(`computerChoice = ` + computerChoice);
console.log(`humanChoice = ` + humanChoice);
console.log(`computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`);
console.log(`humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);