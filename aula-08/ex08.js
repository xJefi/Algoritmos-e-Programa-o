//Gerar 40 números aleatórios e some somente os pares.

let n
let soma = 0

for(let i = 0; i <= 40; i++) {
    n = Math.ceil(Math.random()*10)
    if(n % 2 !== 0) continue
    console.log(n)
    soma += n
}
console.log(`A soma dos pares entre todos os números aleatórios é ${soma}.`)