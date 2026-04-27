/*
Sabendo que:
*Aquário (21/jan a 19/fev)
*Peixes (20/fev a 20/mar)
*Áries (21/mar a 20/abr)
*Touro (21/abr a 20/mai)
*Gêmeos (21/mai a 20/jun)
*Câncer (21/jun a 21/jul)
*Leão (22/jul a 22/ago)
*Virgem (23/ago a 22/set)
*Libra (23/set a 22/out)
*Escorpião (23/out a 21/nov)
*Sagitário (22/nov a 21/dez)
*Capricórnio (22/dez a 20/jan)

Crie uma variável com o dia e outra com o mês de aniversário. Escreva o signo da pessoa.
*/

const dia = 5
const mes = 9

if (dia >= 21 && mes === 1 || dia <= 19 && mes === 2){
    console.log (`Seu signo é aquário.`)
} else if (dia >= 20 && mes === 2 || dia <= 20 && mes === 3) {
    console.log (`Seu signo é peixes.`)
} else if (dia >= 21 && mes === 3 || dia <= 20 && mes === 4) {
    console.log (`Seu signo é áries.`)
} else if (dia >= 21 && mes === 4 || dia <= 20 && mes === 5) {
    console.log (`Seu signo é touro.`)
} else if (dia >= 21 && mes === 5 || dia <= 20 && mes === 6) {
    console.log (`Seu signo é gêmeos.`)
} else if (dia >= 21 && mes === 6 || dia <= 21 && mes === 7) {
    console.log (`Seu signo é câncer.`)
} else if (dia >= 22 && mes === 7 || dia <= 22 && mes === 8) {
    console.log (`Seu signo é leão.`)
} else if (dia >= 23 && mes === 8 || dia <= 22 && mes === 9) {
    console.log (`Seu signo é virgem.`)
} else if (dia >= 23 && mes === 9 || dia <= 22 && mes === 10) {
    console.log (`Seu signo é libra.`)
} else if (dia >= 23 && mes === 10 || dia <= 21 && mes === 11) {
    console.log (`Seu signo é escorpião.`)
} else if (dia >= 22 && mes === 11 || dia <= 21 && mes === 12) {
    console.log (`Seu signo é sagitário.`)
} else if (dia >= 22 && mes === 12 || dia <= 20 && mes === 1) {
    console.log (`Seu signo é capricórnio.`)
}