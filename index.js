let homeScoreEl = document.getElementById("homeScore")

let homeCount = 0;

function homeAdd1() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function homeAdd2() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function homeAdd3() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

let guestScoreEl = document.getElementById("guestScore")

let guestCount = 0

function guestAdd1() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function guestAdd2() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function guestAdd3() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}