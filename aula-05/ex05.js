//Faça um algoritmo que leia um número inteiro e escreva a raiz dele se ele for positivo ou o quadrado dele se for negativo.

let num = -25

if (num > 0) {
    console.log(Math.sqrt(num))
} else if (num < 0) {
    console.log(num ** 2)
}
