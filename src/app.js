/* eslint-disable */

window.onload = function() {
  //write your code here
  function generateRandomCard() {
    const suits = ["♥️", "♠️", "♣️", "♦️"];
    const num = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomNum = num[Math.floor(Math.random() * num.length)];

    return `${randomSuit} ${randomNum}`;
  }

  function viewRandomCard() {
    const elementCard = document.getElementById("card");
    elementCard.textContent = generateRandomCard();
  }

  window.addEventListener("load", viewRandomCard);
};
