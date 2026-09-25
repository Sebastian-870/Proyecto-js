
<?php
//FASE DE ENTRADA:DECLARCIÓN DE VARIABLES Y PREGUNTAS
$trabajador = "Sebastian";
$sueldoBasico = 2000;
$tieneHijos = true;
$rmv = 1025;
$porcentajeONP = 0.13;

// FASE DE PROCESO: ES LA LÓGICA DEL PROGRAMA
$asignacionFamiliar = $tieneHijos ? ($rmv * 0.10) : 0;
$totalIngresos = $sueldoBasico + $asignacionFamiliar;
$descuentoONP = $totalIngresos * $porcentajeONP;
$sueldoNeto = $totalIngresos - $descuentoONP;

//FASE DE SALIDA: IMPRESIÓN DE RESULTADOS.
echo "Trabajador: " . $trabajador . "<br>";
echo "-------------------------------------------------------------------------" . "<br>";
echo "Sueldo básico: S/ " . $sueldoBasico . "<br>";
echo "Asignación Familiar: S/ " . $asignacionFamiliar . "<br>";
echo "-------------------------------------------------------------------------" . "<br>";
echo "Total ingresos: S/ " . $totalIngresos . "<br>";
echo "Descuento ONP (13%): S/ " . $descuentoONP . "<br>";
echo "-------------------------------------------------------------------------" . "<br>";
echo "Sueldo neto a cobrar es: S/ " . $sueldoNeto . "<br>";

?>
