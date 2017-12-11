$("document").ready(function(){


/* ------- SETUP --------*/
var canvas = document.getElementById("myCanvas");
//Canvas width and height
canvas.width = window.innerWidth;
canvas.height = 753;

//context variable
var c = canvas.getContext("2d");

//var declaration
var contactBtn = document.getElementById("contactBtn");


/*  ----------- Make Canvas Responsive ---------- */
//event listener to resize canvas
function initialize(){
  window.addEventListener("resize", resizeCanvas, false);
}

function resizeCanvas(){
  canvas.width = window.innerWidth;
  //canvas.height = window.innerHeight;
}
initialize();


// Mouse coordinates, made coordinates global to use in .update method
var mouse = {
  x: null,
  y: null,
}

// event listener to track where mouse is on screen
window.addEventListener("mousemove", function(event){
mouse.x = event.x;
mouse.y = event.y;
});



/* ---------- Constructor for all circles--------- */
function Circle(x,y,dx,dy,radius,hoverColor){
   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
   this.radius = radius;
   this.color = Math.floor((Math.random() * 3) + 1);
   console.log((Math.random() * 2) + 1);
   
   this.draw = function(){ 

     c.beginPath();
     c.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
     
     if(this.color == 1 || this.color == 2){
      c.strokeStyle = "rgb(76,252,216)";
     } else{
      c.strokeStyle = "rgb(255,195,73)";
     }
     
    c.lineWidth = 2;
     c.stroke();
}

   //Main update method
   this.update = function(){

/* mouse event to grow/shrink circles */
     if(mouse.x - this.x < 75 && mouse.x - this.x > -75  && mouse.y - this.y < 75 && mouse.y - this.y > -75){
      if(this.radius > 50){
        this.radius -= 3;
      }
} else if(this.radius < 180 && this.y - this.radius > 5 && this.y + this.radius < canvas.height - 5 && this.x - this.radius > 5 && this.x + this.radius < canvas.width - 5){
  this.radius  += 0.5;
} 


   /* Bounce off walls */
      if(this.x + this.radius > canvas.width){
       this.dx  = -this.dx;
      } else if(this.x - this.radius < 0){
        this.dx  = -this.dx;
      }else if(this.y - this.radius < 0){
        this.dy = -this.dy;
      }  else if(this.y + this.radius > canvas.height){
        this.dy = -this.dy;
      } 
        

  /* Add velocty */
      this.x += this.dx;
      this.y += this.dy;

   
      this.draw();
    
   }
 }


/* Array to store circle instances */
var circleArray = [];


/* push random circles into array */
for(var i = 0; i< 18; i++){
  var radius = 10;

  var x = Math.random()*((canvas.width-360) - 360 + 1) + 360;
  var y = Math.random()*((canvas.height-360) - 360 + 1) + 360;
  
  //var dx = (Math.random() - 0.5) *5;
  var dx = (Math.random() * 2.5) - 1;
  var dy = (Math.random() * 2.5) - 1;
  //var dy = (Math.random() - 0.5) *5;
  circleArray.push(new Circle(x,y,dx,dy,radius));
i++

}


/* --------- Main Animation function ---------- */

function animate(){
  requestAnimationFrame(animate);

c.clearRect(0,0,canvas.width, canvas.height);

  for(var x = 0; x<circleArray.length; x++){
      circleArray[x].update();
}
}
 

 //Wait 2 seconds, then fire off animations
setTimeout(function(){
animate();
}, 2000);
});











// May use this later to get more realistics wall bounces
/*
  switch(true){
        case this.x + this.radius > canvas.width && this.radius == 180:
        this.dx = -this.dx;
        break;
        case this.x + this.radius > canvas.width && this.radius < 180 && this.radius > 120:
        this.dx -= 25;
        break;
        case this.x + this.radius > canvas.width && this.radius < 120 && this.radius > 60:
        this.dx -= 60;
        break;
        case this.x + this.radius > canvas.width && this.radius < 60:
        this.dx -= 80;
        break;
        case this.x - this.radius < 0 && this.radius == 180:
        this.dx = -this.dx;
        break;
        case this.x - this.radius < 0 && this.radius < 180 && this.radius > 120:
        this.dx += 25;
        break;
        case this.x - this.radius < 0 && this.radius < 120 && this.radius > 60:
        this.dx += 60;
        break;
        case this.x - this.radius < 0 && this.radius < 60:
        this.dx += 80;
        break;
        case this.y + this.radius > canvas.height && this.radius == 180:
        this.dy = -this.dy;
        break;
        case this.y + this.radius > canvas.height && this.radius < 180 && this.radius > 120:
        this.dy -= 25;
        break;
        case this.y + this.radius > canvas.height && this.radius < 120 && this.radius > 60:
        this.dy -= 60;
        case this.y + this.radius > canvas.height && this.radius < 60:
        this.dy -= 80;
        case this.y - this.radius < 0 && this.radius == 180:
        this.dy = -this.dy;
        break;
        case this.y - this.radius < 0 && this.radius < 180 && this.radius > 120:
        this.dy += 25;
        break;
        case this.y - this.radius < 0 && this.radius < 120 && this.radius > 60:
        this.dy += 60;
        case this.y - this.radius < 0 && this.radius < 60:
        this.dy += 80;
        break;
        case this.dy > 0 && this.radius <=180:
        this.dy = 0.9;
        break;
        case this.dx > 0 && this.radius <= 180:
        this.dx = 0.9;
        break;
        case this.dy < 0 && this.radius <= 180:
        this.dy = -0.9;
        break;
        case this.dx < 0 && this.radius <=180:
        this.dx = -0.9;
        break;
      }
      */
