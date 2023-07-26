//Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, 
//para ello el cliente puede pedir vino, cerveza, refresco, agua.
// Si pide un cerveza o vino se le dirige a la barra 
//y si no pues se le dirige a la tienda.


let bebidas = prompt("Ingresa bebida entre vino, cerveza, refresco o agua");

if (bebidas == "cerveza" || bebidas == "vino") {
    alert("dirigete a la barra");
} else {
    alert("dirigete a la tienda")
}