import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let temperatuur = parseFloat(await userInput.question('Geef de temperatuur die je wilt converteren: '));
let isCelcius = await userInput.question('Is deze temperatuur in celcius? ');
let fahrenheit = 0;
let celcius = 0;

if (isCelcius == "ja") {
    isCelcius = true
} else {
    isCelcius = false
}

function converteerTemperatuur (temperatuur, isCelcius) {
    if (isCelcius == true) {
        celcius = (temperatuur * 1.8) + 32;
        return celcius;
    } else {
        fahrenheit = (temperatuur - 32) / 1.8;
        return fahrenheit;
    }
}

converteerTemperatuur(temperatuur, isCelcius);


process.exit();