"use strict";
// Create BMI Calculator
var readline = require("readline");
var user_input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
let height;
let weight;
let bmi;
user_input.question("Enter your Height in inches: ", (h) => {
    user_input.question("Enter your Weight in kg: ", (w) => {
        height = h;
        weight = w * 2.205;
        bmi = (weight * 703) / (height * height);
        console.log(`Your BMI is: ${bmi.toFixed(2)}`);
        if (bmi <= 18.5) {
            console.log("You are underweight");
        }
        else if (bmi > 18.5 && bmi <= 24.9) {
            console.log("Normal Weight");
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            console.log("Overweight");
        }
        else {
            console.log("Obesity");
        }
        user_input.close();
    });
});
