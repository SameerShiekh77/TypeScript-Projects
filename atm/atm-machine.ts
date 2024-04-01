// Create ATM Machine Program

var readline = require('readline');

var userInput = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
)


var original_pin: number = 54321;
var balance: number = 10000;

const askPin = (): any => {
    userInput.question('Enter your pin: ', (pin: number) => {
        if (pin == original_pin) {
            console.log('Welcome to your ATM machine');
            performAction()

        } else {
            console.log('Incorrect pin');
            askPin()
        }
    })
}

const performAction = () => {
    userInput.question("\n=========================================================\nWhat you want\n1. Press 1 for Balance Inquiry\n2. Press 2 for With draw\n3. Press 3 for Deposit Money.\n4. Press 4 to quit this menu \n=========================================================\n", (input: string) => {
        switch (input) {
            case '1':
                console.log(`Rs. ${balance} This is your balance`);
                performAction();
                break;
            case '2':
                userInput.question('Enter the amount you want to withdraw: ', (amount: number) => {
                    if (amount <= balance) {
                        balance -= amount;
                        console.log(`Rs. ${amount} has been withdrawn from your account. Remaining Balance is: ${balance}`);
                        performAction();

                    } else {
                        console.log('Insufficient balance');
                        performAction();

                    }
                })
                break;
            case '3':
                userInput.question('Enter the amount you want to deposit: ', (amount: string) => {
                    balance += parseInt(amount)
                    console.log(`Amount has been deposited successfully now new balance is: ${balance}`);
                    performAction();

                })
                break;
            case '4':
                console.log('Thank you for using our ATM machine');
                userInput.close();

                break;
            default:
                console.log('Invalid Input');
                performAction();
                break;

        }
    })
    


}

askPin()