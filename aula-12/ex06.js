//6 - Faça uma função que devolva o maior entre 2 números.

const n1 = 3
const n2 = 5

function maior (p1, p2) {
    if(p1 > p2) {
        console.log(p1)
    } else if(p2 > p1) {
        console.log(p2)
    } else {
        console.log("Os números são iguais.")
    }
}

const resultado = maior(n1, n2)

/*
function maior (p1, p2) {
    if(p1 > p2) {
        return true
    }
    return false
}

console.log(resultado)
*/