// Game page js...
// card deck flipp effect sourced https://3dtransforms.desandro.com/card-flip..

var cards = document.querySelectorAll('.card');
let isCardFlipped = false;
let firstCard, secondCard;
let unableClick= false
cards.forEach(card => {
card.addEventListener('click', function cardFlipped() {
    if (unableClick) return;
    if (this=== firstCard) return;
        this.classList.add('is-flipped');
        if (!isCardFlipped) {
            isCardFlipped = true;
            firstCard = this;
            return;
        } 
            secondCard = this;
            checkForMatch();
    });
});
//check for match...
function checkForMatch() {
    let matchMade = firstCard.dataset.character === secondCard.dataset.character;
    matchMade ? hideCards(): unflipCards();
}

function hideCards(firstCard, secondCard) {
    setTimeout(() => {
        var divs = document.getElementsByTagName('div');
        for (var i = divs.length; i--;) {
            var div = divs[i];
            if (div.className === 'card is-flipped') {
                div.style.visibility = 'hidden';
            }
        }
        resetBoard();
    }, 1400);
}

function unflipCards() {
    unableClick=true;
    setTimeout(() => {
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
        resetBoard();
    }, 1500);
}

function resetBoard(){
    [isCardFlipped, unableClick]= [false,false];
    [firstCard,secondCard] = [null, null];
}
//immediatley invoked function

(function shuffleCards(){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random()*25);
        card.style.order=randomPos;
    })
})(); 