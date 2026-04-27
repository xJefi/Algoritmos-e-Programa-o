//Gerar, de forma aleatória, a idade de 30 pessoas e indicar quantas são maiores de idade.
let n
let contador = 0
for (let i = 1; i <= 30; i++) {
    n = Math.ceil(Math.random() * 100)
    console.log(n)
    if(n >= 18) {
        contador ++
    }
}
console.log(`${contador} pessoas são maiores de idade.`)