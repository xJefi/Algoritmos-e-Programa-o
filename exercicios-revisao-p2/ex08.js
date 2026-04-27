//Gerar 40 números aleatórios e guardar o maior deles.
let num
let maiornumero = 0

for(let i = 1; i <= 40; i++) {
    num = Math.ceil(Math.random()*100)
    console.log(num)
    if(num > maiornumero) maiornumero = num
}
console.log(`O maior número é ${maiornumero}.`)