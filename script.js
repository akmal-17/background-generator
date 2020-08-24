var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

changecolor(); //run initial color scheme

function changecolor(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomise (){
  const randomColor1 = Math.floor(Math.random()*16777215).toString(16); //FROM https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  body.style.background = "linear-gradient(to right, #" + randomColor1 + ", #" + randomColor2 + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changecolor); //callback function, so the function is triggered everytime and not run once
color2.addEventListener("input", changecolor);
random.addEventListener("click", randomise);
