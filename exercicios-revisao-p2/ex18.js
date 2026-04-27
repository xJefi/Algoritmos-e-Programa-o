// crie de forma aleatoria uma estrutura de 10 posiçoes e coloque um numero de acertos aleatorio para 3 provas A B C com numeros entre 0 e 40

let candidatos = []
for (let i = 0; i < 10; i++){
     candidatos[i] ={
        provaA: Math.floor(Math.random() * 40),
        provaB: Math.floor(Math.random() * 40),
        provaC: Math.floor(Math.random() * 40),
     }
}
console.log(candidatos)