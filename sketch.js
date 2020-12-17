
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1

  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2;
   obstaclesGroup = createGroup();
  foodsGroup = createGroup();
  score = 0;
  
}


function draw() {
  
 background(255);
  textSize(20);
  text("Survival Time: "+ score, 200,50);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -14;
        
    }
  if(obstaclesGroup.isTouching(monkey)){
   obstaclesGroup.setLifetimeEach(-1);
    foodsGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     foodsGroup.setVelocityXEach(0); 
    monkey.velocityY=0;
    ground.velocityX=0;
    obstaclesGroup.destroyEach() 
  foodsGroup.destroyEach() 
   score=0
    
  }
  
  
  score = score + Math.round(getFrameRate()/60);
  monkey.velocityY = monkey.velocityY + 0.8
  spawnObstacles()
  monkey.collide(ground);
  spawnfood()
 drawSprites();
}

function spawnObstacles(){
 if (frameCount % 85 === 0){
   var obstacle = createSprite(400,320,10,40);
   obstacle.velocityX = -6 
   obstacle.addImage(obstaceImage)
   obstacle.scale = 0.2;
   obstacle.lifetime = 200;
   obstaclesGroup.add(obstacle);
   monkey.velocity
    
  
    var rand = Math.round(random(1,6));
    
 }              
    
   
 
}

  


  
  
    

 
   
      
    
   
    //assign scale and lifetime to the obstacle           
  
    
   
   //add each obstacle to the group
    
 

function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 90 === 0) {
    var food = createSprite(360,140,40,10);
    food.y = Math.round(random(80,120));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
    
    
    //adjust the depth
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
     foodsGroup.add(food);
    //add each cloud to the group
   
  }
}





