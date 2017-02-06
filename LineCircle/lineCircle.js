// Canvas element bij zijn kraag gevat...
var canvas = document.getElementById("myCanvas");

// We maken een context object waarmee we dingen kunnen tekenen
var ctx = canvas.getContext("2d");

canvas.setAttribute("width", "600px");
canvas.setAttribute("height", "400px");


// We gaan een circel tekenen


document.getElementById("btn").onclick = function () {
   ctx.beginPath();
   ctx.fillStyle = "yellow";
   ctx.arc(150, 80, 40, 0, 2 * Math.PI, true);
   ctx.lineWidth = 5;
   ctx.strokeStyle = "red";
   ctx.stroke();
   ctx.fill();
   ctx.closePath();

   ctx.beginPath();
   ctx.fillStyle = "rgb(230, 255, 204)";
   ctx.arc(150, 80, 20, 0, 2 * Math.PI, true);
   ctx.lineWidth = 5;
   ctx.strokeStyle = "red";
   ctx.stroke();
   ctx.fill();
   ctx.closePath();

   ctx.beginPath();   
   ctx.strokeStyle = "grey";
   ctx.moveTo(5, 80)
   ctx.lineTo(550, 80);
   ctx.stroke();
   ctx.closePath();


}
