const prompt = require('prompt-sync')();

let nombre = prompt("como te llamas?");
let edad = prompt("cuantos años tienes?");
edad = Number(edad);
console.log(`Hola ${nombre}!", tienes ${edad} años.`);

console.log("año que viene tendras", edad + 1, "años.");