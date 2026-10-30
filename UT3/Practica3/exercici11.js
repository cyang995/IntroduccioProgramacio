const prompt = require('prompt-sync')();
let mensaje = prompt("Introduce un mensaje: ");
if (mensaje === true) {
    console.log("El mensaje es verdadero");
} else {
    console.log("El mensaje es falso");
}