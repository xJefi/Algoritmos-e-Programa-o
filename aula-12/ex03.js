//3- Crie uma função que recebe um parâmetro (número). Você deve retornar o fatorial desse número.

const num = 4

function fatorial (p1) {
    let mult = 1
    let aux = 1
    for(let i = p1 ; i >= 1; i--) {
        mult = aux * i
        aux = mult
    }
    return mult
}

const resultado = fatorial(num)
console.log(`O fatorial de ${num} é ${resultado}.`)