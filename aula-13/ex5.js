let soma = 0
for (let i = 1; i <= 20; i++) {
    soma += i
    if (soma > 3) {
        break
    }
}
console.log(soma)