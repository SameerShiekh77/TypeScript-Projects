"use strict";
// Guess the number game
var readline = require('readline');
var userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// generate number between 1 to 50
var hidden_number = Math.floor(Math.random() * 50) + 1;
;
let turns = 5;
function guessNumber() {
    if (turns > 0) {
        userInput.question("Guess the number: ", (answer) => {
            if (parseInt(answer) === hidden_number) {
                console.log("You won!");
                console.log(`There are ${turns} remaining\n`);
                userInput.close();
            }
            else if (parseInt(answer) > hidden_number) {
                console.log("Enter lower value");
                turns--;
                console.log(`There are ${turns} remaining\n`);
                guessNumber();
            }
            else {
                console.log("Enter Higher value!");
                turns--;
                console.log(`There are ${turns} remaining\n`);
                guessNumber(); // Recursive call to continue the game
            }
        });
    }
    else {
        console.log(`You lost! The number was: ${hidden_number}`);
        userInput.close();
    }
}
guessNumber(); // Start the game
