const leia = require("readline-sync")

// cria as Linhas da Matriz
let matrizInteiros = new Array(6);

// Cria as Colunas da Matriz
for (let indice = 0; indice < matrizInteiros.length; indice++){
    matrizInteiros[indice] = Array(4);
}
//Percorrendo a Matriz Irregular e preenchendo com dados(no caso da Matriz irregular)
//voce tem que no segundo for delimetar a matrizInteiros[indiceLinha]
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[indiceLinha].length; indiceColuna++){
        matrizInteiros [indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ")    
    }
}
console.table(matrizInteiros);