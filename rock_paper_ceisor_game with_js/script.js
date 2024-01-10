const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")

const possibleChoice = document.querySelectorAll("button")
let userchoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener("click",(e)=>{
    userchoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)+1
    // console.log(randomNumber);

    if(randomNumber ==1){
        computerChoice = 'rock';
    }
    if(randomNumber ==2){
        computerChoice = 'scissor';

    }
    if(randomNumber ==3){
        computerChoice = 'paper';

    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if(computerChoice == userchoice){
        result = "its a draw"
    }
    if(computerChoice == 'rock' && userchoice == 'paper'){
        result = "You win!"
    }
    if(computerChoice == 'rock' && userchoice == 'scissor'){
        result = "You lost!"
    }
    if(computerChoice == 'paper' && userchoice == 'rock'){
        result = "You lost!"
    }
    if(computerChoice == 'paper' && userchoice == 'scissor'){
        result = "You win!"
    }
    if(computerChoice == 'scissor' && userchoice == 'paper'){
        result = "You lost!"
    }
    if(computerChoice == 'scissor' && userchoice == 'rock'){
        result = "You win!"
    }
    resultDisplay.innerHTML = result;
}