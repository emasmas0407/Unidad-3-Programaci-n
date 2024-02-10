function factorial() {
    let numero = parseInt(document.getElementById("numero1").value, 10);
    let resultado= 1;
    let iteracion= 1;

    while (iteracion <= numero) {
        resultado = resultado * iteracion;
        iteracion= iteracion + 1;
        document.getElementById("solucion").innerHTML = "El factorial de " + numero + " es " + resultado;
    }
}