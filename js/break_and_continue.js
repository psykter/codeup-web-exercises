console.log("Inside break_and_continue.js");
'use strict';
//
// let userInput;
//
// while (true) {
//     userInput = parseInt(prompt("Please enter an odd number between 1 and 50:"));
//
//     if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
//         break;
//     }
// }
//
// console.log("Number to skip: " + userInput);
// console.log(" ");
//
// for (let i = 1; i <= 50; i++) {
//     if (i === userInput) {
//         continue;
//     }
//
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }


// const numberToSkip = 27;
//
// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.floor(Math.random() * 200) + 20; // Generate a random number between 20 and 200
//     let numberType = randomNumber % 2 === 0 ? "even" : "odd"; // Check if the number is even or odd using the remainder operator
//
//     if (randomNumber === numberToSkip) {
//         console.log("Yikes! Skipping number: " + numberToSkip);
//         continue; // Skip to the next iteration of the loop
//     }
//
//     console.log("Here is an " + numberType + " number: " + randomNumber);
// }

// function promptBetweenOneAndFiftyAndOdd(){
//     let num;
//     do {
//         num = prompt("Please enter an odd number between 1-50?");
//         if(isValid(num)){
//             alert("Number entered is outside the acceptable range or an even number.  Please try again.");
//         }
//         else
//             break;
//
//         })
//     }while (true);
//     return num;
// }