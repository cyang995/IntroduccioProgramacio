const prompt = require('prompt-sync')();
let tipus = Number(prompt("Que tipus d'incidencia: (1-XARXA/2-HARDAWARE/3-SOFTWARE)"))
let hores = Number(prompt("Les hores que han passat des que es va obrir la incidencia: "))
let empresa = prompt("Eres de la empresa? (si/no): ")
let servei = prompt("El servei del esta aturat? (si/no): ")
let h = Number(0)
switch (tipus) {
    case 1:
        h = Number(4)

        console.log("xarxa")
        break;
    case 2:
        h = Number(24)
        console.log("Taller")

        break;
    case 3:
        h = Number(48)

        console.log("Suport d'aplicacions")

        break;
    default:
        console.log("Tipus d'incidencia no valid")
}
