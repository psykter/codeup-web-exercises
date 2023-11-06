"use strict";
(() => {
    let val = 2;
    while (val <= 65536) {
        console.log(val);
        val *= 2
    }

    let pow = 1;
    while (pow < 17) {
        console.log(2 ** pow);
        pow++;
    }

    let inventory = Math.floor(Math.random() * 50) + 50;

    do {
        let conesOrdered = Math.floor(Math.random() * 5) + 1;
        if (conesOrdered > inventory) {
            console.log(`Sorry, I cannot sell you ${conesOrdered}, as we only have ${inventory} cones left in stock...`);
        } else {
            console.log(`Here are your ${conesOrdered} ice cream cones. We now have ${inventory - conesOrdered} left in inventory.`);
            inventory -= conesOrdered;
        }
    } while (inventory !== 0);
    console.log("Yay! I'm free of my ice cream prison!");
})();