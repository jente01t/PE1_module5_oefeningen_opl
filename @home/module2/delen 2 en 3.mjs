import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal: "));

function delen (getal) {
    if (getal % 2 == 0 && getal % 3 == 0) {
        return "deelbaar door 2 en 3";
    } else if (getal % 2 == 0) {
        return "deelbaar door 2";
    } else if (getal % 3 == 0) {
        return "deelbaar door 3";
    } else {
        return "niet deelbaar door 2 of 3";
    }
}

console.log("Het getal is " + delen (getal));

process.exit();