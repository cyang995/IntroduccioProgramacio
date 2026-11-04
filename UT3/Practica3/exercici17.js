// Cas A
let horaA = 9;
if (horaA < 10 || horaA > 18) {
console.log("Accés denegat");
}
// acceso denegado, ya que la hora es menor que 10

// Cas B
let horaB = 15;
let capDeSetmanaB = false;
if (horaB < 10 || horaB > 18 || capDeSetmanaB) {
console.log("Accés denegat");
}
//Acceso denegado, ya que capDeSetmana es false

// Cas C
let horaC = 17;
let capDeSetmanaC = true;
if (horaC < 10 && horaC > 18 && capDeSetmanaC) {
console.log("Accés denegat");
}

 // acceso permitido ya que todos cumple lo que dice el comando, pero en este caso 
 // no aparece nada por que no hay ningun console.log que diga acceso permitido, 
 // por lo tanto no aparece nada en la consola.