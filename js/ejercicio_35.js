let numero = 46;
 
// Validar que el número esté entre 10 y 99
if (numero >= 10 && numero <= 99) {
 
    let primeraCifra = Math.floor(numero / 10);
    let segundaCifra = numero % 10;
 
    let sumaCifras = primeraCifra + segundaCifra;
 
    console.log("🔢 Número: ", numero);
    console.log("1️⃣ Primera cifra: ", primeraCifra);
    console.log("2️⃣ Segunda cifra: ", segundaCifra);
    console.log("➕ Suma de cifras: ", sumaCifras);
 
    if (segundaCifra == 6) {
        let terceraParte = segundaCifra / 3;
 
        console.log("➗ Tercera parte de la segunda cifra: ", terceraParte);
 
    } else if (segundaCifra % 2 != 0) {
        let quintaParte = segundaCifra / 5;
 
        console.log("➗ Quinta parte de la segunda cifra: ", quintaParte);
    }
 
} else {
    console.log("❌ El número debe estar entre 10 y 99");
}
console.log("-----------------------------------------");