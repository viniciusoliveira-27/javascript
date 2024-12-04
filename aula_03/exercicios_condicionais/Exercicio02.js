/*
02 - Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:
*/
const leia = require("readline-sync")

let numero = leia.questionInt("Digite um Numero : ");


if(numero > 0 && numero % 2 == 0) {
    console.log(`\nO Numero ${numero} é par e positivo!`);

} else if(numero > 0 && numero % 2 == 1) {
    console.log(`\nO Numero ${numero} é ímpar e positivo!`);

} else if(numero < 0 && numero % 2 == 0) {
    console.log(`\nO Numero ${numero} é par e negativo!`);
    
} else {
    console.log(`\nO Numero ${numero} é ímpar e negativo!`);
}