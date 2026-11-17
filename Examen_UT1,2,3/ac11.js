const prompt = require('prompt-sync')();
let edad = Number(prompt("Cuantos años tienes? "))
let Qentrada = Number(prompt("Cuantos entradas tienes ? "))
let Qdia = Number(prompt("Que dia vas (1-7 Lunes-Domingo) ? "))
let precioBase = Number(12)
let precioF = Number(0)

if (edad >= 12 && Qdia == 3) {
    
    precioF = 6

}