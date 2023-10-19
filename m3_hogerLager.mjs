import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Raad een getal tussen 0 en 10, je hebt 3 levens.');

let randomGetal = 0;

random(0, 10);

function random(min, max) {
    randomGetal = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomGetal;
}

for (let i = 1; i <= 3; i++) {
    let getal = parseFloat(await userInput.question('Geef een getal: '));
    if (randomGetal < getal) {
        console.log('Het getal is groter dan het random getal');
    } else if (randomGetal > getal){
        console.log('Het getal is kleiner dan het random getal');
    } else {
        console.log('Dat is correct');
    }
}


process.exit();

