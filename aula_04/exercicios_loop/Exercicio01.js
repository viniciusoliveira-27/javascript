/*
01 - Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro 
número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma 
mensagem na tela informando que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.
*/
const leia = require("readline-sync")

let numero01 = leia.questionInt("Digite o primeiro numero do intervalo: ")
let numero02 = leia.questionInt("Digite o segundo numero do intervalo: ")


if (numero01 < numero02) {
    console.log(`\nNo intervalo entre ${numero01} e ${numero02}: \n`)
    for (let intervalo = numero01; intervalo <= numero02; intervalo ++ ) {
        if (intervalo % 3 === 0 && intervalo % 5 === 0)
            console.log(intervalo, "E multiplo de 3 e 5");
    }    
} else {
    console.log("Intervalo invalido!");
}