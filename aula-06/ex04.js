//Escreva um algoritmo que diga se 2 números distintos são amigos. Números amigos são dois números que estão ligados um ao outro por uma 
//propriedade especial: cada um deles é a soma dos divisores do outro.

let n1 = Math.round(Math.random() * 100)
let n2 = Math.round(Math.random() * 100)

let soma1 = 0
let soma2 = 0

let contador = 1
while(contador < n1) {
    if (n1 % contador === 0) soma1 += contador
    contador++
}
contador = 1
while(contador < n2) {
    if (n2 % contador === 0) soma2 += contador
    contador++
}
console.log(n1, n2)
if (n1 === soma2 && n2 === soma1){
    console.log('são números amigos')
}else {
    console.log('não são números amigos')
}