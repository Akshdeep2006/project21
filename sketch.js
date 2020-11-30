var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 70, 20);
  wall=createSprite(1500,200,thickness,height/2);
  bullet.shapeColor="white";
  wall.shapecolor="80,80,80";
  
}

function draw() {
  background(0);  
  
  bullet.velocityX=speed;
  bullet.collide(wall);
  
  drawSprites();
  if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


if(damage>10)
{
wall.shapeColor="red";
}

if(damage<10)

{
  wall.shapeColor="green";
}
}
console.log(damage);
}
function hasCollided(bullet,wall){
   bulletRightEdge=bullet.x+bullet.width;
   wallLeftEdge=wall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true
   }
   return false;
}