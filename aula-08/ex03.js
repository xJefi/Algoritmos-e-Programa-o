//Gerar a sequência de Fibonacci até N Termos.

let n1 = 1
let n2 = 1
let soma = n1 + n2
console.log(n1)
console.log(n2)
for (let i = 1; i < 10; i++) {
    let aux = n1
    n1 = n2
    n2 += aux
    console.log(n2)
}

/* 
FORMA DE FAZER COM VETORES:

let n = [1,1]

let i = 0
while (i++ < 10){
    n.push(n[n.length-1] + n[n.length-2])
}

console.log(n)
*/
