const sal = 1200
const ded1 = sal - 135
const ded2 = sal - 360
const al1 = Math.round(ded1 * 0.15)
const al2 = Math.round(ded2 * 0.275)
//const total = (al1 - ded1) * -1

if (sal <= 900) {
    console.log("Isento.")
} else if (sal < 900 && sal <= 1800) {
    console.log(`Seu salário é ${sal}, seu desconto do IRRF é de R$${al1}.`)
} else {
    console.log(`Seu salário é ${sal}, seu desconto do IRRF é de R$${al2}.`)
}

//console.log(total)