//Faça um programa que receba dois números e execute as operações listadas a seguir de acordo com a escolha do usuário:
/*
1 - Média entre os números digitados
2 - Diferença entre os números
3 - Produtos entre os números digitados
4 - Divisão do primeiro pelo segundo
*/

let num1 = 12
let num2 = 10
let escolha = 2

switch (escolha) {
    case 1:
        console.log((num1 + num2) / 2)
        break
    case 2:
        console.log(num1 - num2)
        break
    case 3:
        console.log(num1 * num2)
        break
    case 4:
        console.log(num1 / num2)
}