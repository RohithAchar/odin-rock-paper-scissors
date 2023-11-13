//ALGORITHM
//init playerScore to 0.
//init computerScore to 0.
//init array of [rock,paper,scissors]
//init count to 0.
//function getComputerChoice return random element from array of [rock,paper,scissors]
//loop till count < 5.
    //get input from computer.
    //get input from user and convert it to lowercase.
    //if player won add 10 to playerScore.
    //if computer won add 10 to computerScore.
    //if draw do nothing.
//End loop
//check who won.


//init playerScore to 0.
let playerScore = 0;
//init computerScore to 0.
let computerScore = 0;
//init array of [rock,paper,scissors]
const choices = ["rock","paper","scissors"];
//init count to 0.
let count = 0;
//function getComputerChoice return random element from array of [rock,paper,scissors]
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
//loop till count < 5.
while(count < 5){
    //get input from computer.
    const computerChoice = getComputerChoice();
    //get input from user and convert it to lowercase.
    const playerChoice = prompt("Enter your choice").toLowerCase();

    //if player won add 10 to playerScore.
    //if computer won add 10 to computerScore.
    //if draw do nothing.
    if(playerChoice == computerChoice){
    }
    
    else if(computerChoice == "rock" && playerChoice == "paper" ||
            computerChoice == "paper" && playerChoice == "scissors" ||
            computerChoice == "scissors" && playerChoice == "rock"
        ){
            playerScore += 10;
    }
    else{
    computerScore += 10;
    }
    count++;
}
//End loop
//check who won.
if(playerScore === computerScore){
    alert(`It's a draw.\nComputer score = ${computerScore}\nPlayer score = ${playerScore}`);
}
else if(playerScore > computerScore){
    alert(`You won.\nComputer score = ${computerScore}\nPlayer score = ${playerScore}`);
}
else{
    alert(`You lost.\nComputer score = ${computerScore}\nPlayer score = ${playerScore}`);
}