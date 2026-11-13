const prompt = require('prompt-sync')();
let num = Number(prompt("Dime un numero de 0-10:  "))
if (num < 0 || num > 10) {
    console.log("ERROR")
}
else if (num < 5) {
    console.log("Suspenso");
}
else if (num >= 5 && num < 7) {
    console.log("Aprobado")
} else if (num >= 7 && num < 9) {
    console.log("Notable")
}
else {
    console.log("Sobresaliente")
}