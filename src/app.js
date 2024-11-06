/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  let suit = ["♥️", "♠️", "♣️", "♦️"];
  let num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let randomSuit = Math.floor(Math.random() * suit.length);
  let randomNum = Math.floor(Math.random() * num.length);

  document.querySelector("#simbol").innerHTML = suit[randomSuit];
  document.querySelector("#card").innerHTML = num[randomNum];
  document.querySelector("#simbol2").innerHTML = suit[randomSuit];

  // Función para recargar la página cada 10 segundos
  setInterval(function() {
    location.reload();
  }, 10000); // 10000 milisegundos = 10 segundos
};
