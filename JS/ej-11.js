
let nombre = prompt("Ingesa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");

switch (nombre) {
    case "18":
        alert("Tienes acceso a la disco");
        break;
    case "17":
        alert("Te falta un año para ingresar a la disco");
        break;
          
    default:
        alert("No pudimos validar tu edad");
        break;
}