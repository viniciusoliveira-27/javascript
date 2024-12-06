/*
02 - Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares. Veja o exemplo abaixo:
*/
const leia = require("readline-sync")

let par = 0, impar = 0, nuumero;

for (let contador = 1; contador <=10; contador ++) {
    numero = leia.questionInt(`Digite o ${contador} numero: `)
    if(numero % 2 == 0) {
        par ++;
    } else {
        impar ++;
    }
}
console.log("\nTotal de numeros pares: ",par);
console.log("Total de numeros impares: ",impar);