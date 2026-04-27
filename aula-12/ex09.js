//9 - Faça uma função que verifica se uma palavra é um palíndromo, ou seja, se é igual quando invertida.

const palavra = "radar"
let vetor1 = []
let vetor2 = []

function palindromo (p1) {
    for(let i = palavra.length - 1; i >= Math.floor((palavra.length - 1)/2); i--) {
        vetor1.push(p1[i])
        //console.log(vetor1)
    }
    for(let i = 0; i<= Math.ceil((palavra.length -1)/2); i++) {
        vetor2.push(p1[i])
        //console.log(vetor2)
    }
    if(vetor1.join("") === vetor2.join("")) {
        console.log(`A palavra ${p1} é um palíndromo.`)
    } else {
        console.log(`A palavra ${p1} NÃO é um palíndromo.`)
    }
}

palindromo(palavra)