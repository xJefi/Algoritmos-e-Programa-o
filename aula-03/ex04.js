//4 - Faça um algoritmo que leia as duas primeiras notas de um aluno e calcule qual o valor mínimo da terceira nota para que este aluno seja aprovado considerando média 7.

let n1 = 7;
let n2 = 6;
let media = 7;

let num3 = (media * 3) - n1 - n2;

//let soma = nota1 + nota2 + nota3;
//let media = (n1 + n2 + n3) / 3;
//7 * 3 = n1 + n2 + n3;
//n3 = 21 - n1 - n2;

console.log(`Dado as notas ${n1} e ${n2}, a nota necessária para que o aluno seja aprovado (média 7) é ${num3}.`);