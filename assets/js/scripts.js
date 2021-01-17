 // index js code...
 // Sound
 function togglePlay() {
        let audio = document.getElementById("audio");
        return audio.paused ? audio.play() : audio.pause();
};

//How to play -Modal code sourced from Url (https://www.youtube.com/watch?v=6ophW7Ask_0)
var customModal = document.getElementById("instructionsmodal");

var customBtn = document.getElementById("customBtn");

var closeBtn = document.getElementsByClassName("closeBtn")[0];

customBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);


window.addEventListener("click", outsideClick);

function openModal(){
    instructionsmodal.style.display = "block";
}

function closeModal(){
    instructionsmodal.style.display = "none";
}

function outsideClick(e) {
    if (e.target == instructionsmodal){
        instructionsmodal.style.display = "none";
    }
}

// startgame button modal Url (https://www.youtube.com/watch?v=6ophW7Ask_0)
var gameModal = document.getElementById("gamemodal");

var gameBtn = document.getElementById("gameBtn");

var shutBtn = document.getElementsByClassName("shutBtn")[0];

gameBtn.addEventListener("click", showModal);

shutBtn.addEventListener("click", hideModal);


window.addEventListener("click", clickOutside);

function showModal(){
    gamemodal.style.display = "block";
}

function hideModal(){
    gamemodal.style.display = "none";
}

function clickOutside(e) {
    if (e.target == gamemodal){
        gamemodal.style.display = "none";
    }
}