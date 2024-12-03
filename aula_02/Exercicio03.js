const leia = require("readline-sync")

let salarioBruto, adicionalNoturno, horasExtras, qtdeHraExtra, descontos,salarioLiquido;

salarioBruto = leia.questionFloat("Salario Bruto: ")
adicionalNoturno = leia.questionFloat("Adicional Noturno: ")
horasExtras = leia.questionFloat("Horas Extras: ")
qtdeHraExtra = leia.questionFloat("Quantidade de Horas extras feitas: ")
descontos = leia.questionFloat("Descontos: ")

salarioLiquido = salarioBruto + adicionalNoturno +(horasExtras*qtdeHraExtra)-descontos;

console.log(
    "\nNovo Salário: ",
    new Intl.NumberFormat('pt-BR',{
        style: 'currency', 
        currency: 'BRL',
    }).format(salarioLiquido)
);




