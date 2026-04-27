//criar vetor com 20 numeros e filtrar os repetidos

const notas = []

for (let i = 0; i < 20; i++) {
    notas.push(Math.ceil(Math.random() * 10))
}

let unicos = []

for (let i = 0; i < notas.length; i++) {
    let encontrei = false
    for (let j = 0; j < unicos.length; j++) {
        if (notas[i] === unicos[j]) {
            encontrei = true
        }
    }
    if (!encontrei) {
        unicos.push(notas[i])
    }
}
console.log(notas)
console.log(unicos)

//ISSO ESTÁ NO EXEMPLO 1