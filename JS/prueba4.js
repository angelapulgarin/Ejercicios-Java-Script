// Este script pide al usuario que teclee una letra entre A, B, C, D. 
//Si pulsa la letra A en mayúsucla o en minúscula 
//le dará el mensaje de que ha acertado, 
//en caso contrario le dirá que se equivocó.

let letra = prompt ("Ingrese una letra de la A a la D");

if (letra == "a" || letra == "A") {
    alert("es correcto");
} else {
    alert("te equivocaste");
}


