import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef getal 1: "));
let getal2 = parseFloat(await userInput.question("Geef getal 2: "));

function PosNeg (getal1, getal2) {
    if (getal1 > 0) {
        if (getal2 >0) {
            return "beide getallen zijn positief";
        } else {
            return "getal 1 is positief, getal 2 is negatief";
        }
    } if (getal1 < 0) {
        if (getal2 > 0) {
            return "getal 1 is negatief, getal 2 is positief";
        } else {
            return "beide getallen zijn negatief";
        }
    }
}

console.log(PosNeg (getal1, getal2));

process.exit();