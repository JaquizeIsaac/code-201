'use strict';

// Ask the user's name and greet them
const userName = prompt("Greetings, and welcome to my webpage. What name do you perfer to be called?");
alert(`Welcome, ${userName}! Let's play the About Me guessing game.`);

// Function to validate yes/no answers
function validateYesNo(answer) {
    return (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'no' || 
            answer.toLowerCase() === 'y' || answer.toLowerCase() === 'n');
}

// Questions and Answers
const questions = [
    "Do I enjoy coding?",
    "Do I have a degree in Computer Science??",
    "Have I worked as a software engineer for 3 years?",
    "Is my goal to become a full-stack developer?",
    "Is my favorite color blue?"
];

const answers = [true, true, true, false, true];

// Game logic
for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);

    if (validateYesNo(userAnswer)) {
        if ((userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() === 'y') === answers[i]) {
            alert("Correct!");
            console.log(`Question ${i + 1}: User answered correctly.`);
        } else {
            alert("Incorrect.");
            console.log(`Question ${i + 1}: User answered incorrectly.`);
        }
    } else {
        alert("Please enter a valid yes or no answer.");
        i--;  // Ask the same question again
    }
}

// Final message to the user
alert(`Thanks for playing, ${userName}! I hope you got to know me better.`);
