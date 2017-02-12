// Maak een canvas object om te bewerk
var canvas = document.getElementById("myCanvas");

var context = canvas.getContext("2d");

context.fillStyle = "#090909";
context.font = "40px Trebuchet MS";
//context.fillText("Beweeg mij en ik wordt blij", 10, 10);

var image = new Image();

image.src = 'sad.png';

var x = 200; 
var y = 150;
var speedX = 0;
var speedY = 0;

//context.drawImage(image, x, y, image.width/3, image.height/3);

var interval = setInterval(updateGame, 20);

function update () {
    context.fillText("Van bewegen wordt ik blij!", 63, 60);
    context.drawImage(image, x, y, image.width/3, image.height/3);    
}

function clear () {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function stop () {
    clearInterval(interval);
}

function newPos () {
        x += speedX;
        y += speedY; 
}

function updateGame() {
    clear();
    newPos();
    update();
}

var speed = 3
function move(dir) {
    image.src = "happy.png";
    if (dir == "up") {speedY = -1 * speed; }
    if (dir == "down") {speedY = speed; }
    if (dir == "left") {speedX = -1 * speed; }
    if (dir == "right") {speedX = speed; }
}

function clearmove() {
    image.src = "sad.png";
    speedX = 0; 
    speedY = 0; 
}
