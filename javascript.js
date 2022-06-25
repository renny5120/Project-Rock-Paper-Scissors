function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    // if player and computer the same 
    if (playerSelection == computerSelection) {
        return "draw";
    }

    // Scissors
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "loss";

        } else if (computerSelection == "paper") {
            return "win";

        }
    }

    // Rock
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "loss";

        } else if (computerSelection == "scissors") {
            return "win";

        }
    }

    // Paper
    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "loss";

        } else if (computerSelection == "rock") {
            return "win";

        }
    }

}

// chooses computer choice
function computerPlay() {
    let str;
    const choices = ["rock", "paper", "scissors"];
    str = choices[Math.floor(Math.random(0) * 3)];
    return str;
}

// button click
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let result = playRound(button.id, computerPlay());
        roundWinner(result);
        finalWinner(result);
    });
});

let playerWins = 0;
let computerWins = 0;

// updates scores
function roundWinner(result) {
    if (result == 'win') {
        playerWins += 1;
    } else if (result == 'loss') {
        computerWins += 1;
    }
    // updates score text
    score.textContent = `${playerWins}-${computerWins}`;
}

// checks for 5 wins
function finalWinner(result) {
    if (playerWins == 5) {
        roundResult.textContent = 'You Won the game!';
    } else if (computerWins == 5) {
        roundResult.textContent = 'You loss the game!';
    } else {
        roundResult.textContent = result;
    }
}

// display score
const results = document.querySelector('#results');
const score = document.createElement('div');
score.classList.add('score')
score.textContent = `${playerWins}-${computerWins}`;
results.append(score);

const roundResult = document.createElement('h2');
roundResult.classList.add('winner');
results.append(roundResult);


