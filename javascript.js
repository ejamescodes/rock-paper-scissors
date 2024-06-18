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

function playRound(){
    let humanScore = 0;
    let computerScore = 0;
    let compChoice = getComputerChoice();
    let humChoice = getHumanChoice();
    if((compChoice == 'rock' && humChoice == 'scissors') ||
        (compChoice == 'paper' && humChoice == 'rock') ||
        (compChoice == 'scissors' && humChoice == 'paper')){
            computerScore++;
            compChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
            humChoice = humChoice.charAt(0).toUpperCase() + humChoice.slice(1);
            console.log(`You lose! ${compChoice} beats ${humChoice}.`)
    } else if((compChoice == 'paper' && humChoice == 'scissors') ||
        (compChoice == 'scissors' && humChoice == 'rock') ||
        (compChoice == 'rock' && humChoice == 'paper')){
            humanScore++;
            compChoice = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);
            humChoice = humChoice.charAt(0).toUpperCase() + humChoice.slice(1);
            console.log(`You win! ${humChoice} beats ${compChoice}.`)
    } else {
        console.log("It's a draw")
    }
    return [humanScore, computerScore];
}

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