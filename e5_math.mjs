import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:http';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef een getal: '));
let getal2 = parseFloat(await userInput.question('Geef een getal: '));
let getal3 = parseFloat(await userInput.question('Geef een getal: '));
let getal4 = parseFloat(await userInput.question('Geef een getal: '));
let laagsteGetal = 0;
let hoogtseGetal = 0; 


function laagste (getal1, getal2, getal3, getal4) {
    laagsteGetal = Math.min(getal1, getal2, getal3, getal4);
    console.log(laagsteGetal);
    return laagsteGetal;
}

laagste (getal1, getal2, getal3, getal4);

function hoogste (getal1, getal2, getal3, getal4) {
    hoogtseGetal = Math.max(getal1, getal2, getal3, getal4);
    console.log(hoogtseGetal);
    return hoogtseGetal;
}

hoogste (getal1, getal2, getal3, getal4);

process.exit();