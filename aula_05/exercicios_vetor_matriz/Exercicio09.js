
/**
09 -  Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em 
seguida, mostre na tela:
Todos os elementos da Diagonal Principal
Todos os elementos da Diagonal Secundária
A Soma de todos os elementos da Diagonal Principal
A Soma de todos os elementos da Diagonal Secundária
 * 
 */
const leia = require("readline-sync")

let matrizInteiros = new Array(3), 
    somaDiagonalPrincipal = 0, 
    somaDiagonalSecundaria = 0

let matrizDiagonalPrincipal = new Array(3), matrizDiagonalSecundaria = new Array(3);

for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
        matrizInteiros [indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ")  
        
        //preenchendo os valores da Diagonal principal
        if(indiceLinha === 0 && indiceColuna === 0) {
            matrizDiagonalPrincipal[indiceLinha]  = matrizInteiros [indiceLinha][indiceColuna]            
        }
        if(indiceLinha === 1 && indiceColuna === 1) {
            matrizDiagonalPrincipal[indiceLinha]  = matrizInteiros [indiceLinha][indiceColuna]            
        }
        if(indiceLinha === 2 && indiceColuna === 2) {
            matrizDiagonalPrincipal[indiceLinha]  = matrizInteiros [indiceLinha][indiceColuna]            
        }


        //preenchendo os valores da Diagonal secundaria
        if(indiceLinha === 2 && indiceColuna === 0) {
            matrizDiagonalSecundaria[indiceLinha]  = matrizInteiros [indiceLinha][indiceColuna]

        }
        if(indiceLinha === 1 && indiceColuna === 1) {
            matrizDiagonalSecundaria[indiceLinha]  = matrizInteiros [indiceLinha][indiceColuna]

        }
        if(indiceLinha === 0 && indiceColuna === 2) {
            matrizDiagonalSecundaria[indiceLinha]  = matrizInteiros [indiceLinha][indiceColuna]

        }
    }
}

console.log("\nElementos da Diagonal Principal: ",matrizDiagonalPrincipal);
console.log("\nElementos da Diagonal Secundária: ",matrizDiagonalSecundaria);


for (let valor of matrizDiagonalPrincipal) {
    somaDiagonalPrincipal += valor;
}
console.log("\nSoma dos Elementos da Diagonal Principal: \n",somaDiagonalPrincipal)

for (let valor of matrizDiagonalSecundaria) {
    somaDiagonalSecundaria += valor;
}
console.log("\nSoma dos Elementos da Diagonal Secundaria: \n",somaDiagonalPrincipal)



