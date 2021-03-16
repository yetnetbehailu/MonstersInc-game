// index js code...
// Sound
function togglePlay() {
    $("#sound i").toggleClass("fa-volume-up fa-volume-mute");
    let audio = document.getElementById("audio");
    return audio.paused ? audio.play() : audio.pause();
}

//How to play -Modal code sourced from Url (https://www.youtube.com/watch?v=6ophW7Ask_0)
let infoModal = document.getElementById("instructionsmodal");

let infoBtn = document.getElementById("infoBtn");

let closeBtn = document.getElementsByClassName("closeBtn")[0];

infoBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", outsideClick);

function openModal() {
    instructionsmodal.style.display = "block";
}

function closeModal() {
    instructionsmodal.style.display = "none";
}

function outsideClick(e) {
    if (e.target == instructionsmodal) {
        instructionsmodal.style.display = "none";
    }
}

// startgame button modal Url (https://www.youtube.com/watch?v=6ophW7Ask_0)
let gameModal = document.getElementById("gamemodal");

let gameBtn = document.getElementById("gameBtn");

closeBtn = document.getElementsByClassName("closeBtn")[1];

gameBtn.addEventListener("click", showModal);

closeBtn.addEventListener("click", hideModal);

window.addEventListener("click", clickOutside);

function showModal() {
    gamemodal.style.display = "block";
}

function hideModal() {
    gamemodal.style.display = "none";
}

function clickOutside(e) {
    if (e.target == gamemodal) {
        gamemodal.style.display = "none";
    }
}

// Accessing the different levels

$("#easy").click(function () {
    sessionStorage.setItem("gameLevel", "easy");
});
$("#medium").click(function () {
    sessionStorage.setItem("gameLevel", "medium");
});
$("#hard").click(function () {
    sessionStorage.setItem("gameLevel", "hard");
});
