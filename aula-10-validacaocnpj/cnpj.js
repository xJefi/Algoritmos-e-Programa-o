//14 dígitos numéricos, onde:
//Os 2 últimos dígitos são dígitos verificadores.

//Não pode conter todos os dígitos iguais.

const cnpj = []
let soma = 0
let soma2 = 0

for (let i = 0; i < 12; i++) {
    cnpj.push(Math.ceil(Math.random() * 9))
}
console.log(cnpj)


for (let i = 0; i < 4; i++) {
    soma += cnpj[i] * (5 - i)
    console.log(`Multiplicação ${cnpj[i]} * ${5 - i}:`, cnpj[i] * (5 - i))
}

for (let i = 0; i < 12; i++) {
    if (i <= 3) continue
    soma2 += cnpj[i] * (13 - i)
    console.log(`Multiplicação ${cnpj[i]} * ${13 - i}:`, cnpj[i] * (13 - i))
}

let somafinal1 = soma + soma2
console.log("Soma dos produtos:", somafinal1)

//let divisao = somafinal1 / 11
let digito1 = somafinal1 % 11
//console.log(digito1)

if (digito1 < 2 ) {
    console.log("O primeiro Dígito é: 0")
    cnpj[cnpj.length] = 0
} else {
    console.log("Primeiro Dígito:", 11 - digito1)
    cnpj[cnpj.length] = 11 - digito1
}

let soma3 = 0
let soma4 = 0

for (let i = 0; i < 5; i++) {
    soma3 += cnpj[i] * (6 - i)
    console.log(`Multiplicação ${cnpj[i]} * ${6 - i}:`, cnpj[i] * (6 - i))
}

for (let i = 0; i < 13; i++) {
    if (i <= 4) continue
    soma4 += cnpj[i] * (14 - i)
    console.log(`Multiplicação ${cnpj[i]} * ${14 - i}:`, cnpj[i] * (14 - i))
}

let somafinal2 = soma3 + soma4
console.log("Soma dos produtos:", somafinal2)

//let divisao2 = somafinal2 / 11
let digito2 = somafinal2 % 11
//console.log(digito2)

if (digito2 < 2 ) {
    console.log("O Segundo Dígito é: 0")
    cnpj[cnpj.length] = 0
} else {
    console.log("Segundo Dígito:", 11 - digito2)
    cnpj[cnpj.length] = 11 - digito2
}

console.log("O cnpj completo é:", cnpj)

//Verificar se os números são iguais.

let contador = 0
for(let i = 0; i <= cnpj.length; i++) {
    if(cnpj[0] === cnpj[i])
    contador ++
}

if (contador === cnpj.length)
    console.log("CNPJ INVÁLIDO.")