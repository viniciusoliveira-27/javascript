let nome = "Vinícius";
let profissao = "Pessoa desenvolvedora";
let salarioBruto = 8000.85;
const bonus = 0.15;

console.log("\nNome: ",nome )
console.log("\nProfissão: ",profissao)

console.log(
    "\nSalario Liquido: ",
    new Intl.NumberFormat('pt-BR',{
        style: 'currency', 
        currency: 'BRL',
    }).format(salarioBruto + (bonus*salarioBruto))
);

let salario = new Intl.NumberFormat('pt-BR',{
    style: 'currency', 
    currency: 'BRL',
}).format(salarioBruto + (bonus*salarioBruto))

console.log("\nO Salario Bruto do colaborador " +nome+ " é "+salarioBruto)
console.log(`\nO Salario Bruto do colaborador ${nome} é ${salario}`)


// console.log("Tipo de variavel", typeof nome )

// nome = 12

// console.log("\nNome: ",nome ,"\n")

// console.log("Tipo de variavel: ", typeof nome )