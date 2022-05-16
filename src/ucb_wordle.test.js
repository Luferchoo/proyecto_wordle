import {adivinar, description}  from "./ucb_wordle";


describe("Descripcion", () => {
  it("deberia mostrar una descripcion corta del juego", () => {
    expect(description()).toEqual("UCB Wordle es un divertido juego de palabras en el que se tiene que adivinar una palabra con 6 intentos en cada intento se mostrará las letras en las que hay coincidencias tanto en forma como posicion");
  });
});
describe("adivinar", () => {
  it("deberia verificar si una palabra fue adivinada", () => {
    expect(adivinar("hello","hello")).toEqual("EXISTE");
  });
});