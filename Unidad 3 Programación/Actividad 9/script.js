function factorial() {
    let numero =(document.getElementById("numero").value);
    if (numero < 0) {
        alert("Error: El número ingresado no es válido.");
        return;
    }
    let resultado = 1;
    let iteracion = 1;
    console.log("Calculando el factorial de", numero, "...");
    while (iteracion <= numero) {
        resultado *= iteracion;
        console.log("Iteración", iteracion, ":", resultado);
        iteracion++;
    }
    document.getElementById("resultado").innerHTML = "El factorial de " + numero + " es: " + resultado;
}