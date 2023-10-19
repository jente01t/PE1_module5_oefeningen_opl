import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = 2;
let getal2 = 15;
let userGetal = parseFloat(await userInput.question("Geef een getal: "));

function nummerTussen (getal1, getal2, userGetal) {
    if (userGetal > getal1 && userGetal < getal2) {
        return "Het getal ligt tussen " + getal1 + " en " + getal2 + ".";
    } else {
        return "Het getal ligt niet tussen " + getal1 + " en " + getal2 + ".";
    }
}

console.log(nummerTussen (getal1, getal2, userGetal));

process.exit();