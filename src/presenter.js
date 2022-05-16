import {adivinar} from "./ucb_wordle.js";

const texto = document.querySelector("#texto1");
const form = document.querySelector("#wordle-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const adivinanza = String(texto.value);

  div.innerHTML = "<p>" + adivinar("hello", adivinanza) + "</p>";
});
