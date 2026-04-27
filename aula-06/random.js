const n1 = Math.round(Math.random() * 100) / 10
const n2 = Math.round(Math.random() * 100) / 10
const n3 = Math.round(Math.random() * 100) / 10

const media = (n1 + n2 + n3) / 3

if (media >= 7) {
    console.log(`${media} Aprovado`)
} else {
    console.log(`${media} Reprovado`)
}