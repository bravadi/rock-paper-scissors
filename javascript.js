// Use strict to prevent accidental global uses of undefined methods.
`use strict`;

// Initiated scores are placed globally so they don't reset every time the function below loops.
let computerScore = 0;
let humanScore = 0;

let playGame = function playGame() {
    for (round = 0; round < 5; round++) {
        
        // Computer Choice
        let computerNum = Math.random(); // Randomly picks a number from 0-1 (excluding 1).
        let computerChoice;
        if (computerNum <= 0.333) {
            computerChoice = `rock`;
        } else if (computerNum > 0.333 && computerNum <= 0.666) {
            computerChoice = `paper`;
        } else if (computerNum > 0.666) {
            computerChoice = `scissors`;
        } // Divide 1 by 3 so each possible outcome gets equal probability.
        let getComputerChoice = function getComputerChoice() {
            return computerChoice;
        }
        getComputerChoice();

        // Human Choice
        let humanChoice = prompt(`rock/paper/scissors?`, ``).toLowerCase();
        let getHumanChoice = function getHumanChoice() {
            return humanChoice;
        } // This makes the input practically case-insensitive.
        getHumanChoice();

        // Play Round
        let playRound = function playRound(humanChoice, computerChoice) {
            if (humanChoice == computerChoice) {
                alert(`It's a tie! You vs. computer = ${humanScore} - ${computerScore}`); // I intentionally use alert here as putting it in the console would mean that the player may not be able to see the ongoing scores until the end.
                console.log(`round = `+ round + `, computerNum = ` + computerNum);
                console.log(`round = `+ round + `, computerChoice = ` + computerChoice);
                console.log(`round = `+ round + `, humanChoice = ` + humanChoice);
                console.log(`round = `+ round + `, computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`); // also log typeof for good measure.
                console.log(`round = `+ round + `, humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);
            } else if (humanChoice == `rock` && computerChoice == `paper`) {
                computerScore++;
                alert(`You lose! Paper beats rock! You vs. computer = ${humanScore} - ${computerScore}`);
                console.log(`round = `+ round + `, computerNum = ` + computerNum);
                console.log(`round = `+ round + `, computerChoice = ` + computerChoice);
                console.log(`round = `+ round + `, humanChoice = ` + humanChoice);
                console.log(`round = `+ round + `, computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`);
                console.log(`round = `+ round + `, humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);
            } else if (humanChoice == `paper` && computerChoice == `scissors`) {
                computerScore++;
                alert(`You lose! Scissors beat paper! You vs. computer = ${humanScore} - ${computerScore}`);
                console.log(`round = `+ round + `, computerNum = ` + computerNum);
                console.log(`round = `+ round + `, computerChoice = ` + computerChoice);
                console.log(`round = `+ round + `, humanChoice = ` + humanChoice);
                console.log(`round = `+ round + `, computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`);
                console.log(`round = `+ round + `, humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);
            } else if (humanChoice == `scissors` && computerChoice == `rock`) {
                computerScore++;
                alert(`You lose! Rock beats scissors! You vs. computer = ${humanScore} - ${computerScore}`);
                console.log(`round = `+ round + `, computerNum = ` + computerNum);
                console.log(`round = `+ round + `, computerChoice = ` + computerChoice);
                console.log(`round = `+ round + `, humanChoice = ` + humanChoice);
                console.log(`round = `+ round + `, computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`);
                console.log(`round = `+ round + `, humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);
            } else if (computerChoice  == `rock` && humanChoice == `paper`) {
                humanScore++;
                alert(`You win! Paper beats rock! You vs. computer = ${humanScore} - ${computerScore}`);
                console.log(`round = `+ round + `, computerNum = ` + computerNum);
                console.log(`round = `+ round + `, computerChoice = ` + computerChoice);
                console.log(`round = `+ round + `, humanChoice = ` + humanChoice);
                console.log(`round = `+ round + `, computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`);
                console.log(`round = `+ round + `, humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);
            } else if (computerChoice  == `paper` && humanChoice == `scissors`) {
                humanScore++;
                alert(`You win! Scissors beat paper! You vs. computer = ${humanScore} - ${computerScore}`);
                console.log(`round = `+ round + `, computerNum = ` + computerNum);
                console.log(`round = `+ round + `, computerChoice = ` + computerChoice);
                console.log(`round = `+ round + `, humanChoice = ` + humanChoice);
                console.log(`round = `+ round + `, computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`);
                console.log(`round = `+ round + `, humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);
            } else if (computerChoice  == `scissors` && humanChoice == `rock`) {
                humanScore++;
                alert(`You win! Rock beats scissors! You vs. computer = ${humanScore} - ${computerScore}`);
                    console.log(`round = `+ round + `, computerNum = ` + computerNum);
                console.log(`round = `+ round + `, computerChoice = ` + computerChoice);
                console.log(`round = `+ round + `, humanChoice = ` + humanChoice);
                console.log(`round = `+ round + `, computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`);
                console.log(`round = `+ round + `, humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);
            } else {
                alert(`idk what that is… You vs. computer = ${humanScore} - ${computerScore}`); // In case the player gets any ideas.
                console.log(`round = `+ round + `, computerNum = ` + computerNum);
                console.log(`round = `+ round + `, computerChoice = ` + computerChoice);
                console.log(`round = `+ round + `, humanChoice = ` + humanChoice);
                console.log(`round = `+ round + `, computerScore = ` + computerScore + ` (type: ` + (typeof computerScore) + `)`);
                console.log(`round = `+ round + `, humanScore = ` + humanScore + ` (type: ` + (typeof humanScore) + `)`);
            }
        }
        playRound(humanChoice, computerChoice); // Use humanChoice and computerChoice as arguments.
    }

    // Final message here for better user experience.
    if (humanScore > computerScore) {
        alert(`You win the game! Thank you for playing!`)
    } else if (humanScore == computerScore) {
        alert(`It's a tie! Thank you for playing!`)
    } else {
        alert(`You lose the game! Thank you for playing!`)
    }
}
playGame();