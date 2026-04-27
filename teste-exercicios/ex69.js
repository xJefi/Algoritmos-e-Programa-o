const tipo = "G"
const litros = 20
const valoralc = litros * 0.47
const valorgas = litros * 0.53
const descalc1 = valoralc * 0.03 
const descalc2 = valoralc * 0.05
const descgas1 = valorgas * 0.035
const descgas2 = valorgas * 0.06

if (tipo === "A") {
    if (litros <= 20) {
        console.log(`Tipo de combustível: Álcool. Litros vendidos: ${litros}. Desconto: ${descalc1}. Valor a ser pago: ${valoralc - descalc1}.`)
    } else {
        console.log(`Tipo de combustível: Álcool. Litros vendidos: ${litros}. Desconto: ${descalc2}. Valor a ser pago: ${valoralc - descalc2}.`)
    }
} if (tipo === "G") {
    if (litros <= 15) {
        console.log(`Tipo de combustível: Gasolina. Litros vendidos: ${litros}. Desconto: ${descgas1}. Valor a ser pago: ${valorgas - descgas1}.`)
    } else {
        console.log(`Tipo de combustível: Gasolina. Litros vendidos: ${litros}. Desconto: ${descgas2}. Valor a ser pago: ${valorgas - descgas2}.`)
    }
} else {
    console.log("Insira um tipo de combustível válido.")
}