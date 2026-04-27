//Crie uma função que receba um número inteiro e retorne o valor da seguinte expressão: 1 + 1/2 + 1/3 + 1/4 + ... + 1/n

function somaExpressao(n) {
    let i = 1
    let soma = 0
    while (i <= n) {
        soma += 1 / i
        i++
    }
    return soma
}
console.log(somaExpressao(10))

/*
for(let i = n; i >= 2; i--) {
        let smt = 1/(1-(n-i))
        let soma = 0
        soma += smt
*/