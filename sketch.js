var bullet;
var wall;
var speed;
var thickness;
var weight;

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


function setup(){
createCanvas(1600,400);

bullet=createSprite(100,200,20,5);
wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);

}




function draw(){
background=blue;


if(collided(bullet,wall)){
bullet.velocityX=0;

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor=color(255,0,0);
}


if(damage<10){

  wall.shapeColor=color(0,255,0);
}
}

bullet.shapeColor="red";
bullet.collide(wall);
bullet.velocityX=speed;
drawSprites();
}



function collided(bullet,wall){

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true;
}

return false;
}







