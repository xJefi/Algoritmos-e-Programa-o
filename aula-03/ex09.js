//Leia um valor em R$ (considere que é um valor inteiro). Escreva a quantidade mínima de notas ($1, $2, $5, $10, $20, $50 e $100) para representar este valor.

let valor = 671

let nota100 = valor / 100
let r100 = valor % 100
console.log(`${Math.floor(nota100)} nota/s de 100 reais`)

let nota50 = r100 / 50
let r50 = r100 % 50
console.log(`${Math.floor(nota50)} nota/s de 50 reais`)

let nota20 = r50 / 20
let r20 = r50 % 20
console.log(`${Math.floor(nota20)} nota/s de 20 reais`)

let nota10 = r20 / 10
let r10 = r20 % 10
console.log(`${Math.floor(nota10)} nota/s de 10 reais`)

let nota5 = r10 / 5
let r5 = r10 % 5
console.log(`${Math.floor(nota5)} nota/s de 5 reais`)

let nota2 = r5 / 2
let r2 = r5 % 2
console.log(`${Math.floor(nota2)} nota/s de 2 reais`)

let nota1 = r2 / 1
let r1 = r2 % 1
console.log(`${Math.floor(nota1)} nota de 1 real`)