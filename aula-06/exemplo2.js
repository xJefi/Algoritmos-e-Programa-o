//Gere 10 numeros inteiros aleatorios e apresente a soma entre eles.

let contador = 0
soma = 0

while (contador < 10) {
    const n = Math.round(Math.random() * 10)
    soma = soma + n // soma += n
    contador += 1 // contador++
}
console.log(`A soma é ${soma}.`)
/*
for (let i = 0; i < 10; i++) {
    const n = Math.ceil(Math.random()*10)
    soma = soma + n
    console.log(soma)
}
*/