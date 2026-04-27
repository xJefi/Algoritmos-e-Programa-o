let vetor = []
let soma = 0
let contador = 0
for (let i = 0; i < 10; i++) {
    vetor.push(Math.ceil(Math.random() * 10))
    soma = soma + vetor[i]
}
console.log(vetor)
let media = soma / vetor.length
for (let i = 0; i < 10; i++) {
    if (vetor[i] > media) {
        contador++
        console.log(`${vetor[i]} está acima da média.`)
    }
}
console.log("Média: ", media)
console.log("Acima: ", contador)

//Na prova eu fiz a média dentro do laço de repetição. O correto é o que ta aqui.