//Escreva um algoritmo que diga se um determinado número natural é perfeito. O número natural é perfeito se é igual à soma de todos os seus fatores
//(divisores), excluindo ele próprio.

let numero = 28
let soma = 0
let aux = numero
while(numero > 1){
    numero = Math.round(numero / 2)
    soma = soma + numero
    console.log(numero)
}
console.log(soma)

if (aux === soma) {
    console.log(`O número é perfeito`)
} else {
    console.log(`O número não é perfeito`)
}