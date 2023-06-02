var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

const player1 = "images/dice" + randomNumber1 + ".png";
const player2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", player1);
document.getElementsByClassName("img2")[0].setAttribute("src", player2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "&#128081; Draw! &#128081;";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "&#128081; Player 1 Wins! &#128081;";
} else {
  document.querySelector("h1").innerHTML = "&#128081; Player 2 Wins! &#128081;";
}
