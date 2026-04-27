//Alternativa de como fazer uma cópia: (...)
const vetor = [3,4,5,6,7]

const vetor2 = [...vetor] //cópia do valor de "vetor"

console.log(vetor)
console.log(vetor2)

const pessoa = {nome: 'Jefi', idade:21}
const pessoa2 = {...pessoa} //cópia de pessoa

console.log(pessoa)
console.log(pessoa2)