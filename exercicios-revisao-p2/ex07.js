//Gerar a sequência de Fibonacci até N Termos.

let a = 1
let b = 1
let aux = 0
console.log(a)
console.log(b)
for(let i = 0; ;i++) {
    aux = a
    a = b
    b = a + aux
    console.log(b)
    if(b > 100) break
}