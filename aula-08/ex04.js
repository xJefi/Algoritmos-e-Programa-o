//Gerar 40 números aleatórios e guardar o maior deles.
let n
let maiorNumero = 0

for (let i = 1; i <= 40; i++) {
    n = Math.ceil(Math.random() * 100)
    console.log(n)
    if (n > maiorNumero) {
        maiorNumero = n
    }
}
console.log(`O maior valor é ${maiorNumero}.`)