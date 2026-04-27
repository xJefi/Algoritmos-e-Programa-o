//Gerar um número aleatório entre 1 e 100 e apresentar o menor número primo maior que ele.

/*
const n = Math.ceil(Math.random() * 100)
let aux = n + 1
let primo = false

while (!primo) {
    let primo = true

    if (n === 0) {
        primo = false
    } else {
        for (let i = 2; i <= Math.sqrt(aux); i++) {
            if (aux % i === 0) {
                primo = false
                break
            }
        }
    }

    if (primo) {
        primo = true
    } else {
        aux++
    }
}

console.log(`O número sorteado foi ${n}. O menor número primo maior que ele é ${aux}.`)

CÓDIGO TA QUEBRADO SEI LA
*/


// Gerar um número aleatório entre 1 e 100
const n = Math.ceil(Math.random() * 100);

// Começamos a procurar o próximo número após n
let candidato = n + 1;

// Variável de controle: ainda não encontramos um primo
let primoEncontrado = false;

// Loop que continua até achar o próximo número primo
while (!primoEncontrado) {
    // Assumimos que o número é primo (até provar o contrário)
    let primo = true;

    // Números menores ou iguais a 1 não são primos
    if (candidato <= 1) {
        primo = false;
    } else {
        // Verificamos se o número tem algum divisor entre 2 e sua raiz quadrada
        for (let i = 2; i <= Math.sqrt(candidato); i++) {
            // Se for divisível, não é primo
            if (candidato % i === 0) {
                primo = false;
                break; // Podemos parar o loop, já sabemos que não é primo
            }
        }
    }

    // Se achamos um primo, saímos do while
    if (primo) {
        primoEncontrado = true;
    } else {
        // Se não for primo, testamos o próximo número
        candidato++;
    }
}

// Exibimos o resultado
console.log(`O número sorteado foi ${n}. O menor número primo maior que ele é ${candidato}.`);
