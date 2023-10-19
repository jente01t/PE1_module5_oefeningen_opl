import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal: '));
let som = 0;

function somdeler (getal) {
    for (let i = 1; i < getal; i++) {
        if (getal % i == 0) {
            som = som + i;
        }
    }
    console.log(som);
    return som;
}

somdeler (getal);

process.exit();