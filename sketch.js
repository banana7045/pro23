var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottomBody
var leftBody
var rightBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER); 
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	bottomBody = Bodies.rectangle(400 , 650 , 200 , 20 , { isStatic:true});
	World.add(world, bottomBody);
	
	leftBody = Bodies.rectangle(290 , 600 , 20, 100, {restitution:0.5, isStatic:true});
	
	rightBody = Bodies.rectangle( 500 , 600 , 20 ,100, {restitution:0.5, isStatic:true});
	
	World.add(world, rightBody);
	
	World.add(world, leftBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, height, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y 
  drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY)
rectMode(CENTER)
rect(bottomBody.position.x,bottomBody.position.y,200 , 20)
rectMode(CENTER)
rect(rightBody.position.x,rightBody.position.y,20,100)

rectMode(CENTER)
rect(leftBody.position.x,leftBody.position.y,20,100)


}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false)
  }
}



