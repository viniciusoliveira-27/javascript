/*
04 - Escreva um algoritmo que leia 3 palavras (string), que definem as características 
de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a 
direita. Em seguida, mostre na tela qual dos animais foi escolhido, baseado nas três 
palavras digitadas pelo usuário:
*/
const leia = require("readline-sync");

let animal = leia.question("\nDigite se o animal é vertebrado ou invertebrado: ");
let grupo = leia.question("\nDigite em qual grupo esse animal pertence (ave, mamifero, inseto, anelideo): ");
let dieta = leia.question("\nDigite a dieta do animal (carnivoro, onivoro, herbivoro, hematofago): ");

let resultadoAnimal;

if(animal === "vertebrado" ) {
    if (grupo === "ave") {
        if (dieta === "carnivoro") {
            resultadoAnimal = "Aguia"
        } else if (dieta === "onivoro") {
            resultadoAnimal = "Pomba"
        } else {
            console.log("Não existe uma ave com essa dieta ", dieta)
            process.exit();
        }
    } else if (grupo === "mamifero") {
        if (dieta === "onivoro") {
            resultadoAnimal = "Homem"
        } else if (dieta === "herbivoro") {
            resultadoAnimal = "Vaca"            
        } else {
            console.log("Não existe uma mamifero com essa dieta ", dieta)
            process.exit();
        }
    }
} else if (animal === "invertebrado") {
    if (grupo === "inseto") {
        if (dieta === "hematofago") {
            resultadoAnimal = "Pulga"
        } else if (dieta === "herbivoro") {
            resultadoAnimal = "Lagarta"
        } else {
            console.log("Não existe um inseto com essa dieta ", dieta)
            process.exit();
        }
    } else if (grupo === "anelideo") {
        if (dieta === "hematofago") {
            resultadoAnimal = "Sanguessuga"
        } else if (dieta === "Onivoro") {
            resultadoAnimal === "Minhoca"
        } else {
            console.log("Não existe um Anelideo com essa dieta ", dieta)
            process.exit();
        }
    }
}
console.log("\n",resultadoAnimal);