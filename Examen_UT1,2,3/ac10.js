const prompt = require('prompt-sync')();
let num1 = Number(prompt("Dime un numero: "));
let num2 = Number(prompt("Dime otro numero: "));
let operacion = Number(prompt("1-Sumar, 2- restar, 3- multiplicar, 4- dividir:  "));
switch (operacion) {
    case 1:
        let suma = Number(num1+num2)
        console.log(`la suma es ${suma}`)
        break;
    case 2:
        let resta = Number(num1-num2)
        console.log(`la resta es ${resta}`)
        break;
    case 3:
        let multiplicar = Number(num1*num2)
        console.log(`la suma es ${multiplicar}`)
        break;
    case 4:
        let dividir = Number(num1/num2)
        console.log(`la suma es ${dividir}`)
        break;
    default:
        console.log("esta fuera de rango")    

}
