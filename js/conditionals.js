"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if(color === 'blue') {
//         return "blue is the color of the sky";
//     } else if(color === 'red') {
//         return "Strawberries are red";
//     } else if(color === 'cyan'); {
//         return "I don't know anything about cyan";
//     } else {
//         return "This color is not defined within this function";
//     }
// }
//
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("orange"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(randomColor)
// console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// function analyzeColorSwitch(color){
//     switch (color) {
//         case "blue":
//             alert("blue is the color of the sky");
//             break;
//         case "red":
//             alert("Strawberries are red");
//             break;
//         case "cyan":
//             alert("I don't know anything about cyan");
//             break;
//         default:
//             alert("This color is not defined within this function");
//     }
// }
//
// console.log(analyzeColorSwitch(randomColor));

// function analyzeColor(colorName) {
//     colorName = colorName.toLowerCase(); // Convert to lowercase
//
//     switch (colorName) {
//         case 'blue':
//             return "blue is the color of the sky";
//         case 'red':
//             return "Strawberries are red";
//         case 'orange':
//             return "oranges are orange";
//         case 'yellow':
//             return "lemons are yellow";
//         case 'green':
//             return "grass is green";
//         case 'brown':
//             return "chocolate is brown";
//         case 'indigo':
//             return "indigo is a deep color";
//         default:
//             return `I don't know anything about ${colorName}`;
//     }
// }
//
// let userInput = prompt("Enter a color:");
// let result = analyzeColor(userInput);
//
// if (result === null) {
//     result = "You didn't enter a color.";
// }
//
// console.log(result);



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function analyzeColor(colorName) {
//     colorName = colorName.toLowerCase(); // Convert to lowercase
//
//     switch (colorName) {
//         case 'blue':
//             return "blue is the color of the sky";
//         case 'red':
//             return "Strawberries are red";
//         case 'orange':
//             return "oranges are orange";
//         case 'yellow':
//             return "lemons are yellow";
//         case 'green':
//             return "grass is green";
//         case 'brown':
//             return "chocolate is brown";
//         case 'indigo':
//             return "indigo is a deep color";
//         default:
//             return `I don't know anything about ${colorName}`;
//     }
// }
//
// window.onload = function () {
//     const userInput = prompt("Enter a color:");
//     const result = analyzeColor(userInput);
//
//     if (result === null) {
//         alert("You didn't enter a color.");
//     } else {
//         alert(result);
//     }
// };


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(luckyNumber, totalAmount) {
//     switch (luckyNumber === 0) {
//         return total;
//     } else if (luckyNumber === 1) {
//         return total - (total * .10);
//     } else if (luckyNumber === 2) {
//         return total - (total * .25);
//     } else if (luckyNumber === 3) {
//         return total - (total * .35);
//     } else if (luckyNumber === 4) {
//         return total - (total * .50);
//     } else if (luckyNumber === 5) {
//         return total - (total * .100);
//     }
// }
//
// console.log(calculateTotal(1,100));
// console.log(calculateTotal(2,100));
// console.log(calculateTotal(3,100));
// console.log(calculateTotal(4,100));
// console.log(calculateTotal(5,100));
// function getRandomLuckyNumber() {
//     return Math.floor(Math.random() * 6); // Generates a random number between 0 and 5
// }


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// let customerTotal
// alert("Your lucky number is: " + luckyNumber);
// alert("Your total before the discount is: " + customerTotal);
// alert("Your price after the discount is: " + calculateTotal(luckyNumber,customerTotal));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// function numberFacts(){
//     let decision = confirm("Would you like to enter a number?")
//     if(decision === true) {
//         let userNumber = prompt("What number would you like to enter a number");
//         if(userNumber > 0 && userNumber % 2 === 0) {
//             let numHundred = parseInt(userNumber) + 100;
//             alert("your number is even");
//             alert("your number is positive");
//             alert("your number + 100 = " + numHundred);
//         } else if (userNumber > 0 && userNumber % 2 !== 0) {
//             let numHundred = parseInt(userNumber) + 100;
//             alert("your number is odd");
//             alert("your number is positive");
//             alert("your number + 100 = " + numHundred);
//         } else if (userNumber < 0 && userNumber % 2 === 0) {
//             let numHundred = parseInt(userNumber) + 100;
//             alert("your number is even");
//             alert("your number is negative");
//             alert("your number + 100 = " + numHundred);
//         } else if (userNumber < 0 && userNumber % 2 !== 0) {
//             let numHundred = parseInt(userNumber) + 100;
//             alert("your number is odd");
//             alert("your number is negative");
//             alert("your number + 100 = " + numHundred);
//         } else {
//             alert("okay,bye");
//         }
//     }
// }
// numberFacts()

// function isEven(number) {
//     return number % 2 === 0;
// }
//
// function isPositive(number) {
//     return number > 0;
// }

// function analyzeNumber() {
//     const userWantsToEnterNumber = confirm("Would you like to enter a number?");
//
//     if (userWantsToEnterNumber) {
//         const userInput = prompt("Please enter a number:");
//         const parsedInput = parseFloat(userInput);
//
//         if (!isNaN(parsedInput)) {
//             const number = parsedInput;
//
//             // Check if the number is even or odd
//             const evenOrOddMessage = isEven(number) ? "The number is even." : "The number is odd.";
//
//             // Calculate the number plus 100
//             const numberPlus100 = number + 100;
//
//             // Check if the number is negative or positive
//             const positiveOrNegativeMessage = isPositive(number) ? "The number is positive." : "The number is negative.";
//
//             // Display the information using alerts
//             alert(evenOrOddMessage);
//             alert(`The number plus 100 is: ${numberPlus100}`);
//             alert(positiveOrNegativeMessage);
//         } else {
//             alert("Incorrect input data type. Please enter a valid number.");
//         }
//     }
// }
//
// analyzeNumber();

