import description from "./ucb_wordle.js";

describe("Descripcion", () => {
  it("deberia mostrar una descripcion corta del juego", () => {
    expect(description()).toEqual("UCB Wordle es un divertido juego de palabras en el que se tiene que adivinar una palabra con 6 intentos en cada intento se mostrará las letras en las que hay coincidencias tanto en forma como posicion");
  });
});
