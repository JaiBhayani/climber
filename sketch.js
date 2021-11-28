var jojo, jojoImg, jojoUpImg
var obstacle, obstacles
var rock
var bg, bgImg
var climber, climbers
var ground, inviGround

function preload() {
  bgImg = loadImage("rock wall.png");
  jojoImg = loadAnimation ("boy jojo.png");
  jojoUpImg = loadAnimation ("jojo up final.png");
}

function setup(){
createCanvas(800,1000);
jojo = createSprite(400,950, 30, 30);
jojo.shapeColor = "red"
jojo.addAnimation("standing", jojoImg);
jojo.addAnimation("jumping", jojoUpImg);
jojo.scale = 0.3
//background2 = createSprite(500,400,1000,800);
//background2.velocityY = 2
ground = createSprite(400, 990, 800, 20);
inviGround = createSprite (400, 1000, 800, 10);

obstacles = new Group();
climbers = new Group ();
}


function draw(){
//background("red");
image(bgImg,0,-3*height, 800,4*height)
if (keyDown(UP_ARROW)){
jojo.velocityY = -8;

}
if (keyDown(LEFT_ARROW)){
  jojo.x = jojo.x -5;

  }

if (keyDown(RIGHT_ARROW)){
  jojo.x = jojo.x +5;
  
  }

jojo.velocityY = jojo.velocityY + 0.5;
spawnObstacles();
spawnClimbers();
jojo.collide(inviGround);
drawSprites();
}

 function spawnObstacles(){
  if (frameCount % 60 === 0) {
    obstacles = createSprite(400,0,40,10);
   obstacles.x = Math.round(random(20,700));
   obstacles.velocityY = 3;
   obstacles.shapeColor = "red"

   obstacles.lifetime = 300;
   if(jojo.isTouching(obstacles)){
    jojo.position = (400,950);
    jojo.changeAnimation("jumping",jojoUpImg );
  }
 }
 }
 
 function spawnClimbers(){
  if (frameCount % 60 === 0) {
    climber= createSprite(0,1100,40,10);
   climber.x = Math.round(random(20,700));
   climber.velocityY = -3;
   climber.shapeColor = "green"
   climber.lifetime = 300;
   if(jojo.isTouching(climbers)){
    climbers.velocity = 0;
    jojo.changeAnimation("jumping",jojoUpImg );
  }
  }
 }