//Escrever um algoritmo que lê a1, an e r, respectivamente o primeiro termo de uma progressão aritmética, o último termo da progressão e a razão desta progressão.
//Calcular e escrever a soma dos termos desta progressão.

let a1 = 2
let an = 18
let r = 2

//an = a1 + (n - 1) r
//n = (an - a1 + r)/r ISOLANDO O N
//Sn = n(a1 + an) / 2

let n = (an - a1 + r) / r

soma = n * (a1 + an) / 2
console.log(`A soma é ${soma}`)
