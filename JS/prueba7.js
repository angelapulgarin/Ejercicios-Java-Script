
let carritoCompras = parseInt (prompt ("Ingresa el nùmero de articulos que llevas?"));
let valor = parseInt (prompt("ingresa el valor"))
let subTotal = carritoCompras * valor;
let totalEnPesos = subTotal*3950;
let descuento = totalEnPesos * 15/100;
let valorTotal = totalEnPesos - descuento;

if(carritoCompras > 10 && valor > 30) {
    alert("Pagas " + valorTotal);
    
} else {
    alert("no aplica el descuento, entonces pagas " + totalAPagar);
}

