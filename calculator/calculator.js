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
var questions = [
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number: '
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number: '
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Select the operation:\n+\n-\n*\n/\n'
    }
];
var user_input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var num1;
var num2;
var operator;
function askForNum1() {
    user_input.question(questions[0].message, function (input) {
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
    user_input.question(questions[1].message, function (input) {
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
    user_input.question(questions[2].message, function (input) {
        operator = input;
        var result = calculate(num1, num2, operator);
        if (typeof result == 'string') {
            console.log('Invalid operator. Please enter a valid operator.');
            askForOperator();
        }
        else {
            console.log("Result: ".concat(result));
            user_input.close();
        }
    });
}
askForNum1();
