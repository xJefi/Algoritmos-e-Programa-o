//7 - Faça uma função que receba um vetor de números e retorne a média.

let vetor = []
let soma = 0
let med = 0

for(let i = 1; i<=5; i++) {
    vetor.push(Math.ceil(Math.random()*10))
}

function media() {
    for(let i = 0; i<=vetor.length - 1; i++){
        soma += vetor[i]
        med = soma/vetor.length
    }
    return med
}
let resultado = media()
console.log(`A média do vetor ${vetor} é: ${med}.`)