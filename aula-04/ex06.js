//const codigo = 1
//const quantidade = 5

//sabendo o código e a quantidade, saber quanto ele gastou

/*
*1: Cachorro-quente = R$ 20,00
*2: Xis salada R$ 18,00
*3: Xis salada com ovo R$ 20,00
*4: Refrigerante R$ 8,00
*/

const codigo = 1
const quantidade = 5

//const cachorro_quente = 1 //R$ 20,00
//const xis_salada = 2 //R$ 18,00
//const xis_salada_com_ovo = 3 //R$ 20,00
//const refrigerante = 4 //R$ 8,00                ACHO QUE NAO PRECISA DESSA PARTE

if (codigo === 1) {
    console.log(`Você comprou ${quantidade} cachorro(s) quente(s) e gastou R$` + quantidade * 20.)
} else if (codigo === 2) {
    console.log(`Você comprou ${quantidade} xis salada(s) e gastou R$ ${quantidade * 18}.`)
} else if (codigo === 3) {
    console.log(`Você comprou ${quantidade} xis salada(s) c/ovo e gastou R$ ${quantidade * 20}.`)
} else if (codigo === 4) {
    console.log(`Você comprou ${quantidade} refrigerante(s) e gastou R$ ${quantidade * 8}.`)
} else {
    console.log(`Código inválido.`)
}