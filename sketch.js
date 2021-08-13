var movingRect,fixedRect;

function setup() { 
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 50, 40);
  fixedRect = createSprite(400,200,80,30);
  fixedRect.debug = true;
  movingRect.debug = true;
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
} 
function draw() {
  background(0,0,0);
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  console.log(movingRect.x - fixedRect.x); 
  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{ 
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  drawSprites(); 
}

