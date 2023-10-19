"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello, " + name + "!";
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("Rick");
console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Rick";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(num) {
    return num === 2;
}

console.log("1 " + isTwo(1))
console.log("2 " + isTwo(2))
console.log("3 " + isTwo(3))
console.log("random " + random + isTwo(random))

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function calculateTip(tipPercentage, totalBill) {
//     return tipPercentage * totalBill;
// }
function calculateTip(tip,total) {
    return (tip * total).toFixed(2);
}

console.log(calculateTip(0.20, 20));
console.log(calculateTip(0.25, 25.50));
console.log(calculateTip(0.15, 33.42));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// Assuming you have already implemented the calculateTip function
function calculateTip(tipPercentage, totalBill) {
    return tipPercentage * totalBill;
}

// Prompt the user for the total bill
let totalBill = prompt("Please enter the total bill:");

// Convert the total bill from a string to a number
totalBill = parseFloat(totalBill);

// Prompt the user for the tip percentage they would like to give
let tipPercentage = prompt("Please enter the tip percentage you would like to give (as a decimal):");

// Convert the tip percentage from a string to a number
tipPercentage = parseFloat(tipPercentage);

// Calculate the tip amount using the calculateTip function
let tipAmount = calculateTip(tipPercentage, totalBill);

// Alert the user of the tip amount they should give
alert("The tip amount you should give is: $" + tipAmount.toFixed(2));
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(originalPrice, discountPercent) {
    let discountAmount = originalPrice * discountPercent;
    let finalPrice = originalPrice - discountAmount;
    return finalPrice;
}
let originalPrice = 100;
let discountPercent = .2; // 20%
console.log(applyDiscount(originalPrice, discountPercent)); // returns 80

console.log(applyDiscount(45.99, 0.12)); // returns 40.4712