/*
03 - Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo:
*/
const leia = require("readline-sync");

let nomeDoador = leia.question("\nDigite o Nome do doador: ");

let idade = leia.questionInt("\nDigite a Idade do doador: ");

let doador = leia.question("\nPrimeira doacao de sangue? ") === false; 

if(idade >= 18 && idade < 60) {
    console.log(`\n${nomeDoador} esta apto(a) para doar sangue!`);
} else if (idade >= 60 && idade <= 69 && doador) {
    console.log(`\n${nomeDoador} esta apto(a) para doar sangue!`);
} else {
    console.log(`\n${nomeDoador} não esta apto(a) para doar sangue!`);
}