let soma = 1
let n = 1
let d = 2
for(let i = 1; i < 100; i++) {
    soma += n / d
    n += d
    d += n
}