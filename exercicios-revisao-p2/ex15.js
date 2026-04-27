//6 - Faça uma função que devolva o maior entre 2 números.

let n1 = 42
let n2 = 57

function maior(p1,p2) {
    if(p1 > p2) {
        return p1
    }
    return p2
}
let resultado = maior(n1,n2)
console.log(`O maior dentre os dois números é o número ${resultado}.`)