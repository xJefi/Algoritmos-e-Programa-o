//Faça um algoritmo que leia um número inteiro e escreva-o se ele for divisível por 3 e 5 e não for divisível por 7.

let num = 30

if (num % 3 == 0) {
    console.log(`${num} é divisível por 3.`)
} 

if (num % 5 == 0) {
    console.log(`${num} é divisível por 5.`)
} 

if (num % 7 !== 0) {
    console.log(`${num} não é divisível por 7.`)
}
