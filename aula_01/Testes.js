const leia = require('readline-sync')

let n1, n2, soma;

n1 = leia.questionInt("Digite o primeiro numero: ")
n2 = leia.questionInt("Digite o segundo numero: ")

console.log("\nA variavel N1 possui o valor: ", n1)
console.log("A variavel N2 possui o valor: ", n2)


console.log("\nA soma de n1+n2: ", n1+n2)
console.log("A subtração de n1-n2: ", n1-n2)
console.log("A Multiplicação de n1*n2: ", n1*n2)
console.log("A divisão de n1/n2: ", n1/n2)
console.log("A potenciação de n1^n2: ", Math.pow(n1,n2))
console.log("A Raiz Quadrada de n1: ", Math.sqrt(n1))


