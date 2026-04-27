//1- Faça uma função que recebe 2 números e retorne o produto entre eles. Você deve utilizar somas sucessivas (Somar o A, B vezes).
let n1 = 6
let n2 = 3
let soma = 0

function produto(p1,p2) {
    for(let i = 1; i<=p2; i++) {
        soma = soma + p1
    }
}
produto(n1,n2)
console.log(`O produto de ${n1} e ${n2} é: ${soma}.`)