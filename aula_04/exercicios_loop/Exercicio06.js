/*
06 - Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero 
seja digitado. Ao final, mostre na tela a média de todos os números digitados, que 
sejam múltiplos de 3. Veja o exemplo abaixo:
*/
const leia = require("readline-sync");
let numero = 0, somaMultiplo3 = 0, media, contadorMult3 = 0;

do {
    numero = leia.questionInt("Digite uma numero: ");
    if (numero % 3 === 0 && numero != 0){
        somaMultiplo3 += numero
        contadorMult3 ++
    } 
    media = somaMultiplo3 / contadorMult3

    
} while (numero != 0) 
    

console.log("\nA media de todos os numeros multiplos de 3 =", media.toFixed(2));