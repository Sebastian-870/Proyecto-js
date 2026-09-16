// Declaracion de variables y tipos de datos
const nombreProducto = "Laptop Gamer";
let precioOriginal = "4500.99";
const descuento =  15;
let stockDisponible = "5";
let enOferta = "true";

//Calcular el precio con descuento usando operadores
let precioFinal = precioOriginal - precioOriginal * descuento / 100;

// Mostrar informacion del producto
console.log("💎 Producto:", nombreProducto);
console.log("💎 Precio Orignal: S/", precioOriginal);
console.log("💎 Descuento:", descuento, "%");
console.log("💎 Precio Final: S/", precioFinal.toFixed(2));
console.log("💎 Stock Disponible:", stockDisponible);
console.log("💎 En Oferta:", enOferta ? "Sí" : "No");

//Simulador compra y actualizar stock
let cantidadCompra = 2;

//Validar si hay stock suficiente
if (cantidadCompra <= stockDisponible) {
      stockDisponible -= cantidadCompra;
    console.log("✅ Compra realizada con éxito.");
    console.log("📦 Stock Actualizado:", stockDisponible);
} else {
    console.log("❌ No hay suficiente stock disponible."); 
}
