let velocidad = 100;
 
const montoMulta = 180;
 
let multa = 0;
 
if (velocidad >= 80 && velocidad <= 120) {
    multa = montoMulta;
}
 
console.log("🚗 Velocidad: ", velocidad, " km/h");
console.log("⚠️ Monto de la multa S/: ", multa);
console.log("-----------------------------------------");
