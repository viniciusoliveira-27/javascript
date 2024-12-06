const leia = require("readline-sync")

let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

let vetorInteiros = new Array(5);

let vetorNumeros = [7, 5, 9, 4, 6, 8, 2, 3, 1, 10]

for(let contador = 0; contador < vetorStrings.length; contador ++) {
    console.log(vetorStrings[contador])
}

console.log("O tamanho do Vetor de String é: ",vetorStrings.length)
console.log("\n*******************************")

// for(let contador = 0; contador < vetorInteiros.length; contador ++) {
//     vetorInteiros[contador] = leia.questionInt("Digite um numero inteiro: ")
// }

console.table(vetorInteiros);

console.table(vetorStrings.sort());

//Ordenação de arrays do tipo numero
console.table(vetorNumeros.sort((a, b) => b - a))

