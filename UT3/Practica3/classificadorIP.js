const prompt = require('prompt-sync')();
console.log("=== CLASSIFICADOR D'ADRECES IP ===")

//parte 2
let octet1 = Number(prompt("Dime el primero octeto: "))
let octet2 = Number(prompt("Dime el segundo octeto: "))
let octet3 = Number(prompt("Dime el tercero octeto: "))
let octet4 = Number(prompt("Dime el quarta octeto: "))
let varida = octet1 >= 0 && octet1 <= 255 && octet2 >= 0 && octet2 <= 255 &&
    octet3 >= 0 && octet3 <= 255 && octet4 >= 0 && octet4 <= 255;
//Parte 3
let classe;
if (varida) {
    console.log(`es valida, adreça ${octet1}.${octet2}.${octet3}.${octet4}`)
    if (octet1 === 0) {
        classe = "Reservada";
    }
    else if (octet1 >= 1 && octet1 <= 126) {
        classe = "A";
    }
    else if (octet1 === 127) {
        classe = "Loopback";
    }
    else if (octet1 >= 128 && octet1 <= 191) {
        classe = "B";
    }
    else if (octet1 >= 192 && octet1 <= 223) {
        classe = "C";
    }
    else if (octet1 >= 224 && octet1 <= 239) {
        classe = "D";
    }
    else if (octet1 >= 240 && octet1 <= 255) {
        classe = "E";
    }
    //parte 5
    if (classe === "A" || classe === "B" || classe === "C") {
        let privadaA = octet1 === 10;
        let privadaB = octet1 === 172 && octet2 >= 16 && octet2 <= 31;
        let privadaC = octet1 === 192 && octet2 === 168;

        let privada = privadaA || privadaB || privadaC;
        console.log(privada ? "Tipo: privada" : "Tipo: publica");
    }
    switch (classe) {
        case "A":
            console.log("Mascara por defecto: 255.0.0.0");
            break;
        case "B":
            console.log("Mascara por defecto: 255.255.0.0");
            break;
        case "C":
            console.log("Mascara por defecto: 255.255.255.0");
            break;
        default:
            console.log("Máscara por defecto: No tiene");


    } 
}
else {
    console.log("Adreça no vàlida: cada octet ha d'estar entre 0 i 255.")
}

console.log(classe)