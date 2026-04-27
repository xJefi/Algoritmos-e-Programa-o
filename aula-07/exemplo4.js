//Faça um algoritmo que mostre, do intervalo do número 1 ao 100, quais são múltiplos de 3 mas que não são múltiplos de 5.

for (let i = 0; i <= 100; i++) {
    if (!(i % 3 === 0 && i % 5 !== 0)) continue; //o if foi negado
    console.log(i)
}
