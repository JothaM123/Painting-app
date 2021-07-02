 var brush;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
   if(keyDown("space")){
   noStroke();
   fill(document.getElementById("color").value);
   brush = ellipse(mouseX, mouseY, 15, 15);
  }

  
 if(keyDown("c")){
  clear();
  background(220);
}

  drawSprites();
}

