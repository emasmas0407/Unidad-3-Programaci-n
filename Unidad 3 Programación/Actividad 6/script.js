function comprobar() {
    let numero1;
    numero1 = parseInt(document.getElementById("numero1").value);
    if((numero1%2)==0) {
        document.getElementById("solucion").innerHTML = "El número es par";
    }
    else {
        document.getElementById("solucion").innerHTML = "El número es impar";
    }
}