//Calcular o MMC entre dois números.

const n1 = Math.ceil(Math.random() * 10)
const n2 = Math.ceil(Math.random() * 10)
let maior = n1 > n2 ? n1 : n2; //operador ternário (alternativa ao if e else)

for (let i = maior; ; i++) { // o loop continua indefinidamente
    if (i % n1 === 0 && i % n2 === 0) { // verificar se i é divisível por ambos os números
        console.log(`O MMC de ${n1} e ${n2} é ${i}.`)
        break
    }
}