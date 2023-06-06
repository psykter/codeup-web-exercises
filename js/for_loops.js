'use strict';
// Question #2

//      Method #1
// function showMultiplicationTable(number){
//     for(let i - 1; i <=10; i++) {
//         console.log(`${number} x ${i} = ${number * 1}`);
//     }
// }
//      Method #2
// const num = parseInt(prompt('Enter a number 1 through 10'));
// for (let i = 1; i <= 10; ++i) {
//     const result = i * num;
//     console.log(`${num} * ${i} = ${result}`);
// }

// Question #3

//      Method #1
// function randomEvenOr Odd(){
//     for(let i - 0; i < 10; i++){
//         const randomNumber = get RandNum(20, 200);
//         if(randomNumber % 2 === 0){
//             console.log(`${randomNumber} ${returnEvenOrOdd}`);
//         }
//         // const randomNumber = Math.floor(Math.random( * (200 -20 + 1);
//         // ))
//     }
// }

//      Method #2
// for (let i = 1; i <= 10; i++) {
//     const randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
//
//     if (randomNumber % 2 === 0) {
//         console.log(randomNumber + ' is even');
//     } else {
//         console.log(randomNumber + ' is odd');
//     }
// }

//      Method #3
// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.floor(Math.random() * 200) + 20; // Generate a random number between 20 and 200
//     let numberType = randomNumber % 2 === 0 ? "even" : "odd"; // Check if the number is even or odd using the remainder operator
//
//     console.log(randomNumber + " is " + numberType);
// }


// Question #4

// for (let i = 1; i <= 9; i++) {
//     let output = '';
//     for (let j = 1; j <= i; j++) {
//         output += i;
//     }
//     console.log(output);
// }

// function numPyramidButDifficult(){
//     for(let i = 1; i <= 9; i++){
//         let oneLevelOfMyPyramid = ``;
//         // for(let j = 1; j <= i; ++i)???????????????
//     }
// }

// Question #5

//      Method #1
// for (let i = 100; i >= 5; i--) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
