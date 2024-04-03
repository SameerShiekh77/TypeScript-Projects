var readline = require('readline');

let todos: string[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(prompt, (answer:string) => {
            resolve(answer);
        });
    });
}

async function start() {
    let loop = true;

    while (loop) {
        const todo = await askQuestion("What do you want to add in your todo list? ");
    
        if (todo !== "") {
            console.log(`${todo} add successfully!`);
            const addMoreStr = await askQuestion("Do you want to add more? (y/n) ");
            const addMore = addMoreStr.toLowerCase() === 'y' ? true : addMoreStr.toLowerCase() == 'n' ? false : true ;
            loop = addMore;
            todos.push(todo);
        } else {
            console.error("\n===================================\nKindly add something\n===================================");
            start()
            // const todo = await askQuestion("\nWhat do you want to add in your todo list? ");

        }

    }

    console.log("Here are the Your Todo List: \n===========================================\n");
    console.table(todos);

    rl.close();
}

start();
