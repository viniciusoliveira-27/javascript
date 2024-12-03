const leia = require("readline-sync")

let salario, abono;

salario = leia.questionFloat("Insira o valor do salario: ")
abono = leia.questionFloat("Insira o valor do abono: ")

console.log(
    "\nNovo Salário: ",
    new Intl.NumberFormat('pt-BR',{
        style: 'currency', 
        currency: 'BRL',
    }).format(salario + abono)
);
