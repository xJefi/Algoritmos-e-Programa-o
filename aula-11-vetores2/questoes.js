const clientes = []
for (let i = 0; i<1000; i++) {
    clientes[i] = {
        nome: 'Cliente' + i,
        minutosUtilizados: Math.floor(Math.random()*2000)
    }
}

//1. Total de minutos entre todos os clientes
//2. Qual cliente gastou mais minutos
//3. Quantidade de clientes que gastaram menos que a média. 
//Sabendo que cada cliente gasta 49.90 e tem direito a 900 minutos e cada minuto excedente custa R$0.05.
//4. Quanto gastou cada cliente?
//5. Quantos clientes não atingiram os 900 minutos?
//6. Qual foi o faturamento da empresa?

//Ta tudo resolvido no ex1.js :)