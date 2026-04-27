// const n = ?
//f1 - n menor ou igual a 10
//f2 - n maior que 10 e menor igual a 100
//f3 - n maior que 100

const n = 26

if (n <= 10) {
    console.log(`${n} é menor ou igual a 10.`)
} else if (n <= 100) { //Na estrutura else if, não precisa do (n > 10 &&), porque ele já passou no primeiro teste.
    console.log(`${n} é maior que 10 e menor ou igual a 100.`)
} else {
    console.log(`${n} é maior que 100.`)
}