//Crie um programa que lê o conceito de um aluno e imprime seu significado, de acordo com a tabela abaixo:
/*
A - Excelente
B - Ótimo
C - Bom
D - Regular
E - Ruim
F - Nos vemos de novo ano que vem...
*/

const conceito = "B"

switch (conceito) {
    case "A":
        console.log("Excelente!")
        break
    case "B":
        console.log("Ótimo!")
        break
    case "C":
        console.log("Bom.")
        break
    case "D":
        console.log("Regular.")
        break
    case "E":
        console.log("Ruim.")
        break
    case "F":
        console.log("Nos vemos no ano que vem...")
        break
    default:
        console.log("Digite um conceito válido.")
}