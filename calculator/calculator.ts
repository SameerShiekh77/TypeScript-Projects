var readline = require("readline");

function calculate(num1: number, num2: number, operator: string): number | string {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}

const questions = [
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number: ',
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number: ',
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Select the operation:\n+\n-\n*\n/\n',
    }
];

const user_input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1: number;
let num2: number;
let operator: string;

function askForNum1() {
    user_input.question(questions[0].message, (input:any) => {
        num1 = parseInt(input);
        if (isNaN(num1)) {
            console.log('Invalid input. Please enter a valid number.');
            askForNum1();
        } else {
            askForNum2();
        }
    });
}

function askForNum2() {
    user_input.question(questions[1].message, (input:any) => {
        num2 = parseInt(input);
        if (isNaN(num2)) {
            console.log('Invalid input. Please enter a valid number.');
            askForNum2();
        } else {
            askForOperator();
        }
    });
}

function askForOperator() {

    user_input.question(questions[2].message, (input:any) => {
        operator = input;
        const result = calculate(num1, num2, operator);
        if (typeof result == 'string')
        {
            console.log('Invalid operator. Please enter a valid operator.');

            askForOperator()
        }
        else{
            console.log(`Result: ${result}`);
            user_input.close();
        }
    });
}

askForNum1();
