//Crie uma função que extrai um vetor menor do vetor recebido por parâmetro. Deve-se dar as posições de quais serão as posições do segundo vetor baseado no primeiro.

const v = []
for (let i = 0; i < 10; i++) {
    v.push(Math.floor(Math.random() * 10))
}

function extrair(vetor,ini,fim) {
    if (ini < 0 || ini >= vetor.length) return;
    if (fim >= vetor.length || fim < 0) return;
    if (ini > fim) return;
    
    const vetor2 = []
    for(i = ini; i <= fim; i++) {
        vetor2.push(vetor[i])
    }
    return vetor2
}
console.log(v)
console.log(extrair(v, 3, 6))