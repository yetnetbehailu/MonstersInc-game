// Game page js...
// card deck flipp effect sourced https://3dtransforms.desandro.com/card-flip..

var cards = document.querySelectorAll('.card');
let isCardFlipped = false;
let firstCard, secondCard;
cards.forEach(card => {
card.addEventListener('click', function cardFlipped() {
        this.classList.add('is-flipped');
        if (!isCardFlipped) {
            isCardFlipped = true;
            firstCard = this;
            return;
        } 
            secondCard = this;
            isCardFlipped = false;
            checkForMatch();
    });
});
//check for match...
function checkForMatch() {
    let matchMade = firstCard.dataset.character === secondCard.dataset.character;
    matchMade ? hideCards(): unflipCards();
}