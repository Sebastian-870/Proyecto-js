let edad = parseInt(prompt("Ingrese su edad: "));
let pais = prompt("Ingrese su país: ");

if (edad >= 65 && pais === "peru") {
    console.log("Accede bono");
}else{
    console.log("No accede bono");
}