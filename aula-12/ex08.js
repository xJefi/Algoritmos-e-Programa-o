//8- Faça uma função que receba um vetor de números e um número n. Retorne quantos números do vetor são maiores que n.

let i = 0
const vetor = []
while (i < 5) {
    vetor[i] = Math.round(Math.random() * 10)
    i++
}

const numero = Math.round(Math.random() * 10)
console.log(vetor)

function maior(p1) {
    for (let i = 0; i < vetor.length; i++) {
        if (p1 < vetor[i]) {
            console.log(`O número ${vetor[i]} é MAIOR do que ${p1}`)
        } else if (p1 > vetor[i]) {
            console.log(`O número ${vetor[i]} é menor do que ${p1}`)
        } else {
            console.log(`O número ${vetor[i]} é o mesmo.`)
        }
    }
}

const resultado = maior(numero)