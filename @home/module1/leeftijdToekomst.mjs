import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question("Wat is je geboortejaar? "));
let toekomstJaar = parseFloat(await userInput.question("In welk jaar wil je weten hoe oud je bent? "));

function leeftijdToekomst (geboorteJaar, toekomstJaar) {
    let leeftijdToekomst = toekomstJaar - geboorteJaar;
    return leeftijdToekomst;
}

console.log("In " + toekomstJaar + " ben je " + leeftijdToekomst(geboorteJaar, toekomstJaar) + " jaar oud.");

process.exit();