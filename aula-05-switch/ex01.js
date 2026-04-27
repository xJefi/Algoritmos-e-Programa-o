//Algoritmos Condicionais - switch
//Entrar com a sigla do estado de uma pessoa e imprimir uma das mensagens:
/*
a. Carioca
b. Paulista
c. Mineiro
d. Outros estados.
*/

let estado = "d"

switch (estado) {
    case "a":
        console.log("Carioca.")
        break
    case "b":
        console.log("Paulista.")
        break
    case "c":
        console.log("Mineiro.")
        break
    default:
        console.log("Outros estados.")
}
