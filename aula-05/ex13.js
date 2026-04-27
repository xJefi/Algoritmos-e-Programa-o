//Faça um algoritmo que leia o peso do usuário e calcule o IMC. Escreva a situação de acordo com a seguinte relação:

/*
Condição            Situação
IMC < 20            Abaixo do peso
20 >= IMC < 25      Peso normal
25 >= IMC < 30      Sobre peso
30 >= IMC < 40      Obeso
IMC >= 40           Obeso mórbido
*/

let peso = 58
let altura = 1.75
let imc = peso / altura ** 2
//let imc = Math.round(peso / altura ** 2)

console.log(`O resultado é ${imc}.`)

if (imc < 20) {
    console.log(`Abaixo do peso.`)
} else if (imc >= 20 && imc < 25) {
    console.log(`Peso normal.`)
} else if (imc >= 25 && imc < 30) {
    console.log(`Sobre peso.`)
} else if (imc >= 30 && imc < 40) {
    console.log(`Obeso.`)
} else if (imc >= 40) {
    console.log(`Obeso mórbido.`)
}