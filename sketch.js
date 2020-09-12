var bullet,wall,speed,weight, deformation,thickness,damage;

function setup() {
  createCanvas(1200,400);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";
  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor="white";
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness=random(22,83);
  
}

function draw() {
  background(80,80,80);
  deformation=0.5*weight*speed*speed/22500;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  bullet.collide=(wall);  
  if(deformation<100){
    bullet.shapeColor="green";
  }
  else if(deformation>100<180){
    bullet.shapeColor="yellow";
  }
else if(deformation>180){
  bullet.shapeColor="red";
}
  else if(damage=3.68){
    bullet.shapeColor="green";
  }
  else if(damage=12.43){
    bullet.shapeColor="red";
  }
  drawSprites();
}