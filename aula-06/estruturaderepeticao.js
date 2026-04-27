/** ESTRUTURA DE REPETIÇÃO
**
*WHILE
*INDICADA PARA QUANDO NÃO TEMOS UMA QUANTIDADE DETERMINADA DE EXECUÇÕES.
*CHAMAMOS CADA EXECUÇÃO DE ITERAÇÃO
*EXECUTA O TESTE ANTES DE CADA ITERAÇÃO
*PODEMOS EXECUTAR 0 OU N VEZES

*SINTAXE
while (condição) {
    // comandos
}
*/

/** 
 * CARACTERÍSTICAS DA CONDIÇÃO
 * Precisa ser uma expressão lógica
 * Precisa grarantir um critério de parada
*/

/**
 * Exemplos
 * Faça um algoritmo que escreva 5 números inteiros aleatórios entre 0 e 10
 */

let contador = 0

while(contador < 5) {
    console.log(Math.round(Math.random() * 10))
    contador = contador + 1
}