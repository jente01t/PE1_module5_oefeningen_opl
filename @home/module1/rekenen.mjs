import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef een getal: "));
let getal2 = parseFloat(await userInput.question("Geef een tweede getal: "));

function som (getal1, getal2) {
    let som = getal1 + getal2;
    return som;
}

function verschil (getal1, getal2) {
    let verschil = getal1 - getal2;
    return verschil;
}

function vermenigvuldigen (getal1, getal2) {
    let vermenigvuldigen = getal1 * getal2;
    return vermenigvuldigen;
}

function delen (getal1 , getal2) {
    if (getal2 == 0) {
        console.log("Je kan niet delen door 0.");
    } else {
        let delen = getal1 / getal2;
        return delen;
    }
}

console.log('');

console.log("De som van " + getal1 + " en " + getal2 + " is " + som(getal1, getal2) + ".");
console.log("Het verschil tussen " + getal1 + " en " + getal2 + " is " + verschil(getal1, getal2) + ".");
console.log("Het product van " + getal1 + " en " + getal2 + " is " + vermenigvuldigen(getal1, getal2) + ".");
console.log("Het quotiënt van " + getal1 + " en " + getal2 + " is " + delen(getal1, getal2) + ".");

process.exit();