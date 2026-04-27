//Entrar com nome, sexo e idade de uma pessoa. Se a pessoa for do sexo feminino e tiver menos que 25 anos, imprimir nome e mensagem: ACEITA. 
//Caso contrário, imprimir nome e a mensagem: NÃO ACEITA. (Considerar f ou F).

const nome = "Fagundina"
const sexo = "F"
const idade = 24

if ((sexo === "f" || "F") && idade < 25) {
    console.log(`Nome: ${nome} ACEITA.`)
} else {
    console.log("NÃO ACEITA.")
}