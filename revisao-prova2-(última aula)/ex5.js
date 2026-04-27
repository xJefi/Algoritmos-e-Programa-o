//Crie uma função que verifica se o vetor está em ordem crescente e retorna True ou False.

const v = []
for (let i = 0; i < 18; i++) {
    v.push(Math.floor(Math.random() * 30))
}

function verificaOrdemCrescente(v){
    for(let i = 0; i < v.length - 1; i++) {
        if(v[i] > v[i+1]) return false
    }
    return true
}

console.log(v)
console.log(verificaOrdemCrescente(v))