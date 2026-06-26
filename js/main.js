import readline from "readline-sync";
import { Problems } from "./functions.js";

const execProblem = {
    CountVocals: () => {
        const str = readline.question("Ingrese una cadena\n");
        console.log(`La cantidad de vocales es: ${Problems.countVocals(str)}`);
    },
    CountRepeated: () => {
        const str = readline.question("Ingrese una cadena\n");
        console.log(`La frecuencia de letras es: `);
        console.log(Problems.countRepeated(str));
    },
    minimunSubstring: () => {
        const str = readline.question("Ingrese una cadena\n");
        const substr = readline.question("Ingrese una subcadena\n");

        console.log("La cadena minima es: ");
        console.log(Problems.minimunSubstring(str, substr));
    },
    longestSubstring: () => {
        const str = readline.question("Ingrese una cadena\n");
        console.log("La subcadena mas larga es: ");
        console.log(Problems.longestSubstring(str));
    },
};

function main() {
    const problem = parseInt(
        readline.question("Ingrese el problema:\n 1 : CountVocals\n"),
    );

    switch (problem) {
        case 1:
            execProblem.CountVocals();
            break;
        case 2:
            execProblem.CountRepeated();
            break;
        case 3:
            execProblem.minimunSubstring();
            break;
        case 4:
            execProblem.longestSubstring();
            break;

        default:
            break;
    }
}

main();
