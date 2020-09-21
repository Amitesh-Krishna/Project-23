const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxSide1,boxSide2,boxBottom;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.debug = true;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	boxBottom = new Box(width/2,height-55,200,20,world);
	boxSide1 = new Box(width/2 - 95,height-90,20,100,world);
	boxSide2 = new Box(width/2 + 95,height-90,20,100,world);

	packageBody = Bodies.rectangle(width/2 , 200 , 10 ,10, {restitution:1,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  boxBottom.display();
  boxSide1.display();
  boxSide2.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
    
		Body.setStatic(packageBody,false);

	}
}



