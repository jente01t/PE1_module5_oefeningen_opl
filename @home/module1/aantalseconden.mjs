import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseFloat(await userInput.question("Hoeveel dagen? "));
let uren = parseFloat(await userInput.question("Hoeveel uren? "));
let minuten = parseFloat(await userInput.question("Hoeveel minuten? "));
let seconden = parseFloat(await userInput.question("Hoeveel seconden? "));

function aantalseconden (dagen, uren, minuten, seconden) {
    let aantalseconden = (dagen * 86400) + (uren * 3600) + (minuten * 60) + seconden;
    return aantalseconden;
}

console.log("Aantal seconden: " + aantalseconden(dagen, uren, minuten, seconden) + ".");

process.exit();