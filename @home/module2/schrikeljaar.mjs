import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jaar = parseFloat(await userInput.question("Geef een jaartal: "));

function schrikkeljaar (jaar) {
    if (jaar % 4 == 0 && jaar % 100 != 0 || jaar % 400 == 0) {
        return "een schrikkeljaar";
    } else {
        return "geen schrikkeljaar";
    }
}

console.log("Het jaar " + jaar + " is " + schrikkeljaar (jaar) + ".");

process.exit();