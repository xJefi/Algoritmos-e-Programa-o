//Escreva um algoritmo que verifique se determinado número é palíndromo. Um número é considerado palíndromo se ele permanece igual lido de trás para frente.

let n = Math.round(Math.random() * 999)
let soma = 0
let divisor = 100
let novoDivisor = 1
let aux = n
while (n > 0) {
    const d = Math.floor(n/divisor)
    soma = soma + d * novoDivisor
    novoDivisor *= 10
    n -= d * divisor
    divisor /= 10
}
if (aux === soma) console.log(`${aux} é palíndromo`)
else console.log(`${aux} não é palíndromo`)