//3 - Contar a quantidade de números múltiplos de 7 entre 1 e 100;

let contador = 0
for(let i = 1;i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(i)
        contador++
    }
}
console.log(`Existem ${contador} números múltiplos de 7 entre 1 e 100.`)