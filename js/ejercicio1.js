//FASE DE ENTRADA: DECLARACION DE VARIABLES:

const varones = 255;
const mujeres = 184;

//FASE DE PROCESO: LA LOGICA U OPERACIÓN 
const totalPersonas = varones + mujeres;
let porcentajeVarones = varones / totalPersonas * 100;
let porcentajeMujeres = mujeres / totalPersonas * 100;
//FASE DE SALIDA: SE HACE LAS IMPRESIONES EN CONSOLA
console.log("Total de colabordores: " , totalPersonas);
console.log("Porcentaje de varones: " , porcentajeVarones.toFixed(2), "%");
console.log("Porcentaje de mujeres: " , porcentajeMujeres.toFixed(2), "%");
