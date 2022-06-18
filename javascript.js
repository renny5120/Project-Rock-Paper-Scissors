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


// chooses computer choice
function computerPlay(){
    let str;
    const choices = ["rock", "paper", "scissors"];
    str = choices[Math.floor(Math.random(0) * 3)];
    return str;
}

function game(){

    // keeps track of wins
    let playerWins = 0;
    let computerWins = 0;

    // plays 5 rounds
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose: Rock, Paper, or Scissors");
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        switch(result){
            case "win":
                playerWins+=1;
                alert(result);
                break;
            case "loss":
                computerWins+=1;
                alert(result);
                break;
            case "draw":
                alert(result);
                break;
        }
    }

    // compares player wins to computer wins
    if(playerWins > computerWins){
        return "Player wins: " + playerWins + "-" + computerWins;
    } else if (computerWins > playerWins){
        return "Computer wins: " + computerWins + "-" + playerWins;
    } else {
        return "Draw: " + playerWins + "-" + computerWins;
    }

}

console.log(game());