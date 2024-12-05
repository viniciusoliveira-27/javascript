/*
06 - Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador
 (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário
  (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo
   Salário reajustado.
*/

const leia = require("readline-sync")

let nomeColaborador = leia.question(" Nome do colaborador: ")

let codigoCargo = leia.questionInt("Cargo: ");

let salario = leia.questionFloat("Salario: ");

let cargo, salarioTotal, percentualReajuste

switch (codigoCargo) {
    case 1:
        cargo = "Gerente"
        percentualReajuste = 0.1
        break;
    case 2:
        cargo = "Vendedor"
        percentualReajuste = 0.07
        break;
    case 3:
        cargo = "Supervisor"
        percentualReajuste = 0.09
        break;
    case 4:
        cargo = "Motorista"
        percentualReajuste = 0.06
        break;
    case 5:
        cargo = "Estoquista"
        percentualReajuste = 0.05
        break;
    case 6:
        cargo = "Tecnico de TI"
        percentualReajuste = 0.08
        break;
    default:
        console.log("Codigo do cacrgo invalido");
        process.exit(0);
}
salarioTotal = salario + (salario * percentualReajuste);

console.log("\nNome do colaborador: ", nomeColaborador);
console.log("\nCargo: ", cargo);
console.log("\nSalario: R$", salarioTotal.toFixed(2));