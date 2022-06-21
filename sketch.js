var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    ball.x+=10
  }
  if (keyIsDown(LEFT_ARROW)){
    ball.x-=10
  }
drawSprites()
}




