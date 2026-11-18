const prompt = require('prompt-sync')();
let MbpsC = Number(prompt("la velocidad contractada(Mbps): "));
let MbpsV = Number(prompt("la velocidad mesurada al test(Mbps): "));
let ping = Number(prompt("el ping: "));
let perdua = Number(prompt("La perdua de paquets(%): "));
let porcentaje = (MbpsV / MbpsC) * 100;

if (porcentaje >= 90 && ping < 30 && perdua === "0"){
    console.log(`${porcentaje}% Estat: OPTIMA`)
}
else if (porcentaje >= 70 && porcentaje < 100 && perdua <= "2"){
    console.log(`${porcentaje}% Estat: ACEPTABLE`)
}
else if (ping >200 && perdua > "10"){
    console.log(`${porcentaje}% Estat: CRITICA`)
}
else{
    console.log(`${porcentaje}%  Estat: DEFICIENT`)
}