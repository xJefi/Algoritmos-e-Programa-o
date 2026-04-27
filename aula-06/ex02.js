//Escreva um algoritmo que gere a sequência de Collatz para um número fornecido pelo usuário. A sequência de Collatz é gerada da seguinte forma: se
//o número for par, divida-o por 2; se for ímpar, multiplique-o por 3 e some 1.

let numero = 20

while(numero > 1){
    console.log(numero)
    if (numero % 2 == 0) {
        numero = numero / 2
        
    } else {
        numero = (numero * 3) + 1
    }
}