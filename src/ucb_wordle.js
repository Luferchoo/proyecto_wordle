function description() {
  return "UCB Wordle es un divertido juego de palabras en el que se tiene que adivinar una palabra con 6 intentos en cada intento se mostrará las letras en las que hay coincidencias tanto en forma como posicion";
}
function adivinar(palabra, adivinanza){
  let comparativa = "EXISTE";
  if (palabra != adivinanza) {
    comparativa = "NO " + comparativa;
  }
  if (adivinanza === "") {
    comparativa = "Ingrese una palabra para jugar";
  }
  return comparativa;
}
export {description, adivinar};
