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
  it("deberia verificar si una palabra no fue adivinada", () => {
    expect(adivinar("hello","hillo")).toEqual("NO EXISTE Coincidencias: l");
  });
  it("No permite ingresar caracteres vacios", () => {
    expect(adivinar("hello","")).toEqual("Ingrese una palabra para jugar");
  });
  it("No permite ingresar palabras de distinto tamaño", () => {
    expect(adivinar("hello","hell")).toEqual("Ingrese una palabra de la misma longitud para jugar");
  });
  it("Muestra coincidencias en caracteres", () => {
    expect(adivinar("mundo","lamer")).toEqual("NO EXISTE Coincidencias: m");
  });
});