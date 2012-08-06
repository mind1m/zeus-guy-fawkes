var width = 650;
var height = 650;
var world = document.getElementById('world');
var w = world.getContext('2d');
world.width = width;
world.height = height;

var drawRect = function () {
    w.fillStyle = 'rgba(255,255,255,0.5)'; //set the color in hexadecimal format
    w.beginPath();  //start to draw
    w.rect(0, 0, width, height); //draw a rectangle
    w.closePath();  //stop to draw
    w.fill(); //fill the rectangle
}
/*
 //define a player
 function player()
 {
 this.x = 0;  //position on the canvas
 this.y = 0;

 this.vx = 0; //vectors
 this.vy = 0;

 this.width = 50; //dimension
 this.heigth = 50;
 }
 myplayer = new player(); //creating a player

 var drawPlayers = function()
 {
 w.fillStyle = 'rgba(255,255,51,1)'; //set the color to yellow
 w.beginPath();  //start to draw
 w.rect(myplayer.x,myplayer.y,myplayer.width, myplayer.heigth); //draw a rectangle
 w.closePath();  //stop to draw
 w.fill(); //fill the rectangle
 }*/




//define a brick
function brick() {
    this.width = 50; //dimension
    this.heigth = 50;
}
myplayer = new brick(); //creating a brick

function drawMap() {

    // Draw 50 blocks.
    for (i = 0; i <= 50; i++) {

        // Make the stars white
        ctx.fillStyle = "white";

        // Give the ship some room.
        if (x < 30 || y < 30) ctx.fillStyle = "black";

        // Draw an individual star.
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    }
}


drawRect();






