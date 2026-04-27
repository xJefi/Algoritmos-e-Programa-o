//gerar 10 números aleatórios em um vetor e inverter a ordem deles no vetor.

const numeros = []

for (let i = 0; i < 10; i++) {
    numeros.push(Math.ceil(Math.random()*10))
}
console.log(numeros)

for (let i = 0; i < numeros.length/2; i++) { //precisa dividir por 2 pra não trocar e destrocar;
    let aux = numeros[i] //precisa criar uma auxiliar pra não duplicar e não perder metade da informação;
    numeros[i] = numeros[numeros.length - 1 - i]
    numeros[numeros.length - 1 - i] = aux
}
console.log(numeros)

//0 vira 9
//1 - 8
//2 - 7
//3 - 6
//4 - 5

/*
//como fazer para trocar duas variáveis numéricas sem uma auxiliar?
const numeros = []

for (let i = 0; i < 10; i++) {
    numeros.push(Math.ceil(Math.random()*10))
}
console.log(numeros)

for (let i = 0; i < numeros.length/2; i++) {
    numeros[i] += numeros[numeros.length - 1 - i]
    numeros[numeros.length - 1 - i] = numeros[i] - numeros [numeros.length -1 -i]
    numeros[i] = numeros [i] - numeros[numeros.length -1 -i]
}
console.log(numeros)
*/