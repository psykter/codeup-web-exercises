import { getRandomGreeting } from './greeting-logic.js';

function handleFormSubmit(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const greeting = getRandomGreeting();

    const greetingOutput = document.getElementById('greetingOutput');
    greetingOutput.textContent = `${greeting}, ${userName}!`;
    greetingOutput.classList.remove('hidden');
}

console.log('Hello from greeting-control.js!');

document.getElementById('greetingForm').addEventListener('submit', handleFormSubmit);
