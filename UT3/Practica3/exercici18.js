const prompt = require('prompt-sync')();
let carnet = prompt("Tienes carnet de estudiante? (s/n): ");
if (carnet === "s") {
    let edad = prompt("Introduce tu edad: ");
    if (edad < 18) {
        console.log("Tienes un descuento");
    } else if (edad >= 65) {
        console.log("Tienes un descuento");
    } else {
        console.log("No tienes descuento");
    }
} else {
    console.log("No tienes descuento");
}
