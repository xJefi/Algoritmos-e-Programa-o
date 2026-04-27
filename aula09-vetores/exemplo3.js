let unicos = []

for (let i = 0; i < notas.length; i++) {
    let j = 0
    for (;notas[i] !== unicos[j] && j < unicos.length; j++); // << esse ; (ponto e vírgula) indica que não existe um bloco a ser executado (por isso não se foi usado as chaves)
    if (j === unicos.length) //a estrutura se chama for de procura, por isso o if não fica dentro, ele fica em baixo.
        unicos.push(notas[i])
}
console.log(unicos)

//ISSO ESTÁ NO EXEMPLO 1