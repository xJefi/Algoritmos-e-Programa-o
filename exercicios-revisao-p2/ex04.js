//Escreva uma função que verifique se uma string é um palíndromo (exemplo: 'arara', 'radar');

const plvr = "radar"

function palindromo(palavra) {
    let invertida = ""
    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i]
    }
    if (palavra === invertida) {
        console.log(`A palavra ${palavra} é um palíndromo.`)
    } else {
        console.log(`A palavra ${palavra} NÃO é um palíndromo.`)
    }
}

palindromo(plvr)
palindromo("ovo")
palindromo("aoooooo")