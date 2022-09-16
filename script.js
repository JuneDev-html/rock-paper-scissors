// function that returns random R/P/S choice from computer
function getComputerChoice() {
    // generate random number from 1-3
    let randomNum = Math.floor(Math.random() * 3) + 1;
    // return Rock if 1
    if (randomNum === 1) {
        return 'rock';
    }
    // Return Paper if 2
    if (randomNum === 2) {
        return 'paper';
    }
    // Return Scissors if 3
    if (randomNum === 3) {
        return 'scissors';
    }
}


// get player selection (case insensitive)
// getPlayerChoice() function
// playerSelection variable

// Global Tally variables
let compScore = 0;
let playerScore = 0;

// function that plays single round of R/P/S
function playRound(play, comp) {
    // if player and comp have the same, its a tie
    if (play === comp) {
        return "Round Tied!";
    }

    // if player has scissors
    if (play === 'scissors') {
        // and comp has rock - player loses
        if (comp === 'rock') {
            compScore++;
            return 'Round Lost! Rock beats Scissors!';
        }
        // and comp has paper - player wins
        else {
            playerScore++;
            return "Round Won! Scissors beats Paper!";
        }
    }
        
    // if player has rock
    if (play === 'rock') {
        // and comp has paper - player loses
        if (comp === 'paper') {
            compScore++;
            return 'Round Lost! Paper beats Rock!';
        }
        // and comp has scissors - player wins
        else {
            playerScore++;
            return "Round Won! Rock beats Scissors!";
        }
    }
    // if player has paper
    if (play === 'paper') {
        // and comp has scissors - player loses
        if (comp === 'scissors') {
            compScore++;
            return 'Round Lost! Scissors beats Paper!';
        }
        // and comp has rock - player wins
        else {
            playerScore++;
            return "Round Won! Paper beats Rock!";
        }
    }
}



// function game() {
//     // for (let round = 0; round < 5; round++) {
//         console.log(playRound(getPlayerChoice(), getComputerChoice()));
//     // }
//     console.log('player: ', playerScore, '\ncomputer: ', compScore);
//     if (playerScore > compScore) {
//         console.log('You Win!');
//     }
//     else if (playerScore === compScore) {
//         console.log("its a tie!");
//     }
//     else console.log('You Lose!');
// }

// game();

// ----- rps-ui updates (that can be sectioned off for now)

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('hello');
    });
});
