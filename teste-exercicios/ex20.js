//Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler o preço do litro da gasolina e o
//valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque.

const preço = 6.3
const pagamento = 200
const litros = Math.floor(pagamento / preço)
const resto = pagamento % preço

console.log(`Pagando R$${pagamento}, considerando que o preço do litro é R$${preço}, você consegue colocar no tanque ${litros} litros de gasolina. Seu troco é de R$${resto}.`)