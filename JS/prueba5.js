//En este ejemplo el usuario entrará dos números. 
//Debe devvolver la diferencia entre el mayor y el menor

let num1 = parseInt (prompt ("ingres el primer nùmero"));
let num2 = parseInt (prompt ("ingrese el segundo nùmero"));


if (num1 > num2) {
    alert (num1 - num2);
} else {
    alert(num2-num1);
}
