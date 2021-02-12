
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, bulletSprite,bulletIMG;
var bulletBody,ground, enemy1, enemy1Img, enemy2, enemy2Img,enemy3,enemy4;
var bg1,bg2;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	bulletIMG=loadImage("grenade.png")
	enemy1Img=loadImage("enemy1.png")
	enemy2Img= loadImage("enemy2.png")
	expImg=loadImage("e.png")
	bg1 = loadImage("bg.jpg")
	bg2 = loadImage("bg2.jpg")
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;
	

	enemy1=createSprite(700, 600, 200, 20);
	enemy1.addImage(enemy1Img);
	enemy1.scale=0.1

	enemy2=createSprite(300, 600, 20, 120);
	enemy2.addImage(enemy2Img);
	enemy2.scale=0.1

	enemy3=createSprite(900, 600, 200, 20);
	enemy3.addImage(enemy1Img);
	enemy3.scale=0.1

	enemy4=createSprite(150, 600, 20, 120);
	enemy4.addImage(enemy2Img);
	enemy4.scale=0.1
	

	helicopterSprite=createSprite(50, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	bulletSprite=createSprite(helicopterSprite.x, helicopterSprite.y, 10,10);
	bulletSprite.addImage(bulletIMG);
	bulletSprite.scale=0.07;
	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("#7F6129")



	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 Visibiltity = 255;

	Engine.run(engine);
  
}


function draw() {
  
  background(bg1);

  helicopterSprite.depth = bulletSprite.depth;
  helicopterSprite.depth+=1;
  
   if (bulletSprite.y>=600 && bulletSprite.position.y>=600){
	
	exp=createSprite(width/2, 540, 10,10);
	exp.addImage(expImg);
	exp.scale = 1.3;
	exp.setVelocity(0,0);
	
	
	background(bg2);
	enemy1.destroy();
	enemy2.destroy();
	enemy3.destroy();
	enemy4.destroy();

   }
drawSprites();

}




function keyPressed() {

 if (keyCode === DOWN_ARROW) {
    bulletSprite.velocityY += 60;
	    
  }

if (keyCode === RIGHT_ARROW) {
   	helicopterSprite.x+=40;
	   bulletSprite.x += 40; 
   }
  if (keyCode === LEFT_ARROW) {
    helicopterSprite.x-=40
	bulletSprite.x += 40; 
     }
}

