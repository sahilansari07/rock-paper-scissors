
function getComputerChoice(){
    let computerhand;
    computerhand = Math.floor(Math.random() * 3);
    switch (computerhand){
        case 0: return "rock";
        break;
        case 1: return "paper";
        break;
        case 2: return "scissors";
        break;
    } 
}
function playgame(playerhand){
    let computerplay = getComputerChoice();
    if (playerhand==computerplay){
        console.log("It is a draw");
        } 
    else if (playerhand=="rock" && computerplay=="paper"){
        console.log("You lose. Paper beats Rock");
    }
    else if (playerhand=="rock" && computerplay=="scissors"){
        console.log("You win. Rock beats Scissors");
    }
    else if (playerhand=="paper" && computerplay=="rock"){
        console.log("You win. Paper beats Rock");
    }
    else if (playerhand=="paper" && computerplay=="scissors"){
        console.log("You lose. Scissors beats Paper");
    }
    else if (playerhand=="scissors" && computerplay=="paper"){
        console.log("You win. Scissors beats Paper");
    }
    else if (playerhand=="scissors" && computerplay=="rock"){
        console.log("You lose. Rock beats Scissors");
    }
    else {
        console.log("Please enter a valid move");
    }
}



