//Calcular os divisores de um número aleatório entre 1 e 100.

const n = Math.ceil(Math.random() * 100)

for(i = 1;i <= n /*Math.ceil(n/2)*/;i++) {
    if(n % i === 0) {
        console.log(`${i} é divisor de ${n}.`)
    }
}
//console.log(`${n} é divisor de ${n}.`)