import { generateRandomNumber } from './number-utils.js';

// This is a list of greetings that we will randomly choose from.
// It's an array of strings.

const greetings = [
    "Hello",
    "Hi",
    "Hey there",
    "Greetings",
    "Salutations",
    "Howdy",
    "Yo",
    "Bonjour",
    "Hola",
    "Ciao",
    "Namaste",
    "G'day",
    "What's up",
    "Sup",
    "How's it going",
    "Nice to meet you",
    "Welcome",
    "Hey",
    "How are you",
    "Pleased to meet you"
];

console.log(greetings);

export function getRandomGreeting() {
    const randomIndex = generateRandomNumber(greetings.length);
    return greetings[randomIndex];
}
