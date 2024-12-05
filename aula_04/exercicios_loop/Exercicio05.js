/*
05 - Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero 
seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam 
positivos. Veja o exemplo abaixo:
*/
const leia = require("readline-sync");
let numero = 0, somaPositivo = 0;

do {
    numero = leia.questionInt("Digite uma numero: ");
    if (numero > 0){
            somaPositivo += numero
    } 
    
} while (numero != 0) 
    

console.log("\nA soma dos numeros positivos =", somaPositivo);

