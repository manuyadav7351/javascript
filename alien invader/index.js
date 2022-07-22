const btn = document.querySelector('.play')
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.results')
let currentShooterIndex = 217
let width = 15
let direction = 1
let invandersId
let goingRight = true
let aliensremoved = []
let result = 0


for(let i = 0; i<225; i++){
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const alienInvanders = [
    3,4,5,6,7,8,9,10,11,12,
    18,19,20,21,22,23,24,25,26,27,
    33,34,35,36,37,38,39,40,41,42
]

function draw(){
    for(let i =0; i < alienInvanders.length; i++){
        if(!aliensremoved.includes(i)){
            squares[alienInvanders[i]].classList.add('invader')
        }        
    }
}

draw()

function remove(){
    for(let i =0; i < alienInvanders.length; i++){
        squares[alienInvanders[i]].classList.remove('invader')
    }
}


squares[currentShooterIndex].classList.add('shooter')

function moveShooter(e){
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key){
        case 'ArrowLeft':
            if(currentShooterIndex % width !== 0) currentShooterIndex -= 1
            break
        case 'ArrowRight':
            if(currentShooterIndex % width < width -1) currentShooterIndex += 1
            break
    }
    squares[currentShooterIndex].classList.add('shooter')
}

// document.addEventListener('keydown', moveShooter)

function moveInvaders(){
    const leftEdge = alienInvanders[0] % width === 0
    const rightEdge = alienInvanders[alienInvanders.length -1] % width === width -1
    remove()
    if(rightEdge && goingRight){
        for(let i = 0; i <alienInvanders.length; i++){
            alienInvanders[i] += width +1
            direction = -1
            goingRight = false
        }
    }

    if(leftEdge && !goingRight){
        for(let i = 0; i < alienInvanders.length; i++){
            alienInvanders[i] += width -1
            direction = +1
            goingRight = true
        }
    }
    for(let i = 0; i < alienInvanders.length; i++){
        alienInvanders[i] += direction
    }

draw()

    if(squares[currentShooterIndex].classList.contains('invader','shooter')){
        resultDisplay.innerHTML = 'GAME OVER'
        clearInterval(invandersId)
    }
    for(let i = 0; i < alienInvanders.length; i++){
        if(alienInvanders[i] > squares.length){
            resultDisplay.innerHTML = 'GAME OVER'
            clearInterval(invandersId)
        }
    }
    if(aliensremoved.length === alienInvanders.length){
        resultDisplay.innerHTML = 'YOU WIN!'
        clearInterval(invandersId)
    }
}

// invandersId = setInterval(moveInvaders, 2000)

function shoot(e){
    let laserId
    let currentLaserIndex = currentShooterIndex
    function moveLaser(){
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')
        if(squares[currentLaserIndex].classList.contains('invader')){
            squares[currentLaserIndex].classList.remove('laser')
            squares[currentLaserIndex].classList.remove('invader')
            squares[currentLaserIndex].classList.add('boom')

            setTimeout(()=> squares[currentLaserIndex].classList.remove('boom', 300))
            clearInterval(laserId)
            const alienRemoval = alienInvanders.indexOf(currentLaserIndex)
            aliensremoved.push(alienRemoval)
            result++
            resultDisplay.innerHTML = result
        }
        }
        switch(e.key){
            case 'ArrowUp':
            laserId = setInterval(moveLaser, 100)
    }
}

// document.addEventListener('keydown', shoot)

btn.addEventListener('click', function(){
    invandersId = setInterval(moveInvaders, 300)
    document.addEventListener('keydown', shoot)
    document.addEventListener('keydown', moveShooter)
})