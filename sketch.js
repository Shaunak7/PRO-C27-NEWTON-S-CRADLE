
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof=new roof(400,570,800,20)
	bob1 = new Bob(100,300,30);
	chain1=new Chain(bob1.body,rope.body)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  chain1.display();
  roof.display();
  
  drawSprites();
 
}



