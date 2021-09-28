/*Este archivo tiene las funciones para el desarrollo de cotizarServicios*/

console.log (alert("Hola! Comencemos a simular tu presupuesto de Publicidad en Google!"));

const cantidadMeses = parseFloat(prompt("Por cuántos meses querés realizar la publicidad? Recomendamos mínimo 3 meses para notar resultados!"));
const montoMensual = parseFloat(prompt("Cuál es tu presupuesto mensual para que Google muestre tu anuncio?"));

let resultado;

function simuladorPresupuesto(cantidadMeses, montoMensual){
   resultado = cantidadMeses * montoMensual + 5000; 
   return resultado;
}     

simuladorPresupuesto(cantidadMeses , montoMensual);

function mostrar(mensaje) {
    alert("Tu presupuesto mensual aproximado será de:" + " " + "$" + mensaje);
}

mostrar(resultado);
