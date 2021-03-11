// Game page js...
// card deck flipp effect sourced https://3dtransforms.desandro.com/card-flip..

var cards = document.querySelectorAll(".card");
let isCardFlipped = false;
let firstCard, secondCard;
let unableClick = false
let timerRunning = false
let cardClick;
let attempts = document.querySelector("#penalties")
let matchCounter = 0;

cards.forEach(card => {
    card.addEventListener("click", cardFlipped);
});

function cardFlipped() {
    if (unableClick) return;
    if (this === firstCard) return;
    this.classList.add("is-flipped");
    if (!isCardFlipped) {
        isCardFlipped = true;
        firstCard = this;
        if (timerRunning == false) {
            startTimer();
            timerRunning = true;
        }
        return;
    }
    secondCard = this;
    if (gameLevel == "easy") {
        cardClick += pairFlips;
        attempts.innerText = `Attempts:${cardClick}`;
    }
    checkForMatch();
}

//check for match...
function checkForMatch() {
    let matchMade = firstCard.dataset.character === secondCard.dataset.character;
    matchMade ? hideCards() : unflipCards();
}

//match- player recive points & cards hidden
var scores = document.querySelector(".score")
let score = 0;

function hideCards() {
    unableClick = true;
    setTimeout(() => {
        cards.forEach((card) => {
            if (card.classList.contains("is-flipped")) {
                card.style.visibility = "hidden";
            }
        });
        matchCounter += 1;
        if (gameLevel == "easy" && matchCounter == 6 || gameLevel == "medium" && matchCounter == 9 || gameLevel == "hard" && matchCounter == 12) {
            gameWon();
        }
        resetBoard();
    }, 1300);
    score += 10;
    scores.innerText = `Score: ${score}`;
    second += bonusTime;
    if (gameLevel == "medium" || gameLevel == "hard") {
        cardClick += pairFlips;
        attempts.innerText = `Attempts:${cardClick}`;
    }

}

//Not a match
function unflipCards() {
    unableClick = true;
    setTimeout(() => {
        firstCard.classList.remove("is-flipped");
        secondCard.classList.remove("is-flipped");
        resetBoard();
    }, 1300);
    if (score > 0) {
        score -= 2;
        scores.innerText = `Score: ${score}`;
    }
    if (gameLevel == "medium" || gameLevel == "hard") {
        cardClick -= pairFlips;
        attempts.innerText = `Attempts:${cardClick}`;
    }
    if (cardClick < 1) {
        gameOver();
    }
}

function resetBoard() {
    [isCardFlipped, unableClick] = [false, false];
    [firstCard, secondCard] = [null, null];
}
//immediatley invoked function to shuffle cards

(function shuffleCards() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 25);
        card.style.order = randomPos;
    })
})();


//Timer functionallity
var second = 59;
var timer = document.querySelector("#timer");
let countDown;

function startTimer() {
    countDown = setInterval(function () {
        timer.innerText = `Tik Tok: 00:${second}s`;
        second--; {
            if (second < 0) {
                gameOver();
            }
        }
    }, 1000);
}

let noWin = document.querySelector(".noWin-modal")
let win = document.querySelector(".win-modal")

function gameOver() {
    clearInterval(countDown);
    setTimeout(() => {
        if (second < 0 || cardClick < 1) {
            noWin.style.display = "block";
        } else {
            noWin.style.display = "hidden";
        }
    }, 1000);
}

function gameWon() {
    clearInterval(countDown);
    setTimeout(() => {
        win.style.display = "block";
    }, 1000);
}

//continue playing yesbtn
$("#yesBtn").click(function () {
    location.reload();
});

//exit game nobtn
$("#noBtn").click(function () {
    window.location.href = "/index.html"
})

$("#iDoBtn").click(function () {
    location.reload();
});

//exit game nobtn
$("#iDontBtn").click(function () {
    window.location.href = "/index.html"
})

//re-direct home btn

document.getElementById("home").onclick = function () {
    location.href = "index.html";
}

//reset board btn
$("#restart").click(function () {
    location.reload();
})


// Accessing the different levels

let gameLevel = sessionStorage.getItem("gameLevel");
let pairFlips;
let bonusTime;
const mediaQuery = window.matchMedia("(min-width:320px)")

switch (gameLevel) {
    case ("easy"):
        $(".hide-medium, .hide-hard").remove();
        cards.forEach(card => {
            card.classList.add("easy-card");
        });
        pairFlips = 1;
        cardClick = 0;
        bonusTime = 0;
        break;
    case ("medium"):
        $(".hide-hard").remove();
        cardClick = 5;
        pairFlips = 1;
        bonusTime = 3
        attempts.innerText = `Attempts:5`;
        cards.forEach(card => {
            card.classList.add("medium-card");
        });
        if (mediaQuery.matches) { 
            $("#wrapper").css("width","100%")
        }
        break;
    case ("hard"):
        bonusTime = 3
        cardClick = 10;
        pairFlips = 1;
        attempts.innerText = `Attempts:10`;
        cards.forEach(card => {
            card.classList.add("hard-card");
        });
                if (mediaQuery.matches) { 
            $("#wrapper").css("width","100%")
        }
        break;
}