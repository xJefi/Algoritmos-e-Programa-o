//Faça um algoritmo que a partir de um horário (hora, minuto, segundo) e uma quantidade de segundos transcorridos, calcule o segundo horário.

let hora1 = 11;
let minutos1 = 10;
let segundos1 = 6;

let tempo_transcorrido = 4000;

let hora1_convertido = hora1 * 3600
let minutos1_convertido = minutos1 * 60
let horario_em_segundos1 = hora1_convertido + minutos1_convertido + segundos1

let tempo = horario_em_segundos1 + tempo_transcorrido

let hora2 = Math.floor(tempo / 3600)
let sobra_hora = tempo % 3600

let minutos2 = Math.floor(sobra_hora / 60)
let segundos2 = sobra_hora % 60

console.log(`Considerando que o primeiro horário: ${hora1}h. ${minutos1}min. ${segundos1}seg. e o tempo transcorrido de ${tempo_transcorrido}seg. O segundo horário é: ${hora2}h.
    ${minutos2}min. ${segundos2}seg.`)