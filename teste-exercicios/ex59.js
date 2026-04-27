const salario = 777
const au1 = salario * 0.15
const au2 = salario * 0.10
const au3 = salario * 0.05

if (salario < 500) {
    console.log(`Reajuste de 15%. Seu novo salário é: ${salario + au1}.`)
} else if (salario >= 500 && salario <= 1000) {
    console.log(`Reajuste de 10%. Seu novo salário é: ${salario + au2}.`)
} else {
    console.log(`Reajuste de 5%. Seu novo salário é: ${salario + au3}.`)
}