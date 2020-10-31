
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1,box1,box2,box3;

function preload()
{
	
}


function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1=new ground(width/2,370,width,20);
	paper1=new paper(200,350,40);
	dustbinObj=new dustbin(1200,350);
	
	//box2 = new box(1050,305, 10, 100);
	//box3 = new box(1150, 305, 10, 100);

	Engine.run(engine);
  
}


function draw() {
	background(180);
  rectMode(CENTER);
  dustbinObj.display()
  ground1.display()
  paper1.display()
  
  //box2.display()
 //box3.display()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:88,y:-85});
	}
}



