import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let celcius = parseFloat(await userInput.question("Geef een temperatuur in graden Celcius: "));

function farenheit (celcius) {
    let farenheit = (celcius * 9 / 5) + 32;
    return farenheit;
}

console.log(celcius + " graden Celcius is " + farenheit(celcius) + " graden Farenheit.");

process.exit();