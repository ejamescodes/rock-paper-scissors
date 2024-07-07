function getComputerChoice(){
    let compChoice = '';
    switch(Math.floor(Math.random()*3)) {
        case 0: 
            compChoice = 'rock';
            break;
        case 1: 
            compChoice = 'paper';
            break;
        case 2: 
            compChoice = 'scissors';
            break;
    }
    return compChoice;
}

function getHumanChoice(){
    let humChoice = prompt("Rock, Paper, or Scissors?!");
    humChoice = humChoice.toLowerCase();
 /*   try{
        if(humChoice == "sock" ||
            humChoice == "paper" ||
            humChoice == "scissors"){
                
                return humChoice;
            }
    } catch (error) {
        console.error("Invalid Input");
    } */
   return humChoice;
}

function playRound(humChoice){
    let rtc = '';
    let humanScore = 0;
    let computerScore = 0;
    let compChoice = getComputerChoice();
    humChoice = humChoice.toLowerCase();
    if((compChoice == 'rock' && humChoice == 'scissors') ||
        (compChoice == 'paper' && humChoice == 'rock') ||
        (compChoice == 'scissors' && humChoice == 'paper')){
            computerScore++;
            compChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
            humChoice = humChoice.charAt(0).toUpperCase() + humChoice.slice(1);
            rtc = (`You lose! ${compChoice} beats ${humChoice}.`)
    } else if((compChoice == 'paper' && humChoice == 'scissors') ||
        (compChoice == 'scissors' && humChoice == 'rock') ||
        (compChoice == 'rock' && humChoice == 'paper')){
            humanScore++;
            compChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
            humChoice = humChoice.charAt(0).toUpperCase() + humChoice.slice(1);
            rtc = (`You win! ${humChoice} beats ${compChoice}.`)
    } else {
        rtc = ("It's a draw");
    }
    hScore += humanScore;
    cScore += computerScore;
    rtc = rtc+` Humans: ${hScore} - Machines: ${cScore}`;

    if(hScore == 5){
        rtc = `Humans win! Humans: ${hScore} - Machines: ${cScore}`;
    }
    else if(cScore == 5){
        rtc = `Computers win! Humans: ${hScore} - Machines: ${cScore}`;
    }

    results.textContent = rtc;
}

let hScore = 0;
let cScore = 0;
let rounds = 0;

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;
    while(rounds < 5){
        let [humInc, compInc] = playRound();
        humanScore+= humInc;
        computerScore+= compInc;
        console.log(`Current Score: Hum:${humanScore} - CPU:${computerScore}`)
        rounds++;
    }
    console.log(`Final Score: Hum:${humanScore} - CPU:${computerScore}`)
}

const content = document.querySelector("#container");

const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
btnRock.onclick = () => playRound("Rock");

const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
btnPaper.onclick = () => playRound("Paper");

const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";
btnScissors.onclick = () => playRound("Scissors");

content.appendChild(btnRock);
content.appendChild(btnPaper);
content.appendChild(btnScissors);

const results = document.createElement("div");
content.appendChild(results);