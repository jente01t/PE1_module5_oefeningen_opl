import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal: "));

function evenOneven (getal) {
    if (getal < 0) {
        return "negatief";
    } else if (getal % 2 == 0) {
        return "even";
    } else {
        return "oneven";
    }
}

console.log("Het getal is " + evenOneven (getal));

process.exit();