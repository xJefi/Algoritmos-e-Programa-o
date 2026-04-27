//Uma revendedora de carros paga a seus funcionários, um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas
//por eles efetuadas. Escrever um algoritmo que lê o nome do vendedor, o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que
//recebe por carro vendido e calcula o salário mensal do vendedor, escrevendo-o juntamente com o seu nome.

let nome = "Elton"
let carros = 2
let vendas = 60.000
let salario_fixo = 1500
let comissao = 1000

let salario = salario_fixo + (comissao * carros) + (vendas * 0.05)
console.log(`Nome: ${nome} Salário final do vendedor: R$${salario}.`)