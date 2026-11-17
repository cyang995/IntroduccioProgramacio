const prompt = require('prompt-sync')();
let nota = Number(prompt("Dime tu nota: "));
if (nota < 5) {
    console.log("SUSPENSO");
}
else if (nota >= 5 && nota <=6) {
    console.log("APROBADO");
}
else if (nota >= 7 && nota <=8) {
    console.log("NOTABLE");
}
else if (nota >= 9 && nota <=10) {
    console.log("SOBRESALIENTE")
}
else {
    console.log("ERROR")
}