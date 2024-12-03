const leia = require("readline-sync")

let nota01, nota02, nota03, nota04, mediaFinal;

nota01 = leia.questionFloat("Nota 1 = ")
nota02 = leia.questionFloat("Nota 2 = ")
nota03 = leia.questionFloat("Nota 3 = ")
nota04 = leia.questionFloat("Nota 4 = ")

mediaFinal = (nota01 + nota02 + nota03 + nota04) / 4;

console.log("Média final: ", mediaFinal.toFixed(1))