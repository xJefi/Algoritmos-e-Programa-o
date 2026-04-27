//Gerar 40 números aleatórios e some somente os pares.

let n
let soma = 0

for(let i = 1; i <= 40; i++) {
    n = Math.ceil(Math.random()*100)
    console.log(n)
    if(n % 2 === 0) {
        soma = soma + n
    }
}
console.log(`A soma dos números pares é: ${soma}.`)