var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
 car = createSprite(50, 100, 50, 50);
car.shapeColor = "grey";
 wall = createSprite(500,100,60,400/2);
wall.shapeColor = "black";

speed = random(10,50);
weight = random(400,1500);
deformation = random(0,180);

}

function draw() {
  background(255,255,255);  

car.velocityX = speed;
car.weight = weight;

if(speed = 10<=20 ){
  if(deformation = 1<=100 && car.collide(wall)){
    car.shapeColor = ("green");

}
}

if(speed = 20<=40 ){
  if(deformation = 100<180 && car.collide(wall)){
    car.shapeColor = ("yellow");

}
}

if(speed = 40<=50 ){
  if(deformation = 180 && car.collide(wall)){
    car.shapeColor = ("red");

}
}




car.collide(wall);

drawSprites();
}