const prompt = require('prompt-sync')();
let edad = Number(prompt("Cuantos años tienes: "));
let permiso = prompt("Tienes autorizacion de tus padres? (Resonde s/n)");
if (edad >= 18) {
    console.log("Acceso permitido")
} else if (edad >= 16 && permiso == "s") {
    console.log("Acceso permitido")
} else if (edad >= 16 && permiso == "n") {
    console.log("Acceso NO permitido")
}
else if (edad < 16) {
    console.log("Acceso NO permitido")
} else {
    console.log("ERROR")
}