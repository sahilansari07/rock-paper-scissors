
function getComputerChoice(){
    let computerplay;
    computerplay = Math.floor(Math.random() * 3);
    switch (computerplay){
        case 0: return "rock";
        break;
        case 1: return "paper";
        break;
        case 2: return "scissors";
        break;
    } 
    }
function playgame(playerhand){
    let computerhand = getComputerChoice();
    if (playerhand==computerhand){
        document.getElementById("demo").innerHTML = "It is a draw";
        } 
    else if (playerhand=="rock" && computerhand=="paper"){
        document.getElementById("demo").innerHTML = "You lose. Paper beats Rock";
    }
    else if (playerhand=="rock" && computerhand=="scissors"){
        document.getElementById("demo").innerHTML = "You win. Rock beats Scissors";
    }
    else if (playerhand=="paper" && computerhand=="rock"){
        document.getElementById("demo").innerHTML = "You win. Paper beats Rock";
    }
    else if (playerhand=="paper" && computerhand=="scissors"){
        document.getElementById("demo").innerHTML = "You lose. Scissors beats Paper";
    }
    else if (playerhand=="scissors" && computerhand=="paper"){
        document.getElementById("demo").innerHTML = "You win. Scissors beats Paper";
    }
    else if (playerhand=="scissors" && computerhand=="rock"){
        document.getElementById("demo").innerHTML = "You lose. Rock beats Scissors";
    }
    else {
        document.getElementById("demo").innerHTML = "Please enter a valid move";
    }
    }

    

    


