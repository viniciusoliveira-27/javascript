/*
07 - Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora 
simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência 
ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na 
tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora 
do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!
*/
const leia = require("readline-sync")

let numero01 = leia.questionFloat("Digite o 1 numero: ");
let numero02 = leia.questionFloat("Digite o 2 numero: ");

let operacao = leia.questionInt("Operacao (Soma=1/Sub=2/Mult=3/Div=4): ")

let resultadoFinal;

switch (operacao) {
    case 1:
        resultadoFinal = numero01 + numero02
        console.log(`\n${numero01} + ${numero02} = ${resultadoFinal}`)
        break;
    case 2:
        resultadoFinal = numero01 - numero02
        console.log(`\n${numero01} - ${numero02} = ${resultadoFinal}`)
        break;
    case 3:
        resultadoFinal = numero01 * numero02
        console.log(`\n${numero01} X ${numero02} = ${resultadoFinal}`)
        break;
    case 4:
        resultadoFinal = numero01 / numero02
        console.log(`\n${numero01} / ${numero02} = ${resultadoFinal}`)
        break;
    default:
        console.log("Operação Inválida!");
        process.exit(0);
}



