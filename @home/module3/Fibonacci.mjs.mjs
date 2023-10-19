import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maxGetal = parseFloat(await userInput.question("Geef een maximum getal: "));

function fibonacci (maxGetal) {
    let getal1 = 0;
    let getal2 = 1;
    let getal3 = 1;
    let getallen = [getal1, getal2];
    while (getal3 < maxGetal) {
        getallen.push(getal3);
        getal1 = getal2;
        getal2 = getal3;
        getal3 = getal1 + getal2;
    }
    return getallen;
}

console.log(fibonacci (maxGetal));

process.exit();