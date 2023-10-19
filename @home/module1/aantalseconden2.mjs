import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let seconden = parseFloat(await userInput.question("Geef een aantal seconden: "));

function aantalseconden2 (seconden) {
    let dagen = Math.floor(seconden / 86400);
    seconden = seconden - dagen * 86400;
    let uren = Math.floor(seconden / 3600);
    seconden = seconden - uren * 3600;
    let minuten = Math.floor(seconden / 60);
    seconden = seconden - minuten * 60;
    return dagen + " dagen, " + uren + " uren, " + minuten + " minuten en " + seconden + " seconden";
}

console.log(aantalseconden2(seconden));

process.exit();