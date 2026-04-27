//Escreva um algoritmo que calcule a soma dos dígitos de um número fornecido pelo usuário.
/*
let n = 231
let contador = n
let soma = 0


while (contador > 0) {
    //let n1 = Math.round(n / 100)
    //contador = contador - (n1 * 100)
    soma = soma += n % 10
    n = Math.round(n / 100)
    console.log(soma)
} 
^^^^^^^^
ERRADO
*/
let numero = 231
let n = 100
let contador = 0
let soma = 0

while (contador < 3) {
    soma = soma + Math.floor(numero/n)
    numero = numero - (Math.floor(numero/n)*n)
    n = n/10
    contador ++
}
console.log(soma)