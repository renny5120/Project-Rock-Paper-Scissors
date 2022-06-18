function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    // if player and computer the same 
    if (playerSelection == computerSelection){
        return "draw";
    }

    // Scissors
    if (playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "loss";

        } else if (computerSelection == "paper"){
            return "win";

        }
    }

    // Rock
    if (playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "loss";

        } else if (computerSelection == "scissors"){
            return "win";
            
        }
    }

    // Paper
    if (playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return "loss";

        } else if (computerSelection == "rock"){
            return "win";
            
        }
    }

}

function computerPlay(){
    let str;
    const choices = ["rock", "paper", "scissors"];
    str = choices[Math.floor(Math.random(0) * 3)];
    return str;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));