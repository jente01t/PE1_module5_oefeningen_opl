import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Koffie = parseFloat(await userInput.question("Hoeveel koffie drink je per dag? "));

function jaarKoffie (Koffie) {
    let jaarKoffie = Koffie * 365;
    return jaarKoffie;
}

console.log("Je drinkt " + jaarKoffie(Koffie) + " kopjes koffie per jaar.");

process.exit();