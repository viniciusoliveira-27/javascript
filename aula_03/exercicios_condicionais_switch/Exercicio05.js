/*
05 - Com base na tabela abaixo, escreva um algoritmo que leia o código de um item
 (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A 
 seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.
*/
const leia = require("readline-sync")

let codigoProduto = leia.questionInt("Codigo do produto: ");

let quantidade = leia.questionInt("Quantidade: ");

let produto, valorTotal, valorProduto



switch(codigoProduto) {
    case 1:
        produto = "Cachorro Quente"
        valorProduto = 10.00
        break;
    case 2:
        produto = "X-Salada"
        valorProduto = 15.00
        break;
    case 3:
        produto = "X-Bacon"
        valorProduto = 18.00
        break;
    case 4:
        produto = "Bauru"
        valorProduto = 12.00
        break;
    case 5:
        produto = "Refrigerante"
        valorProduto = 8.00
        break;
    case 6:
        produto = "Suco de laranja"
        valorProduto = 13.00
        break;
    default:
        console.log("Codigo do produto invalido");
        process.exit(0);   
}
valorTotal = valorProduto * quantidade

console.log(`\nProduto: ${produto}`)
console.log(`\nValor total: R$ ${valorTotal.toFixed(2)}`)