//3 variaveis n1, n2 e n3 notas aleatorias calcular a media e escrever aprovado se for maior ou igual a 7.

let n1 = 10
let n2 = 8
let n3 = 3

let media = (n1 + n2 + n3) / 3

if (media >= 7) {
    console.log(`A média é ${media}. Você foi aprovado!`)
} else {
    console.log(`A média é ${media}. Você foi reprovado!`)
}