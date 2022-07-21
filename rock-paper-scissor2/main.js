const displaycomputer = document.getElementById('computer')
const displayuser = document.getElementById('user')
const displayresult = document.getElementById('result')
const choices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

choices.forEach(choices =>  choices.addEventListener('click', (e) =>{
    userChoice = e.target.id
    displayuser.value = userChoice
    generatecomputerchoice()
    getresult()
}) )

function generatecomputerchoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1){
        computerChoice = 'Rock'
    }
    if(randomNumber === 2){
        computerChoice = 'Paper'
    }
    if(randomNumber === 3){
        computerChoice === 'Scissor'
    }
    displaycomputer.value = computerChoice
}

function getresult(){
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
    displayresult.value = result
}