const prompt = require('prompt-sync')();
let gradoCelsius = prompt("Introduce la temperatura en grados Celsius: ");
if (gradoCelsius < 10) {
    console.log("Hace frío");
} else if (gradoCelsius >= 10 && gradoCelsius <= 25) {
    console.log("Temperatura moderada");
} else {
    console.log("Hace calor");
}