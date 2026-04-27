//Variáveis heterogêneas. Armazenando mais de um tipo dentro de um vetor. Estruturas com mais de um tipo de informação em uma mesma posição, number, string, etc.
//Os vetores precisam ter o mesmo tamanho.

const notas = [7, 8, 5, 6]
const nomes = ['aluno1', 'aluno2', 'aluno3', 'aluno4']

let posicaoDoMaior = 0
//let maior = notas[posicao]
for (let i = 1; i < notas.length; i++){
    if (notas[i] > notas[posicaoDoMaior]) {
        posicaoDoMaior = i
        //maior = notas[posicao]
    }
}
console.log(nomes[posicaoDoMaior])