import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Raad een getal tussen 0 en 10');

let getal = parseFloat(await userInput.question('Geef een getal: '));
let randomGetal = 0;

random(0, 10);

function random(min, max) {
    randomGetal = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomGetal;
}

while (randomGetal != getal) {
    if (randomGetal < getal) {
        console.log('Het getal is groter dan het random getal');
    } else {
        console.log('Het getal is kleiner dan het random getal');
    }
    getal = parseFloat(await userInput.question('Geef een getal: '));
}

console.log('Dat is correct');



process.exit();

