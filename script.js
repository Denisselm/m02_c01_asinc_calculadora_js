/*tarea asincrónica clase 1 módulo 2, calculadora con javascript*/

const edad = parseInt(prompt('Ingrese su edad'));
const cant_dias = (edad * 365)
const edad_maxima = parseInt(prompt("ingresa la edad máxima que crees que tendrás"))
const edadRestante = edad - edad_maxima
const snack = prompt('¿Cuál es tu snack Favorito?');
const snack_dias = parseInt(prompt('¿Cuántos comes al día?'));
const dias_restantes = (edad_maxima - edad) * 365
const precio = parseInt(prompt('¿Cuál es su precio?'));
const cantidad_snack = (dias_restantes * snack_dias);

alert('Tus' + edadRestante + ' años restantes a tu edad actual, equivalen a ' + cant_dias + ' dias\n' + 'por los que necesitarás tener $ ' + (cantidad_snack * precio) + ' pesos\n Para poder comer ' + cantidad_snack + ' ' + snack + ' por lo que te queda de vida');