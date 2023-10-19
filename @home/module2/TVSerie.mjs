import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let serie = await userInput.question("Welke serie wil je zien? ");

function TVSerie (serie) {
    switch (serie) {
        case 'thuis':
            return 'Ternat';
        case 'familie':
            return 'Boortmeerbeek';
    }
}

console.log('De TV-serie speelt zich af in: ' + TVSerie (serie));

process.exit();