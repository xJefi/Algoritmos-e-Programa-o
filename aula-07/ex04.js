//4 - Mostrar a quantidade de dígitos de um número. Exemplo: 1246 - tem 4 dígitos;

let numero = Math.ceil(Math.random()* 10000)
let aux = numero
//let div = Math.round(numero / 10)
//console.log(numero)
//console.log(div)

//for(;numero > 0;numero / 10) {
//    console.log(numero)
//}
let quantidade = 0
do {
    numero = Math.floor(numero / 10)
    quantidade++
} while (numero > 1)

console.log(`A quantidade de digitos do número ${aux} é ${quantidade}.`)
