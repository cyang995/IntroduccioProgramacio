const prompt = require('prompt-sync')();
let importe = Number(prompt("Dime el importe: "));
let socio = prompt("Eres socio? (s/n)")
if (importe >=50 && socio == "s"){
    let descuento = (importe * 0,15);
    console.log(descuento)
    console.log(importe-descuento)
}else if (importe >=50 && socio == "n"){
    let descuento = (importe * 0,15);
    console.log(descuento)
    console.log(importe-descuento)