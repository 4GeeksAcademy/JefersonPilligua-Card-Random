/* eslint-disable */
import "./style.css";

window.onload = function() {
  let suit = ["♥️", "♠️", "♣️", "♦️"];
  let num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let randomSuit = Math.floor(Math.random() * suit.length);
  let randomNum = Math.floor(Math.random() * num.length);

  let selectedSuit = suit[randomSuit];
  let selectedNum = num[randomNum];

  document.querySelector("#simbol").innerHTML = selectedSuit;
  document.querySelector("#card").innerHTML = selectedNum;
  document.querySelector("#simbol2").innerHTML = selectedSuit;

  // Cambiar color a rojo para corazones y diamantes
  if (selectedSuit === "♥️" || selectedSuit === "♦️") {
    document.querySelector("#simbol").className = "red";
    document.querySelector("#simbol2").className = "red";
  } else {
    document.querySelector("#simbol").className = "black";
    document.querySelector("#simbol2").className = "black";
  }

  // Función para recargar la página cada 10 segundos
  setInterval(function() {
    location.reload();
  }, 10000); // 10000 milisegundos = 10 segundos
};
