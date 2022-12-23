
let cards = []
let sum = 0
let message = ""
//Create a boolean to know whether a player has blackjack or not
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el") //<-create a variable to link js elemment to html element
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function random() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}


function startGame() {
    isAlive = true
    let firstCard = random()
    let secondCard = random()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " | "
    }     //Iterate through the cards array to display a new card no matter how many times new card is clicked

    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message //<-display "message" output on html
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let extraCard = random()
        sum += extraCard
        cards.push(extraCard)
        renderGame()
    }
}



