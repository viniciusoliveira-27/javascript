const leia = require("readline-sync")

let numero01, numero02, numero03, numero04, diferenca;

numero01 = leia.questionFloat("Numero 01: ")
numero02 = leia.questionFloat("Numero 02: ")
numero03 = leia.questionFloat("Numero 03: ")
numero04 = leia.questionFloat("Numero 04: ")

diferenca = (numero01 * numero02) / (numero03 * numero04)

console.log("Diferença: ", diferenca)

