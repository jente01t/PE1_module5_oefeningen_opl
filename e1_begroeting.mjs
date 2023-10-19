import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam = await userInput.question('Wat is je naam? ');

function userBegroeting (naam) {
    console.log('Hallo ' + naam + '!')
    return naam;
}

userBegroeting(naam);

process.exit();