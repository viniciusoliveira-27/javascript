/*
07 - Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa 
um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número 
e o programa deve exibir na tela a posição deste número no vetor. Caso o número não 
seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. Veja os 
exemplos abaixo:
*/
const leia = require("readline-sync")

let vetorNumeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
a
let numeroDigitado = leia.questionInt("Digite o numero que voce deseja encontrar: ")

let numeroPosicao = vetorNumeros.indexOf(numeroDigitado)

if (numeroPosicao <= vetorNumeros.length && numeroPosicao > 0){
    console.log(`O numero ${numeroDigitado} esta localizado na posicao: ${numeroPosicao}`)
} else {
    console.log(`O numero ${numeroDigitado} não foi encontrado`)
}