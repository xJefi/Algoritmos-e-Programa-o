//Calcular a potência de x na y usando sucessivas multiplicações.

let x = Math.ceil(Math.random()*10)
let y = Math.ceil(Math.random()*10)
//let pot = 1
let aux = x

for(let i = y; i > 1; i--) {
    x = x * aux
    //pot = x
}
console.log(`A potência de ${aux} na ${y} é igual a: ${x}.`)