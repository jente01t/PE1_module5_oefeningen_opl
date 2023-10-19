import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function cirkel (straal) {
    let oppervlakte = Math.PI * straal * straal;
    return oppervlakte;
}

function driehoek (basis,hoogte) {
    let oppervlakte = (basis * hoogte) / 2;
    return oppervlakte;
}

function rechthoek (lengte,breedte) {
    let oppervlakte = lengte * breedte;
    return oppervlakte;
}

function vierkant (zijde) {
    return rechthoek(zijde,zijde);
}


process.exit();