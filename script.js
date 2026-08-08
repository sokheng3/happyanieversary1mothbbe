
const anniversaryDate = new Date("2026-07-14T00:00:00");

const openButton = document.getElementById("openButton");

const opening = document.getElementById("opening");

const website = document.getElementById("website");

const audio = document.getElementById("audio");

const musicButton = document.getElementById("musicButton");


openButton.addEventListener("click", function () {

    // Music starts here
    audio.volume = 0.5;

    audio.play()
        .then(function () {
            musicButton.innerHTML = "🔊 Music On";
        })
        .catch(function () {
            console.log("Music could not start.");
        });


    // Hide opening
    opening.classList.add("hide");


    // Show website
    setTimeout(function () {
        website.classList.add("show");
    }, 300);

});


// ================================
// MUSIC BUTTON
// ================================

musicButton.addEventListener("click", function () {

    if (audio.paused) {

        audio.play();

        musicButton.innerHTML = "🔊 Music On";

    } else {

        audio.pause();

        musicButton.innerHTML = "🔇 Music Off";

    }

});


// ================================
// COUNTER
// ================================

function updateCounter() {

    const now = new Date();

    const difference = now - anniversaryDate;


    if (difference < 0) {
        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        difference / (1000 * 60 * 60)
    ) % 24;


    const minutes = Math.floor(
        difference / (1000 * 60)
    ) % 60;


    const seconds = Math.floor(
        difference / 1000
    ) % 60;


    document.getElementById("days").textContent =
        days;


    document.getElementById("hours").textContent =
        hours;


    document.getElementById("minutes").textContent =
        minutes;


    document.getElementById("seconds").textContent =
        seconds;
}


updateCounter();

setInterval(updateCounter, 1000);
