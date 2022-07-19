const cardArray = [
    {
        name : 'fries',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'burger',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'hotdog',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'ice-cream',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'milkshake',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'pizza',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'fries',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'burger',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'hotdog',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'ice-cream',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'milkshake',
        img : 'media/dark-wall.jpg',
    },
    {
        name : 'pizza',
        img : 'media/dark-wall.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())
const resultDisplay = document.querySelector('#result')
const gridDisplay = document.querySelector('#grid')
let cardChoosen = []
let cardsChoosenIds = []
const cardWon = []

function createBoard () {
    for(let i=0; i < cardArray.length ;  i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'media/dark-wall.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}
createBoard()

function checkMatch() {
    const cards = Document.querySelectorAll('img')
    const optionOneID = cardsChoosenIds[0]
    const optionTwoID = cardsChoosenIds[1]
    if(optionOneID == optionTwoID){
        alert('clicked same image')
    }
    if(cardChoosen[0] == cardChoosen[1]){
        alert('match')
        cards[optionOneID].setAttribute('src', 'media/dark.jpg')
        cards[optionTwoID].setAttribute('src', 'media/dark.jpg')
        cards[optionOneID].removeEventListener('click', flipCard)
        cards[optionTwoID].removeEventListener('click', flipCard)
        cardWon.push(cardChoosen)
    } else {
        cards[optionOneID].setAttribute('src', 'media/dark.jpg')//bl
        cards[optionTwoID].setAttribute('src', 'media/dark.jpg')//bl
        alert("try again")
    }
    resultDisplay.innerHTML = cardWon.length    
    cardChoosen = []
    cardsChoosenIds = []
    if(cardWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Found all'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardChoosen.push(cardArray[cardId].name)
    cardsChoosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChoosen.length == 2){
        setTimeout(checkMatch, 500)
    }
}














