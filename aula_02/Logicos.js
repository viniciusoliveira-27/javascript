const leia = require('readline-sync')

//Dados Usuário
const usuario = 'user@email.com'
const senha = '123456789'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("\nTela de Login\n")

let usuarioLogin = leia.question("Digite seu usuario: ")

let senhaLogin = leia.question("Digite seu senha: ", {
    hideEchoBack: true,
})

if( usuarioLogin === usuario && senhaLogin == senha) {
    var mensagem = "Seja Bem Vindo! Usuário autenticado com sucesso!"
    
}else {
    var mensagem = "Acesso Negado!"
}
console.log(mensagem)

//se o usuario NÃo esta bloqueado
if(!isBlock) {
    console.log("Usuario ativo!")
} else {
    console.log("Usuario esta inativo! contate o Admin!")
    process.exit(0)
}

if(isAdmin || isGerente) {
    console.log("Acesso ao painel Admin Liberado!")
} else {
    console.log("Acesso negado")
}