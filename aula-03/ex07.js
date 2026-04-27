//7 - Faça um algoritmo que leia dois horários (hora, minuto, segundo) e calcule quanto segundos transcorreram entre estes dois horários.

let hora1 = 11;
let minutos1 = 10;
let segundos1 = 9;

let hora2 = 12;
let minutos2 = 2;
let segundos2 = 41;

let hora1_convertido = hora1 * 3600;
let hora2_convertido = hora2 * 3600;

let minutos1_convertido = minutos1 * 60;
let minutos2_convertido = minutos2 * 60;

let primeira_hora = hora1_convertido + minutos1_convertido + segundos1;
let segunda_hora = hora2_convertido + minutos2_convertido + segundos2;

let diferença = segunda_hora - primeira_hora;

console.log(`O primeiro horário é ${hora1}:${hora2} e ${segundos1} segundos e o segundo horário é ${hora2}:${minutos2} e ${segundos2} segundos. ${diferença} segundos transcorreram entre esses dois horários.`);

//console.log(primeira_hora, segunda_hora);