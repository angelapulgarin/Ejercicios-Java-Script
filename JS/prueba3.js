//En este ejercicio debes pedir dos números enteros y 
//devolver el cociente de dividir el primero entre el segundo, 
//pero si este es cero no debe hacer la división, 
//sino lanzar un mensaje de error


let num1 = prompt ("Ingrese el primer nùmero");
let num2 = prompt ("Ingrese el segundo nùmero");
let divi = num1/num2;

if (num2 === 0) {
    alert("error");
} else {
    alert(divi);
}




