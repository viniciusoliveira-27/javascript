/*
03 - Escreva um algoritmo, que leia a idade de 
várias pessoas (números inteiros), via teclado e 
mostre na tela o total de pessoas cuja idade seja 
menor que 21 anos e o total de pessoas cuja idade, 
seja maior que 50 anos. A leitura dos dados deve 
ser finalizada ao digitar uma idade negativa. Veja 
o exemplo abaixo:
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
