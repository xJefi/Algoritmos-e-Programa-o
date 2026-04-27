//Faça um algoritmo que leia o salário do usuário (tipo real) e o valor da prestação de um empréstimo. Se o valor da prestação for superior a 25% do salário, escreva que o
//Empréstimo não pode ser realizado. Caso contrário, escreva que o Empréstimo pode ser realizado.

let salario = 1600
let prest = 500
//console.log(salario / 4)

if (prest > salario / 4) {
    console.log(`O empréstimo não pode ser realizado.`)
} else {
    console.log(`O empréstimo pode ser realizado`)
}