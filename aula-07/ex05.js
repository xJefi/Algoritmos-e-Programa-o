//5 - Calcular o fatorial de um número;
let n = Math.round(Math.random()* 10)
let mult = 1

for (let i = 1; i <= n; i++) {
    mult *= i
}
console.log(`O fatorial de ${n} é ${mult}.`)
/*
let num = 4
let fatorial = 1

for(let i = num; i > 0; i--) {
    fatorial *= i
}
console.log(fatorial)
*/