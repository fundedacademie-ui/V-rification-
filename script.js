// Horloge de New York
function updateClock() {
    const options = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    document.getElementById("clock").textContent =
        new Date().toLocaleTimeString("fr-FR", options);
}

setInterval(updateClock, 1000);
updateClock();


// Animation "Chargement..."
const loading = document.getElementById("loadingText");

let dots = 0;

setInterval(() => {

    dots++;

    if (dots > 3)
        dots = 0;

    loading.textContent = "Chargement" + ".".repeat(dots);

}, 500);


// Barre de progression

let progress = 0;

const progressFill = document.getElementById("progressFill");

const progressText = document.getElementById("progressText");

setInterval(() => {

    progress++;

    if (progress > 100)
        progress = 0;

    progressFill.style.width = progress + "%";

    progressText.textContent = progress + "%";

}, 120);


// Génération d'un ID de session

function randomBlock(length) {

    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let result = "";

    for (let i = 0; i < length; i++) {

        result += chars[Math.floor(Math.random() * chars.length)];

    }

    return result;

}

document.getElementById("sessionID").textContent =
    randomBlock(4) + "-" +
    randomBlock(4) + "-" +
    randomBlock(4);
