//Trocar o maior pelo menor número no vetor.

const v = []
for (let i = 0; i < 10; i++) {
    v.push(Math.floor(Math.random() * 100))
}

let iMaior = iMenor = 0
for(let i = 1; i< v.length; i++){
    if(v[i] < v[iMenor]) iMenor = i
    else if (v[i] > v[iMaior]) iMaior = i
}
console.log(v)
const aux = v[iMenor]
v[iMenor] = v[iMaior]
v[iMaior] = aux
console.log(v)