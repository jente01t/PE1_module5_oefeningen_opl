import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal: '));
let uitkomst = 1;

if (getal > 0) {
    factorial (getal);
} else {
    console.error("fout");
}


function factorial (getal) {
    for (let i = 1; i <= getal; i++) {
        uitkomst = uitkomst * i
    } 
    console.log(uitkomst);
    return uitkomst;
}

process.exit();