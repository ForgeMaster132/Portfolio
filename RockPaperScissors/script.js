function computerselection(){
    let plays = ["Rock","Paper","Scissors"]
    let outcome = plays[Math.floor(Math.random() * plays.length)];
return outcome;
}
let playerselect;

let playerScore = 0;
let computerScore = 0;

function setRock(){
    playerselect = "ROCK";
}
document.getElementById("rock").addEventListener("click",setRock);
document.getElementById("rock").addEventListener("click",playRound);

function setPaper(){
    playerselect = "PAPER";
}
document.getElementById("paper").addEventListener("click",setPaper);
document.getElementById("paper").addEventListener("click",playRound);

function setScissors(){
    playerselect = "SCISSORS";
}
document.getElementById("scissors").addEventListener("click",setScissors);
document.getElementById("scissors").addEventListener("click",playRound);

function playRound(){
    let computerselect = computerselection();

if (playerselect == "ROCK" && computerselect == "Paper"){
    document.getElementById("roundText").textContent = "You lose! Your Rock loses to Computers Paper";
    computerScore += 1;
    document.getElementById("compScore").textContent ="Computer Score: " + computerScore;
    }
    else if(playerselect == "ROCK" && computerselect == "Rock"){
    document.getElementById("roundText").textContent = "You Draw! You Both Played Rock";
    } 
    else if (playerselect == "ROCK" && computerselect == "Scissors"){
    document.getElementById("roundText").textContent = "You Win! Your Rock beats Computers Scissors";
    playerScore += 1;
    document.getElementById("playScore").textContent = "Player Score: " + playerScore;
    } 
    else if (playerselect == "PAPER" && computerselect == "Paper"){
    document.getElementById("roundText").textContent = "You Draw! You Both Played Paper";
    }
    else if (playerselect == "PAPER" && computerselect == "Rock"){
    document.getElementById("roundText").textContent = "You Win! Your Paper beats Computers Rock";
    playerScore += 1;
    document.getElementById("playScore").textContent = "Player Score: " + playerScore;
    }
    else if (playerselect == "PAPER" && computerselect == "Scissors"){
    document.getElementById("roundText").textContent = "You lose! Your Paper loses to Computers Scissors";
    computerScore += 1;
    document.getElementById("compScore").textContent ="Computer Score: " + computerScore;
    }
    else if (playerselect == "SCISSORS" && computerselect == "Paper"){
    document.getElementById("roundText").textContent = "You Win! Your Scissors beats Computers Paper";
    playerScore += 1;
    document.getElementById("playScore").textContent = "Player Score: " + playerScore;
    }
    else if (playerselect == "SCISSORS" && computerselect == "Rock"){
    document.getElementById("roundText").textContent = "You lose! Your Scissors loses to Computers Rock";
    computerScore += 1;
    document.getElementById("compScore").textContent ="Computer Score: " + computerScore;
    }
    else if (playerselect == "SCISSORS" && computerselect == "Scissors"){
    document.getElementById("roundText").textContent = "You Draw! You Both Played Scissors";
    }
    if(computerScore == 5){
        alert("The Computer is Victorious!");
        computerScore = 0;
        document.getElementById("compScore").textContent ="Computer Score: " + computerScore;
        playerScore = 0;
        document.getElementById("playScore").textContent = "Player Score: " + playerScore;
        document.getElementById("roundText").textContent = "";
        return;
    } else if (playerScore == 5){
        alert("You are Victorious!");
        computerScore = 0;
        document.getElementById("compScore").textContent ="Computer Score: " + computerScore;
        playerScore = 0;
        document.getElementById("playScore").textContent = "Player Score: " + playerScore;
        document.getElementById("roundText").textContent = "";
        return;
    }
}