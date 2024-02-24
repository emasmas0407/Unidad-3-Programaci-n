function calificar() {
    let alumnos = ["Juan", "Pedro", "María", "Pablo"];
    let notas = [];
    let nota;
    for (let i = 0; i < 4; i++) {
        nota = parseInt(prompt("¿Qué nota le pones a " + alumnos[i] + "?"));
        if (nota < 0 || nota > 10) {
            alert("Error: La nota ingresada no es válida.");
            i--;
            continue;
        }
        notas.push(nota);
    }
    let resultado = "";
    for (let i = 0; i < 4; i++) {
        resultado += "<p>" + alumnos[i] + ": " + notas[i] + "</p>";
    }
    document.getElementById("resultado").innerHTML = resultado;
}