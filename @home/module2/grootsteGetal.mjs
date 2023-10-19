import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef getal 1: "));
let getal2 = parseFloat(await userInput.question("Geef getal 2: "));

function grootsteGetal (getal1, getal2) {
    if (getal1 > getal2) {
        return getal1;
    } else {
        return getal2;
    }
}

console.log('Het grootste getal is ' + grootsteGetal (getal1, getal2) + '.');

process.exit();