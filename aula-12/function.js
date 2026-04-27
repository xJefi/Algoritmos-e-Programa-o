const x = 4
const y = 10

function soma(p1, p2){
    const s = p1 + p2
    
    return s  
    //ou apenas return p1 + p2  //return é sempre o comando final da função, portanto, nada depois dele será executado dentro desse bloco.
}

const resultado = soma(x, y); //A função só vai ser executada quando for chamada, ou seja, na linha 8.
//O x é guardado no p1 e o y no p2.                                

console.log(resultado) //O resultado é guardado na variável antes da função ser descartada na memória.

//Parâmetros das funções são valores que só existem dentro das funções e que são alimentados por elementos de fora da função.
//O valor não é definido pela função e sim por quem o chamou.
//A função somente usa espaço de memória quando é executada.


/* p1 e p2 são cópias. Se alterar o p1, o x não vai mudar, a não ser que seja colocado um link (objeto) no lugar do p1.

const n = {x:4, y:10}

function soma (n) {
n.x++
console.log(n)
}
*/