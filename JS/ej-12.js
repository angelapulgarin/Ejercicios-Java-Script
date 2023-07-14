let nombre = prompt("Ingesa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");

switch (nombre) {
    case "Angela":
        alert("Angela tiene 20 años");
        break;
    case "Pepa":
        alert("Pepa va mucho a la disco");
        break;
    case "Sara":
        alert("Sara es mi hermanita y tiene 26 años");
        break;
    case "Molly":
        alert("Molly es mi perrita y tiene 1 año");
        break;
    case "Katty":
        alert("Es mi otra perrita y tiene 16 años")
        break;

    default:
        alert("No pudimos validar la info");
        break;
}