const leia = require("readline-sync")

let numeroA = leia.questionInt("Digite o Numero A: ");
let numeroB = leia.questionInt("Digite o Numero B: ");
let numeroC = leia.questionInt("Digite o Numero C: ");

let somaAB = numeroA + numeroB;



if (somaAB > numeroC) {
    console.log(`\n${numeroA} + ${numeroB} = ${somaAB} > ${numeroC}`)
    console.log("\nA Soma de A + B é Maior do que C")
} else if (somaAB < numeroC) {
    console.log(`\n${numeroA} + ${numeroB} = ${somaAB} < ${numeroC}`)
    console.log("\nA Soma de A + B é Menor do que C")
} else {
    console.log(`\n${numeroA} + ${numeroB} = ${somaAB} = ${numeroC}`)
    console.log("\nA Soma de A + B é igual a C")
}



