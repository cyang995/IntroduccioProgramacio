const prompt = require('prompt-sync')();
let nomClient = prompt("Como te llamas? : ");
let horesMaObra = prompt("cuantas hora hiciste? : ");
let costPeces = Number(prompt("Cuanto dinero gastaste en piezas? (€) : "));
let contracto = prompt("Tienes contracto de mantenimiento? (si/no) : ");
let urgent = prompt("El servicio es urgente? (si/no) : ");

const maObra = Number(35);


console.log(`Client: ${nomClient}`);
console.log(`Hores de ma d'obra: ${horesMaObra}`);
console.log(`Cost de les peces (€): ${costPeces}€`);
console.log(`Te contracte de manteniment? (si/no): ${contracto}`);
console.log(`El servicio es urgente? (si/no): ${urgent}`);

let FmaObra = maObra * horesMaObra
Number(FmaObra)
console.log(FmaObra)
let descuento = Number(0)
let Surgent = Number(0)

console.log("---PRESSUPOST---");
console.log(`Client: ${nomClient}`);
console.log(`Hores de ma d'obra(${horesMaObra}): ${FmaObra}€ `);
if (contracto === "si") {
    let descuento = Number(FmaObra * 20 / 100);
    console.log(`Desconpe contracte ${-descuento}€`);
}
else if (contracto === "no") {
    console.log(`Desconpe contracte ${descuento} €`);

} else {
    console.log("Escribe bien")
}
console.log(`Peces: ${costPeces} €`);
if (urgent === "si") {
    let Surgent = Number(15)
    console.log(`Recarrec urgencia: ${Surgent}`)
}
else if (urgent === "no") {
    console.log(`Recarrec urgencia: ${Surgent}`)
}
else {
    console.log("Escribe bien")
}
let TOTsuma = Number(FmaObra + costPeces + Surgent);
let baseImposable = Number(TOTsuma - descuento);
let IVA = Number(baseImposable * 21 /100);
let TOTAL = Number (baseImposable + IVA);

console.log(`Base imposable: ${baseImposable}€`);
console.log(`IVA (21%): ${IVA}`);
console.log(`TOTAL: ${TOTAL}`);

