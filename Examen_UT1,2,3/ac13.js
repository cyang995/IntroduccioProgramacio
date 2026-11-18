const prompt = require('prompt-sync')();
let edad = Number(prompt("Dime tu edad:  "));
let mensaje = edad >= 18 ? "Adulto" : "Menor";
console.log(mensaje);