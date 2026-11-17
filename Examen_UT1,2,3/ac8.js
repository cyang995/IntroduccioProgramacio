const prompt = require('prompt-sync')();
let importe = Number(prompt("Dime el importe: "));
let descuento = 0
let socio = prompt("Eres socio? (s/n)")
if (importe >= 50 && socio == "s") {
    descuento = (15);
    console.log(`descuento de ${descuento}`)
    let precioDescuento = importe * descuento / 100;
    Number(precioDescuento);
    console.log(importe - precioDescuento);
} else if (importe >= 50 && socio == "n" && importe >= 100) {
    descuento = (10);
    console.log(`descuento de ${descuento}`)
    let precioDescuento = importe * descuento / 100;
    Number(precioDescuento);
    console.log(importe - precioDescuento);
}
else if (importe < 50 || importe < 100) {
    console.log("No tienes descuento");
    console.log(`pagas ${importe}`);
}
else {
    console.log("INVALIDOS")
}