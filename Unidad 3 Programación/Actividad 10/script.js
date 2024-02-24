function calificar() {
    let alumnos = ["Juan", "Pedro", "María", "Pablo"];
    let notas = [];
    for (let i = 0; i < 4; i++) {
        notas[i] = parseInt(prompt("¿Qué nota le pones a " + alumnos[i] + "?"));
    }
    let resultado = "";
    for (let i = 0; i < 4; i++) {
        resultado += "<p>" + alumnos[i] + ": " + notas[i] + "</p>";
    }
    document.getElementById("resultado").innerHTML = resultado;
}
