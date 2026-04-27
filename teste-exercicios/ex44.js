//Escreva um algoritmo que verifique a validade de uma senha fornecida pelo usuário. A senha válida é a palavra UCPEL.
//Deve ser impresso as seguintes mensagens:
//-ACESSO PERMITIDO caso a senha seja válida.
//-ACESSO NEGADO caso a senha seja inválida.

const senha = "UCPEL"

if (senha === "UCPEL") {
    console.log(`ACESSO PERMITIDO.`)
} else {
    console.log(`ACESSO NEGADO.`)
}