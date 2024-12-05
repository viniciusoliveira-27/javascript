/*
03 - Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro 
número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma 
mensagem na tela informando que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.
*/
const leia = require("readline-sync");

let  menor21 = 0, maior50 = 0, idade = 0;


while (idade >= 0) {
    idade = leia.questionInt("Digite uma idade: ");
    if (idade <= 21 && idade >= 0){
        menor21 ++
    } 
    if (idade >= 50) {
        maior50 ++
    }
    
}
console.log("\nTotal de pessoas menores de 21 anos: ", menor21);
console.log("\nTotal de pessoas maiores de 50 anos: ", maior50);
