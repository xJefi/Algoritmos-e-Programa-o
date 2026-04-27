//Mudar o código para também mostrar o nome do curso do aluno com a pior nota. O nome do melhor, o curso do pior.

const notas = [7, 8, 5, 6]
const nomes = ['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4']
const cursos = ['curso A', 'Curso B', 'Curso C', 'Curso D']

let posicaoDoMaior = 0, posicaoDoMenor = 0
for (let i = 1; i < notas.length; i++){
    if (notas[i] > notas[posicaoDoMaior]) {
        posicaoDoMaior = i
    } else if (notas [i] < notas[posicaoDoMenor]) {
        posicaoDoMenor = i
    }
}
console.log(nomes[posicaoDoMaior], cursos[posicaoDoMenor])