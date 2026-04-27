//8- Faça uma função que receba um vetor de números e um número n. Retorne quantos números do vetor são maiores que n.

let vetor = []
let n = Math.ceil(Math.random() * 10)

for (let i = 1; i <= 5; i++) {
        vetor.push(Math.ceil(Math.random()*10))
    }

function maior(p1,p2) {
    let contador = 0
    for(let i = 0; i < p1.length; i++) {
        if(p1[i] > p2) {
            console.log(`${p1[i]} é MAIOR do que ${p2}.`)
            contador++
        } else if (p1[i] < p2) {
            console.log(`${p1[i]} é menor do que ${p2}.`)
        } else {
            console.log("Os números são iguais.")
        }
    }
    return contador
}
let resultado = maior(vetor,n)
console.log(`${resultado} número(s) do vetor são maiores do que n.`)