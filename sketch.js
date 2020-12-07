var bullet;
var wall,thickness;
var speed, weight;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(23,83)
  bullet = createSprite(50,200,50,10)
  wall = createSprite(1200,200,thickness,height/2)
}

function draw() {
  background("blue");  
  
  bullet.velocityX = speed;
  bullet.shapeColor = "white"
  wall.shapeColor = color(80,80,80)

  if(hasCollided(bullet,wall)){
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
  
  if(damage > 10){
   wall.shapeColor = "green"

  }else{
   wall.shapeColor = "red"

  }
  }
   
 
  
  drawSprites();
}
function hasCollided(lbullet, lwall){
bulletLeftEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x;
if(bulletLeftEdge>=wallLeftEdge){
    return true;

}
  return false;
}