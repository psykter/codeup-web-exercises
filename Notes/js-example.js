"use strict";

let pi = 3.14;
console.log(pi);
pi = 22/7;
console.log(pi);

console.log(5+4);  // Console logs print to the console, and ONLY print to the console.
let studentName = "Rick";
console.log(studentName);

let favoriteColor = "Greenish";
console.log(favoriteColor);

// Alert! - A pop-up message to the user from JavaScript
alert("Howdy from JavaScript!");

// We can concatenate inside of an alert!
alert("Howdy from, " + studentName);

// Confirm - A pop-up message to the user from JavaScript, that has the ability to capture a boolean
let confirmed = (`We have lunch at 12:30 today?`);
console.log(confirmed);

// Prompt - A pop-up message to the user from JavaScript that asks for a text value.
let userString = prompt("What is your favorite basketball team?");
console.log(`User's favorite team: ${userString}`);