let firstCard = 4
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        console.log("Do you want to draw a new card?")
    } else if (sum === 21) {
        message = "You win!"
        console.log("You win!")
        hasBlackJack = true
    } else {
        message = "You lose, American asshole."
        console.log("You lose, American asshole.")
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck.")
    let drawNewCard = 5
    sum += drawNewCard
    startGame()
}




