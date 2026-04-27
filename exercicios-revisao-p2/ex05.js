//Faça uma função que retorne o inverso de uma string

const string = "qualquercoisa"

function inverso (p1) {
    let inv = ""
    for(i = p1.length - 1; i>=0; i--) {
        inv += p1[i]
    }
    return inv
}

console.log(inverso(string))