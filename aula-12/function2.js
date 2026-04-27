//Exemplos:
//Função que verifica se o número é par.
/*
function ePar(n) {
    if (n % 2 === 0) {
        return true
    } 
    return false           //Não precisa de uma estrutura de else. Pois return é o último elemento da função.
}
*/

//Se a expressão aritmética retorna um valor booleano, pode-se retornar a própria função, não existe a necessidade de fazer uma estrutura com if.
function ePar(n) {
    return n % 2 === 0
}

console.log(ePar(5))
console.log(ePar(50))

//Arrow Function
//const ePar2 = () => {}

const ePar2 = () => n % 2 === 0


//Representando um objeto.
function objeto(n) {
    return {nome: 'Thyago'}
}

//em arrow function
const objeto = () => ({nome: 'Thyago'}) //Precisa usar parênteses quando se representa um objeto, pois o computador não vai saber interpretar que as chaves não representam a função.