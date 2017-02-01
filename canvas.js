// Plak een handvat op het canvas
var canvas = document.getElementById("myCanvas");

// Maak een context object waarmee je objecten kunt maken
var ctx = canvas.getContext("2d");

// Geef je rectangle een kleurtje
ctx.fillStyle = "rgb(204, 255, 153)";

// Maak een rectangle
ctx.fillRect(10, 5, 10, 140);

