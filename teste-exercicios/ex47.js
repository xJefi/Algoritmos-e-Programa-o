//Tendo como entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:
//- para homens: (72.7 * h)-58
//- para mulheres: (62.1*h)-44.7

const sexo = "homem"
const altura = 1.75
const h = (72.7 * altura) -58
const m = (62.1 * altura) -44.7


if (sexo === "homem") {
    console.log(`Seu peso ideal é de ${h}Kg.`)
} else if (sexo === "mulher") {
    console.log(`Seu peso ideal é de ${m}Kg.`)
} else {
    console.log(`Digite se você é homem ou mulher`)
}