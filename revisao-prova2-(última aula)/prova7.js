let v = []
for (let i = 0; i < 10; i++) {
    v.push(Math.ceil(Math.random() * 10))
}
let soma = 0
let menor = v[0]
let maior = v[0]

for(let i = 0; i< 7; i++) {
    soma += v[i]
    if(v[i] < menor) {
        menor = v[i]
    } else if ( v[i] > maior) {
        maior = v[i]
    }
}
console.log(v)
const media = soma / 7
console.log(media, menor, maior)

//ver