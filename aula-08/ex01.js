//Calcular o MDC de dois números.

const n1 = Math.ceil(Math.random() * 100)
const n2 = Math.ceil(Math.random() * 100)
let mdc = 1

for (let i = 2; i <= Math.min(n1, n2) ; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
        mdc = i
    }
}
console.log(`O MDC de ${n1} e ${n2} é ${mdc}.`)

console.log(Math.min(n1, n2))