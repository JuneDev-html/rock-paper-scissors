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


// playerSelection variable
let playerSelection;

// Global Tally variables
let compScore = 0;
let playerScore = 0;
let gameStarted = false;

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

// make game function that runs gamae and outputs results live in html page
function game() {
    // make variable for results div container 
    const results = document.querySelector('.results');
    if (!gameStarted) {
        // start game of 5 rounds
        gameStarted = true;
        
        // if roundResult div already exists, update it - if not create one and add text.
        const roundResult = document.createElement('div');
        roundResult.classList.add('roundResult');
        roundResult.textContent = playRound(playerSelection, getComputerChoice())

        // create an element for tally
        const tally = document.createElement('div');
        tally.classList.add('tally');
        tally.textContent = `player: ${playerScore} \n\ncomputer: ${compScore}`;
        
        // append everything to results container
        results.append(roundResult, tally);
    }
    else {
        
        let roundResult = document.querySelector('.roundResult');
        let tally = document.querySelector('.tally');

        roundResult.textContent = playRound(playerSelection, getComputerChoice());
        tally.textContent = `player: ${playerScore} \n\ncomputer: ${compScore}`;
    }

    // if 5 games played, name winner
    if (playerScore === 5 || compScore === 5) {
        let endResult = '';
        if (playerScore > compScore) {
            endResult = 'You Win!';
        }
        else if (playerScore === compScore) {
            endResult = "its a tie!";
        }
        else endResult = 'You Lose!';

        alert(endResult);
        location.reload();
        
    };   
    
}

// ----- rps-ui updates (that can be sectioned off for now)

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.value;
        game();
    });
});
