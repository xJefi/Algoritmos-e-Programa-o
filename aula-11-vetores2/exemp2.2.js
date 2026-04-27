//mostrar o nome do melhor, o curso do pior.

const notas = [7, 8, 5, 6]
const nomes = ['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4']
const cursos = ['curso A', 'Curso B', 'Curso C', 'Curso D']

let maiornota = 0
let menornota = 0

for(let i = 1; i < notas.length; i++) {
    if(notas[i] > notas[maiornota]) {
        maiornota = i
    }
    if(notas[i] < notas[menornota]) {
        menornota = i
    }
}

console.log(`Nome do aluno com a melhor nota: ${nomes[maiornota]}. Nome do curso do aluno com a pior nota: ${cursos[menornota]}.`)