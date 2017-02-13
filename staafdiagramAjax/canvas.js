var data = [{"id": 1,
             "name": "Arjan de Ruijter",
             "numberOfContacts": 100},
            {"id": 2,
             "name": "Bert de Vries",
             "numberOfContacts": 10},
            {"id": 3,
             "name": "Simeon Breedveld",
             "numberOfContacts": 150},
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

// De lengte van het array data kun je opvragen met de property length
var arrayLength = data.length;

alert(data[9].numberOfContacts);

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

