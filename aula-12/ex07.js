//7 - Faça uma função que receba um vetor de números e retorne a média.

const vetor = [5,10,6,7]

function media(p1) {
    let soma = 0
    for(let i = 0; i < p1.length; i++) {
        soma +=  p1[i]
    }
    return soma / p1.length
}

const resultado = media(vetor)
console.log(resultado)