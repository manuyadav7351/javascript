function getresult() {
    if (computerChoice === userChoice) {
        results = 'its a draw';
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You win!';
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissor') {
        result = 'You lost!';
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You lost!';
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissor') {
        result = 'You win!';
    }
    if (computerChoice === 'Scissor' && userChoice === 'Paper') {
        result = 'You lost!';
    }
    if (computerChoice === 'Scissor' && userChoice === 'Rock') {
        result = 'You win!';
    }
    displayresult.value = result;
}
