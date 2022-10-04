let home = 0
let guest = 0;
const homeScore = document.getElementById("homeScore");
const homeCard = document.getElementById("home");
const guestScore = document.getElementById("guestScore");
const guestCard = document.getElementById("guest");

function winner() {
    if (home > guest) {
        homeCard.classList.add('highlight');
        guestCard.classList.remove('highlight');
    } else if (guest > home) {
        guestCard.classList.add('highlight');
        homeCard.classList.remove('highlight');
    } else {
        homeCard.classList.remove('highlight');
        guestCard.classList.remove('highlight');
    }
}

function homePlus1() {
    homeScore.textContent = `${home += 1}`;
    winner();
}

function homePlus2() {
    homeScore.textContent = `${home += 2}`;
    winner();
}

function homePlus3() {
    homeScore.textContent = `${home += 3}`;
    winner();
}

function guestPlus1() {
    guestScore.textContent = `${guest += 1}`;
    winner();
}

function guestPlus2() {
    guestScore.textContent = `${guest += 2}`;
    winner();
}

function guestPlus3() {
    guestScore.textContent = `${guest += 3}`;
    winner();
}

function newGame() {
    home = 0;
    guest = 0;
    homeScore.textContent = home;
    guestScore.textContent = guest;
    winner();
}