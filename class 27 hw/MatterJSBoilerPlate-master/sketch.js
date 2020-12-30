
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(600,50,800,59);

	bob1 = new Bob(800,150,70);
	bob1.shapeColor="red"

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  roof1.display();
  bob1.display();
  drawSprites();
 
}



