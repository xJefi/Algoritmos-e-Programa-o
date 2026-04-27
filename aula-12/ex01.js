//1- Faça uma função que recebe 2 números e retorne o produto entre eles. Você deve utilizar somas sucessivas (Somar o A, B vezes).

const n1 = 2 //Math.round(Math.random() * 10)
const n2 = 3 //Math.round(Math.random() * 10)

function soma(p1, p2) {
    let mult = 0
    for (let i = 0; i < p2; i++) {
        mult = mult + p1
    }
    return mult;
}

const resultado = soma(n1, n2)
console.log(n1, n2)
console.log(resultado)