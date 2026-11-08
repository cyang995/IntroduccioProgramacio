const prompt = require('prompt-sync')();
let entrada = prompt ("Tienes la entrada? (si/no): ");
if (entrada == "si") {
    let edad = prompt("Introduce tu edad: ");
    edad = Number(edad);
    if (edad >= 18) {
        console.log("Acceso permitido");
    
    }
    else {
        console.log("Acceso denegado")
    }
}
else {
    console.log("escribe bien")
}