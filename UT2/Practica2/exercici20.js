const prompt = require('prompt-sync')();

let text = prompt("Escribe un texto: ");
console.log("El texto introducido es: " + text);
console.log("El tipo de dato es: " + typeof text);
