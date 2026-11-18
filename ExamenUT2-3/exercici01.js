const prompt = require('prompt-sync')();
const nomEmpresa = "NetLlevant";
const any = 2026;
let nomEquip = prompt("Nom de l'equip: ");
let memoriaRAM = Number(prompt("Memoria RAM (GB): "));
let capacitatDisc = Number(prompt("Capacitat del disc (GB): "));
let anyCompra = Number(prompt("Any de compra:  "));
let garantia = (prompt("Esta en garantia? (si/no):  "));

console.log("===NetLlevant INVENTARI===")
console.log(`Equip: ${nomEquip}`)
console.log(`RAM: ${memoriaRAM} (${memoriaRAM * 1024} MB)`)
console.log(`Disc: ${capacitatDisc} (.${memoriaRAM / 1024} TB)`)
console.log(`Antiguitat:(${any - anyCompra} anys)`)
if (garantia === "si") {
    console.log("En garantia: true")
}
else if (garantia === "no") {
    console.log("En garantia: false")
}
else {
    console.log("Escribe bien")
}


console.log("===TIPUS DE DADES===")
console.log(`NomEquip: ${typeof nomEquip}`)
console.log(`NomEquip: ${typeof memoriaRAM}`)
console.log(`NomEquip: ${typeof capacitatDisc}`)
console.log(`NomEquip: ${typeof anyCompra}`)
console.log(`NomEquip: ${typeof garantia}`)