const title = document.querySelector('#title');
const playerScoreEle = document.querySelector('#your-score');
const computerScoreEle = document.querySelector('#computer-score');
//const playerChoiceEle = document.querySelector('#your-choice');
//const computerChoiceEle = document.querySelector('#computer-choice');
const roundWinner = document.querySelector('#winner');
const buttons = document.querySelectorAll('button');

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let round = 0;

buttons.forEach(btn => {
    btn.addEventListener('click',playRound);
});

function reset(){
    title.textContent = "Select your choice."
    playerScoreEle.textContent = "Your Score : 0"
    computerScoreEle.textContent = "Computer Score : 0";
    playerChoice = "";
    computerChoice = "";
    playerScore = 0
    computerScore = 0
    round = 0;
}
function randomComputerChoice(){
    const choices = ['rock','paper','scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function addScore(playerChoice,computerChoice){
    if(playerChoice == computerChoice){
        roundWinner.textContent = "Draw";
    }
    else if(computerChoice == "rock" && playerChoice == "paper" ||
            computerChoice == "paper" && playerChoice == "scissors" ||
            computerChoice == "scissors" && playerChoice == "rock"
        ){
            playerScore += 1;
            roundWinner.textContent = "You win";
    }
    else{
        computerScore += 1;
        roundWinner.textContent = "Computer win";
    }
}
function displayWinner(){
    if(playerScore == computerScore){
        title.textContent = "It's a draw";
    }
    else if(playerScore > computerScore){
        title.textContent = "You won";
    }
    else{
        title.textContent = "You lose";
    }
}
function displayScore(){
    playerScoreEle.textContent = "Your score : "+playerScore;
    computerScoreEle.textContent = "Computer score : "+computerScore+" ("+computerChoice+")";
}
// function displayChoice(playerChoice,computerChoice){
//     playerChoiceEle.textContent = "Your choice : "+playerChoice;
//     computerChoiceEle.textContent = "Computer choice : "+computerChoice;
// }
function disableButtons(){
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}
function enableButtons(){
    buttons.forEach(btn => {
        btn.disabled = false;
    });
}
function playRound(pChoice){
    round++;
    title.textContent = "Round : "+round;
    playerChoice = pChoice.target.id;
    computerChoice = randomComputerChoice();
    //displayChoice(playerChoice,computerChoice);
    addScore(playerChoice,computerChoice);
    displayScore();
    if(playerScore == 5 || computerScore == 5){
        displayWinner();
        disableButtons();
        setTimeout(function() {
            reset();
            enableButtons();
        }, 2000);
    }
}