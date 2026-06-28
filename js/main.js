import readline from "readline-sync";
import { Problems } from "./functions.js";
import { ListNode } from "./data.js";

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

    addTwoNumbers: () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(5, null))));
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));
        Problems.addTwoNumbers(l1, l2);
    },
};

function main() {
    const problem = parseInt(
        readline.question(`Ingrese el problema: 
            1. CountVocals
            2. CountRepeated
            3. minimumSubstring
            4. longestSubstring
            5. addTwoNumbers
        `),
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
        case 5:
            execProblem.addTwoNumbers();
            break;

        default:
            break;
    }
}

main();
