function factorial() {
    let numero =(document.getElementById("numero").value);
    if (numero < 0) {
        alert("Error: El número ingresado no es válido.");
        return;
    }
    let resultado = 1;
    let iteracion = 1;
    while (iteracion <= numero) {
        resultado *= iteracion;
        iteracion++;
    }
    document.getElementById("resultado").innerHTML = "El factorial de " + numero + " es: " + resultado;
}
