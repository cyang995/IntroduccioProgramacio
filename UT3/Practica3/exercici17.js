// Cas A
let hora = 9;
if (hora < 10 || hora > 18) {
console.log("Accés denegat");
}
// acceso denegado, ya que la hora es menor que 10

// Cas B
let hora = 15;
let capDeSetmana = false;
if (hora < 10 || hora > 18 || capDeSetmana) {
console.log("Accés denegat");
}
//Acceso denegado, ya que capDeSetmana es false

// Cas C
let hora = 17;
let capDeSetmana = true;
if (hora < 10 && hora > 18 && capDeSetmana) {
console.log("Accés denegat");
}

 // acceso permitido ya que todos cumple lo que dice el comando, pero en este caso 
 // no aparece nada por que no hay ningun console.log que diga acceso permitido, 
 // por lo tanto no aparece nada en la consola.