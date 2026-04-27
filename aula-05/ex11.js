//Faça um algoritmo que leia 3 números inteiros e escreva-os em ordem crescente.

let num1 = 111
let num2 = 6432
let num3 = 22

if (num1 > num2 && num2 > num3) {
    console.log(num3, num2, num1)
} else if (num1 > num3 && num3 > num2) {
    console.log(num2, num3, num1)
} else if (num2 > num1 && num1 > num3) {
    console.log(num3, num1, num2)
} else if (num2 > num3 && num3 > num1) {
    console.log(num1, num3, num2)
} else if (num3 > num1 && num1 > num2) {
    console.log(num2, num1, num3)
} else {
    console.log(num1, num2, num3)
}