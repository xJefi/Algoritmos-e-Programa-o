//Forma utilizada pelo chat gpt

function palindromo(palavra) {
    let invertida = ""
    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i]
    }
    if (palavra === invertida) {
        console.log("A palavra é um palíndromo")
    } else {
        console.log("A palavra NÃO é um palíndromo")
    }
}

palindromo("ovo")
palindromo("teste")
