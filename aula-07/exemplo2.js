//interromper imediatamente quando encontrar um número par.
//O "break" antecipa a saída do laço de repetição.
//Utilizar "continue" no lugar de "break", faria o código pular todos os números pares que fossem gerados e gerar apenas os números ímpares até a iteração acabar. Ver exemplo 3.

for (let i = 0; i < 10; i++) {
    let x = Math.ceil(Math.random()* 10)
    console.log(x)
    if (x % 2 === 0) break;
}

