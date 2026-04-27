//Faça um algoritmo que a partir de um vetor de 18 elementos, construa uma matriz de 6 linhas e 3 colunas.
//Uma matriz é um vetor dentro de um vetor.

const v = []
for (let i = 0; i < 18; i++) {
    v.push(Math.floor(Math.random() * 30))
}

const matriz = [[],[],[],[],[],[]]
for (let i = 0; i < 18; i++) {
    const linha = Math.floor(i / 3)
    const coluna = i % 3
    matriz[linha][coluna] = v[i]
}

console.log(v)
console.table(matriz)
//console.log(i, Math.floor(i/6), i % 3)