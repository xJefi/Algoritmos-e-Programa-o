const horas = 160
const horaext = 64
const salbruto = (horas * 10) + (horaext * 15)
const desconto = salbruto * 0.10
const liquido = salbruto - desconto

console.log(`Salário bruto: R$${salbruto}. Salário líquido R$${liquido}.`)