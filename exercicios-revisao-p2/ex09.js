//Gerar, de forma aleatória, a idade de 30 pessoas e indicar quantas são maiores de idade.

let idade
let contador = 0

for(let i = 1; i <= 30; i++) {
    idade = Math.ceil(Math.random()*80)
    console.log(idade)
    if(idade >= 18) {
        contador++
    }
}
console.log(`${contador} pessoas são maiores de idade.`)