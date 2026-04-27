//4 - Mostrar a quantidade de dígitos de um número. Exemplo: 1246 - tem 4 dígitos;

let numero = Math.ceil(Math.random()*1000)
let aux = numero
let quantidade = 0

do {
    numero = numero/10
    quantidade++
} while(numero > 1)

console.log(`O número ${aux}, tem ${quantidade} dígitos.`)