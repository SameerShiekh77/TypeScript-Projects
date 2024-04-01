"use strict";
var readline = require("readline");
function calculate(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === '-') {
        return num1 - num2;
    }
    else if (operator === '*') {
        return num1 * num2;
    }
    else if (operator === '/') {
        return num1 / num2;
    }
    else {
        return "Invalid operator";
    }
}
var user_input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let num1;
let num2;
let operator;
function askForNum1() {
    user_input.question("Enter the first number: ", (input) => {
        num1 = parseInt(input);
        if (isNaN(num1)) {
            console.log('Invalid input. Please enter a valid number.');
            askForNum1();
        }
        else {
            askForNum2();
        }
    });
}
function askForNum2() {
    user_input.question("Enter the second number: ", (input) => {
        num2 = parseInt(input);
        if (isNaN(num2)) {
            console.log('Invalid input. Please enter a valid number.');
            askForNum2();
        }
        else {
            askForOperator();
        }
    });
}
function askForOperator() {
    user_input.question("Select the operation:\n+\n-\n*\n/\n", (input) => {
        operator = input;
        const result = calculate(num1, num2, operator);
        if (typeof result == 'string') {
            console.log('Invalid operator. Please enter a valid operator.\n');
            askForOperator();
        }
        else {
            console.log(`Result: ${result}`);
            user_input.close();
        }
    });
}
askForNum1();
