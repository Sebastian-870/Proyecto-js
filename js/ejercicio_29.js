let monto = 500;
 
const porcentajeDescuento = 0.18;
 
let descuento = 0;
let montoNeto = monto;
 
if (monto > 300) {
    descuento = monto * porcentajeDescuento;
    montoNeto = monto - descuento;
}
 
console.log("💰 Monto: S/ ", monto);
console.log("🏷️ Descuento (18%) S/: ", descuento);
console.log("💵 Monto neto S/: ", montoNeto);
console.log("-----------------------------------------");
