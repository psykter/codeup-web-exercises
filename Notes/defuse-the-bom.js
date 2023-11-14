"use strict";

var detonationTimer = 5;

function updateTimer() {
    if (detonationTimer == 0) {
        alert('EXTERMINATE!');
        document.body.innerHTML = '';
    } else if (detonationTimer > 0) {
        document.getElementById('timer').innerHTML = detonationTimer;
    }

    detonationTimer--;
}

let intervalId = setInterval(updateTimer, 1000);

function defuseTheBOM() {
    clearInterval(intervalId);
}

var defuser = document.getElementById('defuser');
defuser.addEventListener('click', defuseTheBOM);