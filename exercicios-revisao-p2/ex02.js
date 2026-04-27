//Escreva uma função que receba uma matriz NxN e retorne a soma da diagonal principal e secundária;

let vetor = []
let soma = 0
let soma2 = 0
let i

function matriz() {
    for (let i = 0; i < 9; i++) {
        vetor.push(Math.ceil(Math.random() * 9))
        if (i < 5) {
            soma += vetor[i]
        }
        if (i >= 5) {
            soma2 += vetor[i]
        }
    }
    console.log(`Vetor: ${vetor}. Soma parte de cima ${soma}. Soma parte de baixo ${soma2}.`)
}

matriz()

//NÃO ERA BEM ISSO MAS FOI O MELHOR Q CONSEGUI.