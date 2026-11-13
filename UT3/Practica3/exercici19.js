const prompt = require('prompt-sync')();
let num = prompt("Introdueix un número de 1 a 100: ");
num = Number(num);
if (1 && num<=100 ) {
    console.log("Numero correcto")

}
else {
    console.log("Numero incorrecto")
}