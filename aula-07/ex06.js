//6 - Verificar se um número é primo;

/*
let n = Math.ceil(Math.random() * 100)

if (n <= 1) {
    console.log(`O número não é primo.`) // Números menores ou iguais a 1 não são primos
}

for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i === 0)) {
        console.log(`O número ${n} não é primo.`)
        break
    } else {
        console.log(`O número ${n} é primo.`)
    }
}
NÃO CONSEGUI FAZER ESSE. O CÓDIGO ABAIXO É DO CHAT GPT.*/

let n = Math.ceil(Math.random() * 100);
let primo = true;

if (n <= 1) {
    primo = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {   //Se n tiver um divisor diferente de 1 e ele mesmo, pelo menos um divisor estará entre 2 e √n.
        if (n % i === 0) {
            primo = false;
            break;
        }
    }
}

if (primo) {
    console.log(`O número ${n} é primo.`);
} else {
    console.log(`O número ${n} não é primo.`);
}