function calcular() {
    let a, b, c, d, e, f, g, h, i;
   	    a = parseInt(prompt("Introduce el primer número:"));
    	b = parseInt(prompt("Instroduce el segundo número:"));
    	c = a;
        d = b;
        e = a + b;
        f = a - b;
        g = a * b;
        h = a / b;
        i = a % b;
    alert ("\nEl primer número es: " + c + "\nEl segundo número es: " + d + "\nLa suma es: " + e + "\nLa resta es: " + f + "\nEl producto es: " + g + "\nLa división es: " + h + "\nEl resto es: " + i);
}