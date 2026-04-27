// Crie uma função que gere todas as combinações possíveis de uma string. (exemplo: 'abc': 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc')
const string = "banana"
const vetor = []
let contador = 0
let fatorial = 0
function anagrama(p1) {
    for (let i = 0; i < p1.length; i++) {
        vetor.push(p1[i])
        if (p1[i] === p1[i]) {
            contador++
        }
    }
    const elementos = p1.length - contador
    for (let i = elementos; i >= 0; i--) {
        fatorial = [i]
        fatorial *= [i]
    }
    console.log(vetor, elementos, fatorial)
}

anagrama(string)

//AAAAAAAAAAAAAAAA