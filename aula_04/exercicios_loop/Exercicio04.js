/*
04 - Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da 
área de Desenvolvimento e precisam de um sistema para analisar os dados. Escreva um 
algoritmo, que leia via teclado as seguintes informações de cada colaborador:
*/
const leia = require("readline-sync")

let idade, 
identidadeGenero, 
pessoaDesenvolvedora,
pessoaBackend = 0,
mulherCisTransFront = 0,
homemCisTransMob40Mais = 0,
naoBinarioFull30Menos = 0,
totalPessoas = 0,
mediaIdade = 0,
continuar = "S";

while (continuar === "S") {
    idade = leia.questionInt("Digite sua Idade: ");

    do {
        identidadeGenero = leia.questionInt("Digite seu Genero: \n1 - Mulher Cis\n2 - Homem Cis\n3 - Nao Binario\n4 - Mulher Trans\n5 - Homem Trans\n6 - Outros\n");
        pessoaDesenvolvedora = leia.questionInt("Digite Qual a area de atuacao: \n1 - Backend\n2 - Frontend\n3 - Mobile\n4 - FullStack\n");
        if(identidadeGenero < 1 || identidadeGenero > 6) {
            console.log("Digite um numero entre 1 e 6");
        }
        if (pessoaDesenvolvedora < 1 || pessoaDesenvolvedora > 4) {
            console.log("Digite um numero entre 1 e 4");
        }

    }while(identidadeGenero < 1 || identidadeGenero > 6 && pessoaDesenvolvedora < 1 || pessoaDesenvolvedora > 4)

    if(pessoaDesenvolvedora === 1)
        pessoaBackend ++

    if((identidadeGenero === 1 || identidadeGenero === 4) && pessoaDesenvolvedora === 2)
        mulherCisTransFront ++

    if((identidadeGenero === 2 ||identidadeGenero === 5) && pessoaDesenvolvedora === 3 && idade >= 40)
        homemCisTransMob40Mais ++

    if((identidadeGenero === 3 ||identidadeGenero === 6) && pessoaDesenvolvedora === 4 && idade <= 30)
        naoBinarioFull30Menos ++

    totalPessoas ++;

    mediaIdade += idade;

    continuar = leia.question("Deseja continuar (S/N)?: ").toUpperCase();

}
mediaIdade = mediaIdade/ totalPessoas;

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${pessoaBackend}`)
console.log(`\nTotal de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulherCisTransFront}`)
console.log(`\nTotal de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homemCisTransMob40Mais}`)
console.log(`\nTotal de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${naoBinarioFull30Menos}`)
console.log(`\nO numero total de pessoas que responderam a pesquisa: ${totalPessoas}`)
console.log(`\nA media de idade das pessoas que responderam à pesquisa: ${mediaIdade}`)



