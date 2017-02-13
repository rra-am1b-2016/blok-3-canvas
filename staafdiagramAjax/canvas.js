// Plak een handvat op het canvas
var canvas = document.getElementById("myCanvas");

// Maak een context object waarmee je objecten kunt maken
var ctx = canvas.getContext("2d");

// Met een for-loop maak ik nu rectangles
for ( var i = 0; i < 14; i++)
{
   //alert("De waarde van i=" + i);
   var r, g, b;
   r = Math.floor(Math.random() * 255);
   g = Math.floor(Math.random() * 255);
   b = Math.floor(Math.random() * 255);
   var color = "rgb(" + r + ", " + g + ", " + b + ")";
   ctx.fillStyle = color;   
   ctx.fillRect(10 + i * 20, 5 + i * 10, 10, 140 - i * 10);
   
}

