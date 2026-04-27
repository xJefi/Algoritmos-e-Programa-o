//Crie uma função que calcula o fatorial de um número

const numero = 5

function fatorial (p1) {
    let mult = 1
    for(let i = p1; i >= 1; i--) {
        mult = mult * i
    }
    return mult
}

const resultado = fatorial(numero)
console.log(`O fatorial de ${numero} é ${resultado}.`)