//3- Crie uma função que recebe um parâmetro (número). Você deve retornar o fatorial desse número.

let numero = 4
let aux = 1

function fatorial(p1) {
    for(let i = p1; i >= 1; i--) {
        aux = aux * i
    }
    return aux
}
let resultado = fatorial(numero)
console.log(resultado)