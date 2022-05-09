let grayButton = document.getElementById("grayButton");
let whiteButton = document.getElementById("whiteButton");
let blueButton = document.getElementById("blueButton");
let yellowButton = document.getElementById("yellowButton");


function switchToGray() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "gray";
  body.style.color = "white";
}
function switchToWhite() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "white";
  body.style.color = "black";
}
function switchToBlue() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "blue";
  body.style.color = "yellow";
}
function switchToYellow() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "yellow";
  body.style.color = "blue";
}


grayButton.addEventListener("click", switchToGray);
whiteButton.addEventListener("click", switchToWhite);
blueButton.addEventListener("click", switchToBlue);
yellowButton.addEventListener("click", switchToYellow);
