const prompt = require('prompt-sync')();
let precio = Number(prompt ("cuanto vale el producto?"));
let canUnidad = Number(prompt ("cuantos cantidades?"));
let subtotal = (precio*canUnidad);
let IVA = (subtotal*0.21); // IVA hay que multiplicar 
let PrecioTotal = (subtotal+IVA)
console.log(PrecioTotal)