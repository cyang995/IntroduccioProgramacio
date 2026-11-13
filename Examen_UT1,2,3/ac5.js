const prompt = require('prompt-sync')();
let edad = Number(prompt("cuantos años tienes?"))
if (edad >= 18) {
    console.log("Eres mayor de edad")
}
else if (edad < 18) {
    console.log("Eres menor de edad")
}
else {
    console.log("error")
}
