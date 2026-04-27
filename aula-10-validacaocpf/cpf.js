//11 dígitos numéricos
//Os 2 últimos dígitos são digitos verificadores

//Não pode conter todos os dígitos iguais (ex: "111.111.111-11").

const cpf = []
let soma = 0

for (let i = 0; i < 9; i++) {
    cpf.push(Math.ceil(Math.random() * 9))
}
console.log(cpf)

for (let i = 0; i < 9; i++) {
    soma += cpf[i] * (10 - i)
    console.log(`Multiplicação ${cpf[i]} * ${10 - i}:`, cpf[i] * (10 - i))
}
console.log("Soma dos produtos:", soma)

//let total = (soma * 10) / 11
//console.log("Total", total)

let digito1 = (soma * 10) % 11
//console.log(digito1)

if (digito1 === 10 || digito1 === 11) {
    console.log("O primeiro Dígito é: 0")
    cpf[cpf.length] = 0
} else {
    console.log("Primeiro Dígito:", digito1)
    cpf[cpf.length] = digito1
}

let soma2 = 0

for (let i = 0; i < 10; i++){
    //cpf.push[digito1]
    soma2 += cpf[i] * (11 - i)
    console.log(`Multiplicação ${cpf[i]} * ${11 - i}:`, cpf[i] * (11 - i))
}
console.log("Soma dos produtos:", soma)

//let total2 = (soma2 * 10) / 11
//console.log("Total", total2)

let digito2 = (soma2 * 10) % 11
//console.log(digito2)

if (digito2 === 10 || digito2 === 11) {
    console.log("O Segundo Dígito é: 0")
    cpf[cpf.length] = 0
} else {
    console.log("Segundo Dígito:", digito2)
    cpf[cpf.length] = digito2
}

console.log("O cpf completo é:", cpf)

//Verificar se o 1 é igual ao 2 e sucessivamente.

let contador = 0
for(let i = 0; i <= cpf.length; i++) {
    if(cpf[0] === cpf[i])
    contador ++
}

if (contador === cpf.length)
    console.log("CPF INVÁLIDO.")