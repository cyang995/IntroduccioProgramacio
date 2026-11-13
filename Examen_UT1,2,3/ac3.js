const prompt = require('prompt-sync')();
let num1 = Number(prompt("Dime el primer número: "));
let num2 = Number(prompt("Dime el segundo número: "));

let suma = (num1+num2);
let resta = (num1-num2);
let multiplicacion = (num1*num2)
let division = (num1/num2);
let resto = (num1%num2);
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(resto);