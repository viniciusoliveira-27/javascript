/*
04 - Escreva um algoritmo que leia 3 palavras (string), que definem as características 
de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a 
direita. Em seguida, mostre na tela qual dos animais foi escolhido, baseado nas três 
palavras digitadas pelo usuário:
*/
const leia = require("readline-sync");

let animal = leia.question("Digite se o animal é vertebrado ou invertebrado: ");
let grupo = leia.question("Digite em qual grupo esse animal pertence (ave, mamifero, inseto, anelideo): ");
let dieta = leia.question("Digite a dieta do animal (carnivoro, onivoro, herbivoro, hematofago): ");

let resultadoAnimal;

if(animal === "vertebrado" ) {
    if (grupo === "ave") {
        if (dieta === "carnivoro") {
            resultadoAnimal = "Aguia"
        } else {
            resultadoAnimal = "Pomba"
        }
    } else if (grupo === "mamifero") {
        if (dieta === "onivoro") {
            resultadoAnimal = "Homem"
        } else {
            resultadoAnimal = "Vaca"
            
        }

    }
}