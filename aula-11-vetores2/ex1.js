//1. Total de minutos entre todos os clientes.

const clientes = []
let soma = 0
for (let i = 0; i < 1000; i++) {
    clientes[i] = {
        nome: 'Cliente' + i,
        minutosUtilizados: Math.floor(Math.random() * 2000)
    }
    soma += clientes[i].minutosUtilizados
}
console.log(clientes)
console.log(soma, 'Minutos foram utilizandos entre todos os clientes.') //número 1

//2. Qual cliente gastou mais minutos?

let posicaoDoMaior = 0
for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].minutosUtilizados > clientes[posicaoDoMaior].minutosUtilizados) {
        posicaoDoMaior = i
    }
}
console.log(`O cliente que gastou mais minutos foi o cliente ${posicaoDoMaior}.`) //número 2

//3. Quantidade de clientes que gastaram menos que a média.
//Sabendo que cada cliente gasta 49.90 e tem direito a 900 minutos e cada minuto excedente custa R$0.05.
//4. Quanto gastou cada cliente?
let media = soma / clientes.length
console.log('A média é:', media)

let contador = 0
const valor = 49.9
let gasto = 0
let contador2 = 0
let faturamento = 0
for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].minutosUtilizados < media) {
        contador++
    } //3
    
    if (clientes[i].minutosUtilizados >= 900) {
       gasto = ((clientes[i].minutosUtilizados - 900) * 0.05) + valor
       console.log(`O cliente ${clientes[i].nome} gastou: R$`, gasto)  //número 4
       faturamento += gasto //6
    } else if (clientes[i].minutosUtilizados < 900) {
        console.log(`O cliente ${clientes[i].nome} gastou: R$`, valor)
        contador2++ //5
        faturamento += valor //6
    }
}
console.log(contador, 'Clientes gastaram menos do que a média.') //número 3

//5. Quantos clientes não atingiram os 900 minutos?
console.log(contador2, "clientes não atingiram os 900 minutos.") //número 5

//6. Qual foi o faturamento da empresa?
console.log(`O faturamento foi de R$ ${faturamento}.`)