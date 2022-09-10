var dog,dogImage;
var ground,groundImage,invisibleGround
function preload(){
dogImage=loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png","d6.png","d7.png","d8.png","d9.png","d10.png")
groundImage=loadImage("newg.png");
}
function setup(){
  createCanvas(600,200);
  dog=createSprite(50,160);
  dog.addAnimation("running",dogImage)
  dog.scale=0.2;

  ground=createSprite(300,180,600,20);
  ground.addImage(groundImage);

  invisibleGround=createSprite(300,180,600,10);
  invisibleGround.visible=false;

}
function draw(){
  background("white");
  ground.velocityX=-3;
  if(keyDown("space")&&dog.y>100){
    dog.velocityY=-10;
  }
  dog.velocityY+=0.8;
  if(ground.x<=200){
    ground.x=ground.width/2;
  }
  dog.collide(invisibleGround)
  drawSprites();
}