//Escreva um algoritmo que calcule a soma dos dígitos de um número fornecido pelo usuário.
/*
let numero = 231
let n = 10
let soma = 0
let divisao = 0

for(let i = 0; i < 3; i++) {
   numero = numero / n
   n = n * 10
   divisao = Math.floor(numero % 10)
    soma = soma + divisao
    console.log(divisao)
}*/
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

let numero = 231
let soma = 0

while (numero > 0) {
    let digito = numero % 10
    soma += digito
    numero = Math.floor(numero / 10)
    console.log(digito) // opcional, para ver os dígitos
}

console.log("Soma dos dígitos:", soma)
