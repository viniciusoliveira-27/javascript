const leia = require("readline-sync")

let numero01, numero02, numero03, numero04, produto1, produto2;

numero01 = leia.questionFloat("Numero 01: ")
numero02 = leia.questionFloat("Numero 02: ")
numero03 = leia.questionFloat("Numero 03: ")
numero04 = leia.questionFloat("Numero 04: ")

produto1 = numero01 * numero02
produto2 = numero03 * numero04

console.log("Diferença: ", produto1.toFixed(1) - produto2.toFixed(1))

