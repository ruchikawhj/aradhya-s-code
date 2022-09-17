var dog,dogImage;
var ground,groundImage,invisibleGround;
var bone,boneImg,boneGroup;
var stone,stoneImg,stoneGroup;
function preload(){
dogImage=loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png","d6.png","d7.png","d8.png","d9.png","d10.png")
groundImage=loadImage("newg.png");
boneImg=loadImage("bone.png");
stoneImg=loadImage("stone.png")
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

  boneGroup=new Group();
  stoneGroup=new Group();
}
function draw(){
  background("black");
  ground.velocityX=-3;
  if(keyDown("space")&&dog.y>100){
    dog.velocityY=-10;
  }
  dog.velocityY+=0.8;
  if(ground.x<=200){
    ground.x=ground.width/2;
  }
  spawnBones();
  spawnStones();
  dog.collide(invisibleGround)
  drawSprites();
}

function spawnBones(){
if(frameCount%120===0){
  bone=createSprite(600,160);
  bone.addImage(boneImg)
  bone.scale=0.2;
  bone.velocityX=-3;
  bone.y  =Math.round(random(2 ,130));
  bone.lifetime=200;
  boneGroup.add(bone)
}
}
function spawnStones(){
  if(frameCount%160===0){
    stone=createSprite(600,150);
    stone.addImage(stoneImg)
    stone.scale=0.15;
    stone.velocityX=-3;
   
    stone.lifetime=200;
    stoneGroup.add(bone)
  }
  }
