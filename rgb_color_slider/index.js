const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const sliders = document.querySelectorAll(".wrapper input[type='range']");
const result = document.querySelector(".result input");
const copyBtn = document.getElementById("copy-btn");

function generateColor() {
  let redColorValue = red.value;
  let greenColorValue = green.value;
  let blueColorValue = blue.value;

  let finalColor = `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})`;

  result.value = finalColor;
  document.body.style.backgroundColor = finalColor;
}

function copyColor() {
  result.select();
  document.execCommand("copy");

  copyBtn.innerText = "Copied!";
  setTimeout(() => {
    copyBtn.innerText = "Copy Color Code";
  }, 1000);
}

sliders.forEach((inp) => {
  inp.addEventListener("input", generateColor);
});
window.addEventListener("load", generateColor);
copyBtn.addEventListener("click", copyColor);
