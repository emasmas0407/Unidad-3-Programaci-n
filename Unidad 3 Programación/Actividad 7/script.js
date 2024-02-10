function comprobar() {
    let numero1;
    numero1 = parseInt(document.getElementById("numero1").value);
    if(numero1<=10) {
        if(numero1>=8) {
            document.getElementById("solucion").innerHTML = "Sobresaliente";
        }
        else if (numero1>=7) {
            document.getElementById("solucion").innerHTML = "Notable";
        }
        else if (numero1==6) {
            document.getElementById("solucion").innerHTML = "Bien";
        }
        else if (numero1==5) {
            document.getElementById("solucion").innerHTML = "Suficiente";
        }
        else {
            document.getElementById("solucion").innerHTML = "Suspenso";
        }
    }
    else {
        document.getElementById("solucion").innerHTML = "La nota que has puesto no es válida";
    }
}