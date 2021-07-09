var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var cacti1Img, cacti2Img, cacti3Img, cacti4Img, cacti5Img, cacti6Img

var newImage;

var cactus

var cacti_select

var score = 0

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  cacti1Img = loadImage("obstacle1.png")
  cacti2Img = loadImage("obstacle2.png")
  cacti3Img = loadImage("obstacle3.png")
  cacti4Img = loadImage("obstacle4.png")
  cacti5Img = loadImage("obstacle5.png")
  cacti6Img = loadImage("obstacle6.png")

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnCacti();

  textSize(20)
  text("Score: " + score, 50, 50)

  if (frameCount % 2 === 0){
    score = score+ Math.round(getFrameRate()/60)
  }
  
  drawSprites();
}

function spawnClouds() 
{
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) 
  {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnCacti()
{
  if (frameCount % 60 === 0){
    cactus = createSprite(600, 160, 10, 10)
    cactus.velocityX = -5
    cacti_select = Math.round(random(1, 6))
    switch(cacti_select)
    {
      case 1 : cactus.addImage(cacti1Img)
                    break;
      case 2 : cactus.addImage(cacti2Img)
                    break
      case 3 : cactus.addImage(cacti3Img)
                    break
      case 4 : cactus.addImage(cacti4Img)
                    break
      case 5 : cactus.addImage(cacti5Img)
                    break
      case 6 : cactus.addImage(cacti6Img)
                    break

        default : break
    }
    cactus.scale = 0.5
    cactus.lifetime = 120
  }
}

