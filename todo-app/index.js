"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var readline = require('readline');
let todos = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        let loop = true;
        while (loop) {
            const todo = yield askQuestion("What do you want to add in your todo list? ");
            if (todo !== "") {
                console.log(`${todo} add successfully!`);
                const addMoreStr = yield askQuestion("Do you want to add more? (y/n) ");
                const addMore = addMoreStr.toLowerCase() === 'y' ? true : addMoreStr.toLowerCase() == 'n' ? false : true;
                loop = addMore;
                todos.push(todo);
            }
            else {
                console.error("\n===================================\nKindly add something\n===================================");
                start();
                // const todo = await askQuestion("\nWhat do you want to add in your todo list? ");
            }
        }
        console.log("Here are the Your Todo List: \n===========================================\n");
        console.table(todos);
        rl.close();
    });
}
start();
