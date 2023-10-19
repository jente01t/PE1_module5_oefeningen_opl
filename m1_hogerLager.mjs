import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Raad een getal tussen 0 en 10');

let getal = parseFloat(await userInput.question('Geef een getal: '));

random(0, 10);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (random != getal) {
    console.log('Dat is niet correct');
    getal = parseFloat(await userInput.question('Geef een getal: '));
} 

console.log('Dat is correct');

process.exit();