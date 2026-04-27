//Faça um algoritmo que leia quatro números reais e escreva “Aprovado” se a soma for igual ou superior a 28.

let nr1 = 1
let nr2 = 17
let nr3 = 7
let nr4 = 11

let soma = nr1 + nr2 + nr3 + nr4

if (soma >= 28) {
    console.log(`A soma dos números é ${soma}, portanto, maior ou igual a 28. Aprovado!`)
} else {
    console.log(`A soma é ${soma}, menor que 28. Reprovado!`)
}