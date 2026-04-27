//3 - Contar a quantidade de números múltiplos de 7 entre 1 e 100;

for(let i = 0; i<=100; i++) {
    if(!(i % 7 === 0)) continue;
    console.log(i)
}