const prompt = require('prompt-sync')();
const KB = 1024;
const MB = KB * 1024;
const GB = MB * 1024;

let bytes = prompt("Introduce un número de bytes: ");
bytes = Number(bytes);

let kb = bytes / KB;
console.log(`El número de KB es: ${kb.toFixed(2)} KB`);


let mb = bytes / MB;
console.log(`El número de MB es: ${mb.toFixed(2)} MB`);


let gb = bytes / GB;
console.log(`El número de GB es: ${gb.toFixed(2)} GB`);

let gb2 = prompt("Introduce un número de GB: ");
gb2 = Number(gb2);

let bytes2 = gb2 * GB;
console.log(`El número de bytes es: ${bytes2.toFixed(2)} bytes`);
