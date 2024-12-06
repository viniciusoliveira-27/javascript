const leia = require("readline-sync")

// cria as Linhas da Matriz
let matrizInteiros = new Array(3);

// Cria as Colunas da Matriz
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(3);
}
//Percorrendo a Matriz e preenchendo com dados
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){
        matrizInteiros [indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ")
    
    }
}
console.table(matrizInteiros);