import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let taal = await userInput.question("Welke taal spreek je? ");

function talen (taal) {
    if (taal == "Nederlands") {
        return "Hallo!";
    } else if (taal == "Frans") {
        return "Bonjour!";
    } else if (taal == "Duits") {
        return "Guten Tag!";
    } else {
        return "Hello!";
    }
}

console.log(talen (taal));

process.exit();