var computerChoiceDisplay = document.getElementById('computer-choice')
var userChoiceDisplay = document.getElementById('your-choice')
var resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.value = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Paper'
    }
    if(randomNumber === 3){
        computerChoice = 'Scissor'
    }
    computerChoiceDisplay.value = computerChoice
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'its a draw!'
    }
    if (computerChoice ===  'Rock' && userChoice === 'Paper'){
        result = 'You win!'
    }
    if (computerChoice ===  'Rock' && userChoice === 'Scissor'){
        result = 'You lost!'
    }
    if (computerChoice ===  'Paper' && userChoice === 'Rock'){
        result = 'You lost!'
    }
    if (computerChoice ===  'Paper' && userChoice === 'Scissor'){
        result = 'You win!'
    }
    if (computerChoice ===  'Scissor' && userChoice === 'Paper'){
        result = 'You lost!'
    }
    if (computerChoice ===  'Scissor' && userChoice === 'Rock'){
        result = 'You win!'
    }
    resultDisplay.value = result
}

