<?php
//FASE DE ENTRADA:DECLARCIÓN DE VARIABLES Y PREGUNTAS
// let producto = "Zapatillas Adidas";

$producto = "Zapatillas Adidas";
// const curso = "lógica de programación";
$precio = 350;
$descuento = 0.08;
$igv = 0.18;

// FASE DE PROCESO: ES LA LÓGICA DEL PROGRAMA 
$precioIGV = $precio * $igv;
$precioDescuento = $precio * $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;

//FASE DE SALIDA: IMPRESIÓN DE RESULTADOS.
//MODO JAVASCRIPT: console.log ("EL PRECIO DEL PRODUCTO ES: " , precio); 
echo "El precio del producto es: " . $precio . "<br>"; 
echo "El IGV es: " . $precioIGV . "<br>"; 
echo "El descuento es: S/ " . $precioDescuento . "<br>";
echo "El precio final es: " . $precioFinal . "<br>";

?>