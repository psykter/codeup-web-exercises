"use strict";

console.log("Hello from external JavaScript!");

// Display a welcome message using alert
alert('Welcome to my Website!');

// Prompt for the user's favorite color
let userColor = prompt('Please enter your favorite color:');
alert(`Wow, ${userColor} is my favorite color too!`);

let rentalRate = parseFloat(prompt("How much does it cost to rent a movie for a day?"));

// Fix the following lines by removing .prompt after parseFloat and providing more meaningful variable names
let littleMermaidDays = parseFloat(prompt("How many days do you want to rent \"The Little Mermaid\" for?"));
let brotherBearDays = parseFloat(prompt("How many days do you want to rent \"Brother Bear\" for?"));
let herculesDays = parseFloat(prompt("How many days do you want to rent \"Hercules\" for?"));

let totalSpent = (littleMermaidDays + brotherBearDays + herculesDays) * rentalRate;

alert(`User want to rent "The Little Mermaid" ${littleMermaidDays} days, "Brother Bear" for ${brotherBearDays} days, and "Hercules" for ${herculesDays} days. It costs $${rentalRate.toFixed(2)} to rent a movie for a day. \n\nThe final total is $${totalSpent.toFixed(2)}`);

let amazonRate = parseFloat(prompt("How much are you paid by Amazon per hour?"));
let amazonHours = parseFloat(prompt("How many hours did you work for Amazon this week?"));

alert(`User worked for Amazon for ${amazonHours} hours this week at a rate of $${amazonRate.toFixed(2)} per hour.\n\nUser is paid: $${(amazonRate * amazonHours).toFixed(2)}`);

let metaRate = parseFloat(prompt("How much are you paid by Meta per hour?"));
let metaHours = parseFloat(prompt("How many hours did you work for Meta this week?"));

alert(`User worked for Amazon for ${metaHours} hours this week at a rate of $${metaRate.toFixed(2)} per hour.\n\nUser is paid: $${(metaRate * metaHours).toFixed(2)}`);

let googleRate = parseFloat(prompt("How much are you paid by Google per hour?"));
let googleHours = parseFloat(prompt("How many hours did you work for Google this week?"));

alert(`User worked for Amazon for ${googleHours} hours this week at a rate of $${googleRate.toFixed(2)} per hour.\n\nUser is paid: $${(googleRate * googleHours).toFixed(2)}`);

let finalTakeHomePay = (googleRate * googleHours) + (metaRate * metaHours) + (amazonRate *amazonHours);
alert(`User's final take home pay is: $${finalTakeHomePay.toFixed(2)}`);