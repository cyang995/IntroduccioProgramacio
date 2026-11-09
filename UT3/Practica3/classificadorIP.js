const prompt = require('prompt-sync')();
console.log("=== CLASSIFICADOR D'ADRECES IP ===")

//parte 2
let octet1 = Number(prompt("Dime el primero octeto: "))
let octet2 = Number(prompt("Dime el segundo octeto: "))
let octet3 = Number(prompt("Dime el tercero octeto: "))
let octet4 = Number(prompt("Dime el quarta octeto: "))
if (octet1 >= 0 && octet1 <=255 && octet2 >= 0 && octet2 <=255 && 
    octet3 >= 0 && octet3 <=255 && octet4 >= 0 && octet4 <=255) {
        console.log("es valida, adreça:" `${octet1} + ${octet2} + ${octet3} + ${octet4}`)

    }
else {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.")
}
