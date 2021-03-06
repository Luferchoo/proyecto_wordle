import {adivinar, description}  from "./ucb_wordle";


describe("Descripcion", () => {
  it("deberia mostrar una descripcion corta del juego", () => {
    expect(description()).toEqual("UCB Wordle es un divertido juego de palabras en el que se tiene que adivinar una palabra con 6 intentos en cada intento se mostrará las letras en las que hay coincidencias tanto en forma como posicion");
  });
});
describe("adivinar", () => {
  it("deberia verificar si una palabra fue adivinada", () => {
    expect(adivinar("hello","hello")).toEqual("GANASTE");
  });
  it("deberia verificar si una palabra no fue adivinada", () => {
    expect(adivinar("hello","hillo")).toEqual("NO GANASTE Coincidencias: l Posicion: hlo");
  });
  it("No permite ingresar caracteres vacios", () => {
    expect(adivinar("hello","")).toEqual("Ingrese una palabra para jugar");
  });
  it("No permite ingresar palabras de distinto tamaño", () => {
    expect(adivinar("hello","hell")).toEqual("Ingrese una palabra de la misma longitud para jugar");
  });
  it("Muestra coincidencias en caracteres", () => {
    expect(adivinar("mundo","lamer")).toEqual("NO GANASTE Coincidencias: m Posicion: ");
  });
  it("Muestra coincidencias en la posicion de los caracteres", () => {
    expect(adivinar("cerdo","carga")).toEqual("NO GANASTE Coincidencias:  Posicion: cr");
  });
});