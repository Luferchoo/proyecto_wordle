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
    let suma_coincidencias = " Coincidencias: ";
    let suma_posicion = " Posicion: "
    let suma = "";
    for (let indice = 0; indice < palabra.length; indice++) {
        if (palabra.indexOf(adivinanza[indice]) !== -1) {
          if (palabra.search(adivinanza[indice]) === indice) {
            suma_posicion += adivinanza[indice];
          }
          else{
            suma_coincidencias += adivinanza[indice];
          }
            
        }
    }
    suma = suma_coincidencias + suma_posicion;
    comparacion = "NO " + comparacion + suma;
  }
  return comparacion;
}

function adivinar(palabra, adivinanza){
  let comparativa = "GANASTE";
  comparativa = comparativa_palabras(palabra,adivinanza,comparativa);
  comparativa = adivinanza_longitud(palabra,adivinanza,comparativa);
  comparativa = adivinanza_vacia(adivinanza,comparativa);

  return comparativa;
}
export {description, adivinar};
