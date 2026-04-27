//Faça um algoritmo que a partir de um horário (hora, minuto, segundo) e uma quantidade de segundos transcorridos, calcule o segundo horário.

let hora1 = 11;
let minutos1 = 10;
let segundos1 = 6;

let hora1_convertido = hora1 * 3600;
let minutos1_convertido = minutos1 * 60;

let tempo_transcorrido = 4000;

let segundos_horario2 = hora1_convertido + minutos1_convertido + segundos1 + tempo_transcorrido;

let hora2 = segundos_horario2 / 3600;
let resto_hora = segundos_horario2 % 3600;

let minutos2 = resto_hora / 60
let resto_minutos = resto_hora % 60


console.log(`O segundo horário é ${Math.floor(hora2)}h ${Math.floor(minutos2)} minutos e ${Math.floor(resto_minutos)} segundos;`)