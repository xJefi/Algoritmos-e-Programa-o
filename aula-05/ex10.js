//Faça um algoritmo que leia 3 números inteiros. Escreva qual é o maior número.

let num1 = 111
let num2 = 66
let num3 = 2222

if (num1 > num2 && num2 > num3 || num1 > num3 && num3 > num2) {
    console.log(num1)
} else if (num2 > num1 && num1 > num3 || num2 > num3 && num3 > num1) {
    console.log(num2)
} else
    console.log(num3)