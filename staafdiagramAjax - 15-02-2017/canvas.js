var data = [{"id": 1,
             "name": "Arjan de Ruijter",
             "numberOfContacts": 100},
            {"id": 2,
             "name": "Bert de Vries",
             "numberOfContacts": 10},
            {"id": 3,
             "name": "Simeon Breedveld",
             "numberOfContacts": 120},
            {"id": 4,
             "name": "Anke Koerts",
             "numberOfContacts": 160},
            {"id": 5,
             "name": "Dinand Woest",
             "numberOfContacts": 320},
            {"id": 6,
             "name": "Serre van Amersfoort",
             "numberOfContacts": 234},
            {"id": 7,
             "name": "Daan de Bok",
             "numberOfContacts": 67},
            {"id": 8,
             "name": "Wilco Dunner",
             "numberOfContacts": 280},
            {"id": 9,
             "name": "Bas de Bakker",
             "numberOfContacts": 330},
             {"id": 10,
             "name": "Arie van Ravenzwaai",
             "numberOfContacts": 120}];

// Sorteer je array op veld numberOfContacts
data.sort(function (a, b) {
   return a.numberOfContacts - b.numberOfContacts;
});

// De lengte van het array data kun je opvragen met de property length
var arrayLength = data.length;

//alert(data[9].numberOfContacts);

// Plak een handvat op het canvas
var canvas = document.getElementById("myCanvas");

// Maak een context object waarmee je objecten kunt maken
var ctx = canvas.getContext("2d");

function drawGraph () {

   // Teken de staafdiagrammen
   for ( var i = 0; i < arrayLength; i++)
   {
      //alert("De waarde van i=" + i);
      ctx.beginPath();
      var r, g, b;
      r = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      b = Math.floor(Math.random() * 255);
      var color = "rgb(" + r + ", " + g + ", " + b + ")";
      ctx.fillStyle = color;
      var x = 45 + i * 30;
      var y = 370;
      var dx = 10; 
      var dy = -1 * data[i].numberOfContacts;
      ctx.fillRect(x, y, dx, dy);
      data[i].coordinates = {"x": x,
                             "y": y,
                             "dx": dx,
                             "dy": dy};
      
   }
   

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  canvas.addEventListener('mousemove', function(evt) {
    
    var mousePos = getMousePos(canvas, evt);
    console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
    
    for ( var i = 0; i < data.length; i++ ) {
      if (mousePos.x > data[i].coordinates.x && 
          mousePos.x < (data[i].coordinates.x + data[i].coordinates.dx) && 
          mousePos.y < data[i].coordinates.y && 
          mousePos.y > (data[i].coordinates.y + data[i].coordinates.dy)) {
            //alert("Mijn naam is: " + data[i].name);
            //var node = document.createElement("p");
            //var textNode = document.createTextNode("id: " + data[i].id);
            //var textNode = document.createTextNode("Naam: " + data[i].name);
            //var textNode = document.createTextNode("Aantal Contacten: " + data[i].numberOfContacts);
            //node.appendChild(textNode);
            //document.getElementById("infoText").appendChild(node);
            modal.style.display = "block";
            document.getElementById("test").innerHTML = "id: " + data[i].id + "<br>" +
                                                        "Naam: " + data[i].name + "<br>" +
                                                        "Aantal Contacten: " + data[i].numberOfContacts;
            console.log(document.getElementById("test").innerHTML);
            break;
      }      
      modal.style.display = "none"; 
    }
  }, false);

   ctx.beginPath();
   // x-as tekenen 
      ctx.strokeStyle = "grey";
      ctx.lineWidth = 3;
      ctx.moveTo(15, 370 )
      ctx.lineTo(550, 370);
      ctx.stroke();
   ctx.closePath();


   ctx.beginPath();
   // y-as tekenen
      ctx.strokeStyle = "grey";
      ctx.moveTo(35, 30 )
      ctx.lineTo(35, 380);
      ctx.lineWidth = 3;
      ctx.stroke();
   ctx.closePath();

   // Schrijf de text langs de x-as
   ctx.fillStyle = "#090909";
   ctx.font = "14px Trebuchet MS";
   ctx.fillText("Leerlingen ->", 400, 390);

   // Schrijf de text langs de y-as
   ctx.save();
   ctx.translate(20, 200);
   ctx.rotate(-Math.PI/2);
   ctx.fillStyle = "#090909";
   ctx.font = "14px Trebuchet MS";
   ctx.fillText("Aantal geschikte bedrijven ->", 0, 0);
   ctx.restore();
}



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

/* When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
*/

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

drawGraph();



