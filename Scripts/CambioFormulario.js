var formulario1 = document.getElementById("Parte1");
var formulario2 = document.getElementById("Parte2");
var formulario3 = document.getElementById("Parte3");
var formulario4 = document.getElementById("Parte4");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Next3 = document.getElementById("Next3");
var Back3 = document.getElementById("Back3");

Next1.onclick = function()
{
  formulario1.style.left = "-450px";
  formulario2.style.left = "40px" 
}

Back1.onclick = function()
{
  formulario1.style.left = "40px";
  formulario2.style.left = "450px" 
}

Next2.onclick = function()
{
  formulario2.style.left = "-450px";
  formulario3.style.left = "40px" 
}

Back2.onclick = function()
{
  formulario2.style.left = "40px";
  formulario3.style.left = "450px" 
}

Next3.onclick = function()
{
  formulario3.style.left = "-450px";
  formulario4.style.left = "40px" 
}

Back3.onclick = function()
{
  formulario3.style.left = "40px";
  formulario4.style.left = "450px" 
}

