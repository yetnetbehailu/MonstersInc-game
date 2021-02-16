// Game page js...
// card deck flipp effect sourced https://3dtransforms.desandro.com/card-flip..

var cards = document.querySelectorAll('.card');
let isCardFlipped = false;
let firstCard, secondCard;
let unableClick= false
let timerRunning = false
let cardClick = 0;
let attempts=document.querySelector("#penalties")

cards.forEach(card => {
card.addEventListener('click', function cardFlipped() {
    if (unableClick) return;
    if (this=== firstCard) return;
        this.classList.add('is-flipped');
        if (!isCardFlipped) {
            isCardFlipped = true;
            firstCard = this;
            if(timerRunning == false){
            startTimer();
            timerRunning = true;
        }
            return;
        } 
            secondCard = this;
        cardClick+=1;
        attempts.innerText = `Attempts:${cardClick}`;
            checkForMatch();
    });
});
//check for match...
function checkForMatch() {
    let matchMade = firstCard.dataset.character === secondCard.dataset.character;
    matchMade ? hideCards(): unflipCards();
}

//match- player recive points & cards hidden
var scores=document.querySelector(".score")
let score= 0;

function hideCards() {
    unableClick=true;
    isMatch= true;
    setTimeout(() => {
        cards.forEach((card) => {
            if (card.classList.contains("is-flipped")) {
                card.style.visibility = "hidden";
            }
        });
        resetBoard();
    }, 1300);
    score += 10;
    scores.innerText =  `Score: ${score}`;
}

//Not a match
function unflipCards() {
    unableClick=true;
    setTimeout(() => {
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
        resetBoard();
    }, 1300);
    if(score>0){
        score-=2;
        scores.innerText =  `Score: ${score}`;
    }
}

function resetBoard(){
    [isCardFlipped, unableClick]= [false,false];
    [firstCard,secondCard] = [null, null];
}
//immediatley invoked function to shuffle cards

(function shuffleCards(){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random()*25);
        card.style.order=randomPos;
    })
})();  


//Timer functionallity
var second = 59;
var timer = document.querySelector("#timer");
let countDown;
function startTimer(){
    countDown = setInterval(function(){
        timer.innerText = `Tik Tok: 00:${second}s`;
        second--; {
            if(second < 0){ 
                gameOver();
            }
        }
    },1000);
}

function gameOver(){
    clearInterval(countDown);
}

//re-direct home btn

document.getElementsByClassName("home").onclick= function (){
    location.href = "/index.html";
}

// Accessing the different levels

let gameLevel = sessionStorage.getItem("gameLevel");
gameSetUp();

 function gameSetUp() {
    switch (gameLevel) {
      case ("easy"):
        $(".hide-medium, .hide-hard").remove();
        $("#wrapper").css("width","407px")
        break;
      case ("medium"):
        $('.hide-hard').remove();
        $(".card").css("height","145px")
        break;
      case ("hard"):
        break;
    }
  }