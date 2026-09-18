let nombreEmpleado = "Sebastian";
let horasTrabajadas = 40;
let tarifaHora = 50;

let salarioBruto = horasTrabajadas * tarifaHora;
const impuesto = 0.10 * salarioBruto;
let salarioNeto = salarioBruto - impuesto;

console.log(":::::::: Boleta de pago ::::::");
console.log("Nombre del empleado: ", nombreEmpleado);
console.log("Horas trabajadas: ", horasTrabajadas);
console.log("Tarifa por hora: S/", tarifaHora);
console.log("Salario bruto: S/", salarioBruto);
console.log("Impuesto: S/",  impuesto);
console.log("Salario neto: S/",  salarioNeto);