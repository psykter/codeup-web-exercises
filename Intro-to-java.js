'use strict';

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

// var count = 0;
// var max = 10;
// var interval = 1000; // interval time in milliseconds
//
// var intervalId = setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

<
    // script >
    // (function () {
    //     "use strict";
    //
    //     var detonationTimer = 5;
    //
    //     // TODO: This function needs to be called once every second
    //     function updateTimer() {
    //         if (detonationTimer == 0) {
    //             alert('EXTERMINATE!');
    //             document.body.innerHTML = '';
    //         } else if (detonationTimer > 0) {
    //             document.getElementById('timer').innerHTML = detonationTimer;
    //         }
    //
    //         detonationTimer--;
    //     }
    //
    //     // TODO: When this function runs, it needs to
    //     // cancel the interval/timeout for updateTimer()
    //     function defuseTheBOM() {
    //
    //     }
    //
    //     // Don't modify anything below this line!
    //     //
    //     // This causes the defuseTheBOM() function to be called
    //     // when the "defuser" button is clicked.
    //     // We will learn about events in the DOM lessons
    //     var defuser = document.getElementById('defuser');
    //     defuser.addEventListener('click', defuseTheBOM);
    // })();

    function updateTimer()
{
    if (detonationTimer == 0) {
        alert('EXTERMINATE!');
        document.body.innerHTML = '';
    } else if (detonationTimer > 0) {
        document.getElementById('timer').innerHTML = detonationTimer;
    }

    detonationTimer--;
}

let intervalId = setInterval(updateTimer, 1000);

setInterval(updateTimer, 1000);

function defuseTheBOM() {
    clearTimeout(updateTimer);
    detonationTimer = undefined;
}


</script>