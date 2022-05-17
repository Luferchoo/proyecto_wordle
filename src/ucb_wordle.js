function description() {
  return "UCB Wordle es un divertido juego de palabras en el que se tiene que adivinar una palabra con 6 intentos en cada intento se mostrará las letras en las que hay coincidencias tanto en forma como posicion";
}
function adivinanza_vacia(adivinanza,comparacion){
  if (adivinanza === "") {
    comparacion = "Ingrese una palabra para jugar";
  }
  return comparacion;
}
function adivinanza_longitud(palabra, adivinanza,comparacion){
  if ( palabra.length != adivinanza.length) {
    comparacion = "Ingrese una palabra de la misma longitud para jugar";
  }
  return comparacion;
}
function comparativa_palabras(palabra, adivinanza,comparacion){
  if (palabra != adivinanza) {
    comparacion = "NO " + comparacion;
  }
  return comparacion;
}
function adivinar(palabra, adivinanza){
  let comparativa = "EXISTE";
  comparativa = comparativa_palabras(palabra,adivinanza,comparativa);
  comparativa = adivinanza_longitud(palabra,adivinanza,comparativa);
  comparativa = adivinanza_vacia(adivinanza,comparativa);
  return comparativa;
}
export {description, adivinar};
