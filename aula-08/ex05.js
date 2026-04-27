//Gerar 40 números aleatórios e guardar o menor deles.

let n
let menorNumero = 10000000000 //Infinity

for (let i = 1; i <= 40; i++) {
    n = Math.ceil(Math.random() * 100)
    console.log(n)
    if (n < menorNumero) {
        menorNumero = n
    }
}
console.log(`O menor valor é ${menorNumero}.`)