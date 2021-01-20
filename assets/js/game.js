// Game page js...
// card deck flipp effect sourced https://3dtransforms.desandro.com/card-flip..

var cards = document.querySelectorAll('.card');
cards.forEach(card => { card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
})  
});