//gerar um número aleatório até o número ser 5 utilizando o "do while".

let n
do {
    n = Math.ceil(Math.random() * 10)
    console.log(n)
} while (n !== 5)


/*
//O mesmo com while.

let n = Math.ceil(Math.random() * 10)
console.log(n)
while (n !== 5) {
    n = Math.ceil(Math.random() * 10)
    console.log(n)
}

//O mesmo com for

for(let n = 0;n!==5;) {
    n = Math.ceil(Math.random() * 10)
    console.log(n)
}
*/