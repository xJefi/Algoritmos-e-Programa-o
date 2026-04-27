//crie 2 vetores e a partir deles crie um terceiro vetor que seja a intersecção dos 2.

const vetorA = [], vetorB = [], vetorC = []

while(vetorA.length < 10) {
    vetorA.push (Math.ceil(Math.random() * 10))
    vetorB.push (Math.ceil(Math.random() * 10))
}

for (let i = 0; i < vetorA.length; i++) {
    let j = 0
    for(; vetorA[i] !== vetorB[j] && j < vetorB.length; j++);
    if(j !== vetorB.length)
        vetorC.push(vetorA[i])
}
console.log(vetorC)