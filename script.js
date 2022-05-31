// Ejercicio asincrónico módulo 2 clase 1
edad = parseInt(prompt("Ingresa tu edad: "));
alert("El usuario tiene " + (edad * 365) + " días");
edad_maxima = parseInt(prompt("ingresa tu edad máxima"))
alert("El usuario tendrá " + (edad_maxima * 365) + " días");
const snack_favorito = prompt("Ingresa el nombre de tu snack favorito: ");
const snacks_a_comer = parseInt(prompt("¿Cuántos snacks comes por día?: "));
const snack_totales = snacks_a_comer * edad_maxima * 365;
alert("Necesitas " + snack_totales + " snacks para que te alcancen hasta los " + edad_maxima + " años");
const precio_snack = prompt("¿Cuál es el precio de tu snack favorito?: ");
alert("El total que gastarás en: " + snack_favorito + " es de: " + "$" + (precio_snack * snack_totales) + " pesos")