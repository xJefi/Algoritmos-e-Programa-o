//Entrar com a sigla do estado de uma pessoa e imprimir uma das mensagens:
//a. Carioca
//b. Paulista
//c. Mineiro
//d. Outros estados.

const estado = "c"

switch (estado) {
    case "a":
        console.log("carioca.")
        break
    case "b":
        console.log("paulista.")
        break
    case "c":
        console.log("mineiro.")
        break
    default:
        console.log("outro estado.")
}