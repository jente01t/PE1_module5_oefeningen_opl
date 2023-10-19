import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = parseInt(await userInput.question('Geef een maandnummer: '));
let jaar = parseInt(await userInput.question('Geef een jaartal: '));

function dagenInMaand (maand, jaar) {
    if (maand == 2) {
        if (jaar % 4 == 0 || jaar % 400 == 0 && jaar % 100 != 0) {
            console.log('29');
        } else {
            console.log('28');
        }
    } else if (maand == 1 || maand == 3 || maand == 5 || maand == 7 || maand == 8 || maand == 10 || maand == 12) {
        console.log('31');
    } else {
        console.log('30');
    }
}

dagenInMaand (maand, jaar);

process.exit();