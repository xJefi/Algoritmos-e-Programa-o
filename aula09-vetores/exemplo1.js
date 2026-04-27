//Gerando um número aleatório: console.log(Math.ceil(Math.random()*100))

//Gere 20 notas aleatórias
const notas = []

for (let i = 0; i < 20; i++) {
    notas.push(Math.ceil(Math.random() * 10))
    //notas[1] = Math.ceil(Math.random() * 100)
    //notas[notas.length] = (Math.ceil(Math.random() * 100))
}
console.log(notas)


//soma de todos os valores do vetor
let soma = 0

for (let a = 0; a < notas.length ;a++) { //notas.length é o tamanho do vetor
    soma+= notas[a]
    //soma = soma + notas[a]
}
console.log(soma)


//média do vetor
const media = soma / notas.length
console.log(media)


//qual é o maior número do vetor
let maior = 0 // ou let maior = notas[0]

for(let i = 0; i < notas.length; i++) {
    if (notas[i] > maior) maior = notas[i]
}

console.log(maior)


//criar vetor com 20 numeros e filtrar os repetidos
let unicos = []

for (let i = 0; i < notas.length; i++) {
    let encontrei = false
    for (let j = 0; j < unicos.length; j++) {
        if (notas[i] === unicos[j]) {
            encontrei = true
        }
    }
    if (!encontrei) {
        unicos.push(notas[i])
    }
}
console.log(notas)
console.log(unicos)
/*
//de outra forma:
let unicos = []

for (let i = 0; i < notas.length; i++) {
    let j = 0
    for (;notas[i] !== unicos[j] && j < unicos.length; j++); // << esse ; (ponto e vírgula) indica que não existe um bloco a ser executado (por isso não se foi usado as chaves)
    if (j === unicos.length) //a estrutura se chama for de procura, por isso o if não fica dentro, ele fica em baixo.
        unicos.push(notas[i])
}
console.log(unicos)
*/