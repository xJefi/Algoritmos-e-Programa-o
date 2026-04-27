//fazer a soma de todos os números pares de 1 até 10.

let soma = 0

for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    soma += i
    console.log(i)
}
console.log(soma)