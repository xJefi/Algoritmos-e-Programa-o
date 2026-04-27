//Entre com a nota de um aluno que ficou abaixo da média e calcule quanto o aluno precisa tirar no exame final. Sabendo que a média semestral tem peso 6 e a nota
//do exame tem peso 4. Para aprovação a média final precisa ser igual ou superior a 5.
//nota vezes 6. 50 menos o resultado. resultado vezes 4.

function mediaExame(nota) {
    if (nota >= 7) return "Aprovado."
    if(nota < 1.7) return "Reprovado."
    return (50 - nota * 6) / 4
}

console.log(mediaExame(6))