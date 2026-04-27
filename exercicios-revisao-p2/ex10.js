//Calcular a potência de x na y usando sucessivas multiplicações.

let x = 2
let y = 8
let aux = 1

for(let i = 1; i <= y; i++) {
    aux = aux * x
    console.log(aux)
}