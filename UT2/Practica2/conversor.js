const prompt = require('prompt-sync')();
//constantes
const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;
//parte 2 
console.log("convertir de bytes a KB, MB y GB")
let bytes = prompt("Introduce un número de bytes: ");
bytes = Number(bytes);

let kb = bytes / KB;
console.log(`El número de KB es: ${kb.toFixed(2)} KB`);


let mb = bytes / MB;
console.log(`El número de MB es: ${mb.toFixed(2)} MB`);


let gb = bytes / GB;
console.log(`El número de GB es: ${gb.toFixed(2)} GB`);


//parte3
console.log("convertir GB a bytes")
let gb2 = prompt("Introduce un número de GB: ");
gb2 = Number(gb2);

let bytes2 = gb2 * GB;
console.log(`El número de bytes es: ${bytes2.toFixed(2)} bytes`);

//parte4
console.log("Calcular tiempo de descarga de un archivo")
let gb3 = prompt("Introduce la mida del archivo a descargar en GB: ");
gb3 = Number(gb3);

let velocidad = prompt("Introduce la velocidad de descarga en MB/s: ");
velocidad = Number(velocidad);
//GB a bytes
let bytes3 = gb3 * GB;
let bits3 = bytes3 * 8;

//Mbps a bytes/s
let tiempo = bytes3 / (velocidad * MB);
console.log(`El tiempo de descarga es: ${tiempo.toFixed(2)} segundos`);
console.log(`El tiempo de descarga es: ${(tiempo / 60).toFixed(2)} minutos`);