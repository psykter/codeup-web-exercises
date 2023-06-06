'use strict';

// let number = 2;
// while (number <= 65536) {
//     console.log(number);
//     number *= 2;
// }

// function doubleInput(num){
//     while(num < 66000){
//         console.log(num);
//         num *= 2;
//         if(num > 66000) break;
//     }
// }

// let totalCones = Math.floor(Math.random() * 51) + 50; // Generate a random number between 50 and 100 for total cones
// console.log("Total cones to sell: " + totalCones);
//
// do {
//     let conesBought = Math.floor(Math.random() * 5) + 1; // Generate a random number between 1 and 5 for cones bought by a client
//
//     if (conesBought <= totalCones) {
//         console.log("Sold " + conesBought + " cone(s) to a customer.");
//         totalCones -= conesBought;
//     } else {
//         console.log("Cannot sell " + conesBought + " cone(s) to a customer. Only " + totalCones + " cone(s) left.");
//     }
// } while (totalCones > 0);
//
// console.log("All cones have been sold!");
//
// function sellMyCones(){
//     const allCones = Math.floor(Math.random() * 50) + 50;
//     do{
//         const customerCones = Math.floor(Math.random() * 5) + 1;
//         if(allCones - customerCones < 0)
//             console.log((`I can't sell ${customerCones} cones, I only have ${allCones}`);
//             continue:
//     }else if(allCones -customerCones === 0) {
//         console.log('Yay! I sold them all!');
//     }else {
//         console.log((`${customerCones} cones sold.`);
//         allCones -= customerCones;
//         ??????????
//     }
// }