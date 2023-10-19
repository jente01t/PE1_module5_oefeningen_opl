import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let inputDay = await userInput.question("Geef de dag van vandaag: ");
let outputDay;

function vandaag (inputDay) {
    switch (inputDay) {
        case 'zaterdag':
        case 'zondag':
            outputDay = 'weekenddag';
            break;
        default:
            outputDay = 'weekdag';
    } 
    return outputDay
}

console.log('Het is vandaag een ' + vandaag (inputDay) + '!');

process.exit();