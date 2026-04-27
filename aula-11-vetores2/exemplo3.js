//Colocando o mesmo código do exemplo 2:
//Utilizando o objeto "alunos"

const alunos = [
    {nome: 'Aluno 1', nota: 7, curso: 'Curso A'},
    {nome: 'Aluno 2', nota: 8, curso: 'Curso B'},
    {nome: 'Aluno 3', nota: 5, curso: 'Curso C'},
    {nome: 'Aluno 4', nota: 6, curso: 'Curso D'}
]

let posicaoDoMaior = 0, posicaoDoMenor = 0
for (let i = 1; i < alunos.length; i++){
    if (alunos[i].nota > alunos[posicaoDoMaior].nota) {
        posicaoDoMaior = i
    } else if (alunos [i].nota < alunos[posicaoDoMenor].nota) {
        posicaoDoMenor = i
    }
}
console.log(alunos[posicaoDoMaior].nome)
console.log(alunos[posicaoDoMenor].curso)