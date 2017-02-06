/* Na het drukken op een knop
   krijgt een canvaselement van 600px bij 400 px een grijze gradient
*/

// Plaats een handvat op het canvaselement
var canvas = document.getElementById("myCanvas");

// Maak een context-object
var ctx = canvas.getContext("2d");

var btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
   var gradient = ctx.createLinearGradient(0, 0, 0, 400);
   gradient.addColorStop(0, "red");
   gradient.addColorStop(0.3, "blue");
   gradient.addColorStop(0.6, "yellow")
   gradient.addColorStop(1, "green");

   ctx.fillStyle = gradient;
   ctx.fillRect(5, 5, 590, 390);
   
}

var btn_1 = document.getElementsByTagName("button")[1];
btn_1.addEventListener("click", function () {
   var gradientRadial = ctx.createRadialGradient(300, 200, 0, 300, 200, 300);
   gradientRadial.addColorStop(0, "red");
   gradientRadial.addColorStop(0.3, "blue");
   gradientRadial.addColorStop(0.6, "yellow")
   gradientRadial.addColorStop(1, "green");

   ctx.fillStyle = gradientRadial;
   ctx.fillRect(5, 5, 590, 390);
});
