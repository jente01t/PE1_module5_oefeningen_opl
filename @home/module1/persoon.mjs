import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam = await userInput.question("Wat is je naam? ");
let geboorteJaar = parseFloat(await userInput.question("In welk jaar ben je geboren? "));
let huidigJaar = parseFloat(await userInput.question("In welk jaar zijn we nu? "));



function persoon (naam, geboorteJaar, huidigJaar) {
    let leeftijd = huidigJaar - geboorteJaar;
    return leeftijd;
}

console.log("Hallo " + naam + ", je bent " + persoon(naam, geboorteJaar, huidigJaar) + " jaar oud.");

process.exit(); 