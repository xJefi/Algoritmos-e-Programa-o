const salario = 1500

if(salario <= 600) {
    console.log("Isento.")
} else if (salario > 600 && salario <= 1200) {
    console.log("Desconto de 20% no INSS.")
} else if (salario > 1200 && salario <= 2000) {
    console.log("Desconto de 25% no INSS.")
} else {
    console.log("Desconto de 30% no INSS.")
}