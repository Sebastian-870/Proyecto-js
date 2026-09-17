let nombreObrero = "Sebastian";
let cantidadPrendas = 100;

const tarifaPrenda = 10;
const porcentajeImpuesto = 0.03;
const porcentajeSeguro = 0.02;
const porcentajeSolidaridad = 0.01;
const porcentajeBonificacion = 0.05;

let sueldoBase = cantidadPrendas * tarifaPrenda;

let impuesto = sueldoBase * porcentajeImpuesto;
let seguro = sueldoBase * porcentajeSeguro;
let solidaridad = sueldoBase * porcentajeSolidaridad;
let bonificacion = sueldoBase * porcentajeBonificacion;

let totalDescuentos = impuesto + seguro + solidaridad;
let sueldoNeto = sueldoBase - totalDescuentos + bonificacion;

console.log("👷 Obrero: ", nombreObrero);
console.log("👕 Cantidad de prendas: ", cantidadPrendas);
console.log("💰 Sueldo base S/ : ", sueldoBase);
console.log("📉 Impuesto (3%) S/ : ", impuesto);
console.log("🏥 Seguro (2%) S/ : ", seguro);
console.log("🤝 Solidaridad (1%) S/ : ", solidaridad);
console.log("🎁 Bonificación (5%) S/ : ", bonificacion);
console.log("💵 Total descuentos S/ : ", totalDescuentos);
console.log("💳 Sueldo neto S/ : ", sueldoNeto);

