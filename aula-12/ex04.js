//4- Crie uma função que apresente a tabuada de um número. (Nem sempre uma função vai ter return. Nessa é necessário um console.log dentro da função).

const num = 5

function tabuada(p1) {
    for(let i = 0; i<=10; i++ ) { 
        console.log(`${p1} * ${i} = ${p1 * i}`)
    }   
}
const resultado = tabuada(num)