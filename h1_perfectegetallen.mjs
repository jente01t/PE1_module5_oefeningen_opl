import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


perfecteGetallen (1, 100);

function perfecteGetallen(min, max) {
    for (let getal = min; getal <= max; getal++) {
        let som = 0;
        for (let deler = 1; deler < getal; deler++) {
            if (getal % deler == 0) {
                som += deler;
            }
        }
        if (som === getal) {
            console.log(getal);
        }
    }
}

process.exit();