const prompt = require('prompt-sync')();
let num1 = prompt ("Introduce un número: ");
num1 = parseFloat(num1);
let operacion = prompt ("Introduce una operación (+, -, *, /): ");
let num2 = prompt ("Introduce otro número: ");
num2 = parseFloat(num2);

if (operacion == "+") { 
    console.log("El resultado de la suma es: " + (num1 + num2));
}
else if (operacion == "-") {
    console.log("El resultado de la resta es: " + (num1 - num2));
}
else if (operacion == "*") {
    console.log("El resultado de la multiplicación es: " + (num1 * num2));
}
else if (operacion == "/") {
    console.log("El resultado de la división es: " + (num1 / num2));
}
else {
    console.log("Operación no válida.");
}