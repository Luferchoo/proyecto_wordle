function description() {
  return "UCB Wordle es un divertido juego de palabras en el que se tiene que adivinar una palabra con 6 intentos en cada intento se mostrará las letras en las que hay coincidencias tanto en forma como posicion";
}
function adivinar(palabra, adivinanza){
  if (palabra === adivinanza) {
    return "EXISTE";
  }
}
export {description, adivinar};
