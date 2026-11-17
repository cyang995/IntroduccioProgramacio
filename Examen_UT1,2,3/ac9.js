const prompt = require('prompt-sync')();
let numero = Number(prompt("Dime un numero de 1-7: "))
switch (numero) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Mart");
        break;
    case 3:
        console.log("Mier");
        break;
    case 4:
        console.log("JUe");
        break;
    case 5:
        console.log("Vier");
        break;
    case 6:
        console.log("Saba");
        break;
    case 7:
        console.log("Domi");
        break;
    default:
        console.log("QUE DICES")
}