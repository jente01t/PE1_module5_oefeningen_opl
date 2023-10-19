import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let leeftijd = parseFloat(await userInput.question("Wat is je leeftijd? "));

function geboorteJaar (leeftijd) {
    let geboorteJaar = 2023 - leeftijd;
    return geboorteJaar;
}

geboorteJaar(leeftijd);

console.log("Je bent geboren in " + geboorteJaar(leeftijd) + ".");

process.exit(); 