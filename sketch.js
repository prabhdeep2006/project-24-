const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	 
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground=Bodies.rectangle(400,680,800,10,{isStatic:true});
	World.add(world,ground);
	paper = new Paper(150,200,25);
	box1 = new Box(400,580,20,200);
	box2 = new Box(500,670,200,20);
	box3 = new Box(600,580,20,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,800,10);
  
  background(0);

  paper.display();
  box1.display();
  box2.display();
  box3.display();
   drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

