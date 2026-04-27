// crie de forma aleatoria uma estrutura de 10 posiçoes e coloque um numero de acertos aleatorio para 3 provas A B C com numeros entre 0 e 40
let candidatos = []

for(let i = 0; i < 10; i++) {
    candidatos[i] = {
        provaA: Math.ceil(Math.random()*40),
        provaB: Math.ceil(Math.random()*40),
        provaC: Math.ceil(Math.random()*40)
    }
}
console.log(candidatos)

// crie uma função que verifica quantos candidatos tiveram somatorio das 3 notas superior a 75 acertos
function acima75 (candidatos) {
    let contador = 0
    let soma = 0
    for(let i = 0; i < candidatos.length; i++) {
        soma = candidatos[i].provaA + candidatos[i].provaB + candidatos[i].provaC
        console.log(soma)
        if (soma > 75) {
            contador++
        }
    }
    return contador
}
let resultado = acima75(candidatos)
console.log(`${resultado} candidatos tiveram o somatório das 3 notas superior a 75 acertos.`)

//  mostre os que acertaram mais de 20 na prova A
let contador2 = 0
for(let i = 0; i < candidatos.length; i++) {
    if (candidatos[i].provaA > 20) {
        contador2++
        console.log(`${candidatos[i].provaA}`)
    }
}
console.log(`${contador2} pessoas acertaram mais de 20 na prova A.`)

// mostre os que acertaram pelo menos 25 em todas provas
let contador3 = 0
for(let i = 0; i < candidatos.length; i++) {
    if (candidatos[i].provaA >= 25 && candidatos[i].provaB >= 25 && candidatos[i].provaC >= 25) {
        contador3++
        console.log(candidatos[i])
    }
}
console.log(`${contador3} pessoas acertaram pelo menos 25 em todas provas.`)

// mostre os que acertaram mais de 35 em qualquer prova:
let contador4 = 0
for(let i = 0; i < candidatos.length; i++) {
    if (candidatos[i].provaA > 35 || candidatos[i].provaB > 35 || candidatos[i].provaC > 35) {
        contador4++
        console.log(candidatos[i])
    }
}
console.log(`${contador4} pessoas acertaram mais de 35 em qualquer prova.`)