// Conditionals: Code that runs when we meet certain requirements.

// Today we'll be covering if, if/else, if/else if/else statements, ternary expressions and switch statements.

// IF STATEMENTS - Code that runs when a condition is met.

// if (condition) {
//     this code will run if our condition is true;
// }

/** Consider the sentence: "When I run out of milk: I go to the store to get more." */
// Condition: Am I out of milk?
// Action: Go to the store

let gotMilk = true;

if (gotMilk === false) { // could also have condition of (!gotMilk)
    console.log("I'm headed out to H-E-B for some milk. Need anything else?");
}


/** TO-DO: I want to make a block of code that logs a message to the console when a variable is set to the number 5. */
let possiblyFive = 5;
possiblyFive = "5";

if (possiblyFive === 5) {
    console.log("Hey, that's five!");
}


// We can also use our conditional logic in functions.

/** TO-DO: I want to build a function that returns a string when I pass a number as an argument.*/

// function isItANumber(parameter) {
//     if (typeof parameter === "number") {
//         return "That's a number!";
//     }
// }


// IF/ELSE Statements: Code that runs when a condition is met, but will also run with a default state.

// if (condition) {
//     i run when the condition evaluates to true;
// } else {
//     otherwise i run;
// }

/** Consider the following sentence: "If I owned one, I'd get milk from my cow when I ran out. But since
 * I don't, I'll go to the store instead." */

// How would we write this as an if/else code block?

let hasCow = true;

if (hasCow) {
    console.log("Going to go milk Bessie. BRB");
} else {
    console.log("Headed out to Kroger for some milk. BRB");
}



/** TO-DO: Let's expand our previous isItANumber function. Now I want to also return string when we aren't passed a number. How do I refactor our function? */

// function isItANumber(val) {
//     if (typeof val === "number") {
//         return "That's a number!";
//     } else {
//         return "That's not a number...";
//     }
// }

console.log(isItANumber(33));
console.log(isItANumber(true));
console.log(isItANumber("David"));

// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first nor second conditions were met, I run by default.
// }

/** Consider the following sentence: "If I owned a cow, I'd get milk from it when I ran out. If I owned a goat,
 * I could get my milk from it, but since I don't own either of those: I'll go to the store instead." */

// How would we write this as a if/else if/else code block?

let hasCowAgain = false;
let hasGoat = false;

if (hasCowAgain && hasGoat) {
    console.log("Well now I can't decide who to get my milk from...");
} else if (hasCowAgain) {
    console.log("Going to go milk the cow. BRB");
} else if (hasGoat) {
    console.log("Going to go milk the goat. BRB");
} else {
    console.log("Going to Albertson's for some milk. BRB");
}

/** TO-DO: Let's make a function that takes in a number and will return three different strings for an
 * argument lesser than, greater than, or equal to 35. */

function isThisThirtyFive(parameter) {
    if (isItANumber(parameter) === "That's a number!") {
        if (parameter === 35) {
            return "Yep, that's 35 alright!";
        } else if (parameter > 35) {
            return `Nope, ${parameter} is more than 35...`;
        } else {
            return `Nope, ${parameter} is less than 35...`;
        }
    } else {
        return `Nope, ${parameter} is not even a number. How could it be less than, greater than, or even equal to 35?`;
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(35));
console.log(isThisThirtyFive(36));
console.log(isThisThirtyFive("Turbo Man"));



// TERNARY Expression: An expression to set a value based on boolean evaluation.

// let message = (booleanValue) ? "Operation was true." : "Operation was false.";

/** Consider the following statement: "Are we out of milk? If we are: I'll head to the store, but if we
 * do have milk: I want to make a bowl of cereal." */

// How would we write this as a ternary expression?

let doWeHaveMilk = false;

let action = (doWeHaveMilk) ? "I'm gonna make me a bowl of Honey Oh's!" : "Headed out to Randall's. BRB";

console.log(action);

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else using a ternary expression. */

function isItANumber(val) {
    return (typeof val === "number") ? "That's a number!" : "That's not a number...";
}

// SWITCH STATEMENT: A statement with multiple cases that will trigger based on the value of a variable.

let color = prompt("What is your favorite color?").toLowerCase();

switch(color) {
    case "green":
        alert("What a coincidence, that's my favorite!");
        break;
    case "orange":
        alert("That's my brother's favorite color!");
        break;
    default:
        alert(color + " is a weird color, my dude.");
        break;
}

/** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
 * store for milk." */

// How would we write this as a switch statement?

let animal = "camel";
switch (animal) {
    case "cow":
        console.log("Milking the cow!");
        break;
    case "goat":
        console.log("Milking the goat!");
        break;
    case "camel":
        console.log("Apparently I can drink camel milk...");
        break;
    default:
        console.log("Headed to Giant Eagle for milk...");
        break;
}

/** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy. */

let meatOfChoice = prompt("What's your favorite lunch meat?").toLowerCase();

switch(meatOfChoice) {
    case "olive loaf":
    case "oliveloaf":
        alert("Wow! That's a bold choice!");
        break;
    case "brisket":
        alert("That is correct.");
        break;
    default:
        alert("Meh, I mean, it's not terrible. Just not my favorite.")
        break;
}

// Let's work on the exercise!