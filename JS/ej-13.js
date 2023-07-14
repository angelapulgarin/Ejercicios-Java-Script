let nombre = prompt("Ingrese su nombre");
let area = prompt("Ingrese su area de trabajo: ");
let antiguedad = prompt("Ingrese su antiguedad en años");

if(antiguedad >= 1 && area === comercial){
    alert(nombre+"Hola, si puedes aplicar al bono")
}else{
    alert("Lo sentimos no puedes aplicar al bono")
}