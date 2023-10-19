import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question("Geef de hoogte van de piramide: "));

let midden = Math.floor(hoogte / 2);

function piramide (midden) {
    for (let i = 0; i < midden; i++) {
        let rij = '';
        for (let j = 0; j < midden - i; j++) {
            rij += ' ';
        } for (let k = 0; k < 2 * i + 1; k++) {
            rij += '*';
        }
        console.log(rij);
    }
}

console.log(piramide (midden));

process.exit();