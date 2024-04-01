// Create BMI Calculator

var readline = require("readline");

var user_input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let height: number;
let weight: number;
let bmi: number;


user_input.question("Enter your Height in inches: ", (h: number) => {
    
    user_input.question("Enter your Weight in lbs: ", (w: number) => {
        height = h;
        weight = w;

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

    })
})


/*
BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
*/