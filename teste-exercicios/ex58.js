//Efetuar a leitura de cinco números inteiros diferentes e identificar o maior e o menor valor.

const n1 = 1000
const n2 = 33
const n3 = 543
const n4 = 234
const n5 = 34

if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
    console.log(`Maior número: ${n1}`)
} else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
    console.log(`Maior número: ${n2}`)
} else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
    console.log(`Maior número: ${n3}`)
} else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
    console.log(`Maior número: ${n4}`)
} else {
    console.log(`Maior número: ${n5}`)
}

if (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5) {
    console.log(`Menor número: ${n1}`)
} else if (n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5) {
    console.log(`Menor número: ${n2}`)
} else if (n3 < n1 && n3 < n2 && n3 < n4 && n3 < n5) {
    console.log(`Menor número: ${n3}`)
} else if (n4 < n1 && n4 < n2 && n4 < n3 && n4 < n5) {
    console.log(`Menor número: ${n4}`)
} else {
    console.log(`Menor número: ${n5}`)
}
