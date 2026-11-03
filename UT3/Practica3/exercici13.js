const prompt = require('prompt-sync')();
let numero = prompt("Introduce un número: ");
if (numero ==1) {
    console.log("Talla XS");    
}
else if (numero ==2) {
    console.log("Talla S");
}
else if (numero ==3) {
    console.log("Talla M");
}
else if (numero ==4) {
    console.log("Talla L");
}
else if (numero ==5) {
    console.log("Talla XL");
}
else {
    console.log("No hay talla disponible.");
}