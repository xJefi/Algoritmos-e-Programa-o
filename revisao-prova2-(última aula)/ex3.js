//Crie uma função que receba 2 números reais e 1 caractere que indica a operação desejada (+,-,*,/). Retorne o resultado da operação.

function calculadora (n1, n2, op) {
    if (op === '+') {
        return n1 + n2
    } else if (op === '-') {
        return n1 - n2
    } else if (op === '*') {
        return n1 * n2
    } 
    return n1 / n2
}

const resultado = calculadora(10, 2, '*')
console.log(resultado)

function calculadora2 (n1,n2,op) {
    switch(op) {
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '*': return n1 * n2
        case '/': return n1 / n2
        default: console.log('Operação inválida.')
    }  //Nesse caso, por conta do return, não é necessário utilizar o break no switch.
}
console.log(calculadora2(10,2,'+'))