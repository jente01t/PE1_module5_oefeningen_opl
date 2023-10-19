import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef getal 1: "));
let getal2 = parseFloat(await userInput.question("Geef getal 2: "));

console.log('Kies een bewerking:');
console.log('1. optellen');
console.log('2. aftrekken');
console.log('3. vermenigvuldigen');
console.log('4. delen');

let bewerking = parseFloat(await userInput.question("Geef een bewerking: "));

async function rekenmachine (getal1, getal2) {
    if (bewerking == 1) {
        return getal1 + getal2;
    } else if (bewerking == 2) {
        return getal1 - getal2;
    } else if (bewerking == 3) {
        return getal1 * getal2;
    } else if (bewerking == 4) {
        return getal1 / getal2;
    }
}

console.log('Het resultaat is ' + rekenmachine (getal1, getal2) + '.');

process.exit();